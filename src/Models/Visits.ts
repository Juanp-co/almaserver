import { Schema, model } from 'mongoose';
import { setDate, getDate, toUpperValue, getSimpleDate } from '../Functions/GlobalFunctions';
import IConsolidates from '../Interfaces/IConsolidates';

const VisitsSchema = new Schema(
  {
    referred: { type: String, require: true },
    userid: { type: String, require: true },
    date: { type: Number, require: true, get: getSimpleDate },
    action: { type: String, default: 'Visita' },
    observation: { type: String, require: true, set: toUpperValue },
    created_at: { type: Number, default: setDate, get: getDate }
  },
  { id: false }
);

VisitsSchema.set('toJSON', { getters: true });

const Visits = model<IConsolidates>('visits', VisitsSchema);

export default Visits;
