"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeReferral = exports.saveReferralVisit = exports.getMemberReferred = exports.saveReferral = exports.getReferrals = void 0;
const lodash_1 = __importDefault(require("lodash"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const CoursesActions_1 = require("../../ActionsData/CoursesActions");
const ReferralsActions_1 = require("../../ActionsData/ReferralsActions");
const UsersActions_1 = require("../../ActionsData/UsersActions");
const ConsolidatesFormRequest_1 = __importDefault(require("../../FormRequest/ConsolidatesFormRequest"));
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const Validations_1 = require("../../Functions/Validations");
const UsersRequest_1 = require("../../FormRequest/UsersRequest");
const Referrals_1 = __importDefault(require("../../Models/Referrals"));
const Users_1 = __importDefault(require("../../Models/Users"));
const Visits_1 = __importDefault(require("../../Models/Visits"));
const TokenActions_1 = require("../../Functions/TokenActions");
const path = 'Controllers/publics/referrals.controller';
async function getReferrals(req, res) {
    try {
        const { tokenId } = req.body;
        const ret = {
            referred: null,
            totalsGroups: null,
            totals: null,
            referrals: []
        };
        const data = await Referrals_1.default.findOne({ _id: tokenId }, { members: 1 }).exec();
        if (data) {
            ret.referrals = await (0, UsersActions_1.getNamesUsersList)(data.members);
            ret.referrals = lodash_1.default.sortBy(ret.referrals, ['names'], ['asc']);
            ret.totals += await (0, ReferralsActions_1.getTotalsReferrals)(data.members);
            for (const [index, value] of ret.referrals.entries()) {
                const refMembers = await Referrals_1.default.findOne({ _id: value._id }).exec();
                ret.referrals[index] = {
                    ...value,
                    totalsReferrals: refMembers ? refMembers.members.length : 0
                };
            }
            // get referred data
            const u = await Users_1.default.findOne({ _id: tokenId }, { referred: 1 }).exec();
            if (u && u.referred) {
                const list = await (0, UsersActions_1.getNamesUsersList)([u.referred]);
                if (list.length > 0) {
                    ret.referred = list[0] || null;
                }
            }
        }
        const user = await Users_1.default.findOne({ _id: tokenId }, { familyGroupId: 1 }).exec();
        ret.totalsGroups = user && user.familyGroupId ? (user.familyGroupId.length || 0) : 0;
        return res.json({
            msg: `Mis referidos.`,
            ...ret
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getReferrals`);
    }
}
exports.getReferrals = getReferrals;
async function saveReferral(req, res) {
    try {
        const { tokenId } = req.body;
        const { consolidates } = req.query;
        const validate = await (0, UsersRequest_1.validateFormMemberRegisterFromUser)(req.body);
        if (validate.errors.length > 0)
            return (0, GlobalFunctions_1.returnErrorParams)(res, validate.errors);
        // set current id to referred
        if (!validate.data.referred && !consolidates)
            validate.data.referred = tokenId;
        const user = new Users_1.default(validate.data);
        const password = 'alma1234'; // default password
        user.password = bcrypt_1.default.hashSync(password, 10);
        await user.save();
        const referrals = new Referrals_1.default({ _id: user._id });
        await referrals.save();
        // save currents courses
        await (0, CoursesActions_1.addCoursesToUser)(user._id.toString());
        // get referrals
        const _id = user.referred || (consolidates === 'true' ? null : tokenId);
        if (_id) {
            let referreds = await Referrals_1.default.findOne({ _id }).exec();
            if (referreds) {
                referreds.members.push(user._id.toString());
                await referreds.save();
            }
            else {
                referreds = new Referrals_1.default({
                    _id,
                    members: [user.referred]
                });
                await referreds.save();
            }
        }
        return res.status(201).json({
            msg: `Se ha registrado el nuevo ${consolidates === 'true' ? 'consolidado' : 'miembro'} exitosamente.`,
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/saveReferral`);
    }
}
exports.saveReferral = saveReferral;
async function getMemberReferred(req, res) {
    try {
        const { _id } = req.params;
        const { tokenId, tokenRoles } = req.body;
        if (!(0, Validations_1.checkObjectId)(_id)) {
            return res.status(422).json({
                msg: 'Disculpe, pero el miembro seleccionado es incorrecto.'
            });
        }
        if (!(0, GlobalFunctions_1.checkIfExistsRoleInList)(tokenRoles, [0, 1, 2])) {
            const checkMember = await Referrals_1.default.find({ _id: tokenId, members: _id }).countDocuments().exec();
            const checkMember2 = await Users_1.default.find({ _id: tokenId, referred: _id }).countDocuments().exec();
            if (checkMember === 0 && checkMember2 === 0) {
                return res.status(404).json({
                    msg: 'Disculpe, pero no está autorizado para visualizar la información de este miembro.'
                });
            }
        }
        const ret = await (0, UsersActions_1.getInfoUserReferred)(_id);
        if (!ret) {
            return res.status(404).json({
                msg: 'Disculpe, pero no se logró encontrar la información solicitada.'
            });
        }
        // get visits
        ret.visits = [];
        const visits = await Visits_1.default.find({ userid: _id }).sort({ date: -1, created_at: -1 }).exec();
        if (visits.length > 0) {
            const listIds = lodash_1.default.uniq(visits.map(v => v.referred));
            listIds.push(tokenId);
            const members = await (0, UsersActions_1.getNamesUsersList)(listIds) || [];
            for (const v of visits) {
                const consolidator = members.find((md) => md._id.toString() === v.referred) || null;
                if (consolidator) {
                    ret.visits.push({
                        consolidator,
                        date: v.date || null,
                        observation: v.observation || null,
                        action: v.action || null,
                    });
                }
            }
        }
        return res.json({
            msg: `Miembro.`,
            data: ret
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getMemberReferred`);
    }
}
exports.getMemberReferred = getMemberReferred;
async function saveReferralVisit(req, res) {
    try {
        const { tokenId } = req.body;
        const validate = (0, ConsolidatesFormRequest_1.default)(req.body);
        if (validate.errors.length > 0)
            return (0, GlobalFunctions_1.returnErrorParams)(res, validate.errors);
        const consolidate = new Visits_1.default({
            referred: validate.data.visitor || tokenId,
            userid: validate.data.userId,
            ...validate.data
        });
        await consolidate.save();
        return res.status(201).json({
            msg: `Se ha registrado la visita al consolidado exitosamente.`
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/saveVisit`);
    }
}
exports.saveReferralVisit = saveReferralVisit;
async function removeReferral(req, res) {
    try {
        const { tokenId } = req.body;
        const { _id } = req.params;
        const referrals = await Referrals_1.default.findOne({ _id: tokenId }).exec();
        // logout
        if (!referrals)
            return (0, TokenActions_1.forceLogout)(res, `${req.query.token}`);
        referrals.members = referrals.members.filter(m => m !== _id);
        const user = await Users_1.default.findOne({ _id }, { referred: 1 }).exec();
        if (user) {
            user.referred = null;
            await user.save();
        }
        await referrals.save();
        return res.status(200).json({
            msg: `Se ha removido el hijo espiritual exitosamente.`,
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/removeReferral`);
    }
}
exports.removeReferral = removeReferral;
