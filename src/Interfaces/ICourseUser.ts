import { Document } from 'mongoose';

export interface ICourseUserContent {
  temaryId: any;
  view?: number;
  date?: string | number | null;
}

export interface ICoursesUser {
  courseId: string | null;
  temary: ICourseUserContent[];
  approved: boolean;
  level: number;
  created_at?: string | number;
  updated_at?: string | number;
}

export default interface ICourseUser extends Document {
  _id: any | string;
  userid: string | null;
  courses: ICoursesUser[];
  created_at: string | number;
  updated_at: string | number;
}

export interface ICourseUserData {
  _id: ICourseUser['userid'];
  course?: ICoursesUser,
  created_at?: ICourseUser['created_at'],
  updated_at?: ICourseUser['updated_at'],
}
