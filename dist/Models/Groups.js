"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const GroupsSchema = new mongoose_1.Schema({
    code: { type: String, require: true, set: GlobalFunctions_1.toUpperValue, unique: true },
    name: { type: String, require: true, set: GlobalFunctions_1.toUpperValue },
    members: { type: [String], default: [] },
    userid: { type: String, require: true },
    created_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate },
    updated_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate }
}, { id: false });
GroupsSchema.pre('save', function (next) {
    this.updated_at = GlobalFunctions_1.setDate();
    next();
});
GroupsSchema.set('toJSON', { getters: true });
const Groups = mongoose_1.model('groups', GroupsSchema);
exports.default = Groups;
