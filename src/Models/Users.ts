import * as bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import IUser from '../Interfaces/IUser';
import { getDate, setDate, toUpperValue } from '../Functions/GlobalFunctions';

const UserSchema = new Schema(
  {
    phone: { type: String, require: true, unique: true },
    document: { type: String, require: true, get: toUpperValue },
    email: { type: String, default: null },
    password: { type: String, require: true },
    names: { type: String, require: true, set: toUpperValue },
    lastNames: { type: String, require: true, set: toUpperValue },
    position: { type: String, default: null, set: toUpperValue },
    gender: { type: Number, default: null },
    birthday: { type: String, default: null },
    civilStatus: { type: Number, default: null },
    educationLevel: { type: Number, default: null },
    profession: { type: Number, default: null },
    bloodType: { type: Number, default: null },
    company: { type: Boolean, default: false },
    companyType: { type: Number, default: null },
    baptized: { type: Boolean, default: false },
    roles: { type: [Number], default: [4] }, // 0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder | 4 = persona
    referred: { type: String, default: null },
    consolidated: { type: Boolean, default: false },
    group: { type: String, default: null },
    petition: { type: String, default: null, set: toUpperValue },
    attendGroup: { type: Boolean, default: false },
    meetingNew: { type: Boolean, default: false },
    familyGroupId: { type: [String], default: [] },
    department: { type: Number, default: null },
    city: { type: Number, default: null },
    locality: { type: String, default: null, set: toUpperValue },
    direction: { type: String, default: null, set: toUpperValue },
    picture: { type: String, default: null },
    church: { type: String, default: null },
    consolidator: { type: Boolean, default: false },
    created_at: { type: Number, default: setDate, get: getDate },
    updated_at: { type: Number, default: setDate, get: getDate }
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
