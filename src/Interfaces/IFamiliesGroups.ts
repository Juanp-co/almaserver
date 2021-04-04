import { Document } from 'mongoose';
import { IUserSimpleInfo } from './IUser';

export interface IFamiliesGroupsMembers {
  leaderId: string|null;
  hostId: string|null;
  assistantId: string|null;
  masterId: string|null;
}

export interface IFamiliesGroupsMembersDetails {
  leader: IUserSimpleInfo|null;
  host: IUserSimpleInfo|null;
  assistant: IUserSimpleInfo|null;
  master: IUserSimpleInfo|null;
}

export interface IFamiliesGroups extends Document {
  number: number | null;
  direction: string|null
  sector: number|null;
  subSector: number|null;
  members: IFamiliesGroupsMembers;
  created_at: string | number;
  updated_at: string | number;
}

export interface IFamiliesGroupsForm {
  number: number|null;
  direction: string|null;
  sector: number|null;
  subSector: number|null;
  members: IFamiliesGroups['members']|any;
}

export interface IFamiliesGroupsUpdateMembersForm {
  members: IFamiliesGroups['members']|any;
}

export interface IFamiliesGroupsUpdateForm {
  number: number|null;
  direction: string|null;
  sector: number|null;
  subSector: number|null;
}

export interface IFamiliesGroupsList {
  _id: any;
  number: IFamiliesGroups['number'] | null;
  sector: IFamiliesGroups['sector'];
  subSector: IFamiliesGroups['subSector'];
  created_at: IFamiliesGroups['created_at'];
}

export interface IFamiliesGroupsDetails {
  _id: any;
  number: IFamiliesGroups['number'];
  direction: IFamiliesGroups['direction'];
  sector: IFamiliesGroups['sector'];
  subSector: IFamiliesGroups['subSector'];
  members: IFamiliesGroupsMembersDetails;
  created_at: IFamiliesGroups['created_at'];
  updated_at: IFamiliesGroups['updated_at'];
}

export interface IFamiliesGroupsDetailsToReport {
  _id: any;
  number: IFamiliesGroups['number'];
  direction: IFamiliesGroups['direction'];
  sector: IFamiliesGroups['sector'];
  subSector: IFamiliesGroups['subSector'];
  created_at: IFamiliesGroups['created_at'];
  updated_at: IFamiliesGroups['updated_at'];
}
