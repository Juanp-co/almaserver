"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnFamilyGroup404 = exports.return404 = exports.returnErrorId = exports.getReportsFamilyGroup = exports.checkIfUsersBelowAtFamilyGroup = exports.getQueryParamsList = exports.checkIfExistsGroup = exports.checkIfMembersWasChanged = exports.getModelFamiliesGroupsMembersDetails = exports.setDataMembersGroup = exports.getUsersIdsList = void 0;
const UsersActions_1 = require("./UsersActions");
const FamiliesGroups_1 = __importDefault(require("../Models/FamiliesGroups"));
const FamiliesGroupsReports_1 = __importDefault(require("../Models/FamiliesGroupsReports"));
const Users_1 = __importDefault(require("../Models/Users"));
function getUsersIdsList(members) {
    let listIds = [];
    if (members.leaderId)
        listIds.push(members.leaderId);
    if (members.hostId)
        listIds.push(members.hostId);
    if (members.helperId)
        listIds.push(members.helperId);
    if (members.masterId)
        listIds.push(members.masterId);
    if (members.assistantsIds)
        listIds = listIds.concat(members.assistantsIds);
    return listIds;
}
exports.getUsersIdsList = getUsersIdsList;
function setDataMembersGroup(members, data) {
    const ret = {
        leader: null,
        host: null,
        helper: null,
        master: null,
        assistants: [],
    };
    if (members.length > 0) {
        members.forEach(m => {
            const _id = m._id.toString();
            if (_id === data.leaderId)
                ret.leader = m;
            else if (_id === data.hostId)
                ret.host = m;
            else if (_id === data.helperId)
                ret.helper = m;
            else if (_id === data.masterId)
                ret.master = m;
            else if (data.assistantsIds.includes(_id))
                ret.assistants.push(m);
        });
    }
    return ret;
}
exports.setDataMembersGroup = setDataMembersGroup;
async function getModelFamiliesGroupsDetails(data) {
    if (!data)
        return null;
    // getNamesUsersList
    const listIds = getUsersIdsList(data.members);
    const members = await (0, UsersActions_1.getNamesUsersList)(listIds);
    const ret = {};
    ret._id = data._id;
    // ret.name = data.name;
    ret.number = data.number;
    ret.direction = data.direction;
    ret.sector = data.sector;
    ret.subSector = data.subSector;
    ret.location = data.location;
    ret.members = setDataMembersGroup(members || [], data.members);
    ret.created_at = data.created_at;
    ret.updated_at = data.updated_at;
    return ret;
}
exports.default = getModelFamiliesGroupsDetails;
async function getModelFamiliesGroupsMembersDetails(data) {
    if (!data)
        return null;
    const listIds = getUsersIdsList(data); // getNamesUsersList
    const members = await (0, UsersActions_1.getNamesUsersList)(listIds || []);
    return setDataMembersGroup(members, data);
}
exports.getModelFamiliesGroupsMembersDetails = getModelFamiliesGroupsMembersDetails;
function checkIfMembersWasChanged(currentMembers, newMembers) {
    let totals = 0;
    if (currentMembers.leaderId !== newMembers.leaderId)
        totals++;
    if (currentMembers.hostId !== newMembers.hostId)
        totals++;
    if (currentMembers.helperId !== newMembers.helperId)
        totals++;
    if (currentMembers.assistantsIds.toString() !== newMembers.assistantsIds.toString())
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
