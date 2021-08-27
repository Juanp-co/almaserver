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
        let ret = [];
        const user = await Users_1.default.findOne({ _id: tokenId }, { familyGroupId: 1 }).exec();
        if (!user)
            return FamiliesGroupsActions_1.returnFamilyGroup404(res);
        if (user.familyGroupId && user.familyGroupId.length > 0) {
            ret = await FamiliesGroups_1.default.find({ _id: { $in: user.familyGroupId } }, { number: 1, sector: 1, subSector: 1, direction: 1, location: 1, created_at: 1, })
                .sort({ sector: 1, subSector: 1, number: 1 })
                .exec();
        }
        return res.json({
            msg: 'Grupos familiares',
            groups: ret
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getReports`);
    }
}
exports.default = getFamiliesGroups;
async function getFamiliesGroupsPublic(req, res) {
    try {
        const { sector, subSector, number } = req.query;
        const query = {};
        if (/[0-9]{1,3}/.test(`${sector}`))
            query.sector = Number.parseInt(`${sector}`, 10);
        if (/[0-9]{1,3}/.test(`${subSector}`))
            query.subSector = Number.parseInt(`${subSector}`, 10);
        if (/[0-9]{1,3}/.test(`${number}`))
            query.number = Number.parseInt(`${number}`, 10);
        const ret = await FamiliesGroups_1.default.find(query, { number: 1, sector: 1, subSector: 1, direction: 1, location: 1 })
            .sort({ sector: 1, subSector: 1, number: 1 })
            .exec();
        return res.json({
            msg: 'Grupos familiares',
            groups: ret
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getReports`);
    }
}
exports.getFamiliesGroupsPublic = getFamiliesGroupsPublic;
async function showFamilyGroup(req, res) {
    try {
        const { _id } = req.params;
        const { tokenId } = req.body;
        if (!Validations_1.checkObjectId(_id))
            return FamiliesGroupsActions_1.returnErrorId(res);
        if (!(await FamiliesGroupsActions_1.checkIfUsersBelowAtFamilyGroup(tokenId, _id)))
            return FamiliesGroupsActions_1.returnFamilyGroup404(res);
        const group = await FamiliesGroups_1.default.findOne({ _id }).exec();
        if (!group)
            return FamiliesGroupsActions_1.return404(res);
        return res.json({
            msg: 'Grupo Familiar',
            group: await FamiliesGroupsActions_1.default(group)
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getReports`);
    }
}
exports.showFamilyGroup = showFamilyGroup;
async function saveFamilyGroupReport(req, res) {
    try {
        const { _id } = req.params;
        const { tokenId } = req.body;
        if (!Validations_1.checkObjectId(_id))
            return FamiliesGroupsActions_1.returnErrorId(res);
        if (!(await FamiliesGroupsActions_1.checkIfUsersBelowAtFamilyGroup(tokenId, _id)))
            return FamiliesGroupsActions_1.returnFamilyGroup404(res);
        const validate = FamiliesGroupsReportsRequest_1.default(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
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
        return GlobalFunctions_1.returnError(res, error, `${path}/saveReport`);
    }
}
exports.saveFamilyGroupReport = saveFamilyGroupReport;
async function reportsFamilyGroup(req, res) {
    try {
        const { _id } = req.params;
        const { tokenId } = req.body;
        if (!Validations_1.checkObjectId(_id))
            return FamiliesGroupsActions_1.returnErrorId(res);
        if (!(await FamiliesGroupsActions_1.checkIfUsersBelowAtFamilyGroup(tokenId, _id)))
            return FamiliesGroupsActions_1.returnFamilyGroup404(res);
        const { initDate, endDate } = req.query;
        const query = {};
        if (initDate && Validations_1.checkDate(initDate)) {
            query['report.date'] = { $gte: moment_timezone_1.default(`${initDate}`).startOf('d').unix() };
            if (Validations_1.checkDate(endDate))
                query['report.date'].$lt = moment_timezone_1.default(`${endDate}`).endOf('d').unix();
        }
        const data = await FamiliesGroupsActions_1.getReportsFamilyGroup(query);
        return res.json({
            msg: 'Reporte del grupo familiar',
            data
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/reportsFamilyGroup`);
    }
}
exports.reportsFamilyGroup = reportsFamilyGroup;
