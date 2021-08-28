import { Document } from 'mongoose';
import { IUserSimpleInfo } from './IUser';

export interface IFamiliesGroupsMembers {
  leaderId: string|null;
  hostId: string|null;
  assistantsIds: string[];
  helperId: string|null;
  masterId: string|null;
}

export interface IFamiliesGroupsMembersDetails {
  leader: IUserSimpleInfo|null;
  host: IUserSimpleInfo|null;
  assistants: IUserSimpleInfo[];
  helper: IUserSimpleInfo|null;
  master: IUserSimpleInfo|null;
}

export interface IFamiliesGroupsLocation {
  type: string;
  coordinates: number[];
}

export interface IFamiliesGroups extends Document {
  number: number | null;
  direction: string|null;
  location: IFamiliesGroupsLocation;
  sector: number|null;
  subSector: number|null;
  members: IFamiliesGroupsMembers;
  created_at: string | number;
  updated_at: string | number;
}

export interface IFamiliesGroupsForm {
  number: number|null;
  sector: number|null;
  subSector: number|null;
  direction: string|null;
  location: IFamiliesGroups['location'];
}

export interface IFamiliesGroupsUpdateMembersForm {
  members: IFamiliesGroups['members']|any;
}

export interface IFamiliesGroupsList {
  _id: any;
  number: IFamiliesGroups['number'] | null;
  sector: IFamiliesGroups['sector'];
  subSector: IFamiliesGroups['subSector'];
  location?: IFamiliesGroups['location'];
  created_at: IFamiliesGroups['created_at'];
}

export interface IFamiliesGroupsDetails {
  _id: any;
  number: IFamiliesGroups['number'];
  direction: IFamiliesGroups['direction'];
  sector: IFamiliesGroups['sector'];
  subSector: IFamiliesGroups['subSector'];
  location: IFamiliesGroups['location'];
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
