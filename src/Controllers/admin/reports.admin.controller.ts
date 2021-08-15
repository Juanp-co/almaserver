import _ from 'lodash';
import moment from 'moment-timezone';
import { Request, Response } from 'express';
import { checkRoleToActions, responseUsersAdmin } from '../../ActionsData/UsersActions';
import { returnError } from '../../Functions/GlobalFunctions';
import { checkDate } from '../../Functions/Validations';
import { IFamiliesGroupsDetailsToReport } from '../../Interfaces/IFamiliesGroups';
import {
  IFamiliesGroupsReports,
  IFamiliesGroupsReportsAdmin
} from '../../Interfaces/IFamiliesGroupsReports';
import Courses from '../../Models/Courses';
import CoursesUsers from '../../Models/CoursesUsers';
import Events from '../../Models/Events';
import FamiliesGroups from '../../Models/FamiliesGroups';
import FamiliesGroupsReports from '../../Models/FamiliesGroupsReports';
import Groups from '../../Models/Groups';
import Users from '../../Models/Users';
import Consolidates from '../../Models/Visits';

const path = 'src/admin/reports.admin.controller';

export default async function getReports(req: Request, res: Response) : Promise<Response>{
  try {
    const { tokenRoles } = req.body;
    const { initDate, endDate } = req.query;
    const query: any = {};
    const query2: any = {};
    const ret: any = {
      consolidates: {
        title: 'Consolidaciones',
        data: [
          { label: 'Miembros registrados', qty: 0 },
          { label: 'Miembros visitados', qty: 0 },
        ],
        qty: 0,
      },
      courses: {
        title: 'Cursos',
        data: [
          { label: 'Publicados', qty: 0 },
          { label: 'No publicados', qty: 0 },
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
        title: 'Familias',
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
          title: 'Miembros en familia',
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
            { label: 'Personas', qty: 0 },
          ],
        },
      },
    };

    if (initDate && checkDate(initDate)) {
      query.created_at = { $gte: moment(`${initDate}`).startOf('d').unix() };
      if (checkDate(endDate))
        query.created_at.$lt = moment(`${endDate}`).endOf('d').unix();
    }

    if (initDate && checkDate(initDate)) {
      query2.date = { $gte: moment(`${initDate}`).startOf('d').unix() };
      if (checkDate(endDate))
        query2.date.$lt = moment(`${endDate}`).endOf('d').unix();
    }

    if (!checkRoleToActions(tokenRoles)) return responseUsersAdmin(res, 3);

    const consolidates = await Consolidates.find(query2).countDocuments().exec();
    const courses = await Courses.find(query, { enable: 1 }).exec();
    const events = await Events.find(query, { date: 1 }).exec();
    const groups = await Groups.find(query, { members: 1 }).exec();
    const users = await Users.find(
      query,
      { gender: 1, roles: 1, birthday: 1, group: 1, referred: 1, position: 1, consolidated: 1 }
    ).exec();

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

        if (u.roles) {
          for (const r of u.roles) {
            ret.users.roles.data[r].qty += 1;
          }
        }

        ret.consolidates.data[0].qty += u.referred && u.consolidated ? 1 : 0;
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

    // consolidates
    ret.consolidates.data[1].qty = consolidates;
    ret.consolidates.qty = ret.consolidates.data[0].qty + ret.consolidates.data[1].qty;

    return res.json({
      msg: 'Reporte',
      report: ret
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getReports`);
  }
}

export async function getFamiliesGroupsReports(req: Request, res: Response) : Promise<Response>{
  try {
    const { tokenRoles } = req.body;
    const { initDate, endDate, sector, subSector, number } = req.query;
    const query1: any = {};
    const query2: any = {};
    let ret: any[] = [];

    if (/[0-9]{1,3}/.test(`${sector}`)) query1.sector = parseInt(`${sector}`, 10);
    if (/[0-9]{1,3}/.test(`${subSector}`)) query1.subSector = parseInt(`${subSector}`, 10);
    if (/[0-9]{1,3}/.test(`${number}`)) query1.number = parseInt(`${number}`, 10);

    if (initDate && checkDate(initDate)) {
      query2['report.date'] = { $gte: moment(`${initDate}`).startOf('d').unix() };
      if (checkDate(endDate))
        query2['report.date'].$lt = moment(`${endDate}`).endOf('d').unix();
    }

    if (!checkRoleToActions(tokenRoles)) return responseUsersAdmin(res, 3);

    // get all families groups
    const familiesGroups = await FamiliesGroups.find(
      query1,
      { number: 1, sector: 1, subSector: 1, created_at: 1, }
      )
      .sort({ sector: 1, subSector: 1, number: 1 })
      .exec();

    if (familiesGroups.length > 0) {

      const listIds: string[] = familiesGroups.map(fg => fg._id.toString());
      query2.familyGroupId = { $in: listIds };

      // get reports
      const reports = await FamiliesGroupsReports.find(query2, { familyGroupId: 1, report: 1 }).exec();

      if (reports.length > 0) {

        for (const value of listIds) {
          const group = familiesGroups.find(fg => fg._id.toString() === value) as IFamiliesGroupsDetailsToReport;

          if (group) {
            const data: IFamiliesGroupsReportsAdmin = {
              group,
              report: {
                brethren: 0,
                friends: 0,
                scheduledVisits: 0,
                discipleshipVisits: 0,
                christianChildren: 0,
                christianChildrenFriends: 0,
                total: 0,
                offering: 0,
                churchAttendance: 0,
                churchAttendanceChildren: 0,
                conversions: 0,
                reconciliations: 0,
                conversionsChildren: 0,
                brethrenPlanning: 0,
                bibleReading: 0,
                consolidated: 0,
              },
              observations: []
            };

            const filterReports = reports.filter(r => r.familyGroupId === value) as IFamiliesGroupsReports[];
            if (filterReports.length > 0) {

              for (const fr of filterReports) {
                data.report.brethren += fr.report.brethren;
                data.report.friends += fr.report.friends;
                data.report.scheduledVisits += fr.report.scheduledVisits;
                data.report.discipleshipVisits += fr.report.discipleshipVisits;
                data.report.christianChildren += fr.report.christianChildren;
                data.report.christianChildrenFriends += fr.report.christianChildrenFriends;
                data.report.total += fr.report.total;
                data.report.offering += fr.report.offering;
                data.report.churchAttendance += fr.report.churchAttendance;
                data.report.churchAttendanceChildren += fr.report.churchAttendanceChildren;
                data.report.conversions += fr.report.conversions;
                data.report.reconciliations += fr.report.reconciliations;
                data.report.conversionsChildren += fr.report.conversionsChildren;
                data.report.brethrenPlanning += fr.report.brethrenPlanning;
                data.report.bibleReading += fr.report.bibleReading;
                data.report.consolidated += fr.report.consolidated;

                data.observations.push({
                  observations: fr.report.observations,
                  date: fr.report.date,
                });
              }
            }

            ret.push(data);
          }
        }
      }
      else {
        for (const value of listIds) {
          const group = familiesGroups.find(fg => fg._id.toString() === value) as IFamiliesGroupsDetailsToReport;
          if (group) {
            const data: IFamiliesGroupsReportsAdmin = {
              group,
              report: {
                brethren: 0,
                friends: 0,
                scheduledVisits: 0,
                discipleshipVisits: 0,
                christianChildren: 0,
                christianChildrenFriends: 0,
                total: 0,
                offering: 0,
                churchAttendance: 0,
                churchAttendanceChildren: 0,
                conversions: 0,
                reconciliations: 0,
                conversionsChildren: 0,
                brethrenPlanning: 0,
                bibleReading: 0,
                consolidated: 0,
              },
              observations: []
            };
            ret.push(data);
          }
        }
      }

      ret = _.sortBy(ret, ['group.sector', 'group.subSector', 'group.number'], ['asc', 'asc', 'asc'])
    }

    return res.json({
      msg: 'Reportes de grupos familiares.',
      reports: ret
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getFamiliesGroupsReports`);
  }
}
