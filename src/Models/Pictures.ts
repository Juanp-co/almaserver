import { Schema, model } from 'mongoose';
import { getDate, setDate } from '../Functions/GlobalFunctions';
import IPictures from '../Interfaces/IPictures';

const PicturesSchema = new Schema(
  {
    base64: { type: String, require: true },
    created_at: { type: Number, default: setDate, get: getDate },
    updated_at: { type: Number, default: setDate, get: getDate }
  },
  { id: false }
);

PicturesSchema.pre<IPictures>('save', function (next) {
  this.updated_at = setDate();
  next();
});

PicturesSchema.set('toJSON', { getters: true });

const Pictures = model<IPictures>('pictures', PicturesSchema);

export default Pictures;
