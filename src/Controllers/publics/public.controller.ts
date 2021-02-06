import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { validateLogin, validateRegister } from '../../FormRequest/UsersRequest';
import Users from '../../Models/Users';
import { disableTokenDB, getAccessToken } from '../../Functions/TokenActions';
import { getData } from '../../ActionsData/UsersActions';
import { returnError, returnErrorParams } from '../../Functions/GlobalFunctions';
import Questions from '../../Models/Question';

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
    const validate = await validateRegister(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const user = new Users(validate.data);
    user.password = bcrypt.hashSync(user.password, 10);
    user.securityQuestion.answer = bcrypt.hashSync(`${user.securityQuestion.answer}`, 10);
    await user.save();

    return res.json({
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
      data: await getData(user._id.toString()),
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

/*
Public actions
 */

export async function getQuestions(req: Request, res: Response): Promise<Response> {
  try {
    const questions = await Questions.find({}, { question: 1 }).exec();

    return res.json({
      msg: `Preguntas de seguridad.`,
      questions
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getQuestions`);
  }
}
