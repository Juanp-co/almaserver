import checkIfExistDocument, {
  checkIfExistPhone,
  getIdUserFromDocument
} from '../ActionsData/UsersActions';
import { setError } from '../Functions/GlobalFunctions';
import {
  checkDate,
  checkDocument, checkEmail,
  checkIfValueIsNumber,
  checkNameOrLastName, checkObjectId,
  checkPassword,
  checkPhone, checkTitlesOrDescriptions
} from '../Functions/Validations';
import IUser, {
  IUserLogin,
  IUserPasswords,
  IUserSimpleRegister, IUserSimpleRegisterConsolidate,
  IUserUpdate
} from '../Interfaces/IUser';

export default async function validateSimpleRegister(data: IUserSimpleRegister, admin?: boolean | null): Promise<{ data: IUserSimpleRegister; errors: any }> {
  const ret: IUserSimpleRegister = {
    phone: null,
    password: null,
    names: null,
    lastNames: null,
    role: 5,
    referred: null,
    consolidated: false,
  };
  const errors: any = [];

  // phone
  if (!checkPhone(data.phone)) {
    errors.push(
      setError('Disculpe, pero debe indicar un número de teléfono.', 'phone')
    );
  } else if (await checkIfExistPhone(data.phone)) {
    errors.push(
      setError(
        'Disculpe, pero el número de teléfono indicado ya se encuentra asignado a otro miembro. Verifíquelo e intente nuevamente.',
        'email'
      )
    );
  } else ret.phone = data.phone;

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

  if (admin) {
    ret.role = data.role !== null && [0, 1, 2, 3, 4, 5].indexOf(data.role) > -1 ? data.role : 5;
  }

  return { data: ret, errors };
}

export async function validateFormMemberRegisterAdmin(data: IUserSimpleRegisterConsolidate): Promise<{ data: IUserSimpleRegisterConsolidate; errors: any }> {
  const ret: IUserSimpleRegisterConsolidate = {
    email: null,
    phone: null,
    password: null,
    names: null,
    lastNames: null,
    gender: null,
    birthday: null,
    civilStatus: null,
    locality: null,
    direction: null,
    petition: null,
    attendGroup: false,
    groupId: null,
    familyGroupId: [],
    role: 5,
    referred: null,
    consolidated: false,
  };
  const errors: any = [];

  // phone
  if (!checkPhone(data.phone)) {
    errors.push(
      setError('Disculpe, pero debe indicar un número de teléfono.', 'phone')
    );
  } else if (await checkIfExistPhone(data.phone)) {
    errors.push(
      setError(
        'Disculpe, pero el número de teléfono indicado ya se encuentra asignado a otro miembro. Verifíquelo e intente nuevamente.',
        'email'
      )
    );
  } else ret.phone = data.phone;

  // names
  if (!data.names || !checkNameOrLastName(data.names)) {
    errors.push(setError('Disculpe, pero debe asegurarse de indicar el nombre nombre del miembro.', 'names'));
  } else ret.names = data.names.toUpperCase();

  // lastNames
  if (!data.lastNames || !checkNameOrLastName(data.lastNames)) {
    errors.push(
      setError('Disculpe, pero debe asegurarse de indicar el apellido del miembro.', 'lastNames')
    );
  } else ret.lastNames = data.lastNames.toUpperCase();

  // email
  if (data.email) {
    if (!checkEmail(data.email)) {
      errors.push(
        setError('Disculpe, pero el correo electrónico indicado es incorrecto.', 'email')
      );
    }
    else ret.email = data.email.toLowerCase();
  }

  // birthday
  if (data.birthday) {
    if (!checkDate(data.birthday)) {
      errors.push(setError('Disculpe, pero la fecha de cumpleaños indicada es incorrecta.', 'birthday'));
    } else ret.birthday = data.birthday?.trim().toUpperCase() || null;
  }

  // locality
  if (checkTitlesOrDescriptions(`${data.locality}`)) ret.locality = data.locality || null;

  // direction
  if (checkTitlesOrDescriptions(`${data.direction}`)) ret.direction = data.direction || null;

  // petition
  if (checkTitlesOrDescriptions(`${data.petition}`)) ret.petition = data.petition || null;

  // civilStatus
  if (checkIfValueIsNumber(`${data.civilStatus}`)) ret.civilStatus = data.civilStatus;

  // gender
  if (checkIfValueIsNumber(`${data.gender}`)) ret.gender = data.gender;

  // attendGroup
  if (data.attendGroup) {
    ret.attendGroup = true;

    // familyGroupId
    if (data.groupId) {
      if (!checkObjectId(`${data.groupId}`)) {
        errors.push(setError('Disculpe, pero el grupo seleccionado es incorrecto.', 'groupId'));
      }
      else ret.familyGroupId.push(data.groupId)
    }
  }

  // consolidated
  if (data.consolidated) {
    ret.consolidated = data.consolidated || false;

    // referred
    if (data.referred) {
      if (!checkObjectId(`${data.referred}`)) {
        errors.push(setError('Disculpe, pero el miembro seleccionado es incorrecto.', 'referred'));
      }
      else ret.referred = data.referred;
    }
  }

  // role
  ret.role = data.role !== null && [0, 1, 2, 3, 4, 5].indexOf(data.role) > -1 ? data.role : 5;

  return { data: ret, errors };
}

export async function validateFormMemberRegisterFromUser(data: IUserSimpleRegisterConsolidate): Promise<{ data: IUserSimpleRegisterConsolidate; errors: any }> {
  const ret: IUserSimpleRegisterConsolidate = {
    email: null,
    phone: null,
    password: null,
    names: null,
    lastNames: null,
    gender: null,
    birthday: null,
    civilStatus: null,
    locality: null,
    direction: null,
    petition: null,
    attendGroup: false,
    groupId: null,
    familyGroupId: [],
    role: 5,
    referred: null,
    consolidated: false,
  };
  const errors: any = [];

  // phone
  if (!checkPhone(data.phone)) {
    errors.push(
      setError('Disculpe, pero debe indicar un número de teléfono.', 'phone')
    );
  } else if (await checkIfExistPhone(data.phone)) {
    errors.push(
      setError(
        'Disculpe, pero el número de teléfono indicado ya se encuentra asignado a otro miembro. Verifíquelo e intente nuevamente.',
        'email'
      )
    );
  } else ret.phone = data.phone;

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

  // email
  if (data.email) {
    if (!checkEmail(data.email)) {
      errors.push(
        setError('Disculpe, pero el correo electrónico indicado es incorrecto.', 'email')
      );
    }
    else ret.email = data.email.toLowerCase();
  }

  // birthday
  if (data.birthday) {
    if (!checkDate(data.birthday)) {
      errors.push(setError('Disculpe, pero la fecha de cumpleaños indicada es incorrecta.', 'birthday'));
    } else ret.birthday = data.birthday?.trim().toUpperCase() || null;
  }

  // locality
  if (checkTitlesOrDescriptions(`${data.locality}`)) ret.locality = data.locality || null;

  // direction
  if (checkTitlesOrDescriptions(`${data.direction}`)) ret.direction = data.direction || null;

  // petition
  if (checkTitlesOrDescriptions(`${data.petition}`)) ret.petition = data.petition || null;

  // gender
  if (checkIfValueIsNumber(`${data.gender}`)) ret.gender = data.gender;

  // civilStatus
  if (checkIfValueIsNumber(`${data.civilStatus}`)) ret.civilStatus = data.civilStatus;

  // attendGroup
  if (data.attendGroup) {
    ret.attendGroup = true;

    // familyGroupId
    if (data.groupId) {
      if (!checkObjectId(`${data.groupId}`)) {
        errors.push(setError('Disculpe, pero el grupo seleccionado es incorrecto.', 'groupId'));
      }
      else ret.familyGroupId.push(data.groupId)
    }
  }

  // consolidated
  ret.consolidated = data.consolidated || false;

  // referred
  if (data.referred) {
    if (!checkObjectId(`${data.referred}`)) {
      errors.push(setError('Disculpe, pero el miembro seleccionado es incorrecto.', 'referred'));
    }
    else ret.referred = data.referred;
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
    position: null,
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

  // phone
  if (!checkPhone(data.phone)) {
    errors.push(
      setError('Disculpe, pero debe indicar un número de teléfono. Sólo se permiten números (0-9).', 'phone')
    );
  } else if (await checkIfExistPhone(data.phone, _id)) {
    errors.push(
      setError(
        'Disculpe, pero el número de teléfono indicado ya se encuentra asignado a otro miembro. Verifíquelo e intente nuevamente.',
        'phone'
      )
    );
  } else ret.phone = data.phone;

  // names
  if (!data.names || !checkNameOrLastName(data.names)) {
    errors.push(setError('Disculpe, pero debe asegurarse de indicar el nombre.', 'names'));
  } else {
    ret.names = data.names.trim();
  }

  // lastNames
  if (!data.lastNames || !checkNameOrLastName(data.lastNames)) {
    errors.push(
      setError('Disculpe, pero debe asegurarse de indicar el apellido.', 'lastNames')
    );
  } else {
    ret.lastNames = data.lastNames.trim();
  }

  if (admin) {
    // document
    if (data.document) {
      if (!data.document || !checkDocument(data.document)) {
        errors.push(
          setError('Disculpe, pero debe asegurarse de indicar el número de documento.', 'document')
        );
      } else if (await checkIfExistDocument(data.document, _id)) {
        errors.push(
          setError(
            'Disculpe, pero el número de documento ya se encuentra asignado a otro miembro. Verifíquelo e intente nuevamente.',
            'email'
          )
        );
      } else ret.document = data.document.toLowerCase();
    }
  }

  // email
  if (data.email) {
    if (!checkEmail(data.email)) {
      errors.push(
        setError('Disculpe, pero el correo electrónico indicado es incorrecto.', 'email')
      );
    }
    else ret.email = data.email.toLowerCase();
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
  if (checkIfValueIsNumber(`${data.educationLevel}`)) ret.educationLevel = data.educationLevel;

  // profession
  if (checkIfValueIsNumber(`${data.profession}`)) ret.profession = data.profession;

  // bloodType
  if (checkIfValueIsNumber(`${data.bloodType}`)) ret.bloodType = data.bloodType;

  // gender
  if (checkIfValueIsNumber(`${data.gender}`)) ret.gender = data.gender;

  // civilStatus
  if (checkIfValueIsNumber(`${data.civilStatus}`)) ret.civilStatus = data.civilStatus;

  // department
  if (checkIfValueIsNumber(`${data.department}`)) ret.department = data.department;

  // city
  if (checkIfValueIsNumber(`${data.city}`)) ret.city = data.city;

  // locality
  if (checkTitlesOrDescriptions(`${data.locality}`)) ret.locality = data.locality || null;

  // direction
  if (checkTitlesOrDescriptions(`${data.direction}`)) ret.direction = data.direction || null;

  // position
  if (checkTitlesOrDescriptions(`${data.position}`)) ret.position = data.position || null;

  // baptized
  if (data.baptized) ret.baptized = data.baptized;

  // company
  if (data.company) {
    ret.company = true;

    // companyType
    if (checkIfValueIsNumber(`${data.companyType}`)) ret.companyType = data.companyType;
  }

  return { data: ret, errors };
}

export function validateLogin(data: IUserLogin): { data: IUserLogin; errors: any } {
  const ret = {
    phone: null,
    password: null,
    admin: false,
  } as IUserLogin;
  const errors: any = [];

  // phone
  if (!checkPhone(`${data.phone}`)) {
    errors.push(
      setError('Disculpe, pero debe indicar su número de teléfono.', 'phone')
    );
  } else ret.phone = data.phone;

  // password
  if (!data.password || (data.password && data.password.length < 4)) {
    errors.push(setError('Disculpe, pero debe indicar su contraseña correctamente.', 'password'));
  } else ret.password = data.password;

  if (data.admin) ret.admin = true;

  return { data: ret, errors };
}

export async function validatePasswords(data: IUserPasswords): Promise<{ data: IUserPasswords; errors: any }> {
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
