"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseErrorsRecoveryPassword = exports.responseUsersAdmin = exports.checkRoleToActions = exports.checkFindValueSearch = exports.getIdUserFromDocument = exports.getUserData = exports.updateGroupIdInUsers = exports.getNamesUsersList = exports.getData = exports.checkIfExistEmail = void 0;
const Validations_1 = require("../Functions/Validations");
const Users_1 = __importDefault(require("../Models/Users"));
const Referrals_1 = __importDefault(require("../Models/Referrals"));
const CoursesUsers_1 = __importDefault(require("../Models/CoursesUsers"));
const ReferralsActions_1 = require("./ReferralsActions");
async function checkIfExistDocument(document, _id) {
    return document ?
        (await Users_1.default.find({ document, _id: { $ne: _id } })
            .countDocuments()
            .exec()) > 0
        : false;
}
exports.default = checkIfExistDocument;
async function checkIfExistEmail(email, _id) {
    return email ?
        (await Users_1.default.find({ email, _id: { $ne: _id } })
            .countDocuments()
            .exec()) > 0
        : false;
}
exports.checkIfExistEmail = checkIfExistEmail;
async function getData(_id, projection = null) {
    return _id ?
        Users_1.default.findOne({ _id }, projection || { __v: 0, password: 0 }).exec()
        : null;
}
exports.getData = getData;
async function getNamesUsersList(listIds, projection = null) {
    return listIds.length > 0 ?
        Users_1.default.find({ _id: { $in: listIds } }, projection || { names: 1, lastNames: 1, document: 1, gender: 1, phone: 1 }).exec()
        : [];
}
exports.getNamesUsersList = getNamesUsersList;
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
                password: data.password,
                names: data.names,
                lastNames: data.lastNames,
                gender: data.gender,
                birthday: data.birthday,
                civilStatus: data.civilStatus,
                educationLevel: data.educationLevel,
                profession: data.profession,
                bloodType: data.bloodType,
                company: data.company,
                companyType: data.companyType,
                baptized: data.baptized,
                role: data.role,
                referred: data.referred,
                department: data.department,
                city: data.city,
                locality: data.locality,
                direction: data.direction,
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
                user.totals.totalsReferrals = await ReferralsActions_1.getTotalsReferrals(referrals.members);
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
/*
  Static functions
 */
function checkFindValueSearch(query, value) {
    if (value) {
        if (Validations_1.checkNameOrLastName(value)) {
            const pattern = value ? value.toString().trim().replace(' ', '|') : null;
            if (pattern) {
                query = {
                    ...query,
                    ...{
                        $or: [
                            { names: { $regex: new RegExp(`(${pattern})`, 'i') } },
                            { lastNames: { $regex: new RegExp(`(${pattern})`, 'i') } },
                        ]
                    }
                };
            }
        }
        else
            query.document = { $regex: new RegExp(`${value}`.toUpperCase(), 'i') };
    }
    return query;
}
exports.checkFindValueSearch = checkFindValueSearch;
function checkRoleToActions(role) {
    if (!/[01]{1}/.test(`${role}`))
        return false;
    return ['0', '1'].indexOf(`${role}`) > -1;
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
        { status: 422, msg: 'Disculpe, pero debe indicar un número de documento válido.' },
        { status: 404, msg: 'Disculpe, pero el número de documento indicado no existe o no se encuentra disponible.' },
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
