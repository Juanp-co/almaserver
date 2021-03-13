import { setError } from '../Functions/GlobalFunctions';
import {
  checkBase64, checkTitlesOrDescriptions
} from '../Functions/Validations';
import {IAccountBankForm} from '../Interfaces/IAccountBank';

export default function validateSimpleRegister(data: IAccountBankForm): { data: IAccountBankForm; errors: any[] } {
  const ret = {
    title: null,
    description: null,
    picture: null,
  } as IAccountBankForm;
  const errors: any = [];

  // title
  if (!checkTitlesOrDescriptions(data.title)) {
    errors.push(
      setError('Disculpe, pero indicar un título válido para el banco.', 'title')
    );
  } else {
    ret.title = data.title ? data.title.toString().trim().toUpperCase() : data.title;
  }

  // description
  if (!data.description) {
    errors.push(
      setError('Disculpe, pero debe indicar una descripción para el banco.', 'description')
    );
  } else ret.description = data.description;

  // picture
  if (!data.picture && !checkBase64(`${data.picture}`)) {
    errors.push(
      setError('Disculpe, pero debe indicar una imagen para el banco.', 'picture')
    );
  }
  else ret.picture = data.picture;

  return { data: ret, errors };
}
