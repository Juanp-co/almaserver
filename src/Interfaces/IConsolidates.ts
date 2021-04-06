import { Document } from 'mongoose';

export default interface IConsolidates extends Document {
  consolidatorId: string | null;
  userid: string | null;
  date: number | null;
  observation: string | null;
  created_at: string | number;
}

export interface IConsolidatesForm {
  userId: string | null;
  date: string | number | null;
  observation: string | null;
}
