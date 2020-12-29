import { Request, Response } from 'express';
import Questions from '../../Models/Question';
import { returnError } from '../../Functions/GlobalFunctions';
import { validateRegister, validateUpdate } from '../../FormRequest/QuestionsRequest';
import Users from '../../Models/Users';
import { checkObjectId } from '../../Functions/Validations';

const path = 'Controllers/admin/question.admin.controller';

export default async function getQuestions(req: Request, res: Response): Promise<Response> {
  try {
    const questions = await Questions.find({}, { __v: 0 }).exec();

    return res.json({
      msg: `Preguntas de seguridad.`,
      questions
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getQuestions`);
  }
}

export async function getDetailsQuestion(req: Request, res: Response): Promise<Response> {
  try {
    const { _id } = req.params;

    if (!checkObjectId(_id)) {
      return res.status(422).json({
        msg: 'Disculpe, pero el ID de la pregunta de seguridad es incorrecto.'
      });
    }

    const question = await Questions.findOne({_id}, { __v: 0 }).exec();

    if (!question) {
      return res.status(404).json({
        msg: 'Disculpe, pero la pregunta de seguridad no existe.'
      });
    }

    return res.json({
      msg: `Detalles de la pregunta de seguridad.`,
      question
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getDetailsQuestion`);
  }
}

export async function saveQuestions(req: Request, res: Response): Promise<Response> {
  try {
    const validate = validateRegister(req.body);

    if (validate.errors.length > 0) {
      return res.status(422).json({
        msg: '¡Error en los parametros!',
        errors: validate.errors
      });
    }

    const question = new Questions(validate.data);
    await question.save();

    return res.status(201).json({
      msg: `Se ha registrado la pregunta de seguridad exitosamente.`,
      question
    });

  } catch (error: any) {
    return returnError(res, error, `${path}/saveQuestions`);
  }
}

export async function updateQuestions(req: Request, res: Response): Promise<Response> {
  try {
    const { _id } = req.params;
    const validate = validateUpdate(req.body, _id);

    if (validate.errors.length > 0) {
      return res.status(422).json({
        msg: '¡Error en los parametros!',
        errors: validate.errors
      });
    }

    const question = await Questions.findOne({_id}, { __v: 0 }).exec();

    if (!question) {
      return res.status(404).json({
        msg: 'La pregunta de seguridad a actualizar no existe.'
      });
    }

    question.question = validate.data.question;
    await question.save();

    return res.json({
      msg: `Se han actualizado la pregunta de seguridad exitosamente.`,
      question
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/updateQuestions`);
  }
}

export async function deleteQuestions(req: Request, res: Response): Promise<Response> {
  try {
    const { _id } = req.params;

    if (!checkObjectId(_id)) {
      return res.status(422).json({
        msg: 'Disculpe, pero el ID de la pregunta de seguridad a eliminar es incorrecto.'
      });
    }

    const question = await Questions.findOne({_id}, { __v: 0 }).exec();

    if (!question) {
      return res.status(404).json({
        msg: 'Disculpe, pero la pregunta de seguridad no existe.'
      });
    }

    // check if questions isn't used for others users.
    const check = await Users.find({ 'securityQuestion.questionId': _id }).countDocuments().exec();

    if (check > 0) {
      return res.status(422).json({
        msg: 'Disculpe, pero no puede eliminar la pregunta de seguridad, debido a que se encuentra en uso por los usuarios.'
      });
    }

    await question.delete();

    return res.json({
      msg: `Se han eliminado la pregunta de seguridad exitosamente.`
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/deleteQuestions`);
  }
}
