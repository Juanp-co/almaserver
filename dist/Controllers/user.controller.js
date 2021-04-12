"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReports = exports.getMemberGroup = exports.getGroup = exports.getCourses = exports.changePassword = exports.update = exports.get = void 0;
const lodash_1 = __importDefault(require("lodash"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const UsersActions_1 = require("../ActionsData/UsersActions");
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const TokenActions_1 = require("../Functions/TokenActions");
const UsersRequest_1 = require("../FormRequest/UsersRequest");
const Validations_1 = require("../Functions/Validations");
const Courses_1 = __importDefault(require("../Models/Courses"));
const CoursesUsers_1 = __importDefault(require("../Models/CoursesUsers"));
const Groups_1 = __importDefault(require("../Models/Groups"));
const Users_1 = __importDefault(require("../Models/Users"));
const Referrals_1 = __importDefault(require("../Models/Referrals"));
const Consolidates_1 = __importDefault(require("../Models/Consolidates"));
const path = 'Controllers/user.controller';
async function get(req, res) {
    try {
        const { userid } = req.params;
        const user = await Users_1.default.findOne({ _id: userid }, { __v: 0, password: 0, referred: 0 }).exec();
        // logout
        if (!user)
            return TokenActions_1.forceLogout(res, `${req.query.token}`);
        return res.json({
            msg: 'Datos de la sesión',
            data: user
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/get`);
    }
}
exports.get = get;
async function update(req, res) {
    try {
        const { userid } = req.params;
        const user = await Users_1.default.findOne({ _id: userid }, { _id: 1, document: 1 }).exec();
        // logout
        if (!user)
            return TokenActions_1.forceLogout(res, `${req.query.token}`);
        const validate = await UsersRequest_1.validateUpdate(req.body, userid);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        if (!validate.data.document)
            validate.data.document = user.document;
        const updated = await Users_1.default.findByIdAndUpdate(userid, validate.data, {
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
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/update`);
    }
}
exports.update = update;
async function changePassword(req, res) {
    try {
        const { userid } = req.params;
        const user = await Users_1.default.findOne({ _id: userid }, { password: 1 }).exec();
        // logout
        if (!user)
            return TokenActions_1.forceLogout(res, `${req.query.token}`);
        const validate = await UsersRequest_1.validatePasswords(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        if (!bcrypt_1.default.compareSync(validate.data.password, `${user.password}`)) {
            return res.status(422).json({
                msg: 'Disculpe, pero la contraseña actual es incorrecta.'
            });
        }
        user.password = bcrypt_1.default.hashSync(validate.data.newPassword, 10);
        await user.save();
        return res.json({
            msg: 'Se ha actualizado su contraseña exitosamente.'
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/changePassword`);
    }
}
exports.changePassword = changePassword;
/*
  COURSES, GROUP & REFERRALS
 */
async function getCourses(req, res) {
    try {
        const { userid } = req.params;
        const courses = [];
        if (!Validations_1.checkObjectId(userid)) {
            return res.status(401).json({
                msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
            });
        }
        const myCourses = await CoursesUsers_1.default.findOne({ userid }, { 'courses.courseId': 1, 'courses.approved': 1 }).exec();
        if (myCourses) {
            const listIds = myCourses.courses.length > 0 ? myCourses.courses.map(c => c.courseId) : [];
            if (listIds.length > 0) {
                const listCourses = await Courses_1.default.find({ _id: { $in: listIds || [] } }, { _id: 1, title: 1, slug: 1, description: 1, enable: 1, level: 1 }).exec();
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
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getCourses`);
    }
}
exports.getCourses = getCourses;
async function getGroup(req, res) {
    try {
        const { userid } = req.params;
        let group = null;
        if (!Validations_1.checkObjectId(userid)) {
            return res.status(401).json({
                msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
            });
        }
        const user = await Users_1.default.findOne({ _id: userid }, { group: 1 }).exec();
        if (!user) {
            return res.status(401).json({
                msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
            });
        }
        if (user.group) {
            const data = await Groups_1.default.findOne({ _id: user.group }).exec();
            if (data) {
                group = {
                    _id: data._id,
                    name: data.name,
                    code: data.code,
                    members: await UsersActions_1.getNamesUsersList(lodash_1.default.uniq(data.members || [])),
                    created_at: data.created_at,
                    updated_at: data.updated_at,
                };
            }
        }
        return res.json({
            msg: 'Mi grupo familiar',
            group
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getGroup`);
    }
}
exports.getGroup = getGroup;
async function getMemberGroup(req, res) {
    try {
        const { userid, memberId } = req.params;
        if (!Validations_1.checkObjectId(userid)) {
            return res.status(401).json({
                msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
            });
        }
        if (!Validations_1.checkObjectId(memberId)) {
            return res.status(422).json({
                msg: 'Disculpe, pero el miembro seleccionado es incorrecto.'
            });
        }
        const user = await Users_1.default.findOne({ _id: userid }, { group: 1 }).exec();
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
        const data = await Groups_1.default.findOne({ _id: user.group }, { members: 1 }).exec();
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
        const ret = await UsersActions_1.getInfoUserReferred(memberId);
        if (!ret.member) {
            return res.status(404).json({
                msg: 'Disculpe, pero no se logró encontrar la información solicitada.'
            });
        }
        return res.json({
            msg: `Miembro.`,
            data: ret
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getMemberGroup`);
    }
}
exports.getMemberGroup = getMemberGroup;
/*
  REPORTS
 */
async function getReports(req, res) {
    try {
        const { initDate, endDate } = req.query;
        const query = {};
        const query2 = {};
        const queryReferrals = {};
        const ret = {
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
        if (initDate && Validations_1.checkDate(initDate)) {
            query['courses.created_at'] = { $gte: moment_timezone_1.default(`${initDate}`).startOf('d').unix() };
            queryReferrals.updated_at = { $gte: moment_timezone_1.default(`${initDate}`).startOf('d').unix() };
            query2.date = { $gte: moment_timezone_1.default(`${initDate}`).startOf('d').unix() };
            if (Validations_1.checkDate(endDate)) {
                query['courses.created_at'].$lt = moment_timezone_1.default(`${endDate}`).endOf('d').unix();
                queryReferrals.updated_at.$lt = moment_timezone_1.default(`${endDate}`).endOf('d').unix();
                query2.date.$lt = moment_timezone_1.default(`${endDate}`).endOf('d').unix();
                ;
            }
        }
        const { userid } = req.params;
        if (!Validations_1.checkObjectId(userid)) {
            return res.status(401).json({
                msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
            });
        }
        const myCourses = await CoursesUsers_1.default.findOne({ userid, ...query }, { courses: 1 }).exec();
        const myReferrals = await Referrals_1.default.findOne({ _id: userid, ...queryReferrals }, { members: 1 }).exec();
        const visits = await Consolidates_1.default.find({ consolidatorId: userid, ...query2 }, { date: 1 }).exec();
        if (myCourses) {
            ret.courses.qty = myCourses.courses.length;
            for (const c of myCourses.courses) {
                if (c.approved)
                    ret.courses.data[0].qty += 1;
                else
                    ret.courses.data[1].qty += 1;
            }
        }
        if (myReferrals) {
            ret.referrals.qty = myReferrals.members.length;
            if (ret.referrals.qty > 0) {
                const members = await Referrals_1.default.find({ _id: { $in: myReferrals.members } }, { members: 1 }).exec();
                const users = await Users_1.default.find({ _id: { $in: myReferrals.members } }, { names: 1, lastNames: 1 }).exec();
                if (members.length > 0) {
                    let listsMembersDetails = []; // generate a new array data
                    let listIdsPending = []; // generate a new array data
                    let limit = 0;
                    for (const m of members) {
                        const data = {
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
                            if (moment_timezone_1.default().diff(moment_timezone_1.default(`${visits[index].date}`, 'YYYY-MM-DD', true), 'months') >= 1) {
                                if (!listIdsPending.includes(m._id.toString()))
                                    listIdsPending.push(m._id.toString());
                            }
                            else
                                listIdsPending = listIdsPending.filter((lip) => lip !== m._id.toString());
                        }
                        else if (!listIdsPending.includes(m._id.toString()))
                            listIdsPending.push(m._id.toString());
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
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getReports`);
    }
}
exports.getReports = getReports;
