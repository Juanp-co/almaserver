import _ from 'lodash';
import moment from 'moment-timezone';
import { Request, Response } from 'express';
import { returnError } from '../../Functions/GlobalFunctions';
import { checkRoleToActions, responseUsersAdmin } from '../../ActionsData/UsersActions';
import Users from '../../Models/Users';
import CoursesUsers from '../../Models/CoursesUsers';
import Courses from '../../Models/Courses';
import Events from '../../Models/Events';
import Groups from '../../Models/Groups';

const path = 'src/admin/reports.admin.controller';

export default async function getReports(req: Request, res: Response) : Promise<Response>{
  try {
    const { userrole } = req.body;
    const { initDate, endDate } = req.query;
    const query: any = {};
    const ret = {
      courses: {
        title: 'Cursos',
        data: [
          { label: 'Publicados', qty: 0 },
          { label: 'Borradores', qty: 0 },
          { label: 'Viendo', qty: 0 },
        ],
        qty: 0,
      },
      events: {
        title: 'Eventos',
        data: [
          { label: 'Pendientes', qty: 0 },
          { label: 'Finalizados', qty: 0 },
        ],
        qty: 0,
      },
      groups: {
        title: 'Grupos',
        data: [
          { label: 'Sin miembros', qty: 0 },
          { label: 'Con miembros', qty: 0 },
        ],
        qty: 0,
      },
      users: {
        title: 'Miembros',
        qty: 0,
        ages: {
          title: 'Edades',
          data: [
            { label: '0 a 15 años', qty: 0 },
            { label: '16 a 20 años', qty: 0 },
            { label: '21 a 30 años', qty: 0 },
            { label: '31 a 40 años', qty: 0 },
            { label: '41 a 50 años', qty: 0 },
            { label: '51 a 60 años', qty: 0 },
            { label: 'Mayores de 61 años', qty: 0 },
            { label: 'No indicados', qty: 0 },
          ]
        },
        families: {
          title: 'Miembros y grupos',
          data: [
            { label: 'No pertenece', qty: 0 },
            { label: 'Pertenece', qty: 0 },
          ],
        },
        gender: {
          title: 'Géneros',
          data: [
            { label: 'Hombres', qty: 0 },
            { label: 'Mujeres', qty: 0 },
            { label: 'Otro', qty: 0 },
          ]
        },
        roles: {
          title: 'Roles',
          data: [
            { label: 'Admins', qty: 0 },
            { label: 'Pastores', qty: 0 },
            { label: 'Supervisores', qty: 0 },
            { label: 'Líderes', qty: 0 },
            { label: 'Padres espirituales', qty: 0 },
            { label: 'Personas', qty: 0 },
          ],
        },
      },
    };

    if (initDate) {
      query.created_at = { $gte: moment(`${initDate}`).startOf('d').unix() };
    }

    if (endDate) {
      query.created_at.$lt = moment(`${endDate}`).endOf('d').unix();
    }

    if (!checkRoleToActions(userrole)) return responseUsersAdmin(res, 3);

    const courses = await Courses.find(query, { enable: 1, levels: 1 }).exec();
    const events = await Events.find(query, { date: 1 }).exec();
    const groups = await Groups.find(query, { members: 1 }).exec();
    const users = await Users.find(query, { gender: 1, role: 1, birthday: 1, group: 1 }).exec();

    if (users.length > 0) {
      ret.users.qty = users.length;
      const today = moment().tz('America/Bogota').startOf('d');
      users.forEach(u => {
        if (u.gender !== null && u.gender !== undefined && u.gender !== 2)
          ret.users.gender.data[u.gender].qty += 1;
        else
          ret.users.gender.data[2].qty += 1;

        if (u.birthday) {
          const age = today.diff(moment(u.birthday), 'y');

          if (age < 15) ret.users.ages.data[0].qty += 1;
          else if (age > 15 && age <= 20) ret.users.ages.data[1].qty += 1;
          else if (age > 20 && age <= 30) ret.users.ages.data[2].qty += 1;
          else if (age > 30 && age <= 40) ret.users.ages.data[3].qty += 1;
          else if (age > 40 && age <= 50) ret.users.ages.data[4].qty += 1;
          else if (age > 50 && age <= 60) ret.users.ages.data[5].qty += 1;
          else if (age > 60) ret.users.ages.data[6].qty += 1;
        }
        else ret.users.ages.data[7].qty += 1;

        ret.users.families.data[(u.group ? 1 : 0)].qty += 1;

        if (u.role !== null && u.role !== undefined && !!ret.users.roles.data[u.role])
          ret.users.roles.data[u.role].qty += 1;
      });
    }

    if (courses.length > 0) {
      ret.courses.qty = courses.length;

      for (const course of courses) {
        if (course.enable) ret.courses.data[0].qty += 1;
        else ret.courses.data[1].qty += 1;
        if (
          (await CoursesUsers.find({ courseId: course._id.toString() }).countDocuments().exec()) > 0
        ) ret.courses.data[2].qty += 1;
      }
    }

    if (events.length > 0) {
      ret.events.qty = events.length;
      const date = moment().tz('America/Bogota').startOf('d');

      // check what is finished
      events.forEach(ev => {
        if (date.isBefore(moment(ev.date).tz('America/Bogota'))) ret.events.data[0].qty += 1;
        else ret.events.data[1].qty += 1;
      });
    }

    if (groups.length > 0) {
      ret.groups.qty = groups.length;
      groups.forEach(g => {
        if (g.members.length > 0) ret.groups.data[1].qty += 1;
        else ret.groups.data[0].qty += 1;
      })
    }

    return res.json({
      msg: 'Reporte',
      report: ret
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/saveCourse`);
  }
}
