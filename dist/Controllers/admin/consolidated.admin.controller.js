"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConsolidatesMembers = exports.saveConsolidateVisit = void 0;
const lodash_1 = __importDefault(require("lodash"));
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const ConsolidatesFormRequest_1 = __importDefault(require("../../FormRequest/ConsolidatesFormRequest"));
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const Validations_1 = require("../../Functions/Validations");
const Users_1 = __importDefault(require("../../Models/Users"));
const Visits_1 = __importDefault(require("../../Models/Visits"));
const path = 'Controllers/admin/consolidated.admin.controller';
// =====================================================================================================================
async function getConsolidates(req, res) {
    try {
        const { tokenId } = req.params;
        const { initDate, endDate, input, value } = req.query;
        const query = {};
        const query2 = { referred: { $ne: null }, consolidated: { $ne: false } };
        const sort = {};
        const ret = {
            consolidates: [],
            members: [],
            pendingVisits: []
        };
        if (input && input === 'date')
            sort.date = value && value === '1' ? 1 : -1;
        if (initDate && Validations_1.checkDate(initDate)) {
            query.date = { $gte: moment_timezone_1.default(`${initDate}`).startOf('d').unix() };
            query2.created_at = { $gte: moment_timezone_1.default(`${initDate}`).startOf('d').unix() };
            if (Validations_1.checkDate(endDate)) {
                query.date.$lt = moment_timezone_1.default(`${endDate}`).endOf('d').unix();
                query2.created_at.$lt = moment_timezone_1.default(`${endDate}`).endOf('d').unix();
            }
        }
        const members = await Users_1.default.find({ referred: { $ne: null }, ...query }).exec();
        const visits = await Visits_1.default.find(query).sort(sort).exec();
        if (members.length > 0) {
            const listIds = [tokenId];
            if (members) {
                members.forEach(c => {
                    if (!listIds.includes(c._id.toString()))
                        listIds.push(c._id.toString());
                    if (c.referred && !listIds.includes(c.referred))
                        listIds.push(c.referred);
                });
            }
            if (visits) {
                visits.forEach(v => {
                    if (v.referred && !listIds.includes(v.referred))
                        listIds.push(v.referred);
                    if (v.userid && !listIds.includes(v.userid))
                        listIds.push(v.userid);
                });
            }
            // find all members
            ret.members = await Users_1.default.find({ $or: [query2, { _id: { $in: listIds || [] } }] }, { names: 1, lastNames: 1, document: 1, gender: 1, phone: 1, picture: 1, position: 1 })
                .sort({ names: 1 })
                .exec();
            const listToCheck = [];
            let listIdsPending = [];
            for (const v of visits) {
                // add to list for the next check
                if (v.userid && !listToCheck.includes(v.userid))
                    listToCheck.push(v.userid);
                if (moment_timezone_1.default().diff(moment_timezone_1.default(`${v.date}`, 'YYYY-MM-DD', true), 'months') >= 1) {
                    if (v.userid && !listIdsPending.includes(v.userid))
                        listIdsPending.push(v.userid);
                }
                else
                    listIdsPending = listIdsPending.filter(lip => lip !== v.userid);
                const consolidator = ret.members.find((md) => md._id.toString() === v.referred) || null;
                const member = ret.members.find((md) => md._id.toString() === v.userid) || null;
                if (member && consolidator) {
                    ret.consolidates.push({
                        consolidator,
                        member,
                        date: v.date || null,
                        observation: v.observation || null,
                        action: v.action || 'Visita',
                    });
                }
            }
            for (const m of members) {
                // add to list for the next check
                if (!listToCheck.includes(m._id.toString()))
                    listToCheck.push(m._id.toString());
            }
            // check whats ids was not recived visits
            const idsMembers = ret.members.length > 0 ? ret.members.map((m) => m._id.toString()) : [];
            const diff = lodash_1.default.difference(idsMembers, listToCheck);
            ret.pendingVisits = lodash_1.default.uniq(listIdsPending.concat(diff || []));
            ret.pendingVisits = ret.pendingVisits.filter((pv) => pv !== tokenId);
        }
        return res.json({
            msg: `Consolidaciones.`,
            data: ret
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getConsolidates`);
    }
}
exports.default = getConsolidates;
async function saveConsolidateVisit(req, res) {
    try {
        const { tokenId } = req.body;
        const validate = ConsolidatesFormRequest_1.default(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const visit = new Visits_1.default({
            referred: tokenId,
            userid: validate.data.userId,
            ...validate.data
        });
        await visit.save();
        return res.status(201).json({
            msg: `Se ha registrado la visita al consolidado exitosamente.`
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/saveVisit`);
    }
}
exports.saveConsolidateVisit = saveConsolidateVisit;
async function getConsolidatesMembers(req, res) {
    try {
        const members = await Users_1.default.find({ referred: { $ne: null }, consolidated: { $ne: false } }, { names: 1, lastNames: 1, document: 1, gender: 1, phone: 1, position: 1, picture: 1 })
            .sort({ names: 1 })
            .exec();
        return res.json({
            msg: `Miembros`,
            members
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getConsolidatesMembers`);
    }
}
exports.getConsolidatesMembers = getConsolidatesMembers;
