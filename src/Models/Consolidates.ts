import { Schema, model } from 'mongoose';
import { setDate, getDate, toUpperValue, getSimpleDate } from '../Functions/GlobalFunctions';
import IConsolidates from '../Interfaces/IConsolidates';

const ConsolidatesSchema = new Schema(
  {
    consolidatorId: { type: String, require: true },
    userid: { type: String, require: true },
    date: { type: Number, require: true, get: getSimpleDate },
    observation: { type: String, require: true, set: toUpperValue },
    created_at: { type: Number, default: setDate, get: getDate }
  },
  { id: false }
);

ConsolidatesSchema.set('toJSON', { getters: true });

const Consolidates = model<IConsolidates>('consolidates', ConsolidatesSchema);

export default Consolidates;
