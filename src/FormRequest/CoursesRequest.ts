import { setError } from '../Functions/GlobalFunctions';
import {checkIfValueIsNumber,
  checkInputTypeValueToTest, checkNameOrLastName,
  checkTitlesOrDescriptions,
  checkYoutubeUrl
} from '../Functions/Validations';
import { ICourseForm } from '../Interfaces/ICourse';
import { checkIfExistCode } from '../ActionsData/CoursesActions';

export default async function validateRegister(data: ICourseForm, update: boolean): Promise<{ data: ICourseForm; errors: any }> {
  const ret = {
    speaker: null,
    speakerPosition: null,
    code: null,
    title: null,
    description: null,
    temary: [],
    test: [],
    toRoles: [],
    enable: false,
    draft: true,
  } as ICourseForm;
  const errors: any = [];

  // title
  if (!data.title || !checkTitlesOrDescriptions(data.title)) {
    errors.push(
      setError('Disculpe, pero indicar un título generar para el curso.', 'title')
    );
  } else {
    ret.title = data.title ? data.title.toString().trim().toUpperCase() : data.title;
  }

  // description
  if (!data.description || !checkTitlesOrDescriptions(data.description)) {
    errors.push(
      setError('Disculpe, pero indicar una descripción general para el curso.', 'description')
    );
  } else {
    ret.description = data.description ? data.description.toString().trim() : data.description;
  }

  // speaker
  if (!data.speaker || !checkNameOrLastName(data.speaker)) {
    errors.push(
      setError('Disculpe, pero indicar el nombre completo del orador del curso.', 'speaker')
    );
  } else {
    ret.speaker = data.speaker ? data.speaker.toString().trim() : data.speaker;
  }

  // speakerPosition
  if (!checkIfValueIsNumber(data.speakerPosition)) {
    errors.push(
      setError('Disculpe, pero indicar el cargo o posición del orador del curso.', 'speakerPosition')
    );
  } else {
    ret.speakerPosition = data.speakerPosition;
  }

  // code
  if (!checkTitlesOrDescriptions(data.code)) {
    errors.push(
      setError('Disculpe, pero debe indicar el código para identificar el curso.', 'code')
    );
  }
  else if (!update && (await checkIfExistCode(`${data.code}`))) {
    errors.push(
      setError('Disculpe, pero el código indicado ya se encuentra registrado.', 'code')
    );
  } else {
    ret.code = data.code;
  }

  // draft
  if (data.draft) {
    ret.draft = data.draft;

    if (!data.temary || typeof data.temary !== 'object' || data.temary.length === 0) {
      errors.push(
        setError('Disculpe, pero indicar el temario del curso.', 'temary')
      );
    }
    if (!data.test || typeof data.test !== 'object' || data.test.length === 0) {
      errors.push(
        setError('Disculpe, pero indicar las preguntas para la prueba de este curso.', 'test')
      );
    }
  }

  // temary
  if (data.temary.length > 0) {
    const {temary} = data;
    const totalsTemary = temary.length;
    let error = false;

    for (let i = 0; i < totalsTemary; i++) {
      if (!checkTitlesOrDescriptions(temary[i].title)) {
        errors.push(
          setError('Disculpe, pero todos los temas deben contener un título.', 'temary.title')
        );
        error = true;
      }
      if (!checkTitlesOrDescriptions(temary[i].description)) {
        errors.push(
          setError('Disculpe, pero todos los temas deben contener una descripción.', 'temary.description')
        );
        error = true;
      }
      if (!checkYoutubeUrl(temary[i].urlVideo)) {
        errors.push(
          setError('Disculpe, pero las URL permitidas para los videos deben pertenecer a Youtube.', 'temary.urlVideo')
        );
        error = true;
      }

      if (error) break;
      else ret.temary.push({
        title: temary[i].title ? temary[i].title?.toString().trim() : null,
        description: temary[i].description ? temary[i].description?.toString().trim() : null,
        urlVideo: temary[i].urlVideo ? temary[i].urlVideo?.toString().trim() : null,
        comments: []
      });
    }
  }

  // test
  if (data.test.length > 0) {
    const {test} = data;
    const totalsTemary = test.length;
    let error = false;

    for (let i = 0; i < totalsTemary; i++) {
      if (!checkTitlesOrDescriptions(test[i].title)) {
        errors.push(
          setError('Disculpe, pero todas las preguntas para la prueba deben contener un título.', 'test.title')
        );
        error = true;
      }
      if (!checkTitlesOrDescriptions(test[i].description)) {
        errors.push(
          setError('Disculpe, pero todas las preguntas para la prueba deben contener una descripción.', 'test.description')
        );
        error = true;
      }
      if (!checkInputTypeValueToTest(test[i].inputType)) {
        errors.push(
          setError('Disculpe, todas las preguntas deben contener un tipo de campo para los formularios.', 'test.inputType')
        );
        error = true;
      }

      if (['select', 'radio', 'checkbox'].indexOf(`${test[i].inputType}`) > -1) {
        if (['select', 'radio', 'checkbox'].indexOf(`${test[i].inputType}`) > -1 && test[i].values && test[i].values.length === 0) {
          errors.push(
            setError('Disculpe, pero debe indicar los valores para los campos la prueba.', 'test.values')
          );
          error = true;
        }
        if (!/[0-9]{1,2}/.test(`${test[i].correctAnswer}`)) {
          errors.push(
            setError('Disculpe, pero las preguntas que contengan un tipo de campo \'Lista, Checkbox o Radio\' deben contener una respuesta.', 'test.correctAnswer')
          );
          error = true;
        }
        else if (test[i].values.length > 0 && !!test[i].values[test[i].correctAnswer || -1]) {
          errors.push(
            setError('Disculpe, pero la respuesta para una de las pregunta no coindiden con opciones indicadas.', 'test.values')
          );
          error = true;
        }
      }

      if (error) break;
      else ret.test.push({
        title: test[i].title || null,
        description: test[i].description || null,
        placeholder: test[i].placeholder || null,
        extra: test[i].extra || null,
        inputType: test[i].inputType ? test[i].inputType.toString().toLowerCase() : test[i].inputType,
        values: test[i].values || [],
        require: test[i].require || false,
        correctAnswer: test[i].correctAnswer,
      });
    }
  }

  // toRoles
  if (!data.toRoles || typeof data.toRoles !== 'object' || data.toRoles.length === 0) {
    errors.push(
      setError('Disculpe, pero debe seleccionar los roles a los que será dirigido el curso.', 'toRoles')
    );
  } else {
    ret.toRoles = data.toRoles;
  }

  return { data: ret, errors };
}
