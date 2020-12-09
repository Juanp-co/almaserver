import { Request, Response } from 'express';
import Questions from '../../Models/Question';
import { returnError } from '../../Functions/GlobalFunctions';

const path = 'Controllers/admin/question.controller';

export async function getQuestions(req: Request, res: Response): Promise<Response> {
  try {
    const questions = await Questions.find({}, { __v: 0 }).exec();

    return res.status(200).json({
      msg: `Preguntas de seguridad.`,
      questions
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getQuestions`);
  }
}

export async function saveQuestions(req: Request, res: Response): Promise<Response> {
  try {
    // const { data } = req.body;
    // await Questions.insertMany(data);

    return res.status(200).json({
      msg: `Se han guardado las preguntas de seguridad exitosamente.`
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/saveQuestions`);
  }
}
