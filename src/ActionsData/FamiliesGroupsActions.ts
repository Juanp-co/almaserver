import _ from 'lodash';
import { Response } from 'express';
import { getNamesUsersList } from './UsersActions';
import {
  IFamiliesGroups,
  IFamiliesGroupsDetails,
  IFamiliesGroupsMembers,
  IFamiliesGroupsMembersDetails
} from '../Interfaces/IFamiliesGroups';
import { IFamiliesGroupsReportsUser } from '../Interfaces/IFamiliesGroupsReports';
import { IUserSimpleInfo } from '../Interfaces/IUser';
import FamiliesGroups from '../Models/FamiliesGroups';
import FamiliesGroupsReports from '../Models/FamiliesGroupsReports';
import Users from '../Models/Users';

export function getUsersIdsList(members: IFamiliesGroupsMembers) : string[] {
  let listIds: string[] = [];

  if (members.leaderId) listIds.push(members.leaderId);
  if (members.hostId) listIds.push(members.hostId);
  if (members.helperId) listIds.push(members.helperId);
  if (members.masterId) listIds.push(members.masterId);
  if (members.assistantsIds) listIds = listIds.concat(members.assistantsIds);

  return listIds;
}

export function setDataMembersGroup(members: IUserSimpleInfo[], data: IFamiliesGroupsMembers) : IFamiliesGroupsMembersDetails {
  const ret: IFamiliesGroupsMembersDetails = {
    leader: null,
    host: null,
    helper: null,
    master: null,
    assistants: [],
  };

  if (members.length > 0) {
    members.forEach(m => {
      const _id = m._id.toString();
      if (_id === data.leaderId) ret.leader = m;
      else if (_id === data.hostId) ret.host = m;
      else if (_id === data.helperId) ret.helper = m;
      else if (_id === data.masterId) ret.master = m;
      else if (data.assistantsIds.includes(_id)) ret.assistants.push(m);
    })
  }

  return ret;
}

export default async function getModelFamiliesGroupsDetails(data: IFamiliesGroups): Promise<IFamiliesGroupsDetails|null> {
  if (!data) return null;

  // getNamesUsersList
  const listIds: string[] = getUsersIdsList(data.members);

  const members: IUserSimpleInfo[] = await getNamesUsersList(listIds);

  const ret: IFamiliesGroupsDetails = {} as IFamiliesGroupsDetails;
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

export async function getModelFamiliesGroupsMembersDetails(data: IFamiliesGroupsMembers): Promise<IFamiliesGroupsMembersDetails|null> {
  if (!data) return null;
  const listIds: string[] = getUsersIdsList(data); // getNamesUsersList
  const members = await getNamesUsersList(listIds || []);
  return setDataMembersGroup(members, data);
}

export function checkIfMembersWasChanged(currentMembers: IFamiliesGroupsMembers, newMembers: IFamiliesGroupsMembers) : number {
  let totals = 0;
  if (currentMembers.leaderId !== newMembers.leaderId) totals++;
  if (currentMembers.hostId !== newMembers.hostId) totals++;
  if (currentMembers.helperId !== newMembers.helperId) totals++;
  if (currentMembers.assistantsIds.toString() !== newMembers.assistantsIds.toString()) totals++;
  if (currentMembers.masterId !== newMembers.masterId) totals++;
  return totals;
}

export async function checkIfExistsGroup(query: any = {}) {
  const check = await FamiliesGroups.find(query).countDocuments().exec();
  return check > 0;
}

export function getQueryParamsList(data: any) {
  const query: any = {};
  if (/[0-9]{1}/.test(`${data.sector}`)) query.sector = data.sector;
  if (/[0-9]{1}/.test(`${data.subSector}`)) query.subSector = data.subSector;
  if (/[0-9]{1}/.test(`${data.number}`)) query.number = data.number;
  return query;
}

// Families Groups
export async function checkIfUsersBelowAtFamilyGroup(_id: string, familyGroupId: string) {
  const user = await Users.findOne({ _id }, { familyGroupId: 1 }).exec();
  if (!user) return false;
  return (user.familyGroupId && user.familyGroupId.findIndex(fg => fg === familyGroupId) > -1);
}

export async function getReportsFamilyGroup(query: any) : Promise<IFamiliesGroupsReportsUser> {
  const ret: IFamiliesGroupsReportsUser = {
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
  let users = [];

  const reports = await FamiliesGroupsReports.find(query, { userid: 1, report: 1 }).exec();

  if (reports.length > 0) {
    const listIds = _.uniq(reports.map(r => r.userid));

    users = await getNamesUsersList(listIds);
  }

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
      member: users.find((u: any) => u._id.toString() === r.userid) || null,
      date: r.report.date,
    });
  }
  return ret;
}

// responses
export function returnErrorId(res: Response) : Response {
  return res.status(422).json({
    msg: `Disculpe, pero el grupo seleccionado es incorrecto.`,
  });
}

export function return404(res: Response) : Response {
  return res.status(404).json({
    msg: `Disculpe, pero el grupo seleccionado no existe o no se encuentra disponible.`,
  });
}

export function returnFamilyGroup404(res: Response) : Response {
  return res.status(404).json({
    msg: `Disculpe, pero usted no pertenece a ningún grupo familiar.`,
  });
}

