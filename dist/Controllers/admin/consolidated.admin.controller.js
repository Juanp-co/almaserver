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
        let query3 = null;
        let pending = false;
        const sort = {};
        const ret = {
            consolidates: [],
            members: [],
            pendingVisits: []
        };
        if (input && input === 'date') {
            sort.date = value && value === '1' ? 1 : -1;
        }
        if (initDate && Validations_1.checkDate(initDate)) {
            // get pending
            const compare = moment_timezone_1.default().startOf('d');
            pending = compare.diff(moment_timezone_1.default(`${initDate}`).startOf('d'), 'months') >= 1;
            query3 = {};
            query.date = { $gte: moment_timezone_1.default(`${initDate}`).startOf('d').unix() };
            query2.created_at = { $gte: moment_timezone_1.default(`${initDate}`).startOf('d').unix() };
            query3.date = { $lt: moment_timezone_1.default(`${initDate}`).startOf('d').subtract(1, 'months').endOf('d').unix() };
            if (Validations_1.checkDate(endDate)) {
                query.date.$lt = moment_timezone_1.default(`${endDate}`).endOf('d').unix();
                query2.created_at.$lt = moment_timezone_1.default(`${endDate}`).endOf('d').unix();
                query3.date = { $lt: moment_timezone_1.default(`${endDate}`).startOf('d').subtract(1, 'months').endOf('d').unix() };
            }
        }
        const consolidates = await Consolidates_1.default.find(query).sort(sort).exec();
        if (consolidates.length > 0) {
            const listIds = [];
            consolidates.forEach(c => {
                if (c.userid)
                    listIds.push(c.userid);
                if (c.consolidatorId)
                    listIds.push(c.consolidatorId);
            });
            // find all members
            ret.members = await Users_1.default.find({
                $or: [
                    { consolidatorId: { $ne: null }, ...query2 },
                    { _id: { $in: lodash_1.default.uniq(listIds) || [] } }
                ]
            }, { names: 1, lastNames: 1, document: 1, gender: 1, phone: 1 }).exec();
            let pendingForVisits = false;
            for (const c of consolidates) {
                if (!pendingForVisits) {
                    pendingForVisits = moment_timezone_1.default().diff(moment_timezone_1.default(`${c.date}`, 'DD-MM-YYYY', true), 'months') >= 1;
                }
                ret.consolidates.push({
                    _id: c._id,
                    consolidator: ret.members.find((m) => m._id.toString() === c.consolidatorId) || null,
                    member: ret.members.find((m) => m._id.toString() === c.userid) || null,
                    date: c.date,
                    observation: c.observation
                });
            }
            // check pendings for visits
            if (pending) {
                if (pendingForVisits) {
                    const list = await Consolidates_1.default.find(query3 || { date: { $lt: moment_timezone_1.default().startOf('d').subtract(1, 'months').endOf('d').unix() } }, { userid: 1 }).exec();
                    ret.pendingVisits = list.length > 0 ? lodash_1.default.uniq(list.map(l => l.userid)) : [];
                }
            }
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
