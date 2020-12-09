import * as bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import IUser from '../Interfaces/IUser';
import { getDate, setDate } from '../Functions/GlobalFunctions';

const SecurityQuestionSchema = new Schema(
  {
    questionId: { type: String, default: null },
    answer: { type: String, default: null }
  },
  { _id: false, id: false }
);

const UserSchema = new Schema(
  {
    phone: { type: String, require: true },
    password: { type: String, require: true },
    names: { type: String, require: true },
    lastNames: { type: String, require: true },
    document: { type: String, require: true },
    direction: { type: String, require: true },
    profession: { type: Number, require: true },
    educationLevel: { type: Number, default: null },
    bloodType: { type: Number, default: false },
    company: { type: Boolean, default: false },
    companyType: { type: Number, default: null },
    baptized: { type: Boolean, default: false },
    role: {
      type: String,
      enum: ['pastor', 'supervisor', 'lider', 'pa_esp', 'persona'],
      default: 'persona'
    },
    securityQuestion: { type: SecurityQuestionSchema, default: { SecurityQuestionSchema } },
    created_at: { type: Number, default: setDate(), get: getDate },
    updated_at: { type: Number, default: setDate(), get: getDate }
  },
  { id: false }
);

UserSchema.methods.encrypt = (password?: string): string | null => {
  return password ? bcrypt.hashSync(password, 10) : null;
};

UserSchema.pre<IUser>('save', function (next) {
  this.updated_at = setDate();
  next();
});

UserSchema.set('toJSON', { getters: true });

export default model<IUser>('User', UserSchema);