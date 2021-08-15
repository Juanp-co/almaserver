import moment from 'moment-timezone';
import { Request, Response } from 'express';
import getEventsList, { getDetailsEvent, return404Or422 } from '../../ActionsData/EventsActions';
import { getNamesUsersList } from '../../ActionsData/UsersActions';
import validateRegister from '../../FormRequest/EventsRequest';
import { getLimitSkipSortSearch, returnError, returnErrorParams } from '../../Functions/GlobalFunctions';
import { checkDate, checkObjectId } from '../../Functions/Validations';
import Events from '../../Models/Events';

const path = 'src/controllers/events/events.controller';

export default async function getEvents(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenId } = req.params;
    const { initDate, endDate } = req.query;
    const { limit, skip, sort } = getLimitSkipSortSearch(req.query);
    const query: any = {};

    if (!req.body.superadmin) query.userid = tokenId;

    if (checkDate(initDate)) {
      query.date = { $gte: moment(`${initDate}`).startOf('d').unix() };
    }

    return res.json({
      msg: `Eventos.`,
      events: await getEventsList({ skip, limit, sort, endDate, query })
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getEvents`);
  }
}

export async function showEvent(req: Request, res: Response): Promise<Response> {
  try {
    const { _id, tokenId } = req.params;

    if (!checkObjectId(_id)) return return404Or422(res);

    const query: any = { _id };
    if (!req.body.superadmin) query.userid = tokenId;

    const event = await getDetailsEvent({query});

    if (!event) return return404Or422(res, true);

    return res.json({
      msg: `Evento.`,
      event
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/showEvent`);
  }
}

export async function saveEvent(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenId } = req.body;
    const validate = validateRegister(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const event = new Events(validate.data);
    event.userid = tokenId;
    await event.save();

    const user = await getNamesUsersList([req.params.userid]);

    return res.status(201).json({
      msg: `Se ha creado el evento exitosamente.`,
      event: {
        _id: event._id,
        title: event.title,
        description: event.description,
        date: event.date,
        initHour: event.initHour,
        endHour: event.endHour,
        toRoles: event.toRoles,
        user: user[0] || null
      }
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/saveEvent`);
  }
}

export async function updateEvent(req: Request, res: Response): Promise<Response> {
  try {
    const { _id, tokenId } = req.params;

    if (!checkObjectId(_id)) return return404Or422(res);

    const validate = validateRegister(req.body);
    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const query: any = { _id };
    if (!req.body.superadmin) query.userid = tokenId;

    const event = await Events.findOne(query, { __v: 0 }).exec();

    if (!event) return return404Or422(res, true);

    event.title = validate.data.title;
    event.description = validate.data.description;
    event.date = validate.data.date;
    event.initHour = validate.data.initHour;
    event.endHour = validate.data.endHour;
    event.toRoles = validate.data.toRoles;
    await event.save();

    return res.json({
      msg: `Se ha actualizado el evento exitosamente.`,
      event: {
        _id: event._id,
        title: event.title,
        description: event.description,
        date: event.date,
        initHour: event.initHour,
        endHour: event.endHour,
        toRoles: event.toRoles
      }
    });

  } catch (error: any) {
    return returnError(res, error, `${path}/updateEvent`);
  }
}

export async function deleteEvent(req: Request, res: Response): Promise<Response> {
  try {
    const { _id, tokenId } = req.params;
    if (!checkObjectId(_id)) return return404Or422(res);

    const query: any = { _id };
    if (!req.body.superadmin) query.userid = tokenId;

    const event = await Events.findOne(query, { __v: 0 }).exec();

    if (!event) return return404Or422(res, true);

    await event.delete();
    return res.json({
      msg: `Se ha eliminado el evento exitosamente.`,
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/deleteEvent`);
  }
}

/*
  PUBLIC EVENTS
 */
export async function getPublicEvents(req: Request, res: Response): Promise<Response> {
  try {
    const { initDate, endDate } = req.query;
    const { limit, skip, sort } = getLimitSkipSortSearch(req.query);
    const query: any = {};

    if (initDate && checkDate(initDate)) {
      query.date = { $gte: moment(`${initDate}`).startOf('d').unix() };
    }

    return res.json({
      msg: `Eventos.`,
      events: await getEventsList({ skip, limit, sort, endDate, query })
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getEvents`);
  }
}

export async function showPublicEvent(req: Request, res: Response): Promise<Response> {
  try {
    const { _id } = req.params;
    const query = { _id };

    if (!checkObjectId(_id)) return return404Or422(res);

    const event = await getDetailsEvent({query});

    if (!event) return return404Or422(res, true);

    return res.json({
      msg: `Evento.`,
      event
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/showEvent`);
  }
}
