import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { checkTokenDB } from './Functions/TokenActions';
import { IUserToToken } from './Interfaces/IUser';

export async function validateUser(req: Request, res: Response, next: any): Promise<any> {
  try {
    const token = `${req.headers['x-access-token'] || req.headers.Authorization}`;
    const check = jwt.verify(token, req.app.get('secretKey')) as IUserToToken;

    const session = await checkTokenDB(token);

    if (!session) {
      return res.status(401).json({
        msg: 'Disculpe, pero su sesión ha expirado. Debe iniciar sesión nuevamente.',
        redirect: true
      });
    }

    req.params.userid = `${check._id}`;
    req.body.userid = `${check._id}`;
    req.query.role = `${check.role}`;
    req.query.token = token;

    return next();
  } catch (e: any) {
    return res.status(401).json({
      msg: 'Disculpe, pero no se logró encontrar una sesión activa.'
    });
  }
}

export async function validateAdmin(req: Request, res: Response, next: any): Promise<any> {
  try {
    const token = `${req.headers['x-access-token'] || req.headers.Authorization}`;
    const check = jwt.verify(token, req.app.get('secretKey')) as IUserToToken;

    const session = await checkTokenDB(token);

    if (!session) {
      return res.status(401).json({
        msg: 'Disculpe, pero su sesión ha expirado. Debe iniciar sesión nuevamente.',
        redirect: true
      });
    }

    if (check.role !== 0) {
      return res.status(401).json({
        msg: 'Disculpe, pero no cuenta con privilegios para realizar esta acción.',
        redirect: true
      });
    }

    req.params.userid = check._id;
    req.body.userid = check._id;
    req.params.role = `${check.role}`;
    req.query.token = token;

    return next();
  } catch (e: any) {
    return res.status(401).json({
      msg: 'Disculpe, pero no se logró encontrar una sesión activa.'
    });
  }
}
