import { Document } from 'mongoose';
import { ICourseSimpleList } from './ICourse';
import { IUserSimpleInfo } from './IUser';
import { IFamiliesGroups } from './IFamiliesGroups';

export default interface IResources extends Document {
  _id: any;
  userid: string;
  title: string;
  urlDoc: string;
  roles: number[];
  created_at?: number | null;
  updated_at?: number | null;
}

export interface IResourcesSimpleInfo {
  _id: any;
  title: string;
  urlDoc: string;
  rolesList: number[];
  userid: string;
  user?: IUserSimpleInfo|null;
  created_at?: number | null;
  updated_at?: number | null;
}

export interface IResourcesForm {
  title: string;
  file: string;
  rolesList: number[];
}
