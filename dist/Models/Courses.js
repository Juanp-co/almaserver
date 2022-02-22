"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const pathEnv = path_1.default.resolve(__dirname, `../.env.${process.env.NODE_ENV || 'development'}`);
dotenv_1.default.config({ path: pathEnv });
const getPlaceHolder = (value) => value || 'Indica tu respuesta';
const getBannerUrl = (value) => {
    if (!value)
        return value;
    return `${process.env.URL_API}/${value}`;
};
const QuizSchema = new mongoose_1.Schema({
    title: { type: String, require: true, set: GlobalFunctions_1.cleanWhiteSpaces },
    description: { type: String, default: null, set: GlobalFunctions_1.cleanWhiteSpaces },
    placeholder: { type: String, default: null, get: getPlaceHolder, set: GlobalFunctions_1.cleanWhiteSpaces },
    inputType: {
        type: String,
        enum: ['checkbox', 'radio', 'text', 'textarea'],
        require: true
    },
    require: { type: Boolean, default: true },
    values: { type: [String], default: 'Indica tu respuesta' },
    correctAnswer: { type: Number, default: null },
}, { id: false });
const TemarySchema = new mongoose_1.Schema({
    title: { type: String, require: true },
    description: { type: String, default: null },
    urlVideo: { type: String, default: null },
    quiz: { type: [QuizSchema], default: null }
}, { id: false });
const CoursesSchema = new mongoose_1.Schema({
    userid: { type: String, require: true },
    speaker: { type: String, require: true },
    speakerPosition: { type: String, require: true },
    code: { type: String, require: true, set: GlobalFunctions_1.toUpperValue },
    title: { type: String, require: true, set: GlobalFunctions_1.cleanWhiteSpaces, get: GlobalFunctions_1.toUpperValue },
    description: { type: String, require: true, set: GlobalFunctions_1.cleanWhiteSpaces },
    slug: { type: String, require: true },
    temary: { type: [TemarySchema], default: [] },
    level: { type: Number, require: true },
    toRoles: { type: [Number], require: true },
    enable: { type: Boolean, default: false },
    created_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate },
    updated_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate }
}, { id: false });
CoursesSchema.pre('save', function (next) {
    this.updated_at = (0, GlobalFunctions_1.setDate)();
    next();
});
QuizSchema.set('toJSON', { getters: true });
TemarySchema.set('toJSON', { getters: true });
CoursesSchema.set('toJSON', { getters: true });
CoursesSchema.index({ slug: 1, level: 1 });
const Courses = (0, mongoose_1.model)('course', CoursesSchema);
exports.default = Courses;
