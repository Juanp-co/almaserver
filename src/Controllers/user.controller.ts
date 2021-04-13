import _ from 'lodash';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import moment from 'moment-timezone';
import { getInfoUserReferred, getNamesUsersList } from '../ActionsData/UsersActions';
import { returnError, returnErrorParams } from '../Functions/GlobalFunctions';
import { forceLogout } from '../Functions/TokenActions';
import {
  validatePasswords,
  validateUpdate
} from '../FormRequest/UsersRequest';
import { checkDate, checkObjectId } from '../Functions/Validations';
import Courses from '../Models/Courses';
import CoursesUsers from '../Models/CoursesUsers';
import Groups from '../Models/Groups';
import Users from '../Models/Users';
import Referrals from '../Models/Referrals';
import Consolidates from '../Models/Consolidates';

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

    const user = await Users.findOne(
      { _id: userid },
      {
        password: 0,
        role: 0,
        referred: 0,
        __v: 0,
      }
    ).exec();

    // logout
    if (!user) return forceLogout(res, `${req.query.token}`);

    const validate = await validateUpdate(req.body, userid);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    user.phone = validate.data.phone || user.phone;
    user.names = validate.data.names || user.names;
    user.lastNames = validate.data.lastNames || user.lastNames;
    user.email = validate.data.email;
    user.birthday = validate.data.birthday;
    user.gender = validate.data.gender !== null ? validate.data.gender : user.gender;
    user.civilStatus = validate.data.civilStatus !== null ? validate.data.civilStatus : user.civilStatus;
    user.educationLevel = validate.data.educationLevel !== null ? validate.data.educationLevel : user.educationLevel;
    user.profession = validate.data.profession !== null ? validate.data.profession : user.profession;
    user.bloodType = validate.data.bloodType !== null ? validate.data.bloodType : user.bloodType;
    user.company = validate.data.company !== null ? validate.data.company : user.company;
    user.companyType = validate.data.companyType !== null ? validate.data.companyType : user.companyType;
    user.baptized = validate.data.baptized || user.baptized;
    user.department = validate.data.department !== null ? validate.data.department : user.department;
    user.city = validate.data.city !== null ? validate.data.city : user.city;
    user.locality = validate.data.locality || user.locality;
    user.direction = validate.data.direction || user.direction;

    await user.save();

    return res.json({
      msg: 'Se ha actualizado la información exitosamente.',
      data: user
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
    const courses: any[] = [];

    if (!checkObjectId(userid)) {
      return res.status(401).json({
        msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
      });
    }

    const myCourses = await CoursesUsers.findOne({ userid }, { 'courses.courseId': 1, 'courses.approved': 1 }).exec();

    if (myCourses) {
      const listIds = myCourses.courses.length > 0 ? myCourses.courses.map(c => c.courseId) : [];
      if (listIds.length > 0) {
        const listCourses = await Courses.find(
          { _id: { $in: listIds || [] } },
          { _id: 1, title: 1, slug: 1, description: 1, enable: 1, level: 1 }
        ).exec();

        for (const course of listCourses) {
          const index = myCourses.courses.findIndex(c => c.courseId === course._id.toString());
          courses.push({
            _id: course._id,
            // banner: course.banner,
            slug: course.slug,
            title: course.title,
            description: course.description,
            level: course.level,
            approved: myCourses.courses[index] ? (myCourses.courses[index].approved || false) : false
          });
        }
      }
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

    const ret = await getInfoUserReferred(memberId);

    if (!ret.member) {
      return res.status(404).json({
        msg: 'Disculpe, pero no se logró encontrar la información solicitada.'
      });
    }

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
    const query2: any = {};
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
      visits: {
        title: 'Visitas',
        data: [
          { label: 'Pendientes', qty: 0 },
          { label: 'Realizadas', qty: 0 }
        ],
        qty: 0,
      },
    };

    if (initDate && checkDate(initDate)) {
      query['courses.created_at'] = { $gte: moment(`${initDate}`).startOf('d').unix() };
      queryReferrals.updated_at = { $gte: moment(`${initDate}`).startOf('d').unix() };
      query2.date = { $gte: moment(`${initDate}`).startOf('d').unix() };
      if (checkDate(endDate)) {
        query['courses.created_at'].$lt = moment(`${endDate}`).endOf('d').unix();
        queryReferrals.updated_at.$lt = moment(`${endDate}`).endOf('d').unix();
        query2.date.$lt = moment(`${endDate}`).endOf('d').unix();;
      }
    }

    const { userid } = req.params;

    if (!checkObjectId(userid)) {
      return res.status(401).json({
        msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
      });
    }

    const myCourses = await CoursesUsers.findOne({ userid, ...query }, { courses: 1 }).exec();
    const myReferrals = await Referrals.findOne({ _id: userid, ...queryReferrals }, { members: 1 }).exec();
    const visits = await Consolidates.find({ consolidatorId: userid, ...query2 }, { date: 1 }).exec();

    if (myCourses) {
      ret.courses.qty = myCourses.courses.length;
      for (const c of myCourses.courses) {
        if (c.approved) ret.courses.data[0].qty += 1;
        else ret.courses.data[1].qty += 1;
      }
    }

    if (myReferrals) {
      ret.referrals.qty = myReferrals.members.length;

      if (ret.referrals.qty > 0) {
        const members = await Referrals.find({ _id: { $in: myReferrals.members } }, { members: 1 }).exec();
        const users = await Users.find({ _id: { $in: myReferrals.members } }, { names: 1, lastNames: 1 }).exec();

        if (members.length > 0) {
          let listsMembersDetails: any = []; // generate a new array data
          let listIdsPending: any = []; // generate a new array data
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

            // VISITS

            // add to list for the next check
            const index = visits.findIndex(v => v.userid === m._id.toString());

            // check last visit and add or remove id from list
            if (index > -1) {
              if (moment().diff(moment(`${visits[index].date}`, 'YYYY-MM-DD', true), 'months') >= 1) {
                if (!listIdsPending.includes(m._id.toString())) listIdsPending.push(m._id.toString());
              }
              else listIdsPending = listIdsPending.filter((lip: string) => lip !== m._id.toString());
            }
            else if (!listIdsPending.includes(m._id.toString())) listIdsPending.push(m._id.toString());
          }

          if (listsMembersDetails.length > 0) {
            ret.referrals.data.push(listsMembersDetails);
          }

          if (listIdsPending.length > 0) {
            ret.visits.data[1].qty = listIdsPending.length;
            ret.visits.data[0].qty = visits.length;
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
