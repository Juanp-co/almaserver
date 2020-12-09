import { Document } from 'mongoose';

export default interface IWhitelist extends Document {
  userid: string | null;
  token: string | null;
  ip: string | null;
  status: boolean | null;
  created_at?: number | null;
  updated_at?: number | null;
}
