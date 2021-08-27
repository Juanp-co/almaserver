import { Document } from 'mongoose';

export default interface IDevotionals extends Document {
  userid: any | string;
  title: string | null;
  description: string | null;
  picture: string | null;
  urlVideo: string | null;
  created_at: string | number;
  updated_at: string | number;
}

export interface IDevotionalsForm {
  title: string | null;
  description: string | null;
  picture: string | null;
  urlVideo: string | null;
}
