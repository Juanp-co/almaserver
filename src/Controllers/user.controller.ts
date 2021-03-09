import _ from 'lodash';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import moment from 'moment-timezone';
import { getNamesUsersList } from '../ActionsData/UsersActions';
import { returnError, returnErrorParams } from '../Functions/GlobalFunctions';
import { forceLogout } from '../Functions/TokenActions';
import {
  validatePasswords,
  validateUpdate
} from '../FormRequest/UsersRequest';
import { checkObjectId } from '../Functions/Validations';
import { ICourseReference } from '../Interfaces/ICourse';
import Courses from '../Models/Courses';
import CoursesUsers from '../Models/CoursesUsers';
import Groups from '../Models/Groups';
import Users from '../Models/Users';
import Referrals from '../Models/Referrals';

const path = 'Controllers/user.controller';

export async function get(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;
    const user = await Users.findOne(
      { _id: userid },
      { __v: 0, password: 0, referred: 0 }
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

    const user = await Users.findOne({ _id: userid }, { _id: 1, document: 1 }).exec();

    // logout
    if (!user) return forceLogout(res, `${req.query.token}`);

    const validate = await validateUpdate(req.body, userid);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    if (!validate.data.document) validate.data.document = user.document;

    const updated = await Users.findByIdAndUpdate(userid, validate.data, {
      projection: {
        document: 0,
        password: 0,
        __v: 0,
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

/*
  COURSES, GROUP & REFERRALS
 */

export async function getCourses(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;
    let courses: ICourseReference[] = [];

    if (!checkObjectId(userid)) {
      return res.status(401).json({
        msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
      });
    }

    const myCourses = await CoursesUsers.find({ userid }, { courseId: 1 }).exec();

    if (myCourses.length > 0) {
      courses = await Courses.find(
        { _id: { $in: _.map(myCourses, 'courseId') || [] } },
        { _id: 1, title: 1, banner: 1, slug: 1, description: 1, enable: 1 }
      ).exec() as ICourseReference[];
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
    let group: any = null;

    if (!checkObjectId(userid)) {
      return res.status(401).json({
        msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
      });
    }

    const user = await Users.findOne({ _id: userid }, { group: 1 }).exec();

    if (!user) {
      return res.status(401).json({
        msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
      });
    }

    if (user.group) {
      const data = await Groups.findOne({ _id: user.group }).exec();

      if (data) {
        group = {
          _id: data._id,
          name: data.name,
          code: data.code,
          members: await getNamesUsersList(
            _.uniq(data.members || [])
          ),
          created_at: data.created_at,
          updated_at: data.updated_at,
        }
      }

    }

    return res.json({
      msg: 'Mi grupo familiar',
      group
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getGroup`);
  }
}

export async function getMemberGroup(req: Request, res: Response): Promise<Response> {
  try {
    const { userid, memberId } = req.params;
    const ret: any = {
      member: null,
      totalReferrals: 0,
      totalCourses: 0
    };

    if (!checkObjectId(userid)) {
      return res.status(401).json({
        msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
      });
    }

    if (!checkObjectId(memberId)) {
      return res.status(422).json({
        msg: 'Disculpe, pero el miembro seleccionado es incorrecto.'
      });
    }

    const user = await Users.findOne({ _id: userid }, { group: 1 }).exec();

    if (!user) {
      return res.status(401).json({
        msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
      });
    }

    if (!user.group) {
      return res.status(404).json({
        msg: 'Disculpe, pero usted no pertenece a ningún grupo familiar.'
      });
    }

    const data = await Groups.findOne({ _id: user.group }, { members: 1 }).exec();

    if (!data) {
      return res.status(404).json({
        msg: 'Disculpe, pero el grupo familiar no existe.'
      });
    }

    if (!data.members.includes(memberId)) {
      return res.status(403).json({
        msg: 'Disculpe, pero el miembro seleccionado no pertenece a su grupo familiar.'
      });
    }

    ret.member = await Users.findOne(
      { _id: memberId },
      {
        names: 1,
        lastNames: 1,
        phone: 1,
        email: 1,
        gender: 1,
        civilStatus: 1,
        department: 1,
        city: 1,
        locality: 1 ,
        direction: 1,
      }
    ).exec();

    if (!ret.member) {
      return res.status(404).json({
        msg: 'Disculpe, pero no se logró encontrar la información solicitada.'
      });
    }

    // get totals members referrals
    const referrals = await Referrals.findOne({ _id: ret.member._id }).exec();

    if (referrals) ret.totalReferrals = referrals.members.length || 0;

    // get totals courses
    ret.totalCourses = await CoursesUsers.find({ userid: ret.member._id.toString() }).countDocuments().exec();

    return res.json({
      msg: `Miembro.`,
      data: ret
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getMemberGroup`);
  }
}

/*
  REPORTS
 */

export async function getReports(req: Request, res: Response): Promise<Response> {
  try {
    const { initDate, endDate } = req.query;
    const query: any = {};
    const queryReferrals: any = {};
    const ret: any = {
      courses: {
        title: 'Mis cursos',
        data: [
          { label: 'Aprobados', qty: 0 },
          { label: 'Cursando', qty: 0 }
        ],
        qty: 0,
      },
      referrals: {
        title: 'Hijos espirituales',
        data: [],
        qty: 0,
      },
    };

    if (initDate) {
      query.created_at = { $gte: moment(`${initDate}`).startOf('d').unix() };
      queryReferrals.updated_at = { $gte: moment(`${initDate}`).startOf('d').unix() };
    }
    if (endDate) {
      query.created_at.$lt = moment(`${endDate}`).endOf('d').unix();
      queryReferrals.updated_at.$lt = moment(`${endDate}`).endOf('d').unix();
    }

    const { userid } = req.params;

    if (!checkObjectId(userid)) {
      return res.status(401).json({
        msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
      });
    }

    const myCourses = await CoursesUsers.find({ userid, ...query }, { approved: 1 }).exec();
    const myReferrals = await Referrals.findOne({ _id: userid, ...queryReferrals }, { members: 1 }).exec();

    if (myCourses.length > 0) {
      ret.courses.qty = myCourses.length;
      for (const c of myCourses) {
        if (c.approved) ret.courses.data[0].qty += 1;
        else ret.courses.data[0].qty += 1;
      }
    }

    if (myReferrals) {
      ret.referrals.qty = myReferrals.members.length;

      if (ret.referrals.qty > 0) {
        const members = await Referrals.find({ _id: { $in: myReferrals.members } }, { members: 1 }).exec();
        const users = await Users.find({ _id: { $in: myReferrals.members } }, { names: 1, lastNames: 1 }).exec();

        if (members.length > 0) {
          let listsMembersDetails: any = []; // generate a new array data
          let limit = 0;

          for (const m of members) {
            const data: any = {
              label: null,
              qty: null
            };

            // get names and lastNames
            const dataUser = users.find(u => u._id.toString() === m._id.toString());

            if (dataUser) {
              data.label = `${dataUser.names} ${dataUser.lastNames}`;
              data.qty = m.members.length;
              listsMembersDetails.push(data);
              limit += 1;
            }

            if (limit === 3) {
              ret.referrals.data.push(listsMembersDetails);
              listsMembersDetails = [];
              limit = 0;
            }
          }

          if (listsMembersDetails.length > 0) {
            ret.referrals.data.push(listsMembersDetails);
          }
        }
      }
    }

    return res.json({
      msg: `Mis reportes.`,
      reports: ret
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getReports`);
  }
}
