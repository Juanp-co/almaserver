import { setError } from '../Functions/GlobalFunctions';
import {
  checkBase64, checkEmail, checkTitlesOrDescriptions, checkUrl
} from '../Functions/Validations';
import {IChurchesRegisterOrUpdate} from '../Interfaces/IChurches';

const checkCoordsNumbersType = (coords: any = []) => {
  let counter = 0;
  coords?.forEach((c: any) => {
    if (typeof c !== 'number') counter += 1;
  });

  return counter === 0
};
const staticCoords = [ -73.630175, 4.134516 ];

export function validateRegisterOrUpdateChurch(data: IChurchesRegisterOrUpdate): { data: IChurchesRegisterOrUpdate; errors: any[] } {
  const ret = {
    name: null,
    description: null,
    phone1: null,
    phone2: null,
    email: null,
    address: null,
    picture: null,
    location: {
      type: 'Point',
      coordinates: [0, 0]
    },
  } as IChurchesRegisterOrUpdate;
  const errors: any = [];

  // name
  if (!checkTitlesOrDescriptions(data.name)) {
    errors.push(
      setError('Disculpe, pero indicar el nombre para la iglesia.', 'name')
    );
  } else {
    ret.name = data.name ? data.name.toString().trim().toUpperCase() : data.name;
  }

  // description
  if (!data.description) {
    errors.push(
      setError('Disculpe, pero debe indicar una descripción para la iglesia.', 'description')
    );
  } else ret.description = data.description;

  // picture
  if (data.picture) {
    if (!checkBase64(`${data.picture}`) && !checkUrl(data.picture)) {
      errors.push(
        setError('Disculpe, pero la imagen indicada es incorrecta.', 'picture')
      );
    }
    else ret.picture = data.picture;
  }

  // location
  if (data.location) {
    if (data.location.coordinates?.length !== 2) {
      errors.push(
        setError('Disculpe, pero la ubicación seleccionada es incorrecta.', 'location')
      );
    }
    else if (!checkCoordsNumbersType(data.location.coordinates)) {
      errors.push(
        setError('Disculpe, pero las coordenadas de la ubicación seleccionada son incorrectas.', 'location')
      );
    }
    else {
      ret.location.coordinates = data.location.coordinates || staticCoords;
    }
  }

  // address
  if (data.address) {
    if (!checkTitlesOrDescriptions(`${data.address}`)) {
      errors.push(
        setError('Disculpe, pero la dirección indicada es incorrecta.', 'address')
      );
    }
    else ret.address = data.address;
  }

  // phone1
  if (data.phone1) {
    if (!/^[0-9]{5,15}/.test(`${data.phone1}`)) {
      errors.push(
        setError('Disculpe, pero el teléfono principal indicado es incorrecto.', 'phone1')
      );
    }
    else ret.phone1 = data.phone1;
  }

  // phone2
  if (data.phone2) {
    if (!/^[0-9]{5,15}/.test(`${data.phone2}`)) {
      errors.push(
        setError('Disculpe, pero el teléfono secundario indicado es incorrecto.', 'phone2')
      );
    }
    else ret.phone2 = data.phone2;
  }

  // email
  if (data.email) {
    if (!checkEmail(`${data.email}`)) {
      errors.push(
        setError('Disculpe, pero el correo electrónico indicado es incorrecto.', 'email')
      );
    }
    else ret.email = data.email;
  }

  return { data: ret, errors };
}

export default {
  validateRegisterOrUpdateChurch
}
