import { Document } from 'mongoose';

export default interface IQuestion extends Document {
  question: string | null;
  created_at: number;
  updated_at: number;
}

export interface IQuestionRegister {
  question: IQuestion['question'];
}

export interface IQuestionUpdate {
  _id: string | null;
  question: IQuestion['question'];
}
