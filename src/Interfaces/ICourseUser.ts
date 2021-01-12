import { Document } from 'mongoose';
import { IUserSimpleInfo } from './IUser';
import { ICourseList } from './ICourse';

export interface ICourseUserTemary {
  temaryId: string | any;
  view?: number | null;
  date?: string | number | null;
}

export interface ICourseUserTest {
  points: number;
  date?: string | number | null;
}

export default interface ICourseUser extends Document {
  _id: any | string;
  userid: string | null;
  courseId: string | null;
  temary: ICourseUserTemary[];
  tests: ICourseUserTest[];
  approved: boolean;
  created_at: string | number;
  updated_at: string | number;
}

export interface ICourseUserList {
  _id: ICourseUser['userid'];
  userid?: ICourseUser['userid'],
  courseId?: ICourseUser['courseId'],
  course?: ICourseList | null,
  temary?: ICourseUser['temary'],
  tests?: ICourseUser['tests'],
  approved?: ICourseUser['approved'],
  created_at?: ICourseUser['created_at'],
  updated_at?: ICourseUser['updated_at'],
}
