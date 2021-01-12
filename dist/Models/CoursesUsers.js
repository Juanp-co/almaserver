"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const TemarySchema = new mongoose_1.Schema({
    temaryId: { type: String, require: true },
    view: { type: Number, default: 0 },
    date: { type: Number, default: null, get: GlobalFunctions_1.getDate }
}, { _id: false, id: false });
const TestsDoneSchema = new mongoose_1.Schema({
    points: { type: String, require: true },
    date: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate }
}, { id: false });
const CoursesUsersSchema = new mongoose_1.Schema({
    userid: { type: String, require: true },
    courseId: { type: String, require: true },
    temary: { type: [TemarySchema], require: true },
    tests: { type: [TestsDoneSchema], require: true },
    approved: { type: Boolean, default: false },
    created_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate },
    updated_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate }
}, { id: false });
CoursesUsersSchema.pre('save', function (next) {
    this.updated_at = GlobalFunctions_1.setDate();
    next();
});
TestsDoneSchema.set('toJSON', { getters: true });
CoursesUsersSchema.set('toJSON', { getters: true });
TemarySchema.set('toJSON', { getters: true });
const CoursesUsers = mongoose_1.model('courses_user', CoursesUsersSchema);
exports.default = CoursesUsers;
