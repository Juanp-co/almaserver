import {
  checkDocument,
  checkIfValueIsNumber,
  checkNameOrLastName,
  checkObjectId,
  checkPassword,
  checkPhone
} from '../Functions/Validations';
import IUser, {
  IUserLogin,
  IUserPasswords,
  IUserRegister,
  IUserSecurityQuestion,
  IUserUpdate
} from '../Interfaces/IUser';
import { setError } from '../Functions/GlobalFunctions';
import { checkIfExistDocument } from '../ActionsData/UsersActions';
import { checkIfExistQuestion } from '../ActionsData/QuestionsActions';

export async function validateRegister(data: IUserRegister): Promise<{ data: IUser; errors: any }> {
  const ret = {
    phone: null,
    password: null,
    document: null,
    names: null,
    lastNames: null,
    direction: null,
    educationLevel: null,
    profession: null,
    bloodType: null,
    company: false,
    companyType: null,
    baptized: false,
    securityQuestion: {
      questionId: null,
      answer: null
    }
  } as IUser;
  const errors: any = [];

  // phone
  if (!data.phone || !checkPhone(data.phone)) {
    errors.push(
      setError('Disculpe, pero debe asegurarse de indicar su número de teléfono.', 'phone')
    );
  } else {
    ret.phone = data.phone;
  }

  // password
  if (!data.password || !checkPassword(data.password)) {
    errors.push(
      setError(
        'Disculpe, pero debe asignar una contraseña. Esta debe contener ' +
          'letras (a-Z, A-Z), números (0-9) y debe contener al menos 6 caracteres.',
        'password'
      )
    );
  } else {
    ret.password = data.password;
  }

  // names
  if (!data.names || !checkNameOrLastName(data.names)) {
    errors.push(setError('Disculpe, pero debe asegurarse de indicar su(s) nombre(s).', 'names'));
  } else {
    ret.names = data.names.toUpperCase();
  }

  // lastNames
  if (!data.lastNames || !checkNameOrLastName(data.lastNames)) {
    errors.push(
      setError('Disculpe, pero debe asegurarse de indicar su(s) apellido(s).', 'lastNames')
    );
  } else {
    ret.lastNames = data.lastNames.toUpperCase();
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
  } else {
    ret.document = data.document.toUpperCase();
  }

  // direction
  if (!data.direction) {
    errors.push(setError('Disculpe, pero debe indicar su dirección.', 'direction'));
  } else {
    ret.direction = data.direction;
  }

  // bloodType
  if (!checkIfValueIsNumber(`${data.bloodType}`)) {
    errors.push(setError('Disculpe, pero debe indicar su tipo de sangre.', 'bloodType'));
  } else {
    ret.bloodType = data.bloodType;
  }

  // questionId
  if (!data.questionId || !checkObjectId(data.questionId)) {
    errors.push(setError('Disculpe, pero seleccionar una pregunta de seguridad.', 'questionId'));
  } else if (!(await checkIfExistQuestion(data.questionId))) {
    errors.push(
      setError('Disculpe, pero la pregunta de seguridad seleccionada es incorrecta.', 'questionId')
    );
  } else ret.securityQuestion.questionId = data.questionId;

  // answer
  if (!data.answer || data.answer.length < 4) {
    errors.push(setError('Disculpe, pero debe indicar una respuesta de seguridad.', 'answer'));
  } else ret.securityQuestion.answer = data.answer.trim();

  // educationLevel
  if (checkIfValueIsNumber(`${data.educationLevel}`)) ret.educationLevel = data.educationLevel;

  // profession
  if (checkIfValueIsNumber(`${data.profession}`)) ret.profession = data.profession;

  // bloodType
  if (checkIfValueIsNumber(`${data.bloodType}`)) ret.bloodType = data.bloodType;

  // baptized
  if (data.baptized) ret.baptized = data.baptized;

  // bloodType
  if (data.company) {
    ret.company = data.company;
    // companyType
    if (!data.companyType || !checkDocument(data.companyType)) {
      errors.push(
        setError('Disculpe, pero debe indicar a qué se dedica su empresa.', 'companyType')
      );
    } else ret.companyType = data.companyType;
  }

  return { data: ret, errors };
}

export async function validateUpdate(
  data: IUserUpdate,
  _id: string
): Promise<{ data: IUser; errors: any }> {
  const ret = {
    phone: null,
    document: null,
    names: null,
    lastNames: null,
    direction: null,
    educationLevel: null,
    profession: null,
    bloodType: null,
    company: false,
    companyType: null,
    baptized: false
  } as IUser;
  const errors: any = [];

  // phone
  if (!data.phone || !checkPhone(data.phone)) {
    errors.push(
      setError('Disculpe, pero debe asegurarse de indicar su número de teléfono.', 'phone')
    );
  } else {
    ret.phone = data.phone;
  }

  // names
  if (!data.names || !checkNameOrLastName(data.names)) {
    errors.push(setError('Disculpe, pero debe asegurarse de indicar su(s) nombre(s).', 'names'));
  } else {
    ret.names = data.names.toUpperCase();
  }

  // lastNames
  if (!data.lastNames || !checkNameOrLastName(data.lastNames)) {
    errors.push(
      setError('Disculpe, pero debe asegurarse de indicar su(s) apellido(s).', 'lastNames')
    );
  } else {
    ret.lastNames = data.lastNames.toUpperCase();
  }

  // document
  if (!data.document || !checkDocument(data.document)) {
    errors.push(
      setError('Disculpe, pero debe asegurarse de indicar su número de documento.', 'document')
    );
  } else if (await checkIfExistDocument(data.document.toUpperCase(), _id)) {
    errors.push(
      setError(
        'Disculpe, pero el número de documento ya se encuentra con otro usuario. Verifíquelo e intente nuevamente.',
        'document'
      )
    );
  } else {
    ret.document = data.document.toUpperCase();
  }

  // direction
  if (!data.direction) {
    errors.push(setError('Disculpe, pero debe indicar su dirección.', 'direction'));
  } else {
    ret.direction = data.direction;
  }

  // bloodType
  if (!checkIfValueIsNumber(`${data.bloodType}`)) {
    errors.push(setError('Disculpe, pero debe indicar su tipo de sangre.', 'bloodType'));
  } else {
    ret.bloodType = data.bloodType;
  }

  // educationLevel
  if (checkIfValueIsNumber(`${data.educationLevel}`)) ret.educationLevel = data.educationLevel;

  // profession
  if (checkIfValueIsNumber(`${data.profession}`)) ret.profession = data.profession;

  // bloodType
  if (data.bloodType) ret.bloodType = data.bloodType;

  // baptized
  if (data.baptized) ret.baptized = data.baptized;

  // bloodType
  if (data.company) {
    ret.company = data.company;

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
    password: null
  } as IUserLogin;
  const errors: any = [];

  // phone
  if (!data.document || !checkDocument(data.document ? data.document.toUpperCase() : '')) {
    errors.push(
      setError('Disculpe, pero debe asegurarse de indicar su número de documento.', 'document')
    );
  } else {
    ret.document = data.document.toUpperCase();
  }

  // password
  if (!data.password || (data.password && data.password.length < 4)) {
    errors.push(setError('Disculpe, pero debe asignar su contraseña correctamente.', 'password'));
  } else {
    ret.password = data.password;
  }

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

export async function validateSecurityQuestion(
  data: IUserSecurityQuestion
): Promise<{ data: IUserSecurityQuestion; errors: any }> {
  const ret = {
    questionId: null,
    answer: null
  } as IUserSecurityQuestion;
  const errors: any = [];

  // questionId
  if (!data.questionId || !checkObjectId(data.questionId)) {
    errors.push(setError('Disculpe, pero seleccionar una pregunta de seguridad.', 'questionId'));
  } else if (!(await checkIfExistQuestion(data.questionId))) {
    errors.push(
      setError('Disculpe, pero la pregunta de seguridad seleccionada es incorrecta.', 'questionId')
    );
  } else ret.questionId = data.questionId;

  // answer
  if (!data.answer || data.answer.length < 4) {
    errors.push(setError('Disculpe, pero debe indicar una respuesta de seguridad.', 'answer'));
  } else ret.answer = data.answer.trim();

  return { data: ret, errors };
}
