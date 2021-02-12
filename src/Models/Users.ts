import * as bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import IUser from '../Interfaces/IUser';
import { getDate, setDate, toUpperValue } from '../Functions/GlobalFunctions';

const SecurityQuestionSchema = new Schema(
  {
    questionId: { type: String, default: null },
    answer: { type: String, default: null }
  },
  { _id: false, id: false }
);

const UserSchema = new Schema(
  {
    document: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    phone: { type: String, require: true },
    password: { type: String, require: true },
    names: { type: String, require: true, set: toUpperValue },
    lastNames: { type: String, require: true, set: toUpperValue },
    gender: { type: Number, default: null },
    birthday: { type: String, default: null },
    civilStatus: { type: Number, default: null },
    educationLevel: { type: Number, default: null },
    profession: { type: Number, default: null },
    bloodType: { type: Number, default: null },
    company: { type: Boolean, default: false },
    companyType: { type: Number, default: null },
    baptized: { type: Boolean, default: false },
    // 0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder | 4 = Padre espiritual | 5 = persona
    role: { type: Number, default: 5 },
    securityQuestion: { type: SecurityQuestionSchema, default: { SecurityQuestionSchema } },
    referred: { type: String, default: null },
    department: { type: Number, default: null },
    city: { type: Number, default: null },
    locality: { type: String, default: null, set: toUpperValue },
    direction: { type: String, default: null, set: toUpperValue },
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
