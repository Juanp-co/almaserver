import _ from 'lodash';
import { Response } from 'express';
import moment from 'moment-timezone';
import { getNamesUsersList, getUsersSimpleList } from './UsersActions';

export default function returnDevotionalResponse(res: Response, option: number, errors: undefined|any[] = undefined): Response {
  const ret = [
    { status: 404, msg: 'Disculpe, pero el devocional seleccionado no existe o no se encuentra disponible.' },
    { status: 422, msg: 'Disculpe, pero el devocional seleccionado es incorrecto.' },
    { status: 422, msg: '¡Error en los parámetros!' },
    { status: 500, msg: 'Ha ocurrido un error al momento de guardar la imagen suministrada.' },
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

export async function getModelDataListDevotionals(list: any[] = [], simpleUser = true) {
  const ret: any[] = [];

  if (list.length > 0) {
    const listIds = _.uniq(list.map(l => l.userid));
    let listUsers: any[] = [];

    if (listIds.length > 0) {
      listUsers = simpleUser ?
        await getUsersSimpleList(listIds)
        : await getNamesUsersList(listIds)
    }

    if (listUsers.length > 0) {
      list.forEach(l => {
        const user = listUsers.find(u => u._id.toString() === l.userid) || null;
        ret.push({
          _id: l._id,
          title: l.title,
          description: l.description,
          picture: l.picture,
          urlVideo: l.urlVideo,
          user,
          created_at: l.created_at,
          updated_at: l.updated_at,
        });
      });
    }
  }

  return ret;
}

export function getQueryParamsList({ endDate, initDate, search }: any) {
  const query: any = {};

  if (search) query.title = { $regex: new RegExp(`${search}`, 'i') };
  if (initDate) {
    const check1 = moment(initDate, 'YYYY-MM-DD', true);
    if (check1.isValid()) {
      query.created_at = { $gte: check1.startOf('d').unix() };
    }
  }
  if (endDate) {
    const check2 = moment(endDate, 'YYYY-MM-DD', true);
    if (check2.isValid()) {
      if (!query.created_at) query.create_at = { $lte: check2.endOf('d').unix() };
      else query.created_at.$lte = check2.endOf('d').unix();
    }
  }

  return query;
}
