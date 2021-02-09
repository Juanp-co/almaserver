"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsersActions_1 = require("../../ActionsData/UsersActions");
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const Validations_1 = require("../../Functions/Validations");
const Referrals_1 = __importDefault(require("../../Models/Referrals"));
const path = 'Controllers/publics/referrals.controller';
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
exports.default = getReferrals;
