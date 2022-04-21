"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const LocationSchema = new mongoose_1.Schema({
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], default: [-73.630175, 4.134516] },
}, { _id: false, id: false });
const ChurchesSchema = new mongoose_1.Schema({
    name: { type: String, require: true },
    description: { type: String, require: true },
    picture: { type: String, default: null },
    phone1: { type: String, default: null },
    phone2: { type: String, default: null },
    email: { type: String, default: null },
    address: { type: String, default: null },
    location: { type: LocationSchema, default: { LocationSchema } },
    userid: { type: String, default: null },
    created_at: { type: Number, default: GlobalFunctions_1.setDate },
    updated_at: { type: Number, default: GlobalFunctions_1.setDate }
}, { id: false });
ChurchesSchema.pre('save', function (next) {
    this.updated_at = (0, GlobalFunctions_1.setDate)();
    next();
});
ChurchesSchema.set('toJSON', { getters: true });
const Churches = (0, mongoose_1.model)('churches', ChurchesSchema);
exports.default = Churches;
