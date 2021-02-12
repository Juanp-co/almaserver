import _ from 'lodash';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import {
  validatePasswords,
  validateSecurityQuestion,
  validateUpdate
} from '../FormRequest/UsersRequest';
import { returnError, returnErrorParams } from '../Functions/GlobalFunctions';
import { forceLogout } from '../Functions/TokenActions';
import { checkObjectId } from '../Functions/Validations';
import Users from '../Models/Users';
import CoursesUsers from '../Models/CoursesUsers';
import Courses from '../Models/Courses';
import { ICourseSimpleList } from '../Interfaces/ICourse';

const path = 'Controllers/user.controller';

export async function get(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;
    const user = await Users.findOne(
      { _id: userid },
      { __v: 0, password: 0, 'securityQuestion.answer': 0, referred: 0 }
    ).exec();

    // logout
    if (!user) return forceLogout(res, `${req.query.token}`);

    return res.json({
      msg: 'Datos de la sesión',
      data: user
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/get`);
  }
}

export async function update(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;

    const user = await Users.findOne({ _id: userid }, { _id: 1 }).exec();

    // logout
    if (!user) return forceLogout(res, `${req.query.token}`);

    const validate = await validateUpdate(req.body, userid);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const updated = await Users.findByIdAndUpdate(userid, validate.data, {
      projection: {
        document: 0,
        password: 0,
        __v: 0,
        securityQuestion: 0,
        created_at: 0,
        updated_at: 0,
        role: 0,
        referred: 0,
      },
      new: true
    });

    return res.json({
      msg: 'Se ha actualizado la información exitosamente.',
      data: updated
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/update`);
  }
}

export async function changePassword(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;

    const user = await Users.findOne({ _id: userid }, { password: 1 }).exec();

    // logout
    if (!user) return forceLogout(res, `${req.query.token}`);

    const validate = await validatePasswords(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    if (!bcrypt.compareSync(validate.data.password, `${user.password}`)) {
      return res.status(422).json({
        msg: 'Disculpe, pero la contraseña actual es incorrecta.'
      });
    }

    user.password = bcrypt.hashSync(validate.data.newPassword, 10);
    await user.save();

    return res.json({
      msg: 'Se ha actualizado su contraseña exitosamente.'
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/changePassword`);
  }
}

export async function changeSecurityQuestion(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;

    const user = await Users.findOne({ _id: userid }, { securityQuestion: 1 }).exec();

    // logout
    if (!user) return forceLogout(res, `${req.query.token}`);

    const validate = await validateSecurityQuestion(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    user.securityQuestion.questionId = validate.data.questionId;
    user.securityQuestion.answer = bcrypt.hashSync(validate.data.answer, 10);
    await user.save();

    return res.json({
      msg: 'Se ha actualizado los datos de seguridad exitosamente.'
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/changeSecurityQuestion`);
  }
}

/*
  COURSES, GROUP & REFERRALS
 */

export async function getCourses(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;
    let courses: ICourseSimpleList[] = [];

    if (!checkObjectId(userid)) {
      return res.status(401).json({
        msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
      });
    }

    const myCourses = await CoursesUsers.find({ userid }, { courseId: 1 }).exec();

    if (myCourses.length > 0) {
      courses = await Courses.find(
        { _id: { $in: _.map(myCourses, 'courseId') || [] } },
        { _id: 1, title: 1, banner: 1, slug: 1, description: 1 }
      ).exec() as ICourseSimpleList[];
    }

    return res.json({
      msg: `Mis cursos.`,
      courses
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getCourses`);
  }
}
