import { checkObjectId, checkTitlesOrDescriptions } from '../Functions/Validations';
import { setError } from '../Functions/GlobalFunctions';
import { IQuestionRegister, IQuestionUpdate } from '../Interfaces/IQuestion';

export function validateRegister(data: IQuestionRegister): { data: IQuestionRegister; errors: any }  {

  const ret = {
    question: null
  } as IQuestionRegister;
  const errors: any = [];

  if (!checkTitlesOrDescriptions(data.question)) {
    errors.push(
      setError('Disculpe, pero debe indicar la pregunta.', 'question')
    )
  }
  else {
    ret.question = data.question ? data.question.trim() : '';
  }

  return { data: ret, errors }
}

export function validateUpdate(data: IQuestionUpdate, _id: string|null|undefined): { data: IQuestionUpdate; errors: any }  {
  const ret = {
    _id: null,
    question: null
  } as IQuestionUpdate;
  const errors: any = [];

  if (!checkObjectId(_id)) {
    errors.push(
      setError('Disculpe, pero el ID de la pregunta de seguridad es incorrecto.', '_id')
    )
  }
  else {
    ret._id = `${_id}`;
  }

  if (!checkTitlesOrDescriptions(data.question)) {
    errors.push(
      setError('Disculpe, pero debe indicar la pregunta.', 'question')
    )
  }
  else {
    ret.question = data.question ? data.question.trim() : '';
  }

  return { data: ret, errors }
}
