import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { checkTokenDB } from './Functions/TokenActions';
import { IUserToToken } from './Interfaces/IUser';
import { checkIfExistsRoleInList, showConsoleError } from './Functions/GlobalFunctions';

const path = 'src/middleware';

function responseErrorSession(res: Response): Response{
  return res.status(401).json({
    msg: 'Disculpe, pero su sesión ha expirado. Debe iniciar sesión nuevamente.',
    redirect: true
  });
}

function responseErrorCatchSessionToken(res: Response, e: any): Response {
  showConsoleError(path, e);
  return res.status(500).json({
    msg: 'Disculpe, pero ha ocurrido un error interno al momento de verificar las sesión.'
  });
}

export async function validateUser(req: Request, res: Response, next: any): Promise<any> {
  try {
    const token = `${req.headers['x-access-token'] || req.headers.Authorization}`;
    const check = jwt.verify(token, req.app.get('secretKey')) as IUserToToken;

    const session = await checkTokenDB(token);

    if (!session) return responseErrorSession(res);

    req.body.tokenId = `${check._id}`;
    req.body.tokenRoles = check.roles;
    req.query.token = token;

    return next();
  } catch (e: any) {
    return responseErrorCatchSessionToken(res, e);
  }
}

export async function validatePublic(req: Request, res: Response, next: any): Promise<any> {
  try {
    const token = `${req.headers['x-access-token'] || req.headers.Authorization}`;
    const check = jwt.verify(token, req.app.get('secretKey')) as IUserToToken;

    const session = await checkTokenDB(token);

    if (session) {
      req.body.tokenId = check._id;
      req.body.tokenRoles = check.roles;
      req.query.token = token;
    }

    return next();
  } catch (e: any) {
    return responseErrorCatchSessionToken(res, e);
  }
}

export async function validateAdmin(req: Request, res: Response, next: any): Promise<any> {
  try {
    const token = `${req.headers['x-access-token'] || req.headers.Authorization}`;
    const check = jwt.verify(token, req.app.get('secretKey')) as IUserToToken;

    const session = await checkTokenDB(token);

    if (!session) return responseErrorSession(res);

    if (!checkIfExistsRoleInList(check.roles, [0, 1, 3])) {
      return res.status(401).json({
        msg: 'Disculpe, pero no cuenta con privilegios para realizar esta acción.',
        redirect: true
      });
    }

    req.body.superadmin = checkIfExistsRoleInList(check.roles, [0]);
    req.body.tokenId = check._id;
    req.body.tokenRoles = check.roles;
    req.query.token = token;

    return next();
  } catch (e: any) {
    return responseErrorCatchSessionToken(res, e);
  }
}
