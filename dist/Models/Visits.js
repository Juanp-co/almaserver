"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const VisitsSchema = new mongoose_1.Schema({
    referred: { type: String, require: true },
    userid: { type: String, require: true },
    date: { type: Number, require: true, get: GlobalFunctions_1.getSimpleDate },
    action: { type: String, default: 'Visita' },
    observation: { type: String, require: true, set: GlobalFunctions_1.toUpperValue },
    created_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate }
}, { id: false });
VisitsSchema.set('toJSON', { getters: true });
const Visits = mongoose_1.model('visits', VisitsSchema);
exports.default = Visits;
