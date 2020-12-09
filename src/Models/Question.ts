import { Schema, model } from 'mongoose';
import { setDate, getDate } from '../Functions/GlobalFunctions';
import ISecurityQuestion from '../Interfaces/IQuestion';

const QuestionsSchema = new Schema(
  {
    question: { type: String, require: true },
    created_at: { type: Number, default: setDate, get: getDate },
    updated_at: { type: Number, default: setDate, get: getDate }
  },
  { id: false }
);

QuestionsSchema.set('toJSON', { getters: true });

const Whitelist = model<ISecurityQuestion>('question', QuestionsSchema);

export default Whitelist;
