import { Document } from 'mongoose';
import { IUserSimpleInfo } from './IUser';

export interface IGroups extends Document {
  name: string;
  code: string | null;
  members: string[];
  userid: string;
  created_at: string | number;
  updated_at: string | number;
}

export interface IGroupsForm {
  name: IGroups['name'];
  code: IGroups['code'] | null;
  members: IGroups['members'];
}

export interface IGroupsMembersIdsForm {
  members: IGroups['members'];
}

export interface IGroupsList {
  _id: any;
  name: IGroups['name'];
  code: IGroups['code'] | null;
  totalMembers: number;
  created_at: IGroups['created_at'];
}

export interface IGroupsDetails {
  _id: any;
  user: IUserSimpleInfo | null;
  name: IGroups['name'];
  code: IGroups['code'] | null;
  members: IUserSimpleInfo[];
  created_at: IGroups['created_at'];
  updated_at: IGroups['created_at'];
}
