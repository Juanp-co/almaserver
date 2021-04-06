import moment from 'moment-timezone';
import { setError } from '../Functions/GlobalFunctions';
import {
  checkDate, checkObjectId, checkTitlesOrDescriptions
} from '../Functions/Validations';
import { IConsolidatesForm } from '../Interfaces/IConsolidates';

export default function validateSimpleRegister(data: IConsolidatesForm): { data: IConsolidatesForm; errors: any[] } {
  const ret = {
    userId: null,
    observation: null,
    date: null,
  } as IConsolidatesForm;
  const errors: any = [];

  // userId
  if (!checkObjectId(data.userId)) {
    errors.push(
      setError('Disculpe, pero el miembro seleccionado es incorrecto.', 'userId')
    );
  } else ret.userId = data.userId;

  // date
  if (!checkDate(data.date)) {
    errors.push(
      setError('Disculpe, pero indicar una fecha para la visita.', 'date')
    );
  } else ret.date = moment(data.date, 'YYYY-MM-DD', true).unix();

  // observation
  if (!checkTitlesOrDescriptions(data.observation)) {
    errors.push(
      setError('Disculpe, pero indicar un observación válida.', 'observation')
    );
  } else ret.observation = data.observation;

  return { data: ret, errors };
}
