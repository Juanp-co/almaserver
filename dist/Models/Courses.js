"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const getPlaceHolder = (value) => value || 'Indica tu respuesta';
const LikesTemaryCommentsSchema = new mongoose_1.Schema({
    userid: { type: String, require: true },
    created_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate },
}, { id: false });
const TemaryCommentsSchema = new mongoose_1.Schema({
    userid: { type: String, require: true },
    comment: { type: String, require: true, set: GlobalFunctions_1.cleanWhiteSpaces },
    answer: { type: String, default: null, set: GlobalFunctions_1.cleanWhiteSpaces },
    likes: { type: [LikesTemaryCommentsSchema], default: [] },
    unlikes: { type: [LikesTemaryCommentsSchema], default: [] },
    created_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate },
    updated_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate }
}, { id: false });
const ContentSchema = new mongoose_1.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    urlVideo: { type: String, require: true }
}, { id: false });
const TestSchema = new mongoose_1.Schema({
    title: { type: String, require: true, set: GlobalFunctions_1.cleanWhiteSpaces },
    description: { type: String, default: null, set: GlobalFunctions_1.cleanWhiteSpaces },
    extra: { type: String, default: null, set: GlobalFunctions_1.cleanWhiteSpaces },
    placeholder: { type: String, default: null, get: getPlaceHolder, set: GlobalFunctions_1.cleanWhiteSpaces },
    inputType: {
        type: String,
        enum: ['text', 'textarea', 'checkbox', 'radio', 'select'],
        require: true
    },
    require: { type: Boolean, default: false },
    values: { type: [String], default: 'Indica tu respuesta' },
    correctAnswer: { type: Number, default: null },
}, { id: false });
const TemarySchema = new mongoose_1.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    content: { type: [ContentSchema], require: true },
    test: { type: [TestSchema], require: true },
    comments: { type: [TemaryCommentsSchema], default: [] },
    likes: { type: [LikesTemaryCommentsSchema], default: [] },
    unlikes: { type: [LikesTemaryCommentsSchema], default: [] },
}, { id: false });
const CoursesSchema = new mongoose_1.Schema({
    userid: { type: String, require: true },
    speaker: { type: String, require: true },
    speakerPosition: { type: Number, require: true },
    code: { type: String, require: true, set: GlobalFunctions_1.toUpperValue },
    title: { type: String, require: true, set: GlobalFunctions_1.cleanWhiteSpaces },
    banner: { type: String, default: null },
    description: { type: String, require: true, set: GlobalFunctions_1.cleanWhiteSpaces },
    slug: { type: String, require: true },
    temary: { type: [TemarySchema], require: true },
    // test: { type: [TestSchema], require: true }, // test to users
    levels: { type: [String], default: [] },
    comments: { type: [TemaryCommentsSchema], default: [] },
    likes: { type: [LikesTemaryCommentsSchema], default: [] },
    unlikes: { type: [LikesTemaryCommentsSchema], default: [] },
    toRoles: { type: [Number], require: true },
    enable: { type: Boolean, default: false },
    draft: { type: Boolean, default: true },
    created_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate },
    updated_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate }
}, { id: false });
CoursesSchema.pre('save', function (next) {
    this.updated_at = GlobalFunctions_1.setDate();
    next();
});
CoursesSchema.set('toJSON', { getters: true });
CoursesSchema.index({ slug: 1 });
// TestSchema.set('toJSON', { getters: true });
ContentSchema.set('toJSON', { getters: true });
TemarySchema.set('toJSON', { getters: true });
TemaryCommentsSchema.set('toJSON', { getters: true });
LikesTemaryCommentsSchema.set('toJSON', { getters: true });
const Courses = mongoose_1.model('course', CoursesSchema);
exports.default = Courses;
