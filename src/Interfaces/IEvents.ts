import { Document } from 'mongoose';
import { IUserSimpleInfo } from './IUser';

export default interface IEvents extends Document {
  userid: string | null;
  title: string | null;
  description: string | null;
  date: string | number | null;
  dateEnd: string | number | null;
  initHour: string | number | null;
  endHour: string | number | null;
  toRoles: number[];
  picture: string|null;
  created_at: number;
  updated_at: number;
}

export interface IEventsRegisterOrUpdate {
  title: IEvents['title'];
  description: IEvents['description'];
  date: IEvents['date'];
  dateEnd: IEvents['dateEnd'];
  initHour: IEvents['initHour'];
  endHour: IEvents['endHour'];
  toRoles: IEvents['toRoles'];
  picture: IEvents['picture'];
}

export interface IEventsList {
  _id: any;
  title: IEvents['title'];
  // description?: IEvents['description'];
  date: IEvents['date'];
  dateEnd: IEvents['dateEnd'];
  initHour: IEvents['initHour'];
  endHour: IEvents['endHour'];
  toRoles: IEvents['toRoles'];
  picture: IEvents['picture'];
  userid?: string | null;
  user?: null | IUserSimpleInfo;
}
