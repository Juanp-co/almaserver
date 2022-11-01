import { Response } from 'express';
import { getNamesUsersList } from './UsersActions';
import { IChurchesList } from '../Interfaces/IChurches';
import Churches from '../Models/Churches';

export async function getChurchData(_id: any = null, withUser = false): Promise<IChurchesList|null> {
  const projection: any = {
    _id: 1,
    name: 1,
    description: 1,
    picture: 1,
    phone1: 1,
    phone2: 1,
    address: 1,
    location: 1,
  };
  let ret: any = {}

  if (withUser) projection.userid = 1;

  const church: IChurchesList|null = await Churches.findOne({ _id }, projection).exec() || null;

  if (!church) return null;

  if (withUser) {
    ret = {
      _id: church._id,
      name: church.name,
      description: church.description,
      picture: church.picture,
      phone1: church.phone1,
      phone2: church.phone2,
      address: church.address,
      location: church.location,
    };
    const user = await getNamesUsersList([church.userid]) || null;
    ret.user = user ? (user[0] || null) : null;
  }
  else ret = church;

  return ret;
}

/* Responses */

export function responsesErrorChurches(res: Response, option: number, errors: undefined|any[] = undefined): Response {
  const ret = [
    { status: 404, msg: 'Disculpe, pero la iglesia seleccionada no existe o no se encuentra disponible.' },
    { status: 422, msg: 'Disculpe, pero la iglesia seleccionada es incorrecto.' },
    { status: 422, msg: '¡Error en los parámetros!' },
    { status: 500, msg: 'Ha ocurrido un error al momento de guardar la imagen suministrada.' },
    { status: 422, msg: 'Disculpe, pero no puede eliminar la iglesia principal.' },
  ];

  if (ret[option])
    return res.status(ret[option].status).json({
      msg: ret[option].msg,
      errors
    });

  return res.status(500).json({
    msg: '¡Error desconocido!',
  });
}

export default {
  getChurchData,
  responsesErrorChurches,
}
