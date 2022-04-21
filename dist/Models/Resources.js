"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const ResourcesSchema = new mongoose_1.Schema({
    userid: { type: String, require: true },
    title: { type: String, require: true, set: GlobalFunctions_1.toUpperValue },
    urlDoc: { type: String, require: true },
    roles: { type: [Number], require: true },
    created_at: { type: Number, default: GlobalFunctions_1.setDate },
    updated_at: { type: Number, default: GlobalFunctions_1.setDate }
}, { id: false });
ResourcesSchema.set('toJSON', { getters: true });
ResourcesSchema.pre('save', function (next) {
    this.updated_at = (0, GlobalFunctions_1.setDate)();
    next();
});
const Resources = (0, mongoose_1.model)('resources', ResourcesSchema);
exports.default = Resources;
