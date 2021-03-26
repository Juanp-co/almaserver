"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMemberReferred = exports.getReferrals = void 0;
const UsersActions_1 = require("../../ActionsData/UsersActions");
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const Validations_1 = require("../../Functions/Validations");
const Referrals_1 = __importDefault(require("../../Models/Referrals"));
const Users_1 = __importDefault(require("../../Models/Users"));
const ReferralsActions_1 = require("../../ActionsData/ReferralsActions");
const path = 'src/Controllers/publics/referrals.controller';
async function getReferrals(req, res) {
    try {
        const { userid } = req.params;
        const ret = {
            referred: null,
            totals: null,
            referrals: []
        };
        if (!Validations_1.checkObjectId(userid)) {
            return res.status(401).json({
                msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
            });
        }
        const data = await Referrals_1.default.findOne({ _id: userid }, { members: 1 }).exec();
        if (data) {
            ret.referrals = await UsersActions_1.getNamesUsersList(data.members);
            ret.totals += await ReferralsActions_1.getTotalsReferrals(data.members);
            for (const [index, value] of ret.referrals.entries()) {
                const refMembers = await Referrals_1.default.findOne({ _id: value._id }).exec();
                ret.referrals[index] = {
                    ...value,
                    totalsReferrals: refMembers ? refMembers.members.length : 0
                };
            }
            // get referred data
            const u = await Users_1.default.findOne({ _id: userid }, { referred: 1 }).exec();
            if (u && u.referred) {
                const list = await UsersActions_1.getNamesUsersList([u.referred]);
                if (list.length > 0) {
                    ret.referred = list[0] || null;
                }
            }
        }
        return res.json({
            msg: `Mis referidos.`,
            ...ret
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
        if (!Validations_1.checkObjectId(userid)) {
            return res.status(401).json({
                msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
            });
        }
        if (!Validations_1.checkObjectId(_id)) {
            return res.status(422).json({
                msg: 'Disculpe, pero el miembro seleccionado es incorrecto.'
            });
        }
        const checkMember = await Referrals_1.default.find({ _id: userid, members: _id }).countDocuments().exec();
        const checkMember2 = await Users_1.default.find({ _id: userid, referred: _id }).countDocuments().exec();
        if (checkMember === 0 && checkMember2 === 0) {
            return res.status(404).json({
                msg: 'Disculpe, pero no está autorizado para visualizar la información de este miembro.'
            });
        }
        const ret = await UsersActions_1.getInfoUserReferred(_id);
        if (!ret) {
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
        return GlobalFunctions_1.returnError(res, error, `${path}/getMemberReferred`);
    }
}
exports.getMemberReferred = getMemberReferred;
