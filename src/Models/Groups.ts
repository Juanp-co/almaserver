import { Schema, model } from 'mongoose';
import { getDate, setDate, toUpperValue } from '../Functions/GlobalFunctions';
import { IGroups } from '../Interfaces/IGroups';

const GroupsSchema = new Schema(
  {
    code: { type: String, require: true, set: toUpperValue, unique: true },
    name: { type: String, require: true, set: toUpperValue },
    members: { type: [String], default: [] },
    userid: { type: String, default: null }, // userid owner
    created_at: { type: Number, default: setDate, get: getDate },
    updated_at: { type: Number, default: setDate, get: getDate }
  },
  { id: false }
);

GroupsSchema.pre<IGroups>('save', function (next) {
  this.updated_at = setDate();
  next();
});

GroupsSchema.set('toJSON', { getters: true });

const Groups = model<IGroups>('groups', GroupsSchema);

export default Groups;
