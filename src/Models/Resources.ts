import { Schema, model } from 'mongoose';
import { setDate, getDate, toUpperValue } from '../Functions/GlobalFunctions';
import IResources from '../Interfaces/IResources';

const ResourcesSchema = new Schema(
  {
    userid: { type: String, require: true },
    title: { type: String, require: true, set: toUpperValue },
    urlDoc: { type: String, require: true },
    roles: { type: [Number], require: true },
    created_at: { type: Number, default: setDate },
    updated_at: { type: Number, default: setDate }
  },
  { id: false }
);

ResourcesSchema.set('toJSON', { getters: true });

ResourcesSchema.pre<IResources>('save', function (next) {
  this.updated_at = setDate();
  next();
});

const Resources = model<IResources>('resources', ResourcesSchema);

export default Resources;
