import { Schema, model } from 'mongoose';
import { setDate, getDate } from '../Functions/GlobalFunctions';
import IWhitelist from '../Interfaces/IWhitelist';

const WhitelistSchema = new Schema(
  {
    userid: { type: String, require: true },
    token: { type: String, require: true },
    status: { type: Boolean, default: true },
    ip: { type: String, default: null },
    created_at: { type: Number, default: setDate, get: getDate },
    updated_at: { type: Number, default: setDate, get: getDate }
  },
  { id: false }
);

WhitelistSchema.pre<IWhitelist>('save', function (next) {
  this.updated_at = setDate();
  next();
});

WhitelistSchema.set('toJSON', { getters: true });

const Whitelist = model<IWhitelist>('Whitelist', WhitelistSchema);

export default Whitelist;
