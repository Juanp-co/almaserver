import { Document } from 'mongoose';

export default interface IQuestion extends Document {
  questionId: string;
  created_at: number;
  updated_at: number;
}
