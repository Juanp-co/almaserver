import moment from 'moment-timezone';
import { Request, Response } from 'express';
import { getLimitSkipSortSearch, returnError } from '../../Functions/GlobalFunctions';
import Events from '../../Models/Events';
import validateRegister from '../../FormRequest/EventsRequest';
import { checkDate, checkObjectId } from '../../Functions/Validations';
import getListEvents, { getDetailsEvent } from '../../ActionsData/EventsActions';

const path = 'src/controllers/events/events.controller';

export default async function getEvents(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;
    const { initDate, endDate } = req.query;
    const { limit, skip, sort } = getLimitSkipSortSearch(req.query);
    let query = {};

    if (!req.body.superadmin) query = Object.assign(query, { userid } );

    if (initDate && checkDate(initDate)) {
      query = Object.assign(
        query,
        { date: { $gte: moment(`${initDate}`).startOf('d').unix() } }
        );
    }

    return res.json({
      msg: `Eventos.`,
      events: await getListEvents({ skip, limit, sort, endDate, query })
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getEvents`);
  }
}

export async function getPublicEvents(req: Request, res: Response): Promise<Response> {
  try {
    const { initDate, endDate } = req.query;
    const { userrole } = req.body;
    const { limit, skip, sort } = getLimitSkipSortSearch(req.query);
    let query = {
      toRoles: userrole
    };

    if (initDate && checkDate(initDate)) {
      query = Object.assign(
        query,
        { date: { $gte: moment(`${initDate}`).startOf('d').unix() } }
        );
    }

    return res.json({
      msg: `Eventos.`,
      events: await getListEvents({ skip, limit, sort, endDate, query })
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getEvents`);
  }
}

export async function showEvent(req: Request, res: Response): Promise<Response> {
  try {
    const { _id, userid } = req.params;
    let query = { _id };

    if (!req.body.superadmin) query = Object.assign(query, { userid } );

    if (!checkObjectId(_id)) {
      return res.status(422).json({
        msg: 'Disculpe, pero el evento seleccionado incorrecto.'
      });
    }

    const event = await getDetailsEvent({query});

    if (event) {
      return res.json({
        msg: `Evento.`,
        event
      });
    }

    return res.status(404).json({
      msg: `Disculpe, pero el evento seleccionado no existe.`
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/showEvent`);
  }
}

export async function showPublicEvent(req: Request, res: Response): Promise<Response> {
  try {
    const { _id } = req.params;
    const query = { _id };

    if (!checkObjectId(_id)) {
      return res.status(422).json({
        msg: 'Disculpe, pero el evento seleccionado incorrecto.'
      });
    }

    const event = await getDetailsEvent({query});

    if (event) {
      return res.json({
        msg: `Evento.`,
        event
      });
    }

    return res.status(404).json({
      msg: `Disculpe, pero el evento seleccionado no existe.`
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/showEvent`);
  }
}

export async function saveEvent(req: Request, res: Response): Promise<Response> {
  try {
    const validate = validateRegister(req.body);

    if (validate.errors.length > 0) {
      return res.status(422).json({
        msg: '¡Error en los parametros!',
        errors: validate.errors
      });
    }

    const event = new Events(validate.data);
    event.userid = req.params.userid;
    await event.save();

    return res.json({
      msg: `Se ha creado el evento exitosamente.`,
      event
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/saveEvent`);
  }
}

export async function updateEvent(req: Request, res: Response): Promise<Response> {
  try {
    const { _id, userid } = req.params;
    let query = { _id };

    if (!req.body.superadmin) query = Object.assign(query, { userid } );

    if (!checkObjectId(_id)) {
      return res.status(422).json({
        msg: 'Disculpe, pero el evento seleccionado incorrecto.'
      });
    }

    const validate = validateRegister(req.body);

    if (validate.errors.length > 0) {
      return res.status(422).json({
        msg: '¡Error en los parametros!',
        errors: validate.errors
      });
    }

    const event = await Events.findOne(query, { __v: 0 }).exec();

    if (event) {
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
    }

    return res.status(404).json({
      msg: `Disculpe, pero el evento a actualizar no existe.`
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/updateEvent`);
  }
}

export async function deleteEvent(req: Request, res: Response): Promise<Response> {
  try {
    const { _id, userid } = req.params;
    let query = { _id };

    if (!req.body.superadmin) query = Object.assign(query, { userid } );

    if (!checkObjectId(_id)) {
      return res.status(422).json({
        msg: 'Disculpe, pero el evento seleccionado incorrecto.'
      });
    }

    const event = await Events.findOne(query, { __v: 0 }).exec();

    if (event) {
      await event.delete();
      return res.json({
        msg: `Se ha eliminado el evento exitosamente.`,
      });
    }

    return res.status(404).json({
      msg: `Disculpe, pero el evento a eliminar no existe.`
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/deleteEvent`);
  }
}
