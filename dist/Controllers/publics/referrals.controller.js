"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveReferralVisit = exports.getMemberReferred = exports.saveReferral = exports.getReferrals = void 0;
const lodash_1 = __importDefault(require("lodash"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const UsersActions_1 = require("../../ActionsData/UsersActions");
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const Validations_1 = require("../../Functions/Validations");
const Referrals_1 = __importDefault(require("../../Models/Referrals"));
const Users_1 = __importDefault(require("../../Models/Users"));
const ReferralsActions_1 = require("../../ActionsData/ReferralsActions");
const UsersRequest_1 = require("../../FormRequest/UsersRequest");
const CoursesActions_1 = require("../../ActionsData/CoursesActions");
const Consolidates_1 = __importDefault(require("../../Models/Consolidates"));
const ConsolidatesFormRequest_1 = __importDefault(require("../../FormRequest/ConsolidatesFormRequest"));
const path = 'src/Controllers/publics/referrals.controller';
async function getReferrals(req, res) {
    try {
        const { userid } = req.params;
        const ret = {
            referred: null,
            totalsGroups: null,
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
            ret.referrals = lodash_1.default.sortBy(ret.referrals, ['names'], ['asc']);
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
        const user = await Users_1.default.findOne({ _id: userid }, { familyGroupId: 1 }).exec();
        ret.totalsGroups = user && user.familyGroupId ? (user.familyGroupId.length || 0) : 0;
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
async function saveReferral(req, res) {
    try {
        const { userid } = req.params;
        const validate = await UsersRequest_1.validateFormMemberRegisterFromUser(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        // set current id to referred
        if (validate.data.referred)
            validate.data.referred = userid;
        const user = new Users_1.default(validate.data);
        const password = 'alma1234'; // default password
        user.password = bcrypt_1.default.hashSync(password, 10);
        await user.save();
        const referrals = new Referrals_1.default({ _id: user._id });
        await referrals.save();
        // save currents courses
        await CoursesActions_1.addCoursesToUser(user._id.toString());
        // get my referrals
        const myReferrals = await Referrals_1.default.findOne({ _id: userid }).exec();
        if (myReferrals) {
            myReferrals.members.push(user._id.toString());
            await myReferrals.save();
        }
        return res.status(201).json({
            msg: `Se ha registrado el nuevo miebro exitosamente.`,
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/saveReferral`);
    }
}
exports.saveReferral = saveReferral;
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
        // get visits
        ret.visits = [];
        const visits = await Consolidates_1.default.find({ userid: _id }).sort({ date: -1, created_at: -1 }).exec();
        if (visits.length > 0) {
            const listIds = lodash_1.default.uniq(visits.map(v => v.referred));
            listIds.push(userid);
            const members = await UsersActions_1.getNamesUsersList(listIds) || [];
            for (const v of visits) {
                ret.visits.push({
                    consolidator: members.find((md) => md._id.toString() === v.referred) || null,
                    date: v.date || null,
                    observation: v.observation || null,
                });
            }
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
async function saveReferralVisit(req, res) {
    try {
        const { userid } = req.params;
        const validate = ConsolidatesFormRequest_1.default(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const consolidate = new Consolidates_1.default({
            referred: userid,
            userid: validate.data.userId,
            ...validate.data
        });
        await consolidate.save();
        return res.status(201).json({
            msg: `Se ha registrado la visita al consolidado exitosamente.`
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/saveVisit`);
    }
}
exports.saveReferralVisit = saveReferralVisit;
