import { Document } from 'mongoose';
import { ICourseSimpleList } from './ICourse';

export interface IUserTotalsCoursesAndReferrals {
  totalsCourses: number;
  totalsReferrals: number;
}

export default interface IUser extends Document {
  document: string | null;
  email: string | null;
  phone: string | null;
  password: string | null;
  names: string | null;
  lastNames: string | null;
  position: string | null;
  gender: number | null;
  birthday: string | null;
  civilStatus: string | null;
  educationLevel?: number | string | null;
  profession?: number | string | null;
  bloodType?: number | string | null;
  company: boolean | null;
  companyType?: number | string | null;
  baptized?: boolean | null;
  roles?: number[] | null | undefined;
  referred?: any;
  consolidated?: boolean;
  group?: any;
  petition?: string|null;
  attendGroup?: boolean;
  meetingNew?: boolean;
  familyGroupId: string[];
  department: number | null;
  city: number | null;
  locality: string | null;
  direction: string | null;
  created_at?: number | null;
  updated_at?: number | null;
}

export interface IUserData {
  _id: any;
  document: IUser['document'];
  email: IUser['email'];
  phone: IUser['phone'];
  names: IUser['names'];
  lastNames: IUser['lastNames'];
  position: IUser['position'] | null;
  gender: IUser['gender'];
  birthday: IUser['birthday'];
  civilStatus: IUser['civilStatus'];
  educationLevel?: IUser['educationLevel'];
  profession?: IUser['profession'];
  bloodType?: IUser['bloodType'];
  company: IUser['company'];
  companyType?: IUser['companyType'];
  baptized?: IUser['baptized'];
  meetingNew?: IUser['meetingNew'];
  roles?: IUser['roles'];
  referred?: any;
  consolidated?: boolean;
  petition?: IUser['petition'];
  attendGroup?: IUser['attendGroup'];
  department: IUser['department'];
  city: IUser['city'];
  locality: IUser['locality'];
  direction: IUser['direction'];
  totals: IUserTotalsCoursesAndReferrals;
  created_at?: IUser['created_at'];
  updated_at?: IUser['updated_at'];
}

export interface IUserSimpleRegister {
  phone: IUser['phone'];
  password: IUser['password'];
  names: IUser['names'];
  lastNames: IUser['lastNames'];
  roles: number[] | null;
  referred: string | null;
  consolidated: boolean,
}

export interface IUserModelUpdateRoles {
  roles: number[];
}

export interface IUserSimpleRegisterConsolidate {
  email: IUser['email'];
  phone: IUser['phone'];
  password: IUser['password'];
  names: IUser['names'];
  lastNames: IUser['lastNames'];
  civilStatus: IUser['civilStatus'];
  gender: IUser['gender'];
  birthday: IUser['birthday'];
  locality: IUser['locality'];
  direction: IUser['direction'];
  attendGroup: IUser['attendGroup'];
  petition: IUser['petition'];
  groupId: string|null;
  familyGroupId: IUser['familyGroupId'];
  roles: number[] | null;
  referred: string | null;
  consolidated: boolean,
}

export interface IUserUpdate {
  email: IUser['email'];
  phone: IUser['phone'];
  document: IUser['document'];
  names: IUser['names'];
  lastNames: IUser['lastNames'];
  position: IUser['position'];
  gender: IUser['gender'];
  birthday: IUser['birthday'];
  civilStatus: IUser['civilStatus'];
  educationLevel: IUser['educationLevel'];
  profession: IUser['profession'];
  bloodType: IUser['bloodType'];
  company: IUser['company'];
  companyType: IUser['companyType'];
  baptized: IUser['baptized'];
  meetingNew: IUser['meetingNew'];
  department: IUser['department'];
  city: IUser['city'];
  locality: IUser['locality'];
  direction: IUser['direction'];
}

export interface IUserLogin {
  phone: IUser['phone'];
  password: IUser['password'];
  admin: boolean | undefined;
}

export interface IUserSimpleInfo {
  _id: any;
  gender: IUser['gender'];
  names: IUser['names'];
  lastNames: IUser['lastNames'];
  document: IUser['document'];
  phone: IUser['phone'];
  referred?: IUserSimpleInfo | null;
  position?: IUser['position'] | null;
  totalsReferrals?: number;
}

export interface IUserReferralSimpleData {
  _id: any;
  names: IUser['names'];
  lastNames: IUser['lastNames'];
  phone: IUser['phone'];
  email: IUser['email'];
  gender: IUser['gender'];
  position: IUser['position'];
  civilStatus: IUser['civilStatus'];
  department: IUser['department'];
  city: IUser['city'];
  locality: IUser['locality'];
  direction: IUser['direction'];
}

export interface IUserReferralInfo {
  member: IUserReferralSimpleData | null;
  totalCourses: number;
  totalReferrals: number;
  courses: ICourseSimpleList[];
  referrals: IUserSimpleInfo[];
  visits?: any[];
}

export interface IUserPasswords {
  password?: string | null;
  newPassword?: string | null;
}

export interface IUserToToken {
  _id?: string | any;
  userid?: string | any;
  phone?: IUser['phone'];
  roles?: IUser['roles'];
}
