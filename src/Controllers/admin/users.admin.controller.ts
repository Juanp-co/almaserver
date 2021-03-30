import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import {
  checkFindValueSearch,
  checkRoleToActions, getNamesUsersList,
  getUserData,
  responseUsersAdmin
} from '../../ActionsData/UsersActions';
import validateSimpleRegister, { validateUpdate } from '../../FormRequest/UsersRequest';
import {
  getLimitSkipSortSearch,
  returnError,
  returnErrorParams
} from '../../Functions/GlobalFunctions';
import { disableTokenDBForUserId } from '../../Functions/TokenActions';
import { checkObjectId } from '../../Functions/Validations';
import { IUserData } from '../../Interfaces/IUser';
import CoursesUsers from '../../Models/CoursesUsers';
import Groups from '../../Models/Groups';
import Referrals from '../../Models/Referrals';
import Users from '../../Models/Users';
import { getCoursesSimpleList } from '../../ActionsData/CoursesActions';

const path = 'Controllers/admin/users.admin.controller';

// =====================================================================================================================

export default async function getUsers(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;
    const { limit, skip, sort } = getLimitSkipSortSearch(req.query);
    const query = checkFindValueSearch({ _id: { $ne: userid } }, req.query.word);

    const users = await Users.find(
      query,
      {
        names: 1,
        lastNames: 1,
        gender: 1,
        phone: 1,
        document: 1,
        role: 1,
        created_at: 1,
      })
      .skip(skip)
      .limit(limit)
      .sort(sort)
      .exec();

    return res.json({
      msg: `Usuarios.`,
      users
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getUsers`);
  }
}

export async function getUsersCounters(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;
    const query = checkFindValueSearch({ _id: { $ne: userid } } , req.query.word);

    const totals = await Users.find(query).countDocuments().exec();

    return res.json({
      msg: `Total miembros.`,
      totals
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getUsersCounters`);
  }
}

export async function saveUser(req: Request, res: Response): Promise<Response> {
  try {
    const { userrole } = req.body;

    if (!checkRoleToActions(userrole)) return responseUsersAdmin(res, 3);

    const validate = await validateSimpleRegister(req.body, true);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const user = new Users(validate.data);
    const password = 'alma1234'; // default password
    user.password = bcrypt.hashSync(password, 10);
    await user.save();

    const referrals = new Referrals({ _id: user._id });
    await referrals.save();

    return res.status(201).json({
      msg: `Se ha registrado el nuevo miembro exitosamente.`,
      password
    });

  } catch (error: any) {
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
  } catch (error: any) {
    return returnError(res, error, `${path}/showUser`);
  }
}

export async function updateUser(req: Request, res: Response): Promise<Response> {
  try {
    const { userrole } = req.body;
    const { _id } = req.params;

    if (!checkRoleToActions(userrole)) return responseUsersAdmin(res, 3);

    if (!checkObjectId(_id)) return responseUsersAdmin(res, 0);

    const validate = await validateUpdate(req.body, _id, true);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const user = await Users.findOne(
      { _id },
      { __v: 0, password: 0, referred: 0 }
      ).exec();

    if (!user) return responseUsersAdmin(res, 1);

    user.email = validate.data.email;
    user.phone = validate.data.phone;
    user.names = validate.data.names;
    user.lastNames = validate.data.lastNames;
    user.document = validate.data.document;
    user.gender = validate.data.gender;
    user.birthday = validate.data.birthday;
    user.civilStatus = validate.data.civilStatus;
    user.educationLevel = validate.data.educationLevel;
    user.profession = validate.data.profession;
    user.bloodType = validate.data.bloodType;
    user.company = validate.data.company;
    user.companyType = validate.data.companyType;
    user.baptized = validate.data.baptized;
    user.department = validate.data.department;
    user.city = validate.data.city;
    user.locality = validate.data.locality;
    user.direction = validate.data.direction;

    await user.save();

    return res.json({
      msg: `Se han actualizado los datos del miembro exitosamente.`,
      user
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/updateUser`);
  }
}

// export async function changeRoleUser(req: Request, res: Response): Promise<Response> {
//   try {
//     const { _id } = req.params;
//     const { role } = req.body;
//
//     if (!checkObjectId(_id)) return responseUsersAdmin(res, 0);
//
//     if (!checkRole(role)) return responseUsersAdmin(res, 2);
//
//     const user = await Users.findOne({_id}, { role: 1 }).exec();
//
//     if (!user) return responseUsersAdmin(res, 1);
//
//     user.role = role;
//     await user.save();
//
//     // disconnect user
//     await disableTokenDBForUserId([_id]);
//
//     return res.json({
//       msg: `Se asignado el nuevo rol al miembro exitosamente.`
//     });
//   } catch (error: any) {
//     return returnError(res, error, `${path}/changeRoleUser`);
//   }
// }

export async function deleteUser(req: Request, res: Response): Promise<Response> {
  try {
    const { userrole } = req.body;
    const { _id } = req.params;

    if (!checkRoleToActions(userrole)) return responseUsersAdmin(res, 3);

    if (!checkObjectId(_id)) return responseUsersAdmin(res, 0);

    const user = await Users.findOne({_id}, { __v: 0 }).exec();

    if (!user) return responseUsersAdmin(res, 1);

    // delete all data
    const groups = await Groups.find({ members: _id }).exec();
    const referrals = await Referrals.find({ members: _id }).exec();

    if (groups.length > 0) {
      const totalsGroups = groups.length;

      for (let i = 0; i < totalsGroups; i++) {
        groups[i].members = groups[i].members.filter(m => m !== _id);
        await groups[i].save();
      }
    }

    if (referrals.length > 0) {
      const totalsGroups = referrals.length;

      for (let i = 0; i < totalsGroups; i++) {
        referrals[i].members = referrals[i].members.filter(m => m !== _id);
        await referrals[i].save();
      }
    }
    await CoursesUsers.deleteMany({ userid: _id }).exec();
    await Referrals.deleteMany({ _id }).exec();
    await disableTokenDBForUserId([_id]);

    await user.delete();

    return res.json({
      msg: `Se ha eliminado el miembro exitosamente.`
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/deleteUser`);
  }
}

export async function getCoursesUser(req: Request, res: Response): Promise<Response> {
  try {
    const { userrole } = req.body;
    const { _id } = req.params;

    if (!checkRoleToActions(userrole)) return responseUsersAdmin(res, 3);

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
  } catch (error: any) {
    return returnError(res, error, `${path}/getCoursesUser`);
  }
}

export async function getReferralsUser(req: Request, res: Response): Promise<Response> {
  try {
    const { userrole } = req.body;
    const { _id } = req.params;

    if (!checkRoleToActions(userrole)) return responseUsersAdmin(res, 3);

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
  } catch (error: any) {
    return returnError(res, error, `${path}/getReferralsUser`);
  }
}
