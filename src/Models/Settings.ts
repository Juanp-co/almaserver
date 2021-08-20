import { Schema, model } from 'mongoose';
import { setDate, getDate } from '../Functions/GlobalFunctions';
import ISettings from '../Interfaces/ISettings';

const LogosAndBannersSchema = new Schema(
  {
    picture: { type: String, require: true },
    active: { type: Boolean, default: false },
    created_at: { type: Number, default: setDate, get: getDate }
  },
  { id: false },
);

const SettingsSchema = new Schema(
  {
    logos: { type: [LogosAndBannersSchema], default: [] },
    banners: { type: [LogosAndBannersSchema], default: [] },
    facebook: { type: String, default: null },
    instagram: { type: String, default: null },
    twitter: { type: String, default: null },
    web: { type: String, default: null},
    youtube: { type: String, default: null },
    updated_at: { type: Number, default: setDate, get: getDate }
  },
  { id: false }
);

LogosAndBannersSchema.set('toJSON', { getters: true });
SettingsSchema.set('toJSON', { getters: true });

const Settings = model<ISettings>('settings', SettingsSchema);

export default Settings;
