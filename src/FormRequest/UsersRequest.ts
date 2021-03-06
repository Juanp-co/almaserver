import checkIfExistDocument, { checkIfExistEmail, getIdUserFromDocument } from '../ActionsData/UsersActions';
import { setError } from '../Functions/GlobalFunctions';
import {
  checkDate,
  checkDocument, checkEmail,
  checkIfValueIsNumber,
  checkNameOrLastName,
  checkPassword,
  checkPhone, checkTitlesOrDescriptions
} from '../Functions/Validations';
import IUser, {
  IUserLogin,
  IUserPasswords,
  IUserSimpleRegister,
  IUserUpdate
} from '../Interfaces/IUser';

export default async function validateSimpleRegister(data: IUserSimpleRegister, admin?: boolean | null): Promise<{ data: IUserSimpleRegister; errors: any }> {
  const ret = {
    email: null,
    phone: null,
    password: null,
    document: null,
    names: null,
    lastNames: null,
    role: 5,
    referred: null
  } as IUserSimpleRegister;
  const errors: any = [];

  // email
  if (!data.email || !checkEmail(data.email)) {
    errors.push(
      setError('Disculpe, pero debe asegurarse de indicar su correo electrónico.', 'email')
    );
  } else if (await checkIfExistEmail(data.email.toLowerCase())) {
    errors.push(
      setError(
        'Disculpe, pero el correo electrónico ya se encuentra asignado a otro miembro. Verifíquelo e intente nuevamente.',
        'email'
      )
    );
  } else {
    ret.email = data.email.toLowerCase();
  }

  // document
  if (!data.document || !checkDocument(data.document)) {
    errors.push(
      setError('Disculpe, pero debe asegurarse de indicar su número de documento.', 'document')
    );
  } else if (await checkIfExistDocument(data.document.toUpperCase())) {
    errors.push(
      setError(
        'Disculpe, pero el número de documento ya se encuentra registrado. Verifíquelo e intente nuevamente.',
        'document'
      )
    );
  } else ret.document = data.document.toUpperCase();

  // password
  if (!admin) {
    if (!data.password || !checkPassword(data.password)) {
      errors.push(
        setError(
          'Disculpe, pero debe asignar una contraseña. Esta debe contener ' +
          'letras (a-Z, A-Z), números (0-9) y debe contener al menos 6 caracteres.',
          'password'
        )
      );
    } else ret.password = data.password;
  }

  // names
  if (!data.names || !checkNameOrLastName(data.names)) {
    errors.push(setError('Disculpe, pero debe asegurarse de indicar su(s) nombre(s).', 'names'));
  } else ret.names = data.names.toUpperCase();

  // lastNames
  if (!data.lastNames || !checkNameOrLastName(data.lastNames)) {
    errors.push(
      setError('Disculpe, pero debe asegurarse de indicar su(s) apellido(s).', 'lastNames')
    );
  } else ret.lastNames = data.lastNames.toUpperCase();

  // referred
  if (data.referred && checkDocument(data.referred)) {
    ret.referred = await getIdUserFromDocument(data.referred.toUpperCase());
  }

  // phone
  if (checkPhone(data.phone)) ret.phone = data.phone;

  if (admin) {
    if (data.role !== null && [0, 1, 2, 3, 4, 5].indexOf(data.role) > -1) {
      ret.role = data.role;
    }
  }

  return { data: ret, errors };
}

export async function validateUpdate(data: IUserUpdate, _id: string, admin = false): Promise<{ data: IUser; errors: any }> {
  const ret = {
    phone: null,
    email: null,
    document: null,
    names: null,
    lastNames: null,
    gender: null,
    birthday: null,
    civilStatus: null,
    educationLevel: null,
    profession: null,
    bloodType: null,
    company: false,
    companyType: null,
    baptized: false,
    department: null,
    city: null,
    locality: null,
    direction: null,
  } as IUser;
  const errors: any = [];

  if (admin) {
    // document
    if (!data.document || !checkDocument(data.document)) {
      errors.push(
        setError('Disculpe, pero debe asegurarse de indicar su número de documento.', 'document')
      );
    } else if (await checkIfExistDocument(data.document, _id)) {
      errors.push(
        setError(
          'Disculpe, pero el número de documento ya se encuentra asignado a otro miembro. Verifíquelo e intente nuevamente.',
          'email'
        )
      );
    } else {
      ret.document = data.document.toLowerCase();
    }
  }

  // email
  if (!data.email || !checkEmail(data.email)) {
    errors.push(
      setError('Disculpe, pero debe asegurarse de indicar su correo electrónico.', 'email')
    );
  } else if (await checkIfExistEmail(data.email.toLowerCase(), _id)) {
    errors.push(
      setError(
        'Disculpe, pero el correo electrónico ya se encuentra asignado a otro miembro. Verifíquelo e intente nuevamente.',
        'email'
      )
    );
  } else {
    ret.email = data.email.toLowerCase();
  }

  // phone
  if (!checkPhone(data.phone)) {
    errors.push(setError('Disculpe, pero debe indicar su número de teléfono. Sólo se permiten números (0-9).', 'phone'));
  }
  else ret.phone = data.phone?.trim() || null;

  // names
  if (!data.names || !checkNameOrLastName(data.names)) {
    errors.push(setError('Disculpe, pero debe asegurarse de indicar su(s) nombre(s).', 'names'));
  } else {
    ret.names = data.names.trim();
  }

  // lastNames
  if (!data.lastNames || !checkNameOrLastName(data.lastNames)) {
    errors.push(
      setError('Disculpe, pero debe asegurarse de indicar su(s) apellido(s).', 'lastNames')
    );
  } else {
    ret.lastNames = data.lastNames.trim();
  }

  // birthday
  if (data.birthday) {
    if (!checkDate(`${data.birthday}`)) {
      errors.push(setError('Disculpe, pero la fecha de cumpleaños indicada es incorrecta.', 'birthday'));
    } else {
      ret.birthday = data.birthday?.trim().toUpperCase() || null;
    }
  }

  // educationLevel
  if (!checkIfValueIsNumber(`${data.educationLevel}`)) {
    errors.push(setError('Disculpe, pero debe indicar su nivel educativo.', 'educationLevel'));
  }
  else ret.educationLevel = data.educationLevel;

  // profession
  if (!checkIfValueIsNumber(`${data.profession}`)) {
    errors.push(setError('Disculpe, pero debe indicar su profesión.', 'profession'));
  }
  else ret.profession = data.profession;

  // bloodType
  if (!checkIfValueIsNumber(`${data.bloodType}`)) {
    errors.push(setError('Disculpe, pero debe indicar su tipo de sangre.', 'bloodType'));
  }
  else ret.bloodType = data.bloodType;

  // gender
  if (!checkIfValueIsNumber(`${data.gender}`)) {
    errors.push(setError('Disculpe, pero debe indicar su sexo.', 'gender'));
  }
  else ret.gender = data.gender;

  // civilStatus
  if (!checkIfValueIsNumber(`${data.civilStatus}`)) {
    errors.push(setError('Disculpe, pero debe indicar su estado civil.', 'civilStatus'));
  }
  else ret.civilStatus = data.civilStatus;

  // department
  if (!checkIfValueIsNumber(`${data.department}`)) {
    errors.push(setError('Disculpe, pero debe indicar el departamento de residencia.', 'department'));
  }
  else ret.department = data.department;

  // city
  if (!checkIfValueIsNumber(`${data.city}`)) {
    errors.push(setError('Disculpe, pero debe indicar la ciudad de residencia.', 'city'));
  }
  else ret.city = data.city;

  // locality
  if (!data.locality || !checkTitlesOrDescriptions(`${data.locality}`)) {
    errors.push(setError('Disculpe, pero debe indicar el nombre del barrio o localidad en la que reside.', 'locality'));
  }
  else ret.locality = data.locality || null;

  // direction
  if (!data.direction || !checkTitlesOrDescriptions(`${data.direction}`)) {
    errors.push(setError('Disculpe, pero debe indicar su dirección.', 'direction'));
  }
  else ret.direction = data.direction || null;

  // baptized
  if (data.baptized) ret.baptized = data.baptized;

  // company
  if (data.company) {
    ret.company = true;

    // companyType
    if (!checkIfValueIsNumber(`${data.companyType}`)) {
      errors.push(
        setError('Disculpe, pero debe indicar a qué se dedica su empresa.', 'companyType')
      );
    } else {
      ret.companyType = data.companyType;
    }
  }

  return { data: ret, errors };
}

export function validateLogin(data: IUserLogin): { data: IUserLogin; errors: any } {
  const ret = {
    document: null,
    password: null,
    admin: false,
  } as IUserLogin;
  const errors: any = [];

  // phone
  if (!data.document || !checkDocument(data.document ? data.document.toUpperCase() : '')) {
    errors.push(
      setError('Disculpe, pero debe asegurarse de indicar su número de documento correctamete.', 'document')
    );
  } else {
    ret.document = data.document.toUpperCase();
  }

  // password
  if (!data.password || (data.password && data.password.length < 4)) {
    errors.push(setError('Disculpe, pero debe indicar su contraseña correctamente.', 'password'));
  } else {
    ret.password = data.password;
  }

  if (data.admin) ret.admin = true;

  return { data: ret, errors };
}

export async function validatePasswords(
  data: IUserPasswords
): Promise<{ data: IUserPasswords; errors: any }> {
  const ret = {
    password: null,
    newPassword: null
  } as IUserPasswords;
  const errors: any = [];

  // password
  if (!data.password) {
    errors.push(setError('Disculpe, pero debe indicar su contraseña actual.', 'password'));
  } else ret.password = data.password.trim();

  // newPassword
  if (!data.newPassword || !checkPassword(data.newPassword)) {
    errors.push(
      setError(
        'Disculpe, pero la nueva contraseña debe contener ' +
          'letras (a-Z, A-Z), números (0-9) y al menos 6 caracteres.',
        'newPassword'
      )
    );
  } else ret.newPassword = data.newPassword.trim();

  return { data: ret, errors };
}
