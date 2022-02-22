"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseErrorsRecoveryPassword = exports.responseUsersAdmin = exports.checkRoleToActions = exports.checkFindValueSearchForGroups = exports.checkFindValueSearch = exports.checkLeaderUserRole = exports.setFamilyGroupIdValueUsers = exports.getInfoUserReferred = exports.getIdUserFromDocument = exports.getUserData = exports.updateGroupIdInUsers = exports.getUsersSimpleList = exports.getNamesUsersList = exports.getData = exports.checkIfExistPhone = void 0;
const Validations_1 = require("../Functions/Validations");
const Users_1 = __importDefault(require("../Models/Users"));
const Referrals_1 = __importDefault(require("../Models/Referrals"));
const CoursesUsers_1 = __importDefault(require("../Models/CoursesUsers"));
const ReferralsActions_1 = require("./ReferralsActions");
const CoursesActions_1 = require("./CoursesActions");
async function checkIfExistDocument(document, _id) {
    return document ?
        (await Users_1.default.find({ document, _id: { $ne: _id } })
            .countDocuments()
            .exec()) > 0
        : false;
}
exports.default = checkIfExistDocument;
async function checkIfExistPhone(phone, _id) {
    const query = {};
    if (phone) {
        query.phone = phone;
        if (_id)
            query._id = { $ne: _id };
        return (await Users_1.default.find(query)
            .countDocuments()
            .exec()) > 0;
    }
    return false;
}
exports.checkIfExistPhone = checkIfExistPhone;
async function getData(_id, projection = null) {
    return _id ?
        Users_1.default.findOne({ _id }, projection || { __v: 0, password: 0 }).exec()
        : null;
}
exports.getData = getData;
async function getNamesUsersList(listIds, projection = null) {
    const ret = [];
    if (listIds.length > 0) {
        const users = await Users_1.default.find({ _id: { $in: listIds } }, (projection ||
            { names: 1, lastNames: 1, document: 1, gender: 1, phone: 1, position: 1, picture: 1 })).exec();
        for (const value of users) {
            ret.push({
                _id: value._id,
                names: value.names,
                lastNames: value.lastNames,
                document: value.document || null,
                gender: value.gender || null,
                phone: value.phone,
                picture: value.picture || null,
                position: value.position || null,
            });
        }
    }
    return ret;
}
exports.getNamesUsersList = getNamesUsersList;
async function getUsersSimpleList(listIds) {
    const ret = [];
    if (listIds.length > 0) {
        const users = await Users_1.default.find({ _id: { $in: listIds } }, { names: 1, lastNames: 1 }).exec();
        for (const value of users) {
            ret.push({
                _id: value._id,
                fullname: `${value.names} ${value.lastNames}`,
            });
        }
    }
    return ret;
}
exports.getUsersSimpleList = getUsersSimpleList;
async function updateGroupIdInUsers(listIds, _id = null) {
    if (listIds.length > 0) {
        await Users_1.default.updateMany({ _id: { $in: listIds } }, { $set: { group: _id } }).exec();
    }
}
exports.updateGroupIdInUsers = updateGroupIdInUsers;
async function getUserData(_id, projection = null) {
    let user = null;
    if (_id) {
        const data = await Users_1.default.findOne({ _id }, projection || { __v: 0, password: 0 }).exec();
        if (data) {
            user = {
                _id: data._id,
                document: data.document,
                email: data.email,
                phone: data.phone,
                names: data.names,
                lastNames: data.lastNames,
                position: data.position || null,
                gender: data.gender,
                birthday: data.birthday,
                civilStatus: data.civilStatus,
                educationLevel: data.educationLevel,
                profession: data.profession,
                bloodType: data.bloodType,
                company: data.company,
                companyType: data.companyType,
                baptized: data.baptized,
                roles: data.roles,
                referred: data.referred,
                petition: data.petition,
                attendGroup: data.attendGroup,
                consolidated: data.consolidated || false,
                department: data.department,
                city: data.city,
                locality: data.locality,
                direction: data.direction,
                picture: data.picture,
                totals: {
                    totalsCourses: 0,
                    totalsReferrals: 0,
                },
                created_at: data.created_at,
                updated_at: data.updated_at,
            };
            if (user.referred) {
                const uf = await getNamesUsersList([user.referred]);
                if (uf)
                    user.referred = uf[0];
            }
            // get totals courses, referrals and others
            user.totals.totalsCourses = await CoursesUsers_1.default.find({ userid: _id }).countDocuments().exec();
            const referrals = await Referrals_1.default.findOne({ _id }, { members: 1 }).exec();
            if (referrals) {
                user.totals.totalsReferrals = await (0, ReferralsActions_1.getTotalsReferrals)(referrals.members);
            }
        }
    }
    return user;
}
exports.getUserData = getUserData;
async function getIdUserFromDocument(document) {
    if (document) {
        const u = await Users_1.default.findOne({ document }, { _id: 1 }).exec();
        if (u)
            return u._id.toString();
    }
    return null;
}
exports.getIdUserFromDocument = getIdUserFromDocument;
async function getInfoUserReferred(_id) {
    const ret = {
        member: null,
        totalCourses: 0,
        totalReferrals: 0,
        courses: [],
        referrals: [],
    };
    if (_id) {
        ret.member = await Users_1.default.findOne({ _id }, {
            _id: 1,
            names: 1,
            lastNames: 1,
            phone: 1,
            email: 1,
            gender: 1,
            position: 1,
            civilStatus: 1,
            department: 1,
            city: 1,
            locality: 1,
            petition: 1,
            consolidated: 1,
            direction: 1,
            birthday: 1,
            picture: 1,
            roles: 1,
        }).exec();
        if (!ret.member)
            return ret;
        // get totals members referrals
        const referrals = await Referrals_1.default.findOne({ _id: ret.member._id }).exec();
        if (referrals) {
            // get data referrals and get totals subreferrals
            ret.referrals = await getNamesUsersList(referrals.members);
            ret.totalReferrals += await (0, ReferralsActions_1.getTotalsReferrals)(referrals.members);
            for (const [index, value] of ret.referrals.entries()) {
                const refMembers = await Referrals_1.default.findOne({ _id: value._id }).exec();
                ret.referrals[index] = {
                    ...value,
                    totalsReferrals: refMembers ? refMembers.members.length : 0
                };
            }
        }
        // get totals courses
        const coursesU = await CoursesUsers_1.default.findOne({ userid: ret.member._id.toString() }, { 'courses.courseId': 1, 'courses.approved': 1 }).exec();
        if (coursesU) {
            ret.totalCourses = coursesU.courses.length;
            // get data courses
            const listIds = ret.totalCourses > 0 ? coursesU.courses.map(c => c.courseId) : [];
            const courses = listIds.length > 0 ? await (0, CoursesActions_1.getCoursesSimpleList)(listIds) : [];
            for (const course of courses) {
                const index = coursesU.courses.findIndex(c => c.courseId === course._id.toString());
                ret.courses.push({
                    _id: course._id,
                    // banner: course.banner,
                    slug: course.slug,
                    title: course.title,
                    description: course.description,
                    level: course.level,
                    approved: coursesU.courses[index] ? (coursesU.courses[index].approved || false) : false
                });
            }
        }
    }
    return ret;
}
exports.getInfoUserReferred = getInfoUserReferred;
async function setFamilyGroupIdValueUsers(listIds, groupId, remove = false) {
    // check the list users
    if (listIds.length > 0) {
        const users = await Users_1.default.find({ _id: { $in: listIds } }, { familyGroupId: 1 }).exec();
        if (users.length > 0) {
            for (const user of users) {
                // set or remove the familyGroupId
                if (remove)
                    user.familyGroupId = user.familyGroupId.filter(fg => fg !== groupId);
                else
                    user.familyGroupId.push(groupId);
                await user.save();
            }
        }
    }
}
exports.setFamilyGroupIdValueUsers = setFamilyGroupIdValueUsers;
async function checkLeaderUserRole(_id, remove = false) {
    var _a;
    const user = await Users_1.default.findOne({ _id }, { roles: 1 }).exec();
    if (user) {
        if (remove) {
            user.roles = ((_a = user.roles) === null || _a === void 0 ? void 0 : _a.filter((r) => r !== 3)) || [];
            await user.save();
        }
        else if (!user.roles.includes(3)) {
            user.roles.push(3);
            await user.save();
        }
    }
}
exports.checkLeaderUserRole = checkLeaderUserRole;
/*
  Static functions
 */
function checkFindValueSearch(params = {}, tokenId = null) {
    const query = {};
    if (tokenId)
        query._id = { $ne: tokenId };
    if (params) {
        if (params.ignoreIds) {
            const ids = params.ignoreIds.toString().split(',') || [];
            if (ids.length > 0) {
                const list = tokenId ? [tokenId] : [];
                ids.forEach((id) => {
                    if ((0, Validations_1.checkObjectId)(id))
                        list.push(id);
                });
                query._id = { $nin: list };
            }
        }
        if (params.search) {
            if ((0, Validations_1.checkNameOrLastName)(params.search)) {
                const pattern = params.search ? params.search.toString().trim().replace(' ', '|') : null;
                if (pattern) {
                    query.$or = [
                        { names: { $regex: new RegExp(`(${pattern})`, 'i') } },
                        { lastNames: { $regex: new RegExp(`(${pattern})`, 'i') } },
                    ];
                }
            }
            else
                query.$or = [
                    { document: { $regex: new RegExp(`(${params.search})`, 'i') } },
                    { phones: { $regex: new RegExp(`(${params.search})`, 'i') } },
                ];
        }
        if (params.referreds)
            query.referred = { $ne: null };
        if (params.admins)
            query.roles = { $eq: 0 };
    }
    return query;
}
exports.checkFindValueSearch = checkFindValueSearch;
function checkFindValueSearchForGroups(query = {}, params = {}) {
    if (params) {
        if (params.search) {
            if ((0, Validations_1.checkNameOrLastName)(params.search)) {
                const pattern = params.search ? params.search.toString().trim().replace(' ', '|') : null;
                if (pattern) {
                    query.$or = [
                        { names: { $regex: new RegExp(`(${pattern})`, 'i') } },
                        { lastNames: { $regex: new RegExp(`(${pattern})`, 'i') } },
                    ];
                }
            }
            else
                query.document = { $regex: new RegExp(`${params.search}`.toUpperCase(), 'i') };
        }
        if (params.referreds)
            query.referred = { $ne: null };
    }
    return query;
}
exports.checkFindValueSearchForGroups = checkFindValueSearchForGroups;
function checkRoleToActions(roles) {
    return (roles === null || roles === void 0 ? void 0 : roles.some(r => [0, 1, 2, 3].includes(r))) || false;
}
exports.checkRoleToActions = checkRoleToActions;
function responseUsersAdmin(res, option) {
    const ret = [
        { status: 422, msg: 'Disculpe, pero el miembro seleccionado es incorrecto.' },
        { status: 404, msg: 'Disculpe, pero el miembro seleccionado no existe.' },
        { status: 422, msg: 'Disculpe, pero el rol seleccionado es incorrecto.' },
        { status: 403, msg: 'Disculpe, pero no cuenta con privilegios para realizar esta acción.' },
    ];
    if (ret[option])
        return res.status(ret[option].status).json({
            msg: ret[option].msg
        });
    return res.status(500).json({
        msg: '¡Error desconocido!',
    });
}
exports.responseUsersAdmin = responseUsersAdmin;
function responseErrorsRecoveryPassword(res, option) {
    const ret = [
        { status: 404, msg: 'Disculpe, pero no se encontro la acción a realizar.' },
        { status: 422, msg: 'Disculpe, pero debe indicar un número de teléfono válido.' },
        { status: 404, msg: 'Disculpe, pero el número de teléfono indicado no existe o no se encuentra disponible.' },
        { status: 422, msg: 'Disculpe, pero no se recibieron los datos a validar.' },
        { status: 422, msg: 'Disculpe, pero debe indicar un correo electrónico válido.' },
        { status: 422, msg: 'Disculpe, pero el correo electrónico indicado no coincide con el de su cuenta.' },
        { status: 422, msg: 'Disculpe, pero debe indicar una fecha válida.' },
        { status: 422, msg: 'Disculpe, pero la fecha indicada no coincide con su fecha de cumpleaños de su cuenta.' },
        { status: 422, msg: 'Disculpe, pero la nueva contraseña debe contener letras (a-Z, A-Z), números (0-9) y al menos 6 caracteres.' },
    ];
    if (ret[option])
        return res.status(ret[option].status).json({
            msg: ret[option].msg
        });
    return res.status(500).json({
        msg: '¡Error desconocido!',
    });
}
exports.responseErrorsRecoveryPassword = responseErrorsRecoveryPassword;
