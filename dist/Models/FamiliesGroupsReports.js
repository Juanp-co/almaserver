"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const mongoose_1 = require("mongoose");
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const convertDateToTimestamp = (value) => value ? (0, moment_1.default)(value).tz('America/Bogota').unix() : null;
const ReportGroupSchema = new mongoose_1.Schema({
    brethren: { type: Number, default: 0 },
    friends: { type: Number, default: 0 },
    scheduledVisits: { type: Number, default: 0 },
    discipleshipVisits: { type: Number, default: 0 },
    christianChildren: { type: Number, default: 0 },
    christianChildrenFriends: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    offering: { type: Number, default: 0 },
    churchAttendance: { type: Number, default: 0 },
    churchAttendanceChildren: { type: Number, default: 0 },
    conversions: { type: Number, default: 0 },
    reconciliations: { type: Number, default: 0 },
    conversionsChildren: { type: Number, default: 0 },
    brethrenPlanning: { type: Number, default: 0 },
    bibleReading: { type: Number, default: 0 },
    consolidated: { type: Number, default: 0 },
    observations: { type: String, default: null, set: GlobalFunctions_1.toUpperValue },
    date: { type: String, require: true, set: convertDateToTimestamp, get: GlobalFunctions_1.getDate },
}, { _id: false, id: false });
const FamiliesGroupsReportsSchema = new mongoose_1.Schema({
    familyGroupId: { type: String, require: true },
    userid: { type: String, require: true },
    report: { type: ReportGroupSchema, default: { ReportGroupSchema } },
    created_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate },
    updated_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate }
}, { id: false });
FamiliesGroupsReportsSchema.pre('save', function (next) {
    this.updated_at = (0, GlobalFunctions_1.setDate)();
    next();
});
ReportGroupSchema.set('toJSON', { getters: true });
FamiliesGroupsReportsSchema.set('toJSON', { getters: true });
const FamiliesGroupsReports = (0, mongoose_1.model)('families_groups_reports', FamiliesGroupsReportsSchema);
exports.default = FamiliesGroupsReports;
