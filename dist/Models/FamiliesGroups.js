"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const LocationSchema = new mongoose_1.Schema({
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], default: [-73.630175, 4.134516] },
}, { _id: false, id: false });
const MembersGroupSchema = new mongoose_1.Schema({
    leaderId: { type: String, default: null },
    hostId: { type: String, default: null },
    assistantId: { type: String, default: null },
    masterId: { type: String, default: null },
}, { _id: false, id: false });
const FamiliesGroupsSchema = new mongoose_1.Schema({
    number: { type: Number, require: true },
    sector: { type: Number, require: true },
    subSector: { type: Number, require: true },
    members: { type: MembersGroupSchema, default: { MembersGroupSchema } },
    direction: { type: String, require: true, set: GlobalFunctions_1.toUpperValue },
    location: { type: LocationSchema, default: { LocationSchema } },
    created_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate },
    updated_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate }
}, { id: false });
FamiliesGroupsSchema.pre('save', function (next) {
    this.updated_at = GlobalFunctions_1.setDate();
    next();
});
MembersGroupSchema.set('toJSON', { getters: true });
FamiliesGroupsSchema.set('toJSON', { getters: true });
const FamiliesGroups = mongoose_1.model('families_groups', FamiliesGroupsSchema);
exports.default = FamiliesGroups;
