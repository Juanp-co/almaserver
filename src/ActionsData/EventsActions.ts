import _ from 'lodash';
import moment from 'moment-timezone';
import { Response } from 'express';
import { getNamesUsersList } from './UsersActions';
import { checkDate } from '../Functions/Validations';
import { IEventsList } from '../Interfaces/IEvents';
import Events from '../Models/Events';
import { IUserSimpleInfo } from '../Interfaces/IUser';

export default async function getEventsList({ query, skip, sort, limit, endDate } : any) : Promise<IEventsList[]> {
  const ret: IEventsList[] = [];

  const events = await Events.find(query, { __v: 0, description: 0 })
    .skip(skip)
    .limit(limit)
    .sort(sort)
    .exec() as IEventsList[];

  if (events.length > 0) {
    let end = 0;
    let list: any[] = [];

    if (endDate && checkDate(endDate)) end = moment(`${endDate}`, 'YYYY-MM-DD', true).endOf('d').unix();

    if (end !== 0) {
      events.forEach((e: any) => {
        if (e.toObject( { getters: false }).dateEnd <= end) list.push(e);
      });
    }
    else list = events;

    const listIds = _.uniq(_.map(events, 'userid'));
    const users = await getNamesUsersList(listIds);

    if (users.length > 0) {
      list.forEach(e => {
        const user: IUserSimpleInfo = users.find((v: any) => v._id.toString() === e.userid);
        ret.push({
          _id: e._id,
          title: e.title,
          date: e.date,
          dateEnd: e.dateEnd,
          initHour: e.initHour,
          endHour: e.endHour,
          toRoles: e.toRoles,
          picture: e.picture,
          user: user || null,
        });
      })
    }

    return ret;
  }

  return [];
}

export async function getDetailsEvent({ query } : any) : Promise<IEventsList | null> {
  let ret: any = {};

  const event = await Events.findOne(query, { __v: 0 }).exec();

  if (event) {
    ret = {
      _id: event._id,
      title: event.title,
      description: event.description,
      date: event.date,
      dateEnd: event.dateEnd,
      initHour: event.initHour,
      endHour: event.endHour,
      toRoles: event.toRoles,
      picture: event.picture,
    };

    const users = await getNamesUsersList([event.userid]);

    if (users.length > 0) ret.user = users[0] || null;

    return ret;
  }

  return null;
}

export function return404Or422(res: Response, index = -1) {
  const msgs = [
    'el evento seleccionado es incorrecto',
    'el evento seleccionado no existe o no se encuentra disponible.',
    'ha ocurrido un error inesperado al momento de subir la imagen para el evento.',
  ];

  const status = index === 1 ? 404 : 422;

  return res.status(status).json({
    msg: `Disculpe, pero ${msgs[index] || 'no de logró deteminar el error.'}`
  });
}
