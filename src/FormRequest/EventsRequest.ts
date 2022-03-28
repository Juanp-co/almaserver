import moment from 'moment-timezone';
import { setError } from '../Functions/GlobalFunctions';
import { checkDate, checkHour, checkTitlesOrDescriptions, isBase64 } from '../Functions/Validations';
import { IEventsRegisterOrUpdate } from '../Interfaces/IEvents';

export default function validateRegister(
  data: IEventsRegisterOrUpdate,
  // admin?: boolean | null
): { data: IEventsRegisterOrUpdate; errors: any } {
  const ret = {
    title: null,
    description: null,
    date: null,
    dateEnd: null,
    initHour: null,
    endHour: null,
    toRoles: [],
    picture: null,
  } as IEventsRegisterOrUpdate;
  const errors: any = [];

  // title
  if (!data.title || !checkTitlesOrDescriptions(data.title)) {
    errors.push(
      setError('Disculpe, pero indicar un título para el evento.', 'title')
    );
  } else {
    ret.title = data.title ? data.title.toString().trim().toUpperCase() : data.title;
  }

  // description
  if (!data.description || (data.description && data.description.length < 5)) {
    errors.push(
      setError('Disculpe, pero indicar una descripción para el evento.', 'description')
    );
  } else {
    ret.description = data.description ? data.description.toString().trim() : data.description;
  }

  // date
  if (!data.date || !checkDate(data.date)) {
    errors.push(
      setError('Disculpe, pero debe indicar la fecha inicial para el evento.', 'date')
    );
  } else {
    ret.date = moment(data.date).unix();
  }

  // date
  if (!data.dateEnd || !checkDate(data.dateEnd)) {
    errors.push(
      setError('Disculpe, pero debe indicar la fecha final para el evento.', 'date')
    );
  } else {
    ret.dateEnd = moment(data.dateEnd).unix();
  }

  // initHour
  if (!data.initHour || !checkHour(data.initHour)) {
    errors.push(
      setError('Disculpe, pero indicar la hora de inicio para el evento.', 'initHour')
    );
  } else {
    ret.initHour = data.initHour ? data.initHour.toString().trim() : data.initHour;
  }

  // endHour
  if (!data.endHour || !checkHour(data.endHour)) {
    errors.push(
      setError('Disculpe, pero indicar la hora de finalización del evento.', 'endHour')
    );
  } else {
    ret.endHour = data.endHour ? data.endHour.toString().trim() : data.endHour;
  }

  // toRoles
  if (!data.toRoles || typeof data.toRoles !== 'object' || data.toRoles.length === 0) {
    errors.push(
      setError('Disculpe, pero debe seleccionar a quienes va dirigido el evento.', 'toRoles')
    );
  } else {
    ret.toRoles = data.toRoles;
  }

  // picture
  if (data.picture && !isBase64(data.picture)) {
    errors.push(
      setError('Disculpe, pero la imagen para el evento es incorrecta.', 'picture')
    );
  }
  else {
    ret.picture = data.picture || null;
  }

  return { data: ret, errors };
}
