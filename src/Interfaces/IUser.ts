import { Document } from 'mongoose';

export interface IUserTotals {
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
  gender: number | null;
  birthday: string | null;
  civilStatus: string | null;
  educationLevel?: number | string | null;
  profession?: number | string | null;
  bloodType?: number | string | null;
  company: boolean | null;
  companyType?: number | string | null;
  baptized?: boolean | null;
  role?: number | null;
  referred?: any;
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
  password: IUser['password'];
  names: IUser['names'];
  lastNames: IUser['lastNames'];
  gender: IUser['gender'];
  birthday: IUser['birthday'];
  civilStatus: IUser['civilStatus'];
  educationLevel?: IUser['educationLevel'];
  profession?: IUser['profession'];
  bloodType?: IUser['bloodType'];
  company: IUser['company'];
  companyType?: IUser['companyType'];
  baptized?: IUser['baptized'];
  role?: IUser['role'];
  referred?: any;
  department: IUser['department'];
  city: IUser['city'];
  locality: IUser['locality'];
  direction: IUser['direction'];
  totals: IUserTotals;
  created_at?: IUser['created_at'];
  updated_at?: IUser['updated_at'];
}

export interface IUserRegister {
  email: IUser['email'];
  password: IUser['password'];
  phone: IUser['phone'];
  document: IUser['document'];
  names: IUser['names'];
  lastNames: IUser['lastNames'];
  gender: IUser['gender'];
  birthday: IUser['birthday'];
  civilStatus: IUser['civilStatus'];
  educationLevel: IUser['educationLevel'];
  profession: IUser['profession'];
  bloodType: IUser['bloodType'];
  company: IUser['company'];
  companyType: IUser['companyType'];
  baptized: IUser['baptized'];
  department: IUser['department'];
  city: IUser['city'];
  locality: IUser['locality'];
  direction: IUser['direction'];
  role: IUser['role'];
  referred: string | null;
}

export interface IUserSimpleRegister {
  email: IUser['email'];
  password: IUser['password'];
  document: IUser['document'];
  names: IUser['names'];
  lastNames: IUser['lastNames'];
  role: IUser['role'];
  referred: string | null;
}

export interface IUserUpdate {
  email: IUser['email'];
  phone: IUser['phone'];
  document: IUser['document'];
  names: IUser['names'];
  lastNames: IUser['lastNames'];
  gender: IUser['gender'];
  birthday: IUser['birthday'];
  civilStatus: IUser['civilStatus'];
  educationLevel: IUser['educationLevel'];
  profession: IUser['profession'];
  bloodType: IUser['bloodType'];
  company: IUser['company'];
  companyType: IUser['companyType'];
  baptized: IUser['baptized'];
  department: IUser['department'];
  city: IUser['city'];
  locality: IUser['locality'];
  direction: IUser['direction'];
}

export interface IUserLogin {
  document: IUser['document'];
  password: IUser['password'];
  admin: boolean | undefined;
}

export interface IUserSimpleInfo {
  _id: string;
  names: IUser['names'];
  lastNames: IUser['lastNames'];
  document: IUser['document'];
  referred?: IUserSimpleInfo | null;
}

export interface IUserPasswords {
  password?: string | null;
  newPassword?: string | null;
}

export interface IUserToToken {
  _id?: string | any;
  userid?: string | any;
  document?: IUser['document'];
  role?: IUser['role'];
}
