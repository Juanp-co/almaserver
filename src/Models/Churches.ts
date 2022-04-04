import { Schema, model } from 'mongoose';
import { setDate } from '../Functions/GlobalFunctions';
import IChurches from '../Interfaces/IChurches';

const LocationSchema = new Schema(
  {
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], default: [ -73.630175, 4.134516 ] },
  },
  { _id: false, id: false }
);

const ChurchesSchema = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String, require: true },
    picture: { type: String, default: null },
    phone1: { type: String, default: null },
    phone2: { type: String, default: null },
    email: { type: String, default: null },
    address: { type: String, default: null },
    location: { type: LocationSchema, default: {LocationSchema} },
    userid: { type: String, default: null },
    created_at: { type: Number, default: setDate },
    updated_at: { type: Number, default: setDate }
  },
  { id: false }
);

ChurchesSchema.pre<IChurches>('save', function (next) {
  this.updated_at = setDate();
  next();
});

ChurchesSchema.set('toJSON', { getters: true });

const Churches = model<IChurches>('churches', ChurchesSchema);

export default Churches;
