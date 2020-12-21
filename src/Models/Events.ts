import { Schema, model } from 'mongoose';
import moment from 'moment-timezone';
import { setDate, getDate } from '../Functions/GlobalFunctions';
import IEvents from '../Interfaces/IEvents';

const getDateEvent = (timestamp: number | null | undefined): string | any => {
  if (timestamp) return moment.unix(timestamp).format('YYYY-MM-DD');
  return timestamp;
};

const EventSchema = new Schema(
  {
    userid: { type: String, require: true },
    title: { type: String, require: true },
    toRoles: { type: [Number], require: true },
    description: { type: String, require: true },
    date: { type: Number, require: true, get: getDateEvent },
    initHour: { type: String, require: true },
    endHour: { type: String, require: true },
    created_at: { type: Number, default: setDate, get: getDate  },
    updated_at: { type: Number, default: setDate, get: getDate }
  },
  { id: false }
);

EventSchema.pre<IEvents>('save', function (next) {
  this.updated_at = setDate();
  next();
});

EventSchema.set('toJSON', { getters: true });

const Events = model<IEvents>('event', EventSchema);

export default Events;
