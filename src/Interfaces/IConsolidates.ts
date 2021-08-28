import { Document } from 'mongoose';

export default interface IConsolidates extends Document {
  referred: string | null;
  userid: string | null;
  date: number | null;
  observation: string | null;
  action: string | null;
  created_at: string | number;
}

export interface IConsolidatesForm {
  userId: string | null;
  date: string | number | null;
  action: string | number | null | undefined;
  observation: string | null;
  visitor: string | null;
}
