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
const Consolidates_1 = __importDefault(require("../../Models/Consolidates"));
const Users_1 = __importDefault(require("../../Models/Users"));
const path = 'Controllers/admin/users.admin.controller';
// =====================================================================================================================
async function getConsolidates(req, res) {
    try {
        const { initDate, endDate, input, value } = req.query;
        const query = {};
        const query2 = {};
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
        const consolidates = await Consolidates_1.default.find(query).sort(sort).exec();
        if (consolidates.length > 0) {
            const listIds = [];
            consolidates.forEach(c => {
                if (c.userid && !listIds.includes(c.userid))
                    listIds.push(c.userid);
                if (c.consolidatorId && !listIds.includes(c.consolidatorId))
                    listIds.push(c.consolidatorId);
            });
            // find all members
            ret.members = await Users_1.default.find({
                $or: [
                    { consolidatorId: { $ne: null }, ...query2 },
                    { _id: { $in: listIds || [] } }
                ]
            }, { names: 1, lastNames: 1, document: 1, gender: 1, phone: 1 }).exec();
            const listToCheck = [];
            let listIdsPending = [];
            for (const c of consolidates) {
                // add to list for the next check
                if (c.userid && !listToCheck.includes(c.userid))
                    listToCheck.push(c.userid);
                // check last visit and add or remove id from list
                if (moment_timezone_1.default().diff(moment_timezone_1.default(`${c.date}`, 'YYYY-MM-DD', true), 'months') >= 1) {
                    if (c.userid && !listIdsPending.includes(c.userid))
                        listIdsPending.push(c.userid);
                }
                else
                    listIdsPending = listIdsPending.filter(lip => lip !== c.userid);
                ret.consolidates.push({
                    _id: c._id,
                    consolidator: ret.members.find((m) => m._id.toString() === c.consolidatorId) || null,
                    member: ret.members.find((m) => m._id.toString() === c.userid) || null,
                    date: c.date,
                    observation: c.observation
                });
            }
            // check whats ids was not recived visits
            const idsMembers = ret.members.length > 0 ? ret.members.map((m) => m._id.toString()) : [];
            const diff = lodash_1.default.difference(idsMembers, listToCheck);
            ret.pendingVisits = lodash_1.default.uniq(listIdsPending.concat(diff || []));
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
        const { userid } = req.params;
        const validate = ConsolidatesFormRequest_1.default(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const consolidate = new Consolidates_1.default({
            consolidatorId: userid,
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
exports.saveConsolidateVisit = saveConsolidateVisit;
async function getConsolidatesMembers(req, res) {
    try {
        const members = await Users_1.default.find({ consolidatorId: { $ne: null } }, { names: 1, lastNames: 1, document: 1, gender: 1, phone: 1 }).exec();
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
