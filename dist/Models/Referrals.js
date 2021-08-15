"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const ReferralsSchema = new mongoose_1.Schema({
    members: { type: [String], default: [] },
    created_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate },
    updated_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate }
}, { id: false });
ReferralsSchema.pre('save', function (next) {
    this.updated_at = GlobalFunctions_1.setDate();
    next();
});
ReferralsSchema.set('toJSON', { getters: true });
const Referrals = mongoose_1.model('referrals', ReferralsSchema);
exports.default = Referrals;
