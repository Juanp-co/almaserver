import { Schema, model } from 'mongoose';
import { setDate, getDate, toUpperValue } from '../Functions/GlobalFunctions';
import IDevotionals from '../Interfaces/IDevotionals';

const DevotionalsSchema = new Schema(
  {
    userid: { type: String, require: true },
    title: { type: String, require: true, set: toUpperValue },
    description: { type: String, require: true },
    picture: { type: String, default: null },
    urlVideo: { type: String, default: null },
    created_at: { type: Number, default: setDate, get: getDate },
    updated_at: { type: Number, default: setDate, get: getDate }
  },
  { id: false }
);

DevotionalsSchema.set('toJSON', { getters: true });

DevotionalsSchema.pre<IDevotionals>('save', function (next) {
  this.updated_at = setDate();
  next();
});

const Devotionals = model<IDevotionals>('devotionals', DevotionalsSchema);

export default Devotionals;
