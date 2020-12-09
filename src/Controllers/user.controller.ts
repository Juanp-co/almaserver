import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import {
  validatePasswords,
  validateSecurityQuestion,
  validateUpdate
} from '../FormRequest/UsersRequest';
import Users from '../Models/Users';
import { forceLogout } from '../Functions/TokenActions';
import { returnError } from '../Functions/GlobalFunctions';

const path = 'Controllers/user.controller';

export async function get(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;
    const user = await Users.findOne(
      { _id: userid },
      { __v: 0, password: 0, 'securityQuestion.answer': 0 }
    ).exec();

    if (!user) {
      // logout
      const { token } = req.query;
      return forceLogout(res, `${token}`);
    }

    return res.status(200).json({
      msg: 'Datos de la sesión',
      data: user
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/get`);
  }
}

export async function update(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;

    const user = await Users.findOne({ _id: userid }, { _id: 1 }).exec();

    if (!user) {
      // logout
      const { token } = req.query;
      return forceLogout(res, `${token}`);
    }

    const validate = await validateUpdate(req.body, userid);

    if (validate.errors.length > 0) {
      return res.status(422).json({
        msg: '¡Error en los parametros!',
        errors: validate.errors
      });
    }

    const updated = await Users.findByIdAndUpdate(userid, validate.data, {
      projection: { password: 0, __v: 0, 'securityQuestion.answer': 0 },
      new: true
    });

    return res.status(200).json({
      msg: 'Se ha actualizado la información exitosamente.',
      data: updated
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/update`);
  }
}

export async function changePassword(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;

    const user = await Users.findOne({ _id: userid }, { password: 1 }).exec();

    if (!user) {
      // logout
      const { token } = req.query;
      return forceLogout(res, `${token}`);
    }

    const validate = await validatePasswords(req.body);

    if (validate.errors.length > 0) {
      return res.status(422).json({
        msg: '¡Error en los parametros!',
        errors: validate.errors
      });
    }

    if (!bcrypt.compareSync(validate.data.password, `${user.password}`)) {
      return res.status(422).json({
        msg: 'Disculpe, pero la contraseña actual es incorrecta.'
      });
    }

    user.password = bcrypt.hashSync(validate.data.newPassword, 10);
    await user.save();

    return res.status(200).json({
      msg: 'Se ha actualizado su contraseña exitosamente.'
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/changePassword`);
  }
}

export async function changeSecurityQuestion(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;

    const user = await Users.findOne({ _id: userid }, { securityQuestion: 1 }).exec();

    if (!user) {
      // logout
      const { token } = req.query;
      return forceLogout(res, `${token}`);
    }

    const validate = await validateSecurityQuestion(req.body);

    if (validate.errors.length > 0) {
      return res.status(422).json({
        msg: '¡Error en los parametros!',
        errors: validate.errors
      });
    }

    user.securityQuestion.questionId = validate.data.questionId;
    user.securityQuestion.answer = bcrypt.hashSync(validate.data.answer, 10);
    await user.save();

    return res.status(200).json({
      msg: 'Se ha actualizado los datos de seguridad exitosamente.'
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/changeSecurityQuestion`);
  }
}
