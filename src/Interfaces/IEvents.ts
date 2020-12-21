import { Document } from 'mongoose';
import { IUserSimpleInfo } from './IUser';

export default interface IEvents extends Document {
  userid: string | null;
  title: string | null;
  description: string | null;
  date: string | number | null;
  initHour: string | number | null;
  endHour: string | number | null;
  toRoles: number[];
  created_at: number;
  updated_at: number;
}

export interface IEventsRegisterOrUpdate {
  title: IEvents['title'];
  description: IEvents['description'];
  date: IEvents['date'];
  initHour: IEvents['initHour'];
  endHour: IEvents['endHour'];
  toRoles: IEvents['toRoles'];
}

export interface IEventsList {
  _id: any;
  title: IEvents['title'];
  description?: IEvents['description'];
  date: IEvents['date'];
  initHour: IEvents['initHour'];
  endHour: IEvents['endHour'];
  toRoles: IEvents['toRoles'];
  userid?: string | null;
  user?: null | IUserSimpleInfo;
}
