"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReports = exports.getMemberGroup = exports.getGroup = exports.getCourses = exports.changePassword = exports.updatePicture = exports.update = exports.get = void 0;
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
const Referrals_1 = __importDefault(require("../Models/Referrals"));
const Users_1 = __importDefault(require("../Models/Users"));
const Visits_1 = __importDefault(require("../Models/Visits"));
const AWSService_1 = __importStar(require("../Services/AWSService"));
const EventsActions_1 = require("../ActionsData/EventsActions");
const path = 'Controllers/user.controller';
async function get(req, res) {
    try {
        const { tokenId } = req.body;
        const user = await Users_1.default.findOne({ _id: tokenId }, { __v: 0, password: 0, referred: 0 }).exec();
        // logout
        if (!user)
            return (0, TokenActions_1.forceLogout)(res, `${req.query.token}`);
        return res.json({
            msg: 'Datos de la sesión',
            data: user
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/get`);
    }
}
exports.get = get;
async function update(req, res) {
    try {
        const { tokenId } = req.body;
        const user = await Users_1.default.findOne({ _id: tokenId }, {
            password: 0,
            role: 0,
            referred: 0,
            __v: 0,
        }).exec();
        // logout
        if (!user)
            return (0, TokenActions_1.forceLogout)(res, `${req.query.token}`);
        const validate = await (0, UsersRequest_1.validateUpdate)(req.body, tokenId);
        if (validate.errors.length > 0)
            return (0, GlobalFunctions_1.returnErrorParams)(res, validate.errors);
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
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/update`);
    }
}
exports.update = update;
async function updatePicture(req, res) {
    var _a;
    try {
        const { tokenId } = req.body;
        const user = await Users_1.default.findOne({ _id: tokenId }, {
            picture: 1
        }).exec();
        // logout
        if (!user)
            return (0, TokenActions_1.forceLogout)(res, `${req.query.token}`);
        const validate = await (0, UsersRequest_1.validateUpdatePictureProfile)(req.body);
        if (validate.errors.length > 0)
            return (0, GlobalFunctions_1.returnErrorParams)(res, validate.errors);
        if (user.picture !== validate.data.picture) {
            const s3 = process.env.AWS_S3_BUCKET || null;
            if (!s3)
                return (0, EventsActions_1.return404Or422)(res, 2);
            if ((_a = user.picture) === null || _a === void 0 ? void 0 : _a.indexOf(`${s3}`))
                await (0, AWSService_1.deleteFile)(user.picture);
            if ((0, Validations_1.isBase64)(validate.data.picture)) {
                const newUrl = `alma/users/${tokenId}/picture-${tokenId}-${(0, moment_timezone_1.default)().tz('America/Bogota').unix()}`;
                await (0, AWSService_1.default)(newUrl, validate.data.picture);
                user.picture = `${s3}/${newUrl}.jpg`;
            }
            else if ((0, Validations_1.checkUrl)(validate.data.picture)) {
                user.picture = validate.data.picture;
            }
            else
                user.picture = null;
        }
        await user.save();
        return res.json({
            msg: 'Se ha actualizado su foto de perfil exitosamente.',
            data: user
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/updatePicture`);
    }
}
exports.updatePicture = updatePicture;
async function changePassword(req, res) {
    try {
        const { tokenId } = req.body;
        const user = await Users_1.default.findOne({ _id: tokenId }, { password: 1 }).exec();
        // logout
        if (!user)
            return (0, TokenActions_1.forceLogout)(res, `${req.query.token}`);
        const validate = await (0, UsersRequest_1.validatePasswords)(req.body);
        if (validate.errors.length > 0)
            return (0, GlobalFunctions_1.returnErrorParams)(res, validate.errors);
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
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/changePassword`);
    }
}
exports.changePassword = changePassword;
/*
  COURSES, GROUP & REFERRALS
 */
async function getCourses(req, res) {
    try {
        const { tokenId } = req.body;
        const courses = [];
        if (!(0, Validations_1.checkObjectId)(tokenId)) {
            return res.status(401).json({
                msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
            });
        }
        const myCourses = await CoursesUsers_1.default.findOne({ userid: tokenId }, { 'courses.courseId': 1, 'courses.approved': 1 }).exec();
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
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getCourses`);
    }
}
exports.getCourses = getCourses;
async function getGroup(req, res) {
    try {
        const { tokenId } = req.body;
        let group = null;
        if (!(0, Validations_1.checkObjectId)(tokenId)) {
            return res.status(401).json({
                msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
            });
        }
        const user = await Users_1.default.findOne({ _id: tokenId }, { group: 1 }).exec();
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
                    members: await (0, UsersActions_1.getNamesUsersList)(lodash_1.default.uniq(data.members || [])),
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
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getGroup`);
    }
}
exports.getGroup = getGroup;
async function getMemberGroup(req, res) {
    try {
        const { memberId } = req.params;
        const { tokenId } = req.body;
        if (!(0, Validations_1.checkObjectId)(tokenId)) {
            return res.status(401).json({
                msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
            });
        }
        if (!(0, Validations_1.checkObjectId)(memberId)) {
            return res.status(422).json({
                msg: 'Disculpe, pero el miembro seleccionado es incorrecto.'
            });
        }
        const user = await Users_1.default.findOne({ _id: tokenId }, { group: 1 }).exec();
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
        const ret = await (0, UsersActions_1.getInfoUserReferred)(memberId);
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
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getMemberGroup`);
    }
}
exports.getMemberGroup = getMemberGroup;
/*
  REPORTS
 */
async function getReports(req, res) {
    var _a, _b;
    try {
        const { tokenId } = req.body;
        if (!(0, Validations_1.checkObjectId)(tokenId)) {
            return res.status(401).json({
                msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
            });
        }
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
        let members = [];
        let users = [];
        let listsMembersDetails = []; // generate a new array data
        let listIdsPending = []; // generate a new array data
        if (initDate && (0, Validations_1.checkDate)(initDate)) {
            query['courses.created_at'] = { $gte: (0, moment_timezone_1.default)(`${initDate}`).startOf('d').unix() };
            queryReferrals.updated_at = { $gte: (0, moment_timezone_1.default)(`${initDate}`).startOf('d').unix() };
            query2.date = { $gte: (0, moment_timezone_1.default)(`${initDate}`).startOf('d').unix() };
            if ((0, Validations_1.checkDate)(endDate)) {
                query['courses.created_at'].$lt = (0, moment_timezone_1.default)(`${endDate}`).endOf('d').unix();
                queryReferrals.updated_at.$lt = (0, moment_timezone_1.default)(`${endDate}`).endOf('d').unix();
                query2.date.$lt = (0, moment_timezone_1.default)(`${endDate}`).endOf('d').unix();
            }
        }
        const myCourses = await CoursesUsers_1.default.findOne({ userid: tokenId, ...query }, { courses: 1 }).exec();
        const myReferrals = await Referrals_1.default.findOne({ _id: tokenId, ...queryReferrals }, { members: 1 }).exec();
        const visits = await Visits_1.default.find({ referred: tokenId, ...query2 }, { date: 1, userid: 1, action: 1 }).exec();
        if (myCourses) {
            ret.courses.qty = myCourses.courses.length;
            for (const c of myCourses.courses) {
                if (c.approved)
                    ret.courses.data[0].qty += 1;
                else
                    ret.courses.data[1].qty += 1;
            }
        }
        if (myReferrals && ((_a = myReferrals === null || myReferrals === void 0 ? void 0 : myReferrals.members) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            ret.referrals.qty = (_b = myReferrals === null || myReferrals === void 0 ? void 0 : myReferrals.members) === null || _b === void 0 ? void 0 : _b.length;
            members = await Referrals_1.default.find({ _id: { $in: myReferrals === null || myReferrals === void 0 ? void 0 : myReferrals.members } }, { members: 1 }).exec();
            users = await Users_1.default.find({ _id: { $in: myReferrals === null || myReferrals === void 0 ? void 0 : myReferrals.members } }, { names: 1, lastNames: 1 }).exec();
            if (members.length > 0) {
                ret.visits.data[1].qty = visits.length;
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
                }
                if (listsMembersDetails.length > 0) {
                    ret.referrals.data = listsMembersDetails;
                }
            }
        }
        // VISITS
        for (const v of visits) {
            if (v.action !== 'Llamada')
                ret.typeVisits.data[0].qty += 1;
            else
                ret.typeVisits.data[1].qty += 1;
            // add to list for the next check
            const index = members.findIndex(m => m._id.toString() === v.userid);
            // check last visit and add or remove id from list
            if (index > -1) {
                if ((0, moment_timezone_1.default)().diff((0, moment_timezone_1.default)(`${visits[index].date}`, 'YYYY-MM-DD', true), 'months') > 0) {
                    if (!listIdsPending.includes(members[index]._id.toString()))
                        listIdsPending.push(members[index]._id.toString());
                    else
                        listIdsPending = listIdsPending.filter((lip) => lip !== members[index]._id.toString());
                }
            }
        }
        if ((listIdsPending === null || listIdsPending === void 0 ? void 0 : listIdsPending.length) > 0) {
            // check the pendings if visited for another member.
            const membersIds = [];
            const visitsFilterToCheck = [];
            // obtain the visits
            listIdsPending = lodash_1.default.uniq(listIdsPending);
            const checkingVisits = await Visits_1.default.find({ userid: { $in: listIdsPending } }, { userid: 1, date: 1 })
                .sort({ date: -1 })
                .limit(100)
                .exec();
            if (checkingVisits.length > 0) {
                listIdsPending.forEach((id) => {
                    const v = checkingVisits.find(cv => cv.userid === id);
                    if (v && visitsFilterToCheck.findIndex(vtc => vtc.userid === v.userid) === -1) {
                        visitsFilterToCheck.push(v);
                    }
                });
                for (const vtc of visitsFilterToCheck) {
                    if ((0, moment_timezone_1.default)().diff((0, moment_timezone_1.default)(`${vtc.date}`, 'YYYY-MM-DD', true), 'months') > 0)
                        if (!membersIds.includes(vtc.userid))
                            membersIds.push(vtc.userid);
                }
            }
            ret.visits.membersPendingVisits = await (0, UsersActions_1.getNamesUsersList)(membersIds) || [];
            ret.visits.data[0].qty = ret.visits.membersPendingVisits.length;
        }
        ret.typeVisits.qty = ((ret.typeVisits.data[0].qty || 0) + (ret.typeVisits.data[1].qty || 0)) || 0;
        return res.json({
            msg: `Mis reportes.`,
            reports: ret
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getReports`);
    }
}
exports.getReports = getReports;
