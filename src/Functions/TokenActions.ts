import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { IUserToToken } from '../Interfaces/IUser';
import IWhitelist from '../Interfaces/IWhitelist';
import Whitelist from '../Models/Whitelist';

export async function checkTokenDB(token?: string): Promise<boolean> {
  const exits = await Whitelist.findOne({ token, status: true }, { _id: 1 }).exec();
  return !!exits;
}

export async function getAccessToken(req: Request, data: IUserToToken): Promise<string | null> {
  const token = jwt.sign(
    { _id: data._id, phone: data.phone, roles: data.roles },
    req.app.get('secretKey'),
    { expiresIn: '1y' }
  );

  if (!token) return null;

  const model = {
    userid: data._id,
    token,
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress || null
  } as IWhitelist;

  const wl = new Whitelist(model);
  await wl.save();

  return token;
}

export async function disableTokenDB(token?: string | null) {
  const dataSession = await Whitelist.findOne({ token }).exec();

  if (dataSession) {
    dataSession.status = false;
    await dataSession.save();
  }
}

export async function forceLogout(res: Response, token?: string | null): Promise<Response> {
  const dataSession = await Whitelist.findOne({ token }).exec();

  if (dataSession) {
    dataSession.status = false;
    await dataSession.save();
  }

  return res.status(401).json({
    msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
  });
}

export async function disableTokenDBForUserId(listUsersIds: [string]) {
  await Whitelist.updateMany({ userid: { $in: listUsersIds } }, { status: false });
}
