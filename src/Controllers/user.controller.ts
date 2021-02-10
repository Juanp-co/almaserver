import _ from 'lodash';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { getNamesUsersList } from '../ActionsData/UsersActions';
import {
  validatePasswords,
  validateSecurityQuestion,
  validateUpdate
} from '../FormRequest/UsersRequest';
import { returnError, returnErrorParams } from '../Functions/GlobalFunctions';
import { forceLogout } from '../Functions/TokenActions';
import { checkObjectId } from '../Functions/Validations';
import { IUserSimpleInfo } from '../Interfaces/IUser';
import Groups from '../Models/Groups';
import Referrals from '../Models/Referrals';
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
      projection: { password: 0, __v: 0, 'securityQuestion.answer': 0, referred: 0 },
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

export async function getGroup(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;

    if (!checkObjectId(userid)) {
      return res.status(401).json({
        msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
      });
    }

    const data = await Groups.findOne({ members: userid }).exec();

    return res.json({
      msg: 'Mi grupo familiar',
      group: !data ?
        null :
        {
          _id: data._id,
          name: data.name,
          code: data.code,
          members: await getNamesUsersList(
            _.uniq(data.members || []),
            { names: 1, lastNames: 1, direction: 1 }
          ),
          created_at: data.created_at,
          updated_at: data.updated_at,
        }
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getGroup`);
  }
}

export async function getReferrals(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;
    let referrals: IUserSimpleInfo[] = [];

    if (!checkObjectId(userid)) {
      return res.status(401).json({
        msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
      });
    }

    const data = await Referrals.findOne({ _id: userid }, { members: 1 }).exec();

    if (data) referrals = await getNamesUsersList(data.members);

    return res.json({
      msg: `Mis referidos.`,
      referrals
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getReferrals`);
  }
}
