import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { getData } from '../../ActionsData/UsersActions';
import { validateLogin, validateSimpleRegister } from '../../FormRequest/UsersRequest';
import { returnError, returnErrorParams } from '../../Functions/GlobalFunctions';
import { disableTokenDB, getAccessToken } from '../../Functions/TokenActions';
import Referrals from '../../Models/Referrals';
import Users from '../../Models/Users';

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
