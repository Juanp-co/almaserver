"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const QuestionsSchema = new mongoose_1.Schema({
    question: { type: String, require: true },
    created_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate },
    updated_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate }
}, { id: false });
QuestionsSchema.set('toJSON', { getters: true });
const Whitelist = mongoose_1.model('question', QuestionsSchema);
exports.default = Whitelist;
