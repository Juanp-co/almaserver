import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { addCoursesToUser, getCoursesSimpleList } from '../../ActionsData/CoursesActions';
import {
  checkFindValueSearch,
  checkRoleToActions, getNamesUsersList,
  getUserData, removeAllDataUser,
  responseUsersAdmin
} from '../../ActionsData/UsersActions';
import {
  validateFormMemberRegisterAdmin,
  validateRolesToUpdateForm,
  validateUpdate
} from '../../FormRequest/UsersRequest';
import {
  checkIfExistsRoleInList,
  getLimitSkipSortSearch,
  returnError,
  returnErrorParams
} from '../../Functions/GlobalFunctions';
import { disableTokenDBForUserId } from '../../Functions/TokenActions';
import {checkObjectId, checkPassword} from '../../Functions/Validations';
import { IUserData } from '../../Interfaces/IUser';
import CoursesUsers from '../../Models/CoursesUsers';
import Referrals from '../../Models/Referrals';
import Users from '../../Models/Users';

const path = 'Controllers/admin/users.admin.controller';

// =====================================================================================================================

export default async function getUsers(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenId } = req.body;
    const { limit, skip, sort } = getLimitSkipSortSearch(req.query);
    const query = checkFindValueSearch(req.query, tokenId);

    const users = await Users.find(
      query,
      {
        names: 1,
        lastNames: 1,
        gender: 1,
        phone: 1,
        document: 1,
        roles: 1,
        created_at: 1,
        picture: 1,
        church: 1,
      })
      .skip(skip)
      .limit(limit)
      .sort(sort)
      .exec();

    return res.json({
      msg: `Usuarios.`,
      users
    });
  } catch (error) {
    return returnError(res, error, `${path}/getUsers`);
  }
}

export async function getUsersCounters(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenId } = req.body;
    const query = checkFindValueSearch(req.query, tokenId);

    const totals = await Users.find(query).countDocuments().exec();

    return res.json({
      msg: `Total miembros.`,
      totals
    });
  } catch (error) {
    return returnError(res, error, `${path}/getUsersCounters`);
  }
}

export async function downLoadData(req: Request, res: Response): Promise<Response> {
  try {
    const members = await Users.find(
      {},
      {
        phone: 1,
        document: 1,
        names: 1,
        lastNames: 1,
        email: 1,
        gender: 1,
        birthday: 1,
        civilStatus: 1,
        educationLevel: 1,
        profession: 1,
        bloodType: 1,
        company: 1,
        companyType: 1,
        baptized: 1,
        // 0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder | 4 = persona
        roles: 1,
        consolidated: 1,
        petition: 1,
        meetingNew: 1,
        department: 1,
        city: 1,
        locality: 1,
        direction: 1,
        church: 1,
        created_at: 1,
      },
    ).exec();

    return res.json({
      msg: `Total miembros.`,
      members
    });
  } catch (error) {
    return returnError(res, error, `${path}/getUsersCounters`);
  }
}

export async function saveUser(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenRoles } = req.body;
    if (!checkRoleToActions(tokenRoles))
      return responseUsersAdmin(res, 3);

    const validate = await validateFormMemberRegisterAdmin(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const user = new Users(validate.data);
    const password = 'alma1234'; // default password
    user.password = bcrypt.hashSync(password, 10);
    await user.save();

    const referrals = new Referrals({ _id: user._id });
    await referrals.save();

    // get referrals of referred
    if (validate.data.referred) {
      const referredData = await Referrals.findOne({ _id: validate.data.referred }).exec();
      if (referredData) {
        referredData.members.push(user._id.toString());
        await referredData.save();
      }
    }

    // save currents courses
    await addCoursesToUser(user._id.toString());

    return res.status(201).json({
      msg: `Se ha registrado el nuevo miembro exitosamente.`,
      password
    });
  } catch (error) {
    return returnError(res, error, `${path}/saveUser`);
  }
}

export async function showUser(req: Request, res: Response): Promise<Response> {
  try {
    const { _id } = req.params;

    if (!checkObjectId(_id)) return responseUsersAdmin(res, 0);

    const user: IUserData | null = await getUserData(_id);

    if (!user) return responseUsersAdmin(res, 1);

    return res.json({
      msg: `Detalles del miembro.`,
      user
    });
  } catch (error) {
    return returnError(res, error, `${path}/showUser`);
  }
}

export async function updateUser(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenRoles } = req.body;
    const { _id } = req.params;

    if (!checkRoleToActions(tokenRoles)) return responseUsersAdmin(res, 3);

    if (!checkObjectId(_id)) return responseUsersAdmin(res, 0);

    const validate = await validateUpdate(req.body, _id);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const user = await Users.findOne(
      { _id },
      { __v: 0, password: 0, referred: 0 }
      ).exec();

    if (!user) return responseUsersAdmin(res, 1);

    user.phone = validate.data.phone || user.phone;
    user.document = validate.data.document || user.document;
    user.email = validate.data.email || user.email;
    user.names = validate.data.names || user.names;
    user.lastNames = validate.data.lastNames || user.lastNames;
    user.birthday = validate.data.birthday || user.birthday;
    user.position = validate.data.position !== null ? validate.data.position : (user.position || null);
    user.gender = validate.data.gender !== null ? validate.data.gender : user.gender;
    user.civilStatus = validate.data.civilStatus !== null ? validate.data.civilStatus : user.civilStatus;
    user.educationLevel = validate.data.educationLevel !== null ? validate.data.educationLevel : user.educationLevel;
    user.profession = validate.data.profession !== null ? validate.data.profession : user.profession;
    user.bloodType = validate.data.bloodType !== null ? validate.data.bloodType : user.bloodType;
    user.company = validate.data.company !== null ? validate.data.company : user.company;
    user.companyType = validate.data.companyType !== null ? validate.data.companyType : user.companyType;
    user.baptized = validate.data.baptized || user.baptized;
    user.department = validate.data.department !== null ? validate.data.department : user.department;
    user.city = validate.data.city !== null ? validate.data.city : user.city;
    user.locality = validate.data.locality || user.locality;
    user.direction = validate.data.direction || user.direction;
    user.meetingNew = validate.data.meetingNew;
    user.church = validate.data.church || user.church;

    await user.save();

    return res.json({
      msg: `Se han actualizado los datos del miembro exitosamente.`,
      user
    });
  } catch (error) {
    return returnError(res, error, `${path}/updateUser`);
  }
}

export async function updatePassword(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenRoles, password } = req.body;
    const { _id } = req.params;

    if (!checkRoleToActions(tokenRoles)) return responseUsersAdmin(res, 3);

    if (!checkObjectId(_id)) return responseUsersAdmin(res, 0);

    if (!checkPassword(password)) return responseUsersAdmin(res, 4);

    const user = await Users.findOne({ _id }, { password: 1 }).exec();

    if (!user) return responseUsersAdmin(res, 1);

    user.password = bcrypt.hashSync(password, 10);
    await user.save();

    return res.json({
      msg: 'Se han cambiado la contraseña del miembro exitosamente.'
    });
  } catch (error) {
    return returnError(res, error, `${path}/updatePassword`);
  }
}

export async function changeRoleUser(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenRoles } = req.body;

    if (!checkIfExistsRoleInList(tokenRoles, [0, 1])) return responseUsersAdmin(res, 3);

    const { _id } = req.params;
    if (!checkObjectId(_id)) return responseUsersAdmin(res, 0);

    const validate = validateRolesToUpdateForm(req.body);
    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const user = await Users.findOne({_id}, { roles: 1 }).exec();

    if (!user) return responseUsersAdmin(res, 1);

    user.roles = validate.data.roles;
    await user.save();

    // disconnect user
    await disableTokenDBForUserId([_id]);

    return res.json({
      msg: `Se asignado el nuevo rol al miembro exitosamente.`
    });
  } catch (error) {
    return returnError(res, error, `${path}/changeRoleUser`);
  }
}

export async function setAsConsolidatorUser(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenRoles } = req.body;

    if (!checkIfExistsRoleInList(tokenRoles, [0, 1])) return responseUsersAdmin(res, 3);

    const { _id } = req.params;
    if (!checkObjectId(_id)) return responseUsersAdmin(res, 0);

    const user = await Users.findOne({_id}, { consolidator: 1 }).exec();

    if (!user) return responseUsersAdmin(res, 1);

    user.consolidator = !user.consolidator;
    await user.save();

    return res.json({
      msg: `Se ha ${user.consolidator ? 'asignado' : 'removido'} al miembro como consolidador especial exitosamente.`
    });
  } catch (error) {
    return returnError(res, error, `${path}/setAsConsolidatorUser`);
  }
}

export async function deleteUser(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenRoles } = req.body;
    const { _id } = req.params;

    if (!checkRoleToActions(tokenRoles)) return responseUsersAdmin(res, 3);

    if (!checkObjectId(_id)) return responseUsersAdmin(res, 0);

    const user = await Users.findOne({_id}, { __v: 0 }).exec();

    if (!user) return responseUsersAdmin(res, 1);

    // checking if the user to delete is admin and if the session user also admin
    const check1 = checkIfExistsRoleInList(user.roles, [0]);
    const check2 = checkIfExistsRoleInList(tokenRoles, [0]);
    if (check1 && !check2) return responseUsersAdmin(res, 3);

    await removeAllDataUser(user);

    await user.delete();

    return res.json({
      msg: `Se ha eliminado el miembro exitosamente.`
    });
  } catch (error) {
    return returnError(res, error, `${path}/deleteUser`);
  }
}

export async function getCoursesUser(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenRoles } = req.body;
    const { _id } = req.params;

    if (!checkRoleToActions(tokenRoles)) return responseUsersAdmin(res, 3);

    if (!checkObjectId(_id)) return responseUsersAdmin(res, 0);

    const user = await Users.findOne({_id}, { __v: 0 }).exec();

    if (!user) return responseUsersAdmin(res, 1);

    // get all referrals
    const ret: any[] = [];
    let courses: any[] = [];
    const coursesData = await CoursesUsers.findOne({ userid: _id }, { 'courses.courseId': 1, 'courses.approved': 1 }).exec();

    if (coursesData) {
      const listIdsCourses: any[] = coursesData.courses.length > 0 ? coursesData.courses.map(cd => cd.courseId) : [];
      courses = await getCoursesSimpleList(listIdsCourses || []);

      if (courses.length > 0) {
        for (const c of coursesData.courses) {
          const index = courses.findIndex(co => co._id.toString() === c.courseId);
          if (index > -1) {
            ret.push({
              _id: courses[index]._id,
              banner: courses[index].banner,
              slug: courses[index].slug,
              title: courses[index].title,
              description: courses[index].description,
              level: courses[index].level,
              approved: c.approved
            });
          }
        }
      }
    }

    return res.json({
      msg: `Listado de cursos del miembro.`,
      courses: ret
    });
  } catch (error) {
    return returnError(res, error, `${path}/getCoursesUser`);
  }
}

export async function getReferralsUser(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenRoles } = req.body;
    const { _id } = req.params;

    if (!checkRoleToActions(tokenRoles)) return responseUsersAdmin(res, 3);

    if (!checkObjectId(_id)) return responseUsersAdmin(res, 0);

    const user = await Users.findOne({_id}, { __v: 0 }).exec();

    if (!user) return responseUsersAdmin(res, 1);

    // get all referrals
    const ret: any = [];
    let referred = await Referrals.findOne({ _id }).exec();

    if (!referred) {
      referred = new Referrals({ _id });
      await referred.save();
    }

    if (referred.members.length > 0) {
      const referrals = await getNamesUsersList(referred.members);

      if (referrals.length > 0) {
        const refMembers = await Referrals.find({ _id: { $in: referred.members } }).exec();
        const existRefsMembers = refMembers.length > 0;

        for (const value of referrals) {
          const model = {
            ...value,
            totalsReferrals: 0
          };
          if (existRefsMembers) {
            const index = refMembers.findIndex(rm => rm._id.toString() === value._id.toString());
            if (index > -1) model.totalsReferrals = refMembers[index].members.length;
          }
          ret.push(model)
        }
      }
    }

    return res.json({
      msg: `Listado de referidos del miembro.`,
      referrals: ret
    });
  } catch (error) {
    return returnError(res, error, `${path}/getReferralsUser`);
  }
}
