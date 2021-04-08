import { setError } from '../Functions/GlobalFunctions';
import { checkObjectId, checkTitlesOrDescriptions } from '../Functions/Validations';
import {
  IFamiliesGroupsForm,
  IFamiliesGroupsUpdateForm,
  IFamiliesGroupsUpdateMembersForm
} from '../Interfaces/IFamiliesGroups';

const membersList: string[] = ['leaderId', 'hostId', 'assistantId', 'masterId'];
const membersMsgList: string[] = ['líder', 'anfitrión', 'asistente', 'maestro'];

export default function validateFormData(data: IFamiliesGroupsForm) : { data: IFamiliesGroupsUpdateForm; errors: any } {
  const ret: IFamiliesGroupsUpdateForm = {
    number: null,
    direction: null,
    sector: null,
    subSector: null,
  } as IFamiliesGroupsUpdateForm;

  const errors: any = [];

  // sector
  if (!/[0-9]{1,4}/.test(`${data.sector}`)) {
    errors.push(
      setError('Disculpe, pero debe indicar el sector.', 'sector')
    );
  }
  else ret.sector = data.sector;

  // subSector
  if (!/[0-9]{1,4}/.test(`${data.subSector}`)) {
    errors.push(
      setError('Disculpe, pero debe indicar el sub-sector.', 'subSector')
    );
  }
  else ret.subSector = data.subSector;

  // number
  if (!/[0-9]{1,4}/.test(`${data.number}`)) {
    errors.push(
      setError('Disculpe, pero debe indicar el número del grupo.', 'number')
    );
  }
  else ret.number = data.number;

  // direction
  if (!checkTitlesOrDescriptions(data.direction)) {
    errors.push(
      setError('Disculpe, pero debe indicar una dirección.', 'direction')
    );
  }
  else ret.direction = data.direction?.toString().trim() || null;

  return { data: ret, errors };
}

export function validateUpdateForm(data: IFamiliesGroupsUpdateForm) : { data: IFamiliesGroupsUpdateForm; errors: any } {
  const ret: IFamiliesGroupsUpdateForm = {
    number: null,
    direction: null,
    sector: null,
    subSector: null,
  } as IFamiliesGroupsUpdateForm;

  const errors: any = [];

  // number
  if (!/[0-9]{1,4}/.test(`${data.number}`)) {
    errors.push(
      setError('Disculpe, pero debe indicar el número del grupo.', 'number')
    );
  }
  else ret.number = data.number;

  // direction
  if (!checkTitlesOrDescriptions(data.direction)) {
    errors.push(
      setError('Disculpe, pero debe indicar una dirección.', 'direction')
    );
  }
  else ret.direction = data.direction?.toString().trim() || null;

  // sector
  if (!/[0-9]{1,4}/.test(`${data.sector}`)) {
    errors.push(
      setError('Disculpe, pero debe indicar seleccionar un sector.', 'sector')
    );
  }
  else ret.sector = data.sector;

  // subSector
  if (!/[0-9]{1,4}/.test(`${data.subSector}`)) {
    errors.push(
      setError('Disculpe, pero debe indicar seleccionar un sub-sector.', 'subSector')
    );
  }
  else ret.subSector = data.subSector;

  return { data: ret, errors };
}

export function validateUpdateMembersForm(data: IFamiliesGroupsUpdateMembersForm) : { data: IFamiliesGroupsUpdateMembersForm; errors: any } {
  const ret: IFamiliesGroupsUpdateMembersForm = {
    members: {
      leaderId: null,
      hostId: null,
      assistantId: null,
      masterId: null,
    },
  } as IFamiliesGroupsUpdateMembersForm;

  const errors: any = [];

  // members
  if (!data.members) {
    errors.push(
      setError('Disculpe, pero no se recibió la información a actualizar.', 'members')
    );
  }
  else {
    const {members} = data;

    for (const [index, value] of membersList.entries()) {
      if (members[`${value}`]) {
        if (!checkObjectId(data.members[value])) {
          errors.push(
            setError(`Disculpe, pero el miembro seleccionado como ${membersMsgList[index] || 'líder'} es incorrecto.`, value)
          );
        }
        else ret.members[value] = members[value];
      }
    }
  }

  return { data: ret, errors };
}
