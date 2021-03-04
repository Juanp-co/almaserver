import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import {
  checkFindValueSearch,
  checkRoleToActions,
  getUserData,
  responseUsersAdmin
} from '../../ActionsData/UsersActions';
import validateSimpleRegister, { validateUpdate } from '../../FormRequest/UsersRequest';
import {
  generatePassword,
  getLimitSkipSortSearch,
  returnError,
  returnErrorParams
} from '../../Functions/GlobalFunctions';
import { disableTokenDBForUserId } from '../../Functions/TokenActions';
import { checkObjectId, checkRole } from '../../Functions/Validations';
import { IUserData } from '../../Interfaces/IUser';
import CoursesUsers from '../../Models/CoursesUsers';
import Groups from '../../Models/Groups';
import Referrals from '../../Models/Referrals';
import Users from '../../Models/Users';

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
      msg: `Total usuarios.`,
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
    const password = generatePassword();
    user.password = bcrypt.hashSync(password, 10);
    await user.save();

    return res.status(201).json({
      msg: `Se ha registrado el nuevo usuario exitosamente.`,
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
      msg: `Detalles del usuario.`,
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
      msg: `Se han actualizado los datos del usuario exitosamente.`,
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
//       msg: `Se asignado el nuevo rol al usuario exitosamente.`
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
      msg: `Se ha eliminado el usuario exitosamente.`
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/deleteUser`);
  }
}
