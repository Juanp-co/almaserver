"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnFamilyGroup404 = exports.return404 = exports.returnErrorId = exports.getReportsFamilyGroup = exports.checkIfUsersBelowAtFamilyGroup = exports.getQueryParamsList = exports.checkIfExistsGroup = exports.checkIfMembersWasChanged = exports.getModelFamiliesGroupsMembersDetails = exports.getUsersIdsList = void 0;
const UsersActions_1 = require("./UsersActions");
const FamiliesGroups_1 = __importDefault(require("../Models/FamiliesGroups"));
const FamiliesGroupsReports_1 = __importDefault(require("../Models/FamiliesGroupsReports"));
const Users_1 = __importDefault(require("../Models/Users"));
function getUsersIdsList(members) {
    const listIds = [];
    if (members.leaderId)
        listIds.push(members.leaderId);
    if (members.hostId)
        listIds.push(members.hostId);
    if (members.assistantId)
        listIds.push(members.assistantId);
    if (members.masterId)
        listIds.push(members.masterId);
    return listIds;
}
exports.getUsersIdsList = getUsersIdsList;
async function getModelFamiliesGroupsDetails(data) {
    if (!data)
        return null;
    // getNamesUsersList
    const listIds = getUsersIdsList(data.members);
    let members = null;
    if (listIds.length > 0) {
        members = await UsersActions_1.getNamesUsersList(listIds);
    }
    const ret = {};
    ret._id = data._id;
    // ret.name = data.name;
    ret.number = data.number;
    ret.direction = data.direction;
    ret.sector = data.sector;
    ret.subSector = data.subSector;
    ret.members = {
        leader: members ? (members.find(m => m._id.toString() === data.members.leaderId) || null) : null,
        host: members ? (members.find(m => m._id.toString() === data.members.hostId) || null) : null,
        assistant: members ? (members.find(m => m._id.toString() === data.members.assistantId) || null) : null,
        master: members ? (members.find(m => m._id.toString() === data.members.masterId) || null) : null,
    };
    ret.created_at = data.created_at;
    ret.updated_at = data.updated_at;
    return ret;
}
exports.default = getModelFamiliesGroupsDetails;
async function getModelFamiliesGroupsMembersDetails(data) {
    if (!data)
        return null;
    const listIds = getUsersIdsList(data); // getNamesUsersList
    const membersLists = await UsersActions_1.getNamesUsersList(listIds || []);
    return {
        leader: membersLists.find((m) => m._id.toString() === data.leaderId) || null,
        host: membersLists.find((m) => m._id.toString() === data.hostId) || null,
        assistant: membersLists.find((m) => m._id.toString() === data.assistantId) || null,
        master: membersLists.find((m) => m._id.toString() === data.masterId) || null,
    };
}
exports.getModelFamiliesGroupsMembersDetails = getModelFamiliesGroupsMembersDetails;
function checkIfMembersWasChanged(currentMembers, newMembers) {
    let totals = 0;
    if (currentMembers.leaderId !== newMembers.leaderId)
        totals++;
    if (currentMembers.hostId !== newMembers.hostId)
        totals++;
    if (currentMembers.assistantId !== newMembers.assistantId)
        totals++;
    if (currentMembers.masterId !== newMembers.masterId)
        totals++;
    return totals;
}
exports.checkIfMembersWasChanged = checkIfMembersWasChanged;
async function checkIfExistsGroup(query = {}) {
    const check = await FamiliesGroups_1.default.find(query).countDocuments().exec();
    return check > 0;
}
exports.checkIfExistsGroup = checkIfExistsGroup;
function getQueryParamsList(data) {
    const query = {};
    if (/[0-9]{1}/.test(`${data.sector}`))
        query.sector = data.sector;
    if (/[0-9]{1}/.test(`${data.subSector}`))
        query.subSector = data.subSector;
    if (/[0-9]{1}/.test(`${data.number}`))
        query.number = data.number;
    return query;
}
exports.getQueryParamsList = getQueryParamsList;
// Families Groups
async function checkIfUsersBelowAtFamilyGroup(_id, familyGroupId) {
    const user = await Users_1.default.findOne({ _id }, { familyGroupId: 1 }).exec();
    if (!user)
        return false;
    return (user.familyGroupId && user.familyGroupId.findIndex(fg => fg === familyGroupId) > -1);
}
exports.checkIfUsersBelowAtFamilyGroup = checkIfUsersBelowAtFamilyGroup;
async function getReportsFamilyGroup(query) {
    const ret = {
        report: {
            brethren: 0,
            friends: 0,
            scheduledVisits: 0,
            discipleshipVisits: 0,
            christianChildren: 0,
            christianChildrenFriends: 0,
            total: 0,
            offering: 0,
            churchAttendance: 0,
            churchAttendanceChildren: 0,
            conversions: 0,
            reconciliations: 0,
            conversionsChildren: 0,
            brethrenPlanning: 0,
            bibleReading: 0,
            consolidated: 0,
        },
        observations: []
    };
    const reports = await FamiliesGroupsReports_1.default.find(query, { report: 1 }).exec();
    for (const r of reports) {
        ret.report.brethren += r.report.brethren;
        ret.report.friends += r.report.friends;
        ret.report.scheduledVisits += r.report.scheduledVisits;
        ret.report.discipleshipVisits += r.report.discipleshipVisits;
        ret.report.christianChildren += r.report.christianChildren;
        ret.report.christianChildrenFriends += r.report.christianChildrenFriends;
        ret.report.total += r.report.total;
        ret.report.offering += r.report.offering;
        ret.report.churchAttendance += r.report.churchAttendance;
        ret.report.churchAttendanceChildren += r.report.churchAttendanceChildren;
        ret.report.conversions += r.report.conversions;
        ret.report.reconciliations += r.report.reconciliations;
        ret.report.conversionsChildren += r.report.conversionsChildren;
        ret.report.brethrenPlanning += r.report.brethrenPlanning;
        ret.report.bibleReading += r.report.bibleReading;
        ret.report.consolidated += r.report.consolidated;
        ret.observations.push({
            observations: r.report.observations,
            date: r.report.date,
        });
    }
    return ret;
}
exports.getReportsFamilyGroup = getReportsFamilyGroup;
// responses
function returnErrorId(res) {
    return res.status(422).json({
        msg: `Disculpe, pero el grupo seleccionado es incorrecto.`,
    });
}
exports.returnErrorId = returnErrorId;
function return404(res) {
    return res.status(404).json({
        msg: `Disculpe, pero el grupo seleccionado no existe o no se encuentra disponible.`,
    });
}
exports.return404 = return404;
function returnFamilyGroup404(res) {
    return res.status(404).json({
        msg: `Disculpe, pero usted no pertenece a ningún grupo familiar.`,
    });
}
exports.returnFamilyGroup404 = returnFamilyGroup404;
