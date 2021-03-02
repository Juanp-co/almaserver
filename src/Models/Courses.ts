import { Schema, model } from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { setDate, getDate, cleanWhiteSpaces, toUpperValue } from '../Functions/GlobalFunctions';
import ICourse from '../Interfaces/ICourse';

const pathEnv = path.resolve(__dirname, `../.env.${process.env.NODE_ENV || 'development'}`);
dotenv.config({ path: pathEnv });

const getPlaceHolder = (value: string | null) => value || 'Indica tu respuesta';
const getBannerUrl = (value: string | null) => {
  if (!value) return value;
  return `${process.env.URL_API}/${value}`;
};

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
    placeholder: { type: String, default: null, get: getPlaceHolder, set: cleanWhiteSpaces },
    inputType: {
      type: String,
      enum: [ 'checkbox', 'radio', 'text', 'textarea' ],
      require: true
    },
    require: { type: Boolean, default: true },
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
    created_at: { type: Number, default: setDate, get: getDate },
    updated_at: { type: Number, default: setDate, get: getDate }
  },
  { id: false }
);

const CoursesSchema = new Schema(
  {
    userid: { type: String, require: true }, // userid creator
    speaker: { type: String, require: true }, // speaker fullname
    speakerPosition: { type: String, require: true }, // speaker position
    code: { type: String, require: true, set: toUpperValue }, // course code
    title: { type: String, require: true, set: cleanWhiteSpaces },
    banner: { type: String, default: null, get: getBannerUrl },
    description: { type: String, require: true, set: cleanWhiteSpaces },
    slug: { type: String, require: true },
    temary: { type: [TemarySchema], require: true }, // content
    levels: { type: [String], default: [] }, // levels required
    toRoles: { type: [Number], require: true },
    enable: { type: Boolean, default: false },
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
TemarySchema.set('toJSON', { getters: true });
CoursesSchema.index({ slug: 1 });
ContentSchema.set('toJSON', { getters: true });

const Courses = model<ICourse>('course', CoursesSchema);

export default Courses;
