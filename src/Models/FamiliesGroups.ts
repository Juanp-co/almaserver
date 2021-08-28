import { Schema, model } from 'mongoose';
import { getDate, setDate, toUpperValue } from '../Functions/GlobalFunctions';
import { IFamiliesGroups } from '../Interfaces/IFamiliesGroups';

const LocationSchema = new Schema(
  {
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], default: [ -73.630175, 4.134516 ] },
  },
  { _id: false, id: false }
);

const MembersGroupSchema = new Schema(
  {
    leaderId: { type: String, default: null },
    hostId: { type: String, default: null },
    helperId: { type: String, default: null },
    masterId: { type: String, default: null },
    assistantsIds: { type: [String], default: [] },
  },
  { _id: false, id: false }
);

const FamiliesGroupsSchema = new Schema(
  {
    number: { type: Number, require: true },
    sector: { type: Number, require: true },
    subSector: { type: Number, require: true },
    members: { type: MembersGroupSchema, default: {MembersGroupSchema} },
    direction: { type: String, require: true, set: toUpperValue },
    location: { type: LocationSchema, default: {LocationSchema} },
    created_at: { type: Number, default: setDate, get: getDate },
    updated_at: { type: Number, default: setDate, get: getDate }
  },
  { id: false }
);

FamiliesGroupsSchema.pre<IFamiliesGroups>('save', function (next) {
  this.updated_at = setDate();
  next();
});

MembersGroupSchema.set('toJSON', { getters: true });
FamiliesGroupsSchema.set('toJSON', { getters: true });

const FamiliesGroups = model<IFamiliesGroups>('families_groups', FamiliesGroupsSchema);

export default FamiliesGroups;
