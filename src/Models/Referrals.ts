import { Schema, model } from 'mongoose';
import { getDate, setDate } from '../Functions/GlobalFunctions';
import IReferrals from '../Interfaces/IReferrals';

const ReferralsSchema = new Schema(
  {
    members: { type: [String], default: [] },
    created_at: { type: Number, default: setDate, get: getDate },
    updated_at: { type: Number, default: setDate, get: getDate }
  },
  { id: false }
);

ReferralsSchema.pre<IReferrals>('save', function (next) {
  this.updated_at = setDate();
  next();
});

ReferralsSchema.set('toJSON', { getters: true });

const Referrals = model<IReferrals>('referrals', ReferralsSchema);

export default Referrals;
