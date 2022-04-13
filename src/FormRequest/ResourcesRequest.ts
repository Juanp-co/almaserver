import { setError } from '../Functions/GlobalFunctions';
import { checkBase64, checkTitlesOrDescriptions, checkUrl } from '../Functions/Validations';
import { IResourcesForm } from '../Interfaces/IResources';

export function validateResourceForm(data: IResourcesForm): { data: IResourcesForm; errors: any[] } {
  const ret = {
    title: '',
    file: '',
    rolesList: [],
  } as IResourcesForm;
  const errors: any = [];

  // title
  if (!checkTitlesOrDescriptions(data.title)) {
    errors.push(
      setError('Disculpe, pero indicar un título válido.', 'title')
    );
  } else {
    ret.title = `${data.title}`.trim().toUpperCase();
  }

  // file
  if (!checkBase64(`${data.file}`, true) && !checkUrl(`${data.file}`)) {
    errors.push(
      setError('Disculpe, pero el documento suministrado es incorrecto.', 'file')
    );
  }
  else ret.file = data.file;

  // file
  if (data?.rolesList?.length > 0) {
    let errs = 0;

    data?.rolesList?.forEach(rl => {
      if (!/[0123]{1}/.test(`${rl}`)) errs += 1;
    });

    if (errs > 0) {
      errors.push(setError('Disculpe, pero uno de los roles seleccionados no está permitido.', 'rolesList'));
    }
    else ret.rolesList = data.rolesList || [0, 1, 2, 3];
  }
  else ret.rolesList = [0, 1, 2, 3];

  return { data: ret, errors };
}

export default {
  validateResourceForm
}
