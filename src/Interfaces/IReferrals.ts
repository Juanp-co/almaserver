import { Document } from 'mongoose';
import { IUserSimpleInfo } from './IUser';

export default interface IReferrals extends Document {
  _id?: any;
  members: string[];
  created_at?: number | null;
  updated_at?: number | null;
}

export interface IReferralsMember {
  user: IUserSimpleInfo;
  totalsReferrals: number;
}

export interface IReferralsList {
  user: any | IUserSimpleInfo | null;
  totals: number;
  members: IReferralsMember[];
}
