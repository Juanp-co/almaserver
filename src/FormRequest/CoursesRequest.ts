import { setError } from '../Functions/GlobalFunctions';
import {
  checkBase64,
  checkIfValueIsNumber,
  checkNameOrLastName, checkObjectId,
  checkTitlesOrDescriptions
} from '../Functions/Validations';
import {
  ICourseBannerUpdateForm,
  ICourseContentThemeUpdateForm,
  ICourseInfoUpdateForm, ICourseLevelsForm, ICourseQuestionUpdateForm,
  ICourseSimpleRegisterForm,
  ICourseTestForm, ICourseThemeUpdateForm
} from '../Interfaces/ICourse';

export default function validateSimpleRegister(data: ICourseSimpleRegisterForm): { data: ICourseSimpleRegisterForm; errors: any[] } {
  const ret = {
    code: null,
    slug: null,
    title: null,
    banner: null,
    description: null,
    toRoles: [],
  } as ICourseSimpleRegisterForm;
  const errors: any = [];

  // title
  if (!data.title || !checkTitlesOrDescriptions(data.title)) {
    errors.push(
      setError('Disculpe, pero indicar un título válido para el curso.', 'title')
    );
  } else {
    ret.title = data.title ? data.title.toString().trim().toUpperCase() : data.title;
  }

  // description
  if (!data.description || !checkTitlesOrDescriptions(data.description)) {
    errors.push(
      setError('Disculpe, pero indicar una descripción válida para el curso.', 'description')
    );
  } else {
    ret.description = data.description;
  }

  // toRoles
  if (!data.toRoles || typeof data.toRoles !== 'object' || (data.toRoles && data.toRoles.length === 0)) {
    errors.push(
      setError('Disculpe, pero los roles a los que va digido el curso.', 'toRoles')
    );
  } else {
    ret.toRoles = data.toRoles;
  }

  // banner
  if (!checkBase64(`${data.banner}`)) {
    errors.push(
      setError('Disculpe, pero indicar una imagen para el curso.', 'banner')
    );
  }
  else ret.banner = data.banner ? data.banner.toString().trim() : null;

  return { data: ret, errors };
}

export function validateBannerUpdate(data: ICourseBannerUpdateForm): { data: ICourseBannerUpdateForm; errors: any[] } {
  const ret = {
    banner: null,
  } as ICourseBannerUpdateForm;
  const errors: any = [];
  // banner
  if (!checkBase64(data.banner)) {
    errors.push(
      setError('Disculpe, pero la imagen seleccionada es incorrecta.', 'banner')
    );
  }
  else ret.banner = data.banner;

  return { data: ret, errors };
}

export function validateContentThemeUpdate(data: ICourseContentThemeUpdateForm): { data: ICourseContentThemeUpdateForm; errors: any[] } {
  const ret = {
    title: null,
    description: null,
    urlVideo: null,
  } as ICourseContentThemeUpdateForm;
  const errors: any = [];

  // title
  if (!data.title || !checkTitlesOrDescriptions(data.title)) {
    errors.push(
      setError('Disculpe, pero indicar un título válido para el contenido.', 'title')
    );
  } else {
    ret.title = data.title ? data.title.toString().trim().toUpperCase() : data.title;
  }

  if (!data.description && !data.urlVideo) {
    errors.push(
      setError('Disculpe, pero debe indicar una descripción o un video para el contenido.', 'description')
    );
  }

  // description
  if (data.description) ret.description = data.description;

  // urlVideo
  if (data.urlVideo) ret.urlVideo = data.urlVideo;

  return { data: ret, errors };
}

export function validateInfoUpdate(data: ICourseInfoUpdateForm): { data: ICourseInfoUpdateForm; errors: any[] } {
  const ret = {
    title: null,
    description: null,
    speaker: null,
    speakerPosition: null,
    toRoles: [],
  } as ICourseInfoUpdateForm;
  const errors: any = [];

  // title
  if (!data.title || !checkTitlesOrDescriptions(data.title)) {
    errors.push(
      setError('Disculpe, pero indicar un título válido para el curso.', 'title')
    );
  } else {
    ret.title = data.title ? data.title.toString().trim().toUpperCase() : data.title;
  }

  // description
  if (!data.description || !checkTitlesOrDescriptions(data.description)) {
    errors.push(
      setError('Disculpe, pero indicar una descripción válida para el curso.', 'description')
    );
  } else {
    ret.description = data.description;
  }

  // speaker
  if (!data.speaker || !checkNameOrLastName(data.speaker)) {
    errors.push(
      setError('Disculpe, pero indicar el nombre del ponenete.', 'speaker')
    );
  } else {
    ret.speaker = data.speaker ? data.speaker.toString().trim().toUpperCase() : data.speaker;
  }

  // speakerPosition
  if (!data.speakerPosition || !checkTitlesOrDescriptions(data.speakerPosition)) {
    errors.push(
      setError('Disculpe, pero indicar el cargo del ponente.', 'speakerPosition')
    );
  } else {
    ret.speakerPosition = data.speakerPosition ? data.speakerPosition.toString().trim().toUpperCase() : data.speakerPosition;
  }

  // toRoles
  if (!data.toRoles || typeof data.toRoles !== 'object' || (data.toRoles && data.toRoles.length === 0)) {
    errors.push(
      setError('Disculpe, pero los roles a los que va digido el curso.', 'toRoles')
    );
  } else {
    ret.toRoles = data.toRoles;
  }

  return { data: ret, errors };
}

export function validateLevelsData(data?: ICourseLevelsForm | null) : { data: string[], errors: any[] } {
  const ret: string[] = [];
  const errors: any = [];

  if (!data || !data.listIds || (data && data.listIds && data.listIds.length === 0)) {
    errors.push({
      msg: 'Disculpe, pero no se logró recibir la información.',
      input: 'listIds'
    });
  }
  else {
    const { listIds } = data;
    const totalItems = listIds ?listIds.length : 0;

    for (let i = 0; i < totalItems; i++) {
      if (!checkObjectId(listIds[i])) {
        errors.push({
          msg: 'Disculpe, pero alguno de los cursos seleccionados es incorrecto.',
          input: 'levelId'
        });
        break;
      }
      ret.push(listIds[i]);
    }

  }

  return { data: ret, errors }
}

export function validateQuestionTestUpdate(data: ICourseQuestionUpdateForm): { data: ICourseQuestionUpdateForm; errors: any[] } {
  const ret = {
    title: null,
    description: null,
    placeholder: null,
    inputType: '',
    require: true,
    values: [],
    correctAnswer: null,
  } as ICourseQuestionUpdateForm;
  const errors: any = [];

  // title
  if (!checkTitlesOrDescriptions(data.title)) {
    errors.push(
      setError('Disculpe, pero indicar un título válido para el pregunta.', 'title')
    );
  }
  else ret.title = data.title ? data.title.toString().trim().toUpperCase() : data.title;

  // inputType
  if (!data.inputType || (data.inputType && ['radio', 'checkbox', 'text', 'textarea'].indexOf(`${data.inputType}`) === -1)) {
    errors.push(
      setError('Disculpe, pero debe seleccionar un tipo de campo válido para la pregunta.', 'inputType')
    );
  }
  else ret.inputType = data.inputType;

  // check values in case inputType = 'radio' | 'select'
  if (data.inputType && ['radio', 'checkbox'].indexOf(`${data.inputType}`) > -1) {
    // values
    if (!data.values || typeof data.values !== 'object') {
      errors.push(
        setError('Disculpe, pero las respuestas indicadas no son correctas.', 'values')
      );
    }
    else if (data.values && data.values.length === 0) {
      errors.push(
        setError('Disculpe, pero debe indicar las opciones de respuestas para la pregunta.', 'values')
      );
    }
    else ret.values = data.values;

    // correctAnswer
    if (!checkIfValueIsNumber(`${data.correctAnswer}`)) {
      errors.push(
        setError('Disculpe, pero debe indicar la respuesta correcta.', 'correctAnswer')
      );
    }
    else ret.correctAnswer = data.correctAnswer;
  }

  // description
  if (data.description) ret.description = data.description;

  // placeholder
  if (data.placeholder) ret.placeholder = data.placeholder;

  // require
  if (data.require !== null || data.require !== undefined && typeof data.require === 'boolean') ret.require = data.require;

  return { data: ret, errors };
}

export function validateThemeUpdate(data: ICourseThemeUpdateForm): { data: ICourseThemeUpdateForm; errors: any[] } {
  const ret = {
    title: null,
    description: null
  } as ICourseThemeUpdateForm;
  const errors: any = [];

  // title
  if (!data.title || !checkTitlesOrDescriptions(data.title)) {
    errors.push(
      setError('Disculpe, pero indicar un título válido para el tema.', 'title')
    );
  } else {
    ret.title = data.title ? data.title.toString().trim().toUpperCase() : data.title;
  }

  // description
  if (data.description) ret.description = data.description;

  return { data: ret, errors };
}

export function validateTestData(data?: ICourseTestForm[] | null) : { data: ICourseTestForm[], errors: any[] } {
  const ret: ICourseTestForm[] = [];
  const errors: any = [];

  if (!data || data === undefined || data === null) {
    errors.push({
      msg: 'Disculpe, pero no se logró recibir la información de la prueba.',
      input: 'data'
    });
  }
  else {
    const totalItems = data ? data.length : 0;

    for (let i = 0; i < totalItems; i++) {

      let stop = false;

      if (!checkObjectId(data[i].questionId)) {
        errors.push({
          msg: 'Disculpe, pero una de las preguntas de la prueba es incorrecta.',
          input: 'questionId'
        });
        stop = true;
      }
      if (data[i].answer === undefined) {
        errors.push({
          msg: 'Disculpe, pero debe completar todas las respuesta de la prueba.',
          input: 'answer'
        });
        stop = true;
      }

      if (stop) break;
      else ret.push(data[i]);
    }

  }

  return { data: ret, errors }
}
