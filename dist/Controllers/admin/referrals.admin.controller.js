"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReferralsActions_1 = __importDefault(require("../../ActionsData/ReferralsActions"));
const UsersActions_1 = require("../../ActionsData/UsersActions");
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const Validations_1 = require("../../Functions/Validations");
const Referrals_1 = __importDefault(require("../../Models/Referrals"));
const path = 'Controllers/admin/referrals.admin.controller';
async function getReferrals(req, res) {
    try {
        const { _id } = req.params;
        const ret = {
            user: null,
            totals: 0,
            members: []
        };
        if (!Validations_1.checkObjectId(_id)) {
            return res.status(401).json({
                msg: 'Disculpe, pero el miembro seleccionado es incorrecto.'
            });
        }
        const user = await UsersActions_1.getData(_id, { _id: 1, names: 1, lastNames: 1, document: 1, referred: 1, gender: 1 });
        if (!user) {
            return res.status(404).json({
                msg: 'Disculpe, pero el miembro seleccionado no existe.'
            });
        }
        ret.user = Object.assign({}, user._doc);
        if (ret.user.referred && Validations_1.checkObjectId(ret.user.referred)) {
            ret.user.referred = await UsersActions_1.getData(ret.user.referred, { _id: 1, names: 1, lastNames: 1, document: 1, phone: 1, gender: 1 });
        }
        else
            ret.user.referred = null;
        const data = await Referrals_1.default.findOne({ _id }, { members: 1 }).exec();
        if (data) {
            ret.members = await ReferralsActions_1.default(data.members);
            ret.totals = ret.members.length;
        }
        return res.json({
            msg: `Listado de referidos.`,
            data: ret
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getReferrals`);
    }
}
exports.default = getReferrals;
