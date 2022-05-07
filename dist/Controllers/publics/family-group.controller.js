"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportsFamilyGroup = exports.saveFamilyGroupReport = exports.showFamilyGroup = exports.getFamiliesGroupsPublic = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const FamiliesGroupsReportsRequest_1 = __importDefault(require("../../FormRequest/FamiliesGroupsReportsRequest"));
const FamiliesGroupsActions_1 = __importStar(require("../../ActionsData/FamiliesGroupsActions"));
const FamiliesGroupsReports_1 = __importDefault(require("../../Models/FamiliesGroupsReports"));
const Validations_1 = require("../../Functions/Validations");
const FamiliesGroups_1 = __importDefault(require("../../Models/FamiliesGroups"));
const Users_1 = __importDefault(require("../../Models/Users"));
const path = 'Controllers/publics/family-group.controller';
async function getFamiliesGroups(req, res) {
    try {
        const { tokenId } = req.body;
        const ret = [];
        const user = await Users_1.default.findOne({ _id: tokenId }, { familyGroupId: 1 }).exec();
        if (!user)
            return (0, FamiliesGroupsActions_1.returnFamilyGroup404)(res);
        if (user.familyGroupId && user.familyGroupId.length > 0) {
            const groups = await FamiliesGroups_1.default.find({ _id: { $in: user.familyGroupId } }, { number: 1, sector: 1, subSector: 1, direction: 1, members: 1, location: 1, created_at: 1, })
                .sort({ sector: 1, subSector: 1, number: 1 })
                .exec();
            if (groups.length > 0) {
                groups.forEach(g => {
                    var _a;
                    ret.push({
                        _id: g._id,
                        number: g.number,
                        sector: g.sector,
                        subSector: g.subSector,
                        direction: g.direction,
                        location: g.location,
                        isLeader: ((_a = g === null || g === void 0 ? void 0 : g.members) === null || _a === void 0 ? void 0 : _a.leaderId) === tokenId,
                        created_at: g.created_at,
                    });
                });
            }
        }
        return res.json({
            msg: 'Grupos familiares',
            groups: ret
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getReports`);
    }
}
exports.default = getFamiliesGroups;
async function getFamiliesGroupsPublic(req, res) {
    try {
        const { sector, subSector, number, ignoreIds } = req.query;
        const { tokenId } = req.body;
        const query = {};
        const ret = [];
        if (/[0-9]{1,3}/.test(`${sector}`))
            query.sector = Number.parseInt(`${sector}`, 10);
        if (/[0-9]{1,3}/.test(`${subSector}`))
            query.subSector = Number.parseInt(`${subSector}`, 10);
        if (/[0-9]{1,3}/.test(`${number}`))
            query.number = Number.parseInt(`${number}`, 10);
        if (ignoreIds) {
            const list = `${ignoreIds}`.split(',') || [];
            if (list.length > 0) {
                const ignores = [];
                list.forEach((l) => { if ((0, Validations_1.checkObjectId)(l))
                    ignores.push(l); });
                if (ignores.length > 0)
                    query._id = { $nin: ignores };
            }
        }
        const familiesGroups = await FamiliesGroups_1.default.find(query, { number: 1, sector: 1, subSector: 1, direction: 1, location: 1, members: 1 })
            .sort({ sector: 1, subSector: 1, number: 1 })
            .exec();
        if (familiesGroups.length > 0) {
            familiesGroups.forEach((fg) => {
                var _a;
                ret.push({
                    _id: fg._id,
                    number: fg.number,
                    sector: fg.sector,
                    subSector: fg.subSector,
                    direction: fg.direction,
                    location: fg.location,
                    isLeader: ((_a = fg.members) === null || _a === void 0 ? void 0 : _a.leaderId) === tokenId,
                    created_at: fg.created_at,
                });
            });
        }
        return res.json({
            msg: 'Grupos familiares',
            groups: ret
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getReports`);
    }
}
exports.getFamiliesGroupsPublic = getFamiliesGroupsPublic;
async function showFamilyGroup(req, res) {
    try {
        const { _id } = req.params;
        const { tokenId } = req.body;
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, FamiliesGroupsActions_1.returnErrorId)(res);
        if (!(await (0, FamiliesGroupsActions_1.checkIfUsersBelowAtFamilyGroup)(tokenId, _id)))
            return (0, FamiliesGroupsActions_1.returnFamilyGroup404)(res);
        const group = await FamiliesGroups_1.default.findOne({ _id }).exec();
        if (!group)
            return (0, FamiliesGroupsActions_1.return404)(res);
        return res.json({
            msg: 'Grupo Familiar',
            group: await (0, FamiliesGroupsActions_1.default)(group)
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getReports`);
    }
}
exports.showFamilyGroup = showFamilyGroup;
async function saveFamilyGroupReport(req, res) {
    try {
        const { _id } = req.params;
        const { tokenId } = req.body;
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, FamiliesGroupsActions_1.returnErrorId)(res);
        if (!(await (0, FamiliesGroupsActions_1.checkIfUsersBelowAtFamilyGroup)(tokenId, _id)))
            return (0, FamiliesGroupsActions_1.returnFamilyGroup404)(res);
        const validate = (0, FamiliesGroupsReportsRequest_1.default)(req.body);
        if (validate.errors.length > 0)
            return (0, GlobalFunctions_1.returnErrorParams)(res, validate.errors);
        const r = new FamiliesGroupsReports_1.default({
            familyGroupId: _id,
            userid: tokenId,
            report: { ...validate.data }
        });
        await r.save();
        return res.status(201).json({
            msg: 'Se ha agregado el reporte exitosamente.',
            report: r.report
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/saveReport`);
    }
}
exports.saveFamilyGroupReport = saveFamilyGroupReport;
async function reportsFamilyGroup(req, res) {
    try {
        const { _id } = req.params;
        const { tokenId } = req.body;
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, FamiliesGroupsActions_1.returnErrorId)(res);
        if (!(await (0, FamiliesGroupsActions_1.checkIfUsersBelowAtFamilyGroup)(tokenId, _id)))
            return (0, FamiliesGroupsActions_1.returnFamilyGroup404)(res);
        const { initDate, endDate } = req.query;
        const query = { familyGroupId: _id };
        if (initDate && (0, Validations_1.checkDate)(initDate)) {
            query['report.date'] = { $gte: (0, moment_timezone_1.default)(`${initDate}`).startOf('d').unix() };
            if ((0, Validations_1.checkDate)(endDate))
                query['report.date'].$lt = (0, moment_timezone_1.default)(`${endDate}`).endOf('d').unix();
        }
        const data = await (0, FamiliesGroupsActions_1.getReportsFamilyGroup)(query);
        return res.json({
            msg: 'Reporte del grupo familiar',
            data
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/reportsFamilyGroup`);
    }
}
exports.reportsFamilyGroup = reportsFamilyGroup;
