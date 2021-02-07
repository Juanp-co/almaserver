import { Schema, model } from 'mongoose';
import { setDate, getDate, cleanWhiteSpaces, toUpperValue } from '../Functions/GlobalFunctions';
import ICourse from '../Interfaces/ICourse';

const getPlaceHolder = (value: string | null) => value || 'Indica tu respuesta';

const LikesTemaryCommentsSchema = new Schema(
  {
    userid: { type: String, require: true },
    created_at: { type: Number, default: setDate, get: getDate },
  },
  { id: false }
);

const TemaryCommentsSchema = new Schema(
  {
    userid: { type: String, require: true },
    comment: { type: String, require: true, set: cleanWhiteSpaces },
    answer: { type: String, default: null, set: cleanWhiteSpaces },
    likes: { type: [LikesTemaryCommentsSchema], default: [] },
    unlikes: { type: [LikesTemaryCommentsSchema], default: [] },
    created_at: { type: Number, default: setDate, get: getDate },
    updated_at: { type: Number, default: setDate, get: getDate }
  },
  { id: false }
);

const ContentSchema = new Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    urlVideo: { type: String, require: true }
  },
  { id: false }
);

const TestSchema = new Schema(
  {
    title: { type: String, require: true, set: cleanWhiteSpaces },
    description: { type: String, default: null, set: cleanWhiteSpaces },
    extra: { type: String, default: null, set: cleanWhiteSpaces },
    placeholder: { type: String, default: null, get: getPlaceHolder, set: cleanWhiteSpaces },
    inputType: {
      type: String,
      enum: [ 'text', 'textarea', 'checkbox', 'radio', 'select' ],
      require: true
    },
    require: { type: Boolean, default: false },
    values: { type: [String], default: 'Indica tu respuesta' },
    correctAnswer: { type: Number, default: null },
  },
  { id: false }
);

const TemarySchema = new Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    content: { type: [ContentSchema], require: true },
    test: { type: [TestSchema], require: true },
    comments: { type: [TemaryCommentsSchema], default: [] },
    likes: { type: [LikesTemaryCommentsSchema], default: [] },
    unlikes: { type: [LikesTemaryCommentsSchema], default: [] },
  },
  { id: false }
);

const CoursesSchema = new Schema(
  {
    userid: { type: String, require: true }, // userid creator
    speaker: { type: String, require: true }, // speaker fullname
    speakerPosition: { type: Number, require: true }, // speaker position
    code: { type: String, require: true, set: toUpperValue }, // course code
    title: { type: String, require: true, set: cleanWhiteSpaces },
    banner: { type: String, default: null },
    description: { type: String, require: true, set: cleanWhiteSpaces },
    slug: { type: String, require: true },
    temary: { type: [TemarySchema], require: true }, // content
    // test: { type: [TestSchema], require: true }, // test to users
    levels: { type: [String], default: [] }, // levels required
    comments: { type: [TemaryCommentsSchema], default: [] },
    likes: { type: [LikesTemaryCommentsSchema], default: [] },
    unlikes: { type: [LikesTemaryCommentsSchema], default: [] },
    toRoles: { type: [Number], require: true },
    enable: { type: Boolean, default: false },
    draft: { type: Boolean, default: true },
    created_at: { type: Number, default: setDate, get: getDate },
    updated_at: { type: Number, default: setDate, get: getDate }
  },
  { id: false }
);

CoursesSchema.pre<ICourse>('save', function (next) {
  this.updated_at = setDate();
  next();
});

CoursesSchema.set('toJSON', { getters: true });
// TestSchema.set('toJSON', { getters: true });
ContentSchema.set('toJSON', { getters: true });
TemarySchema.set('toJSON', { getters: true });
TemaryCommentsSchema.set('toJSON', { getters: true });
LikesTemaryCommentsSchema.set('toJSON', { getters: true });

const Courses = model<ICourse>('course', CoursesSchema);

export default Courses;
