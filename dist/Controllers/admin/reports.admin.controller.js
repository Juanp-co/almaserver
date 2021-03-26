"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const UsersActions_1 = require("../../ActionsData/UsersActions");
const Users_1 = __importDefault(require("../../Models/Users"));
const CoursesUsers_1 = __importDefault(require("../../Models/CoursesUsers"));
const Courses_1 = __importDefault(require("../../Models/Courses"));
const Events_1 = __importDefault(require("../../Models/Events"));
const Groups_1 = __importDefault(require("../../Models/Groups"));
const path = 'src/admin/reports.admin.controller';
async function getReports(req, res) {
    try {
        const { userrole } = req.body;
        const { initDate, endDate } = req.query;
        const query = {};
        const ret = {
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
            query.created_at = { $gte: moment_timezone_1.default(`${initDate}`).startOf('d').unix() };
        }
        if (endDate) {
            query.created_at.$lt = moment_timezone_1.default(`${endDate}`).endOf('d').unix();
        }
        if (!UsersActions_1.checkRoleToActions(userrole))
            return UsersActions_1.responseUsersAdmin(res, 3);
        const courses = await Courses_1.default.find(query, { enable: 1 }).exec();
        const events = await Events_1.default.find(query, { date: 1 }).exec();
        const groups = await Groups_1.default.find(query, { members: 1 }).exec();
        const users = await Users_1.default.find(query, { gender: 1, role: 1, birthday: 1, group: 1 }).exec();
        if (users.length > 0) {
            ret.users.qty = users.length;
            const today = moment_timezone_1.default().tz('America/Bogota').startOf('d');
            users.forEach(u => {
                if (u.gender !== null && u.gender !== undefined && u.gender !== 2)
                    ret.users.gender.data[u.gender].qty += 1;
                else
                    ret.users.gender.data[2].qty += 1;
                if (u.birthday) {
                    const age = today.diff(moment_timezone_1.default(u.birthday), 'y');
                    if (age < 15)
                        ret.users.ages.data[0].qty += 1;
                    else if (age > 15 && age <= 20)
                        ret.users.ages.data[1].qty += 1;
                    else if (age > 20 && age <= 30)
                        ret.users.ages.data[2].qty += 1;
                    else if (age > 30 && age <= 40)
                        ret.users.ages.data[3].qty += 1;
                    else if (age > 40 && age <= 50)
                        ret.users.ages.data[4].qty += 1;
                    else if (age > 50 && age <= 60)
                        ret.users.ages.data[5].qty += 1;
                    else if (age > 60)
                        ret.users.ages.data[6].qty += 1;
                }
                else
                    ret.users.ages.data[7].qty += 1;
                ret.users.families.data[(u.group ? 1 : 0)].qty += 1;
                if (u.role !== null && u.role !== undefined && !!ret.users.roles.data[u.role])
                    ret.users.roles.data[u.role].qty += 1;
            });
        }
        if (courses.length > 0) {
            ret.courses.qty = courses.length;
            for (const course of courses) {
                if (course.enable)
                    ret.courses.data[0].qty += 1;
                else
                    ret.courses.data[1].qty += 1;
                if ((await CoursesUsers_1.default.find({ courseId: course._id.toString() }).countDocuments().exec()) > 0)
                    ret.courses.data[2].qty += 1;
            }
        }
        if (events.length > 0) {
            ret.events.qty = events.length;
            const date = moment_timezone_1.default().tz('America/Bogota').startOf('d');
            // check what is finished
            events.forEach(ev => {
                if (date.isBefore(moment_timezone_1.default(ev.date).tz('America/Bogota')))
                    ret.events.data[0].qty += 1;
                else
                    ret.events.data[1].qty += 1;
            });
        }
        if (groups.length > 0) {
            ret.groups.qty = groups.length;
            groups.forEach(g => {
                if (g.members.length > 0)
                    ret.groups.data[1].qty += 1;
                else
                    ret.groups.data[0].qty += 1;
            });
        }
        return res.json({
            msg: 'Reporte',
            report: ret
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/saveCourse`);
    }
}
exports.default = getReports;
