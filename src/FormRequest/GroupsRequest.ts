import _ from 'lodash';
import { setError } from '../Functions/GlobalFunctions';
import { checkObjectId, checkTitlesOrDescriptions } from '../Functions/Validations';
import { IGroupsForm, IGroupsMembersIdsForm } from '../Interfaces/IGroups';

export default function validateRegister(data: IGroupsForm) : { data: IGroupsForm; errors: any } {
  const ret = {
    name: '',
    code: null,
    members: []
  } as IGroupsForm;

  const errors: any = [];

  // group name
  if (!checkTitlesOrDescriptions(data.name)) {
    errors.push(
      setError('Disculpe, pero debe indicar un nombre correcto para el grupo.', 'name')
    );
  }
  else ret.name = data.name.trim();

  // group code
  if (data.code) ret.code = data.code.trim();

  return { data: ret, errors };
}

export function validateIdsMembers(data: IGroupsMembersIdsForm) : { data: IGroupsMembersIdsForm; errors: any } {
  const ret = {
    members: []
  } as IGroupsMembersIdsForm;

  const errors: any = [];

  if (!data.members) {
    errors.push(
      setError('Disculpe, pero los datos enviados son incorrectos.', 'members')
    );
  }
  else if (data.members && typeof data.members !== 'object') {
    errors.push(
      setError('Disculpe, pero los datos enviados son incorrectos.', 'members')
    );
  }
  else {
    const listIds = _.uniq(data.members);
    const totals = listIds.length || 0;

    if (totals > 0) {
      for (let i = 0; i < totals; i += 1) {
        if (checkObjectId(listIds[i]))
          ret.members.push(listIds[i]);
        else {
          errors.push(
            setError('Disculpe, pero alguno de los miembros seleccionados son incorrectos.', 'members')
          );
          break;
        }
      }
    }
  }

  return { data: ret, errors };
}
