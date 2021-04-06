"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const ConsolidatesSchema = new mongoose_1.Schema({
    consolidatorId: { type: String, require: true },
    userid: { type: String, require: true },
    date: { type: Number, require: true, get: GlobalFunctions_1.getSimpleDate },
    observation: { type: String, require: true, set: GlobalFunctions_1.toUpperValue },
    created_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate }
}, { id: false });
ConsolidatesSchema.set('toJSON', { getters: true });
const Consolidates = mongoose_1.model('consolidates', ConsolidatesSchema);
exports.default = Consolidates;
