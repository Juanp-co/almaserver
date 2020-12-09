import { Document } from 'mongoose';

export default interface IUser extends Document {
  phone: string | null;
  password: string | null;
  names: string | null;
  lastNames: string | null;
  document: string | null;
  direction: string | null;
  educationLevel?: number | string | null;
  profession?: number | string | null;
  bloodType?: number | string | null;
  company: boolean | null;
  companyType?: number | string | null;
  baptized?: boolean | null;
  role?: string | null;
  securityQuestion: IUserSecurityQuestion;
  questionId?: string | null;
  answer?: string | null;
  created_at?: number | null;
  updated_at?: number | null;
}

export interface IUserRegister {
  phone: IUser['phone'];
  password: IUser['password'];
  names: IUser['names'];
  lastNames: IUser['lastNames'];
  document: IUser['document'];
  direction: IUser['direction'];
  educationLevel: IUser['educationLevel'];
  profession: IUser['profession'];
  bloodType: IUser['bloodType'];
  company: IUser['company'];
  companyType: IUser['companyType'];
  baptized: IUser['baptized'];
  role: IUser['role'];
  questionId: IUser['questionId'];
  answer: IUser['answer'];
}

export interface IUserUpdate {
  phone: IUser['phone'];
  names: IUser['names'];
  lastNames: IUser['lastNames'];
  document: IUser['document'];
  direction: IUser['direction'];
  educationLevel: IUser['educationLevel'];
  profession?: IUser['profession'];
  bloodType?: IUser['bloodType'];
  company?: IUser['company'];
  companyType?: IUser['companyType'];
  baptized?: IUser['baptized'];
}

export interface IUserLogin {
  document: IUser['document'];
  password: IUser['password'];
}

export interface IUserPasswords {
  password?: string | null;
  newPassword?: string | null;
}

export interface IUserSecurityQuestion {
  questionId?: string | null;
  answer?: string | null;
}

export interface IUserToToken {
  _id?: string | null;
  userid?: string | null;
  document?: string | null;
  role?: string | null;
}