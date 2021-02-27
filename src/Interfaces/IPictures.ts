import { Document } from 'mongoose';

export default interface IPictures extends Document {
  _id?: any;
  base64: string;
  created_at?: number | null;
  updated_at?: number | null;
}
