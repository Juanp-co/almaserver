import { Schema, model } from 'mongoose';
import { setDate, getDate } from '../Functions/GlobalFunctions';
import ICourseUser from '../Interfaces/ICourseUser';

const ContentSchema = new Schema(
  {
    contentId: { type: String, require: true },
    view: { type: Number, default: 0 }, // 0 = not seen | 1 = seeing | 2 = viewed
    date: { type: Number, default: null, get: getDate }
  },
  { _id: false, id: false }
);

const TestsDoneSchema = new Schema(
  {
    points: { type: Number, require: true },
    date: { type: Number, default: setDate, get: getDate }
  },
  { id: false }
);

const TemarySchema = new Schema(
  {
    temaryId: { type: String, require: true },
    content: { type: [ContentSchema], require: true },
    test: { type: [TestsDoneSchema], default: [] },
    view: { type: Number, default: 0 }, // 0 = not seen | 1 = seeing | 2 = viewed
    date: { type: Number, default: null, get: getDate },
    approved: { type: Boolean, default: false },
    approvedDate: { type: Number, default: null, get: getDate },
  },
  { _id: false, id: false }
);

const CoursesSchema = new Schema(
  {
    courseId: { type: String, require: true },
    temary: { type: [TemarySchema], require: true }, // themes viewed
    approved: { type: Boolean, default: false },
    created_at: { type: Number, default: setDate, get: getDate },
    updated_at: { type: Number, default: setDate, get: getDate }
  },
  { _id: false, id: false }
);

const CoursesUsersSchema = new Schema(
  {
    userid: { type: String, require: true },
    courses: { type: [CoursesSchema], default: [] },
    created_at: { type: Number, default: setDate, get: getDate },
    updated_at: { type: Number, default: setDate, get: getDate }
  },
  { id: false }
);

CoursesUsersSchema.pre<ICourseUser>('save', function (next) {
  this.updated_at = setDate();
  next();
});

TestsDoneSchema.set('toJSON', { getters: true });
ContentSchema.set('toJSON', { getters: true });
TemarySchema.set('toJSON', { getters: true });
CoursesSchema.set('toJSON', { getters: true });
CoursesUsersSchema.set('toJSON', { getters: true });

const CoursesUsers = model<ICourseUser>('courses_user', CoursesUsersSchema);

export default CoursesUsers;
