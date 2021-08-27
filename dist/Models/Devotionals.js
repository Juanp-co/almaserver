"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const DevotionalsSchema = new mongoose_1.Schema({
    userid: { type: String, require: true },
    title: { type: String, require: true, set: GlobalFunctions_1.toUpperValue },
    description: { type: String, require: true },
    picture: { type: String, default: null },
    urlVideo: { type: String, default: null },
    created_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate },
    updated_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate }
}, { id: false });
DevotionalsSchema.set('toJSON', { getters: true });
DevotionalsSchema.pre('save', function (next) {
    this.updated_at = GlobalFunctions_1.setDate();
    next();
});
const Devotionals = mongoose_1.model('devotionals', DevotionalsSchema);
exports.default = Devotionals;
