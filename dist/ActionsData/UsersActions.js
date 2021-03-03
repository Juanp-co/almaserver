"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseUsersAdmin = exports.checkFindValueSearch = exports.getIdUserFromDocument = exports.getUserData = exports.updateGroupIdInUsers = exports.getNamesUsersList = exports.getData = exports.checkIfExistEmail = void 0;
const Validations_1 = require("../Functions/Validations");
const Users_1 = __importDefault(require("../Models/Users"));
const Referrals_1 = __importDefault(require("../Models/Referrals"));
const CoursesUsers_1 = __importDefault(require("../Models/CoursesUsers"));
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
            user.totals.totalsReferrals = await Referrals_1.default.find({ _id }).countDocuments().exec();
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
    console.log('query', query);
    return query;
}
exports.checkFindValueSearch = checkFindValueSearch;
function responseUsersAdmin(res, option) {
    let msg = '';
    let status = 500;
    switch (option) {
        case 0:
            msg = 'Disculpe, pero el usuario seleccionado es incorrecto.';
            status = 422;
            break;
        case 1:
            msg = 'Disculpe, pero el usuario seleccionado no existe.';
            status = 404;
            break;
        case 2:
            msg = 'Disculpe, pero el rol seleccionado es incorrecto.';
            status = 422;
            break;
        case 3:
            msg = 'Disculpe, pero no cuenta con privilegios para realizar esta acción.';
            status = 403;
            break;
        default:
            msg = 'Error desconocido';
    }
    return res.status(status).json({
        msg
    });
}
exports.responseUsersAdmin = responseUsersAdmin;
