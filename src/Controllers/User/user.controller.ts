import _ from 'lodash';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import moment from 'moment-timezone';
import { getInfoUserReferred, getNamesUsersList } from '../../ActionsData/UsersActions';
import { returnError, returnErrorParams } from '../../Functions/GlobalFunctions';
import { forceLogout } from '../../Functions/TokenActions';
import {
  validatePasswords,
  validateUpdate, validateUpdatePictureProfile
} from '../../FormRequest/UsersRequest';
import { checkDate, checkObjectId, checkUrl, isBase64 } from '../../Functions/Validations';
import Courses from '../../Models/Courses';
import CoursesUsers from '../../Models/CoursesUsers';
import Groups from '../../Models/Groups';
import Referrals from '../../Models/Referrals';
import Users from '../../Models/Users';
import Visits from '../../Models/Visits';
import uploadFile, { deleteFile } from '../../Services/AWSService';
import { return404Or422 } from '../../ActionsData/EventsActions';

const path = 'Controllers/User/user.controller';

export async function get(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenId } = req.body;
    const user = await Users.findOne(
      { _id: tokenId },
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
    const { tokenId } = req.body;

    const user = await Users.findOne(
      { _id: tokenId },
      {
        password: 0,
        role: 0,
        referred: 0,
        __v: 0,
      }
    ).exec();

    // logout
    if (!user) return forceLogout(res, `${req.query.token}`);

    const validate = await validateUpdate(req.body, tokenId);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    user.phone = validate.data.phone || user.phone;
    user.names = validate.data.names || user.names;
    user.lastNames = validate.data.lastNames || user.lastNames;
    user.document = validate.data.document || null;
    user.email = validate.data.email || null;
    user.birthday = validate.data.birthday || null;
    user.position = validate.data.position !== null ? validate.data.position : (user.position || null);
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
    user.meetingNew = validate.data.meetingNew;

    await user.save();

    return res.json({
      msg: 'Se ha actualizado la información exitosamente.',
      data: user
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/update`);
  }
}

export async function updatePicture(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenId } = req.body;

    const user = await Users.findOne(
      { _id: tokenId },
      {
        picture: 1
      }
    ).exec();

    // logout
    if (!user) return forceLogout(res, `${req.query.token}`);

    const validate = await validateUpdatePictureProfile(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    if (user.picture !== validate.data.picture) {
      const s3 = process.env.AWS_S3_BUCKET || null;
      if (!s3) return return404Or422(res, 2);
      if (user.picture?.indexOf(`${s3}`))
        await deleteFile(user.picture);

      if (isBase64(validate.data.picture)) {
        const newUrl = `alma/users/${tokenId}/picture-${tokenId}-${moment().tz('America/Bogota').unix()}`;
        await uploadFile(newUrl, validate.data.picture);
        user.picture = `${s3}/${newUrl}.jpg`;
      }
      else if (checkUrl(validate.data.picture)) {
        user.picture = validate.data.picture;
      }
      else user.picture = null;
    }

    await user.save();

    return res.json({
      msg: 'Se ha actualizado su foto de perfil exitosamente.',
      data: user
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/updatePicture`);
  }
}

export async function changePassword(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenId } = req.body;

    const user = await Users.findOne({ _id: tokenId }, { password: 1 }).exec();

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
    const { tokenId } = req.body;
    const courses: any[] = [];

    if (!checkObjectId(tokenId)) {
      return res.status(401).json({
        msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
      });
    }

    const myCourses = await CoursesUsers.findOne(
      { userid: tokenId },
      { 'courses.courseId': 1, 'courses.approved': 1 }
    ).exec();

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

/*
  REPORTS
 */

export async function getReports(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenId } = req.body;

    if (!checkObjectId(tokenId)) {
      return res.status(401).json({
        msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
      });
    }

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
        membersPendingVisits: [],
        qty: 0,
      },
      typeVisits: {
        title: 'Tipos de Visitas',
        data: [
          { label: 'Presencial', qty: 0 },
          { label: 'Telefónica', qty: 0 }
        ],
        qty: 0,
      },
    };
    let members: any[] = [];
    let users: any[] = [];
    let listsMembersDetails: any = []; // generate a new array data
    let listIdsPending: any = []; // generate a new array data

    if (initDate && checkDate(initDate)) {
      query['courses.created_at'] = { $gte: moment(`${initDate}`).startOf('d').unix() };
      queryReferrals.updated_at = { $gte: moment(`${initDate}`).startOf('d').unix() };
      query2.date = { $gte: moment(`${initDate}`).startOf('d').unix() };
      if (checkDate(endDate)) {
        query['courses.created_at'].$lt = moment(`${endDate}`).endOf('d').unix();
        queryReferrals.updated_at.$lt = moment(`${endDate}`).endOf('d').unix();
        query2.date.$lt = moment(`${endDate}`).endOf('d').unix();
      }
    }

    const myCourses = await CoursesUsers.findOne({ userid: tokenId, ...query }, { courses: 1 }).exec();
    const myReferrals = await Referrals.findOne({ _id: tokenId, ...queryReferrals }, { members: 1 }).exec();
    const visits = await Visits.find({ referred: tokenId, ...query2 }, { date: 1, userid: 1, action: 1 }).exec();

    if (myCourses) {
      ret.courses.qty = myCourses.courses.length;
      for (const c of myCourses.courses) {
        if (c.approved) ret.courses.data[0].qty += 1;
        else ret.courses.data[1].qty += 1;
      }
    }

    if (myReferrals && myReferrals?.members?.length > 0) {
      ret.referrals.qty = myReferrals?.members?.length;
      members = await Referrals.find({ _id: { $in: myReferrals?.members } }, { members: 1 }).exec();
      users = await Users.find({ _id: { $in: myReferrals?.members } }, { names: 1, lastNames: 1 }).exec();

      if (members.length > 0) {
        ret.visits.data[1].qty = visits.length;
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
          ret.referrals.data = listsMembersDetails;
        }
      }
    }

    // VISITS
    for (const v of visits) {
      if (v.action !== 'Llamada') ret.typeVisits.data[0].qty += 1;
      else ret.typeVisits.data[1].qty += 1;
      // add to list for the next check
      const index = members.findIndex(m => m._id.toString() === v.userid);

      // check last visit and add or remove id from list
      if (index > -1) {
        if (moment().diff(moment(`${visits[index].date}`, 'YYYY-MM-DD', true), 'months') > 0) {
          if (!listIdsPending.includes(members[index]._id.toString()))
            listIdsPending.push(members[index]._id.toString());
          else listIdsPending = listIdsPending.filter((lip: string) => lip !== members[index]._id.toString());
        }
      }
    }

    if (listIdsPending?.length > 0) {
      // check the pendings if visited for another member.
      const membersIds: string[] = [];
      const visitsFilterToCheck: any[] = [];
      // obtain the visits
      listIdsPending = _.uniq(listIdsPending);
      const checkingVisits: any[] = await Visits.find(
        { userid: { $in: listIdsPending } },
        { userid: 1, date: 1 }
      )
        .sort({ date: -1 })
        .limit(100)
        .exec();

      if (checkingVisits.length > 0) {
        listIdsPending.forEach((id: string) => {
          const v = checkingVisits.find(cv => cv.userid === id);
          if (v && visitsFilterToCheck.findIndex(vtc => vtc.userid === v.userid) === -1) {
            visitsFilterToCheck.push(v);
          }
        });

        for (const vtc of visitsFilterToCheck) {
          if (moment().diff(moment(`${vtc.date}`, 'YYYY-MM-DD', true), 'months') > 0)
            if (!membersIds.includes(vtc.userid)) membersIds.push(vtc.userid);
        }

      }
      ret.visits.membersPendingVisits = await getNamesUsersList(membersIds) || [];
      ret.visits.data[0].qty = ret.visits.membersPendingVisits.length;

    }
    ret.typeVisits.qty = ((ret.typeVisits.data[0].qty || 0) + (ret.typeVisits.data[1].qty || 0)) || 0;

    return res.json({
      msg: `Mis reportes.`,
      reports: ret
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getReports`);
  }
}
