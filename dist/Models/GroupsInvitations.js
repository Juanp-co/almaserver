"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const GroupsInvitationsListScheme = new mongoose_1.Schema({
    userid: { type: String, required: true },
    groupId: { type: String, required: true },
    created_at: { type: Number, default: GlobalFunctions_1.setDate },
    updated_at: { type: Number, default: GlobalFunctions_1.setDate }
}, { id: false });
const GroupsInvitationsSchema = new mongoose_1.Schema({
    list: { type: [GroupsInvitationsListScheme], default: [] },
    created_at: { type: Number, default: GlobalFunctions_1.setDate },
    updated_at: { type: Number, default: GlobalFunctions_1.setDate }
}, { id: false });
GroupsInvitationsSchema.pre('save', function (next) {
    this.updated_at = (0, GlobalFunctions_1.setDate)();
    next();
});
GroupsInvitationsListScheme.pre('save', function (next) {
    this.updated_at = (0, GlobalFunctions_1.setDate)();
    next();
});
GroupsInvitationsSchema.set('toJSON', { getters: true });
GroupsInvitationsListScheme.set('toJSON', { getters: true });
const Groups = (0, mongoose_1.model)('groups_invitations', GroupsInvitationsSchema);
exports.default = Groups;
