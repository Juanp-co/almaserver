"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const WhitelistSchema = new mongoose_1.Schema({
    userid: { type: String, require: true },
    token: { type: String, require: true },
    status: { type: Boolean, default: true },
    ip: { type: String, default: null },
    created_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate },
    updated_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate }
}, { id: false });
WhitelistSchema.pre('save', function (next) {
    this.updated_at = GlobalFunctions_1.setDate();
    next();
});
WhitelistSchema.set('toJSON', { getters: true });
const Whitelist = mongoose_1.model('Whitelist', WhitelistSchema);
exports.default = Whitelist;
