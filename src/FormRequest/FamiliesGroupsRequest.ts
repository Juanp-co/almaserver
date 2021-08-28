import { setError } from '../Functions/GlobalFunctions';
import { checkObjectId, checkTitlesOrDescriptions } from '../Functions/Validations';
import {
  IFamiliesGroupsForm,
  IFamiliesGroupsUpdateMembersForm
} from '../Interfaces/IFamiliesGroups';

const membersList: string[] = ['leaderId', 'hostId', 'assistantsIds', 'helperId', 'masterId'];
const membersMsgList: string[] = ['líder', 'anfitrión', 'asistentes', 'auxiliar', 'maestro'];
const staticCoords = [ -73.630175, 4.134516 ];
const checkCoordsNumbersType = (coords: any = []) => {
  let counter = 0;
  coords?.forEach((c: any) => {
    if (typeof c !== 'number') counter += 1;
  });

  return counter === 0
};

export default function validateDataForm(data: IFamiliesGroupsForm) : { data: IFamiliesGroupsForm; errors: any } {
  const ret = {
    number: null,
    direction: null,
    sector: null,
    subSector: null,
    location: {
      type: 'Point',
      coordinates: staticCoords
    }
  } as IFamiliesGroupsForm;

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

  // location
  if (data.location) {
     if (data.location.coordinates?.length !== 2) {
       errors.push(
         setError('Disculpe, pero la ubicación seleccionada en el mapa es incorrecta.', 'location')
       );
     }
     else if (!checkCoordsNumbersType(data.location.coordinates)) {
       errors.push(
         setError('Disculpe, pero las coordenadas de la ubicación seleccionada en el mapa son incorrectas.', 'location')
       );
     }
     else {
       ret.location.type = data.location.type || 'Point';
       ret.location.coordinates = data.location.coordinates || staticCoords;
     }
  }

  return { data: ret, errors };
}

export function validateUpdateMembersForm(data: IFamiliesGroupsUpdateMembersForm) : { data: IFamiliesGroupsUpdateMembersForm; errors: any } {
  const ret: IFamiliesGroupsUpdateMembersForm = {
    members: {
      leaderId: null,
      hostId: null,
      assistantsIds: [],
      helperId: null,
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
    const { members } = data;

    for (const [index, value] of membersList.entries()) {
      if (value !== 'assistantsIds') {
        if (members[`${value}`]) {
          if (!checkObjectId(data.members[value])) {
            errors.push(
              setError(`Disculpe, pero el miembro seleccionado como ${membersMsgList[index] || 'líder'} es incorrecto.`, value)
            );
          }
          else ret.members[value] = members[value];
        }
      }
      else {
        const { length } = members?.assistantsIds || [];

        for (let i = 0; i < length; i++) {
          if (!checkObjectId(members.assistantsIds[i])) {
            errors.push(
              setError(
                `Disculpe, pero uno de los miembros seleccionados como asistentes es incorrecto.`,
                'assistantsIds'
              )
            );
            break;
          }
          else ret.members.assistantsIds.push(members.assistantsIds[i]);
        }
      }
    }
  }

  return { data: ret, errors };
}
