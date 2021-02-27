import _ from 'lodash';
import moment from 'moment-timezone';
import { Response } from 'express';
import { getNamesUsersList } from './UsersActions';
import { checkDate } from '../Functions/Validations';
import { IEventsList } from '../Interfaces/IEvents';
import Events from '../Models/Events';

export default async function getEventsList({ query, skip, sort, limit, endDate } : any) : Promise<IEventsList[]> {
  const ret: IEventsList[] = [];

  const events = await Events.find(query, { __v: 0 })
    .skip(skip)
    .limit(limit)
    .sort(sort)
    .exec() as IEventsList[];

  if (events.length > 0) {
    let end = 0;
    let list: any[] = [];

    if (endDate && checkDate(endDate)) end = moment(`${endDate}`).endOf('d').unix();

    if (end !== 0) {
      events.forEach((e: any) => {
        if (e.toObject( { getters: false }).date <= end) list.push(e);
      });
    }
    else list = events;

    const listIds = _.uniq(_.map(events, 'userid'));
    const users = await getNamesUsersList(listIds);

    if (users.length > 0) {
      list.forEach(e => {
        const index: number = _.findIndex(users, (v: any) => v._id.toString() === e.userid);
        if (index > -1) {
          ret.push({
            _id: e._id,
            title: e.title,
            description: e.description || null,
            date: e.date,
            initHour: e.initHour,
            endHour: e.endHour,
            toRoles: e.toRoles,
            user: users[index],
          });
        }
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
      initHour: event.initHour,
      endHour: event.endHour,
      toRoles: event.toRoles,
    };

    const users = await getNamesUsersList([event.userid]);

    if (users.length > 0) ret.user = users[0] ? users[0] : null;

    return ret;
  }

  return null;
}

export function return404Or422(res: Response, notFound = false) {
  if (notFound) {
    return res.status(404).json({
      msg: `Disculpe, pero el evento seleccionado no existe o no se encuentra disponible.`
    });
  }

  return res.status(422).json({
    msg: 'Disculpe, pero el evento seleccionado incorrecto.'
  });
}
