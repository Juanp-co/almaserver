import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { getData, responseErrorsRecoveryPassword } from '../../ActionsData/UsersActions';
import validateSimpleRegister, { validateLogin } from '../../FormRequest/UsersRequest';
import { returnError, returnErrorParams } from '../../Functions/GlobalFunctions';
import { disableTokenDB, getAccessToken } from '../../Functions/TokenActions';
import Referrals from '../../Models/Referrals';
import Users from '../../Models/Users';
import { checkDate, checkDocument, checkEmail, checkPassword } from '../../Functions/Validations';
import AccountsBanks from '../../Models/AccountsBanks';

const path = 'Controllers/publics/publics.controller';

export function helloWorld(req: Request, res: Response): Response {
  return res.json({
    msg: `Welcome to ALMA API REST.`
  });
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
    const referrals = new Referrals({
      _id: user._id
    });
    await referrals.save();

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
      { document: validate.data.document },
      { password: 1, document: 1, role: 1 }
    ).exec();

    if (!user) {
      return res.status(404).json({
        msg: `Disculpe, pero el número de documento no se encuentra registrado.`
      });
    }

    if (validate.data.admin) {
      if (user.role === 5) {
        return res.status(401).json({
          msg: `Disculpe, pero no cuenta con privilegios para poder acceder a esta área.`
        });
      }
    }

    if (!bcrypt.compareSync(`${validate.data.password}`, `${user.password}`)) {
      return res.status(422).json({
        msg: 'Contraseña incorrecta.'
      });
    }

    const token = await getAccessToken(req, {
      _id: user._id.toString(),
      document: user.document,
      role: user.role
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
    const actionsList = ['check-document', 'check-params', 'change-password'];
    const ret: any = {
      msg: null,
    };
    const { action } = req.params;
    const { document } = req.body;

    if (actionsList.indexOf(`${action}`) === -1) return responseErrorsRecoveryPassword(res, 0);

    if (!checkDocument(document)) return responseErrorsRecoveryPassword(res, 1);

    const user = await Users.findOne(
      {
        document: document.toString().toUpperCase(),
        role: { $nin: [0, 1] }
      },
      { email: 1, birthday: 1 }
    ).exec();

    if (!user) return responseErrorsRecoveryPassword(res, 2);

    if (action === 'check-document') {
      ret.msg = 'Por favor, complete los siguientes campos para recuperar su contraseña.';
      ret.check = {
        email: !!user.email,
        birthday: !!user.birthday,
      };

      return res.json(ret);
    }

    // validate extra params

    const { check } = req.body;
    if (!check || (check && Object.keys(check).length === 0)) return responseErrorsRecoveryPassword(res, 3);

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

    const { password } = req.body;

    if (!checkPassword(password)) return responseErrorsRecoveryPassword(res, 8);

    user.password = bcrypt.hashSync(password, 10);
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
