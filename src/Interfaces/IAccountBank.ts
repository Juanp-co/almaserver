import { Document } from 'mongoose';

export default interface IAccountBank extends Document {
  title: string | null;
  description: string | null;
  picture: string | null;
  created_at: string | number;
}

export interface IAccountBankForm {
  title: string | null;
  description: string | null;
  picture: string | null;
}
