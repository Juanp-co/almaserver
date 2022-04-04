import _ from 'lodash';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { addCoursesToUser } from '../../ActionsData/CoursesActions';
import {
  checkFindValueSearch,
  getData,
  getNamesUsersList,
  responseErrorsRecoveryPassword
} from '../../ActionsData/UsersActions';
import validateSimpleRegister, { validateLogin } from '../../FormRequest/UsersRequest';
import {
  checkIfExistsRoleInList,
  getLimitSkipSortSearch,
  returnError,
  returnErrorParams
} from '../../Functions/GlobalFunctions';
import { disableTokenDB, getAccessToken } from '../../Functions/TokenActions';
import {
  checkDate,
  checkEmail,
  checkPassword,
  checkPhone
} from '../../Functions/Validations';
import { IUserSimpleInfo } from '../../Interfaces/IUser';
import AccountsBanks from '../../Models/AccountsBanks';
import Referrals from '../../Models/Referrals';
import Settings from '../../Models/Settings';
import Users from '../../Models/Users';
import Groups from '../../Models/Groups';
import Churches from '../../Models/Churches';

const path = 'Controllers/publics/public.controller';

export function helloWorld(req: Request, res: Response): Response {
  return res.json({ msg: `Welcome to ALMA API REST.` });
}

/*
Actions Users
 */

export async function register(req: Request, res: Response): Promise<Response> {
  try {
    const validate = await validateSimpleRegister(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const user = new Users(validate.data);
    user.password = bcrypt.hashSync(user.password, 10);
    await user.save();

    // create referrals document
    const referrals = new Referrals({ _id: user._id });
    await referrals.save();

    await addCoursesToUser(user._id.toString());

    // check if exist referred and update
    if (user.referred) {
      // find the principal referrals document
      let ref = await Referrals.findOne({ _id: user.referred }).exec();
      if (ref) ref.members.push(user._id.toString());
      else {
        ref = new Referrals({
          _id: user.referred,
          members: [user._id.toString()]
        });
      }
      await ref.save();
    }

    return res.status(201).json({
      msg: `Registro exitoso.`
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/register`);
  }
}

export async function login(req: Request, res: Response): Promise<Response> {
  try {
    const validate = validateLogin(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const user = await Users.findOne(
      { phone: validate.data.phone },
      { password: 1, document: 1, roles: 1 }
    ).exec();

    if (!user) {
      return res.status(404).json({
        msg: `Disculpe, pero el número de teléfono o la contraseña son incorrectos.`
      });
    }

    if (!bcrypt.compareSync(`${validate.data.password}`, `${user.password}`)) {
      return res.status(422).json({
        msg: `Disculpe, pero el número de teléfono o la contraseña son incorrectos.`
      });
    }

    if (validate.data.admin) {
      if (!checkIfExistsRoleInList(user.roles, [0, 1, 2, 3])) {
        return res.status(401).json({
          msg: `Disculpe, pero no cuenta con privilegios para poder acceder a esta área.`
        });
      }
    }

    const token = await getAccessToken(req, {
      _id: user._id.toString(),
      roles: user.roles
    });

    if (!token) {
      return res.status(500).json({
        msg: '¡Ha ocurrido un error al momento de iniciar la sesión!'
      });
    }

    return res.json({
      msg: '¡Inicio de sesión con éxito!',
      data: await getData(
        user._id.toString(),
        { __v: 0, password: 0, referred: 0 }
      ),
      token
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/login`);
  }
}

export async function logout(req: Request, res: Response): Promise<Response> {
  try {
    const { token } = req.query;
    await disableTokenDB(`${token}`);

    return res.json({
      msg: 'Se ha finalizado la sesión exitosamente.'
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/logout`);
  }
}

export async function recoveryPassword(req: Request, res: Response): Promise<Response> {
  try {
    const actionsList = ['check-phone', 'check-params', 'change-password'];
    const ret: any = {
      msg: null,
    };
    const { action } = req.params;
    const { phone } = req.body;

    if (actionsList.indexOf(`${action}`) === -1) return responseErrorsRecoveryPassword(res, 0);

    if (!checkPhone(phone)) return responseErrorsRecoveryPassword(res, 1);

    const user = await Users.findOne(
      {
        phone: `${phone}`.trim(),
        role: { $nin: [0, 1] }
      },
      { email: 1, birthday: 1 }
    ).exec();

    if (!user) return responseErrorsRecoveryPassword(res, 2);

    if (action === 'check-phone') {
      if (!!user.email || !!user.birthday) {
        ret.msg = 'Por favor, complete los siguientes campos para recuperar su contraseña.';
        ret.check = {
          email: !!user.email,
          birthday: !!user.birthday,
        };
      }
      else {
        ret.msg = 'Ahora puede asignar su nueva contraseña para recuperar el acceso a su cuenta.';
        ret.setNewPassword = true;
      }

      return res.json(ret);
    }

    // validate extra params

    const { check } = req.body;
    if (!check || (check && Object.keys(check).length === 0)) return responseErrorsRecoveryPassword(res, 3);

    if (!check.ommiteChecking) {
      if (user.email) {
        if (!checkEmail(check.email)) return responseErrorsRecoveryPassword(res, 4);
        if (check.email !== user.email) return responseErrorsRecoveryPassword(res, 5);
      }

      if (user.birthday) {
        if (!checkDate(check.birthday)) return responseErrorsRecoveryPassword(res, 6);
        if (check.birthday !== user.birthday) return responseErrorsRecoveryPassword(res, 7);
      }

      if (action === 'check-params') {
        ret.msg = 'Por favor, indique su nueva contraseña.';
        ret.setNewPassword = true;

        return res.json(ret);
      }
    }

    const { password } = req.body;

    if (!checkPassword(password)) return responseErrorsRecoveryPassword(res, 8);

    user.password = bcrypt.hashSync(`${password}`, 10);
    await user.save();
    ret.msg = 'Se ha asignado la nueva contraseña a su cuenta exitosamente.';
    ret.changed = true;

    return res.json(ret);
  } catch (error: any) {
    return returnError(res, error, `${path}/logout`);
  }
}

/*
  BANKS
 */
export async function getBanks(req: Request, res: Response): Promise<Response> {
  try {
    const banks = await AccountsBanks.find({}, { title: 1, description: 1, picture: 1 }).exec();

    return res.json({
      msg: 'Bancos',
      banks
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/logout`);
  }
}

/*
  BIRTHDAYS
 */
export async function getBirthdays(req: Request, res: Response): Promise<Response> {
  try {
    const birthdayList: any = await Users.find(
      { birthday: { $ne: null } },
      {
        _id: 1,
        names: 1,
        lastNames: 1,
        document: 1,
        gender: 1,
        birthday: 1,
        phone: 1,
        picture: 1,
        position: 1,
      }
    )
      .sort({ names: 1 })
      .exec();

    return res.json({
      msg: `Datos de cumpleaños`,
      birthdayList
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getBirthdays`);
  }
}

/*
  CHURCHES
 */
export async function getChurches(req: Request, res: Response): Promise<Response> {
  try {
    const churches: any = await Churches.find({}, { name: 1, }).sort({ name: 1 }).exec();

    return res.json({
      msg: `Listado de iglesias`,
      churches
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getChurches`);
  }
}

/*
  GROUP DETAILS
 */
export async function getGroupDetails(req: Request, res: Response): Promise<Response> {
  try {
    const { _id } = req.params;

    let ret: any = null;

    const group = await Groups.findOne({ _id }, { __v: 0 }).exec();

    if (group) {
      ret = {
        _id: group._id,
        name: group.name,
        code: group.code,
        members: await getNamesUsersList(
          _.uniq(group.members || [])
        ),
        created_at: group.created_at,
        updated_at: group.updated_at,
      }
    }

    return res.json({
      msg: 'Grupo familiar',
      group: ret
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/logout`);
  }
}

/*
  MEMBERS
 */

export async function getPublicMembers(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenId } = req.body;
    const query: any = checkFindValueSearch(req.query, tokenId);
    const { limit, skip, sort } = getLimitSkipSortSearch(req.query);
    let members: IUserSimpleInfo[] = [];

    if (query.phone || query.$or) {
      members = await Users.find(
        query,
        {
          names: 1,
          lastNames: 1,
          gender: 1,
          phone: 1,
          picture: 1
        })
        .skip(skip)
        .limit(limit)
        .sort(sort)
        .exec() as IUserSimpleInfo[];
    }

    return res.json({
      msg: `Listado de miembros.`,
      members
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getUsers`);
  }
}

/*
  Params
 */
export async function getPublicParams(req: Request, res: Response): Promise<Response> {
  try {
    let settings = await Settings.findOne().exec();

    if (!settings) {
      settings = new Settings({});
      await settings.save();
    }

    const banner = settings.banners.find((l: any) => l.active) || null;
    const logo = settings.logos.find((l: any) => l.active) || null;

    return res.json({
      msg: `Parámetros`,
      data: {
        facebook: settings.facebook || null,
        instagram: settings.instagram || null,
        twitter: settings.twitter || null,
        web: settings.web || null,
        youtube: settings.youtube || null,
        banner: banner?.picture || null,
        logo: logo?.picture || null,
      }
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getPublicParams`);
  }
}

/*
  Organizations
 */
export async function getOrganization(req: Request, res: Response): Promise<Response> {
  try {
    const ret: any[] = [];

    const churches = await Churches.find({}, { userid: 0, created_at: 0, updated_at: 0, __v: 0 }).exec();

    const users = await Users.find(
      {},
      { names: 1, lastNames: 1, church: 1, gender: 1, picture: 1, roles: 1 }
    ).sort({ names: 1 }).exec();

    if (churches.length > 0) {
      churches.forEach(c => {
        const lvls: any = {
          1: [],
          2: [],
          3: [],
          4: [],
        };
        const m: any = {
          church: c,
          lvls: {},
          users: [],
        };

        const userList = users.filter((u) => u.church === c._id.toString());

        if (userList.length > 0) {
          userList.forEach(u => {
            m.users.push({
              _id: u._id || null,
              fullname: `${u.names || ''} ${u.lastNames || ''}`,
              gender: u.gender || null,
              picture: u.picture || null,
              church: u.church || null,
            });

            u.roles?.forEach(r => {
              if (r !== 0) lvls[r].push(u._id);
            });
          });
        }
        m.lvls.pastors = lvls[1];
        m.lvls.supervisors = lvls[2];
        m.lvls.leaders = lvls[3];
        m.lvls.peoples = lvls[4];

        ret.push(m);
      });
    }

    return res.json({
      msg: `Organización`,
      data: ret
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getOrganization`);
  }
}
