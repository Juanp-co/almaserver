import moment from 'moment-timezone';
import { setError } from '../Functions/GlobalFunctions';
import { checkDate, checkHour, checkTitlesOrDescriptions } from '../Functions/Validations';
import { IEventsRegisterOrUpdate } from '../Interfaces/IEvents';

export default function validateRegister(
  data: IEventsRegisterOrUpdate,
  // admin?: boolean | null
): { data: IEventsRegisterOrUpdate; errors: any } {
  const ret = {
    title: null,
    description: null,
    date: null,
    initHour: null,
    endHour: null,
    toRoles: [],
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
  if (!data.description || !checkTitlesOrDescriptions(data.description)) {
    errors.push(
      setError('Disculpe, pero indicar una descripción para el evento.', 'description')
    );
  } else {
    ret.description = data.description ? data.description.toString().trim() : data.description;
  }

  // date
  if (!data.date || !checkDate(data.date)) {
    errors.push(
      setError('Disculpe, pero debe indicar la fecha para el evento.', 'date')
    );
  } else {
    ret.date = moment(data.date).unix();
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

  return { data: ret, errors };
}
