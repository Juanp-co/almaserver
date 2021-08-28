import moment from 'moment-timezone';
import { Request, Response } from 'express';
import getEventsList, { getDetailsEvent, return404Or422 } from '../../ActionsData/EventsActions';
import { getNamesUsersList } from '../../ActionsData/UsersActions';
import validateRegister from '../../FormRequest/EventsRequest';
import { getLimitSkipSortSearch, returnError, returnErrorParams } from '../../Functions/GlobalFunctions';
import { checkDate, checkObjectId, checkUrl, isBase64 } from '../../Functions/Validations';
import Events from '../../Models/Events';
import uploadFile, { deleteFile } from '../../Services/AWSService';

const path = 'Controllers/events/events.controller';

export default async function getEvents(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenId } = req.body;
    const { initDate, endDate } = req.query;
    const { limit, skip, sort } = getLimitSkipSortSearch(req.query);
    const query: any = {};

    if (!req.body.superadmin) query.userid = tokenId;

    if (checkDate(initDate)) {
      query.date = { $gte: moment(`${initDate}`, 'YYYY-MM-DD', true).startOf('d').unix() };
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

    if (!checkObjectId(_id)) return return404Or422(res, 0);

    const query: any = { _id };
    if (!req.body.superadmin) query.userid = tokenId;

    const event = await getDetailsEvent({query});

    if (!event) return return404Or422(res, 1);

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

    const user = await getNamesUsersList([tokenId]);

    if (validate.data.picture) {
      const s3 = process.env.AWS_S3_BUCKET || null;

      if (!s3) return return404Or422(res, 2);

      if (isBase64(validate.data.picture)) {
        const newUrl = `alma/events/event-${event._id.toString()}-${moment().tz('America/Bogota').unix()}`;
        await uploadFile(newUrl, validate.data.picture);
        event.picture = `${s3}/${newUrl}.jpg`;
      }
      else if (checkUrl(validate.data.picture)) {
        event.picture = validate.data.picture;
      }
    }

    await event.save();

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
        picture: event.picture,
        user: user[0] || null
      }
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/saveEvent`);
  }
}

export async function updateEvent(req: Request, res: Response): Promise<Response> {
  try {
    const { _id } = req.params;
    const { tokenId } = req.body;

    if (!checkObjectId(_id)) return return404Or422(res, 0);

    const validate = validateRegister(req.body);
    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const query: any = { _id };
    if (!req.body.superadmin) query.userid = tokenId;

    const event = await Events.findOne(query, { __v: 0 }).exec();

    if (!event) return return404Or422(res, 1);

    event.title = validate.data.title;
    event.description = validate.data.description;
    event.date = validate.data.date;
    event.initHour = validate.data.initHour;
    event.endHour = validate.data.endHour;
    event.toRoles = validate.data.toRoles;

    if (event.picture !== validate.data.picture) {
      const s3 = process.env.AWS_S3_BUCKET || null;
      if (!s3) return return404Or422(res, 2);
      if (event.picture !== null && event.picture.indexOf(`${s3}`))
        await deleteFile(event.picture);

      if (isBase64(validate.data.picture)) {
        const newUrl = `alma/events/event-${_id}-${moment().tz('America/Bogota').unix()}`;
        await uploadFile(newUrl, validate.data.picture);
        event.picture = `${s3}/${newUrl}.jpg`;
      }
      else if (checkUrl(validate.data.picture)) {
        event.picture = validate.data.picture;
      }
      else event.picture = null;
    }

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
        toRoles: event.toRoles,
        picture: event.picture
      }
    });

  } catch (error: any) {
    return returnError(res, error, `${path}/updateEvent`);
  }
}

export async function deleteEvent(req: Request, res: Response): Promise<Response> {
  try {
    const { _id } = req.params;
    const { tokenId } = req.body;
    if (!checkObjectId(_id)) return return404Or422(res, 0);

    const query: any = { _id };
    if (!req.body.superadmin) query.userid = tokenId;

    const event = await Events.findOne(query, { __v: 0 }).exec();

    if (!event) return return404Or422(res, 1);

    const s3 = process.env.AWS_S3_BUCKET || null;
    if (!s3) return return404Or422(res, 2);
    if (event.picture !== null && event.picture.indexOf(`${s3}`))
      await deleteFile(event.picture);

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

    if (!checkObjectId(_id)) return return404Or422(res, 0);

    const event = await getDetailsEvent({query});

    if (!event) return return404Or422(res, 1);

    return res.json({
      msg: `Evento.`,
      event
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/showEvent`);
  }
}
