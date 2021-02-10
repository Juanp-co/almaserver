"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMemberGroup = void 0;
const lodash_1 = __importDefault(require("lodash"));
const Referrals_1 = __importDefault(require("../../Models/Referrals"));
const Validations_1 = require("../../Functions/Validations");
const Users_1 = __importDefault(require("../../Models/Users"));
const CoursesUsers_1 = __importDefault(require("../../Models/CoursesUsers"));
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const UsersActions_1 = require("../../ActionsData/UsersActions");
const Groups_1 = __importDefault(require("../../Models/Groups"));
const path = 'src/Controllers/publics/groups.controller';
async function getGroup(req, res) {
    try {
        const { userid } = req.params;
        if (!Validations_1.checkObjectId(userid)) {
            return res.status(401).json({
                msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
            });
        }
        const data = await Groups_1.default.findOne({ members: userid }).exec();
        return res.json({
            msg: 'Mi grupo familiar',
            group: !data ?
                null :
                {
                    _id: data._id,
                    name: data.name,
                    code: data.code,
                    members: await UsersActions_1.getNamesUsersList(lodash_1.default.uniq(data.members || []), { names: 1, lastNames: 1, direction: 1 }),
                    created_at: data.created_at,
                    updated_at: data.updated_at,
                }
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getGroup`);
    }
}
exports.default = getGroup;
async function getMemberGroup(req, res) {
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
        const checkMember = await Groups_1.default.find({ members: { $eq: [userid, _id] } }).countDocuments().exec();
        if (checkMember === 0) {
            return res.status(404).json({
                msg: 'Disculpe, pero el miembro seleccionado no pertenece a su grupo familiar.'
            });
        }
        ret.member = await Users_1.default.findOne({ _id }, { names: 1, lastNames: 1, direction: 1, phone: 1 }).exec();
        if (!ret.member) {
            return res.status(404).json({
                msg: 'Disculpe, pero no se logró encontrar la información del miembro.'
            });
        }
        // get totals members referrals
        const referrals = await Referrals_1.default.findOne({ _id: ret.member._id }).exec();
        if (referrals) {
            ret.totalReferrals = referrals.members.length || 0;
        }
        // get totals courses
        ret.totalCourses = await CoursesUsers_1.default.find({ userid: ret.member._id.toString() }).countDocuments().exec();
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
