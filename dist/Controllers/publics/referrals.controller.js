"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMemberReferred = exports.getReferrals = void 0;
const UsersActions_1 = require("../../ActionsData/UsersActions");
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const Validations_1 = require("../../Functions/Validations");
const CoursesUsers_1 = __importDefault(require("../../Models/CoursesUsers"));
const Referrals_1 = __importDefault(require("../../Models/Referrals"));
const Users_1 = __importDefault(require("../../Models/Users"));
const path = 'src/Controllers/publics/referrals.controller';
async function getReferrals(req, res) {
    try {
        const { userid } = req.params;
        let referrals = [];
        if (!Validations_1.checkObjectId(userid)) {
            return res.status(401).json({
                msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
            });
        }
        const data = await Referrals_1.default.findOne({ _id: userid }, { members: 1 }).exec();
        if (data)
            referrals = await UsersActions_1.getNamesUsersList(data.members);
        return res.json({
            msg: `Mis referidos.`,
            referrals
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getReferrals`);
    }
}
exports.getReferrals = getReferrals;
async function getMemberReferred(req, res) {
    try {
        const { userid, _id } = req.params;
        const ret = {
            member: null,
            totalReferrals: 0,
            totalCourses: 0
        };
        if (!Validations_1.checkObjectId(userid)) {
            return res.status(403).json({
                msg: 'Disculpe, pero no está autorizado para ver este contenido.'
            });
        }
        if (!Validations_1.checkObjectId(_id)) {
            return res.status(422).json({
                msg: 'Disculpe, pero el miembro seleccionado es incorrecto.'
            });
        }
        const checkMember = await Referrals_1.default.find({ _id: userid, members: _id }).countDocuments().exec();
        if (checkMember === 0) {
            return res.status(404).json({
                msg: 'Disculpe, pero el miembro seleccionado no pertenece a su grupo de hijos espirituales.'
            });
        }
        ret.member = await Users_1.default.findOne({ _id }, { names: 1, lastNames: 1, direction: 1, phone: 1, gender: 1 }).exec();
        if (!ret.member) {
            return res.status(404).json({
                msg: 'Disculpe, pero no se logró encontrar la información del miembro.'
            });
        }
        // get totals members referrals
        const referrals = await Referrals_1.default.findOne({ _id: ret.member._id }).exec();
        if (referrals)
            ret.totalReferrals = referrals.members.length || 0;
        // get totals courses
        ret.totalCourses = await CoursesUsers_1.default.find({ userid: ret.member._id.toString() }).countDocuments().exec();
        return res.json({
            msg: `Miembro.`,
            data: ret
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getMemberReferred`);
    }
}
exports.getMemberReferred = getMemberReferred;
