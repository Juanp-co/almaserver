import { Schema, model } from 'mongoose';
import { setDate } from '../Functions/GlobalFunctions';
import { IGroupsInvitations, IGroupsInvitationsList } from '../Interfaces/IGroups';

const GroupsInvitationsListScheme = new Schema(
  {
    userid: { type: String, required: true },
    groupId: { type: String, required: true },
    created_at: { type: Number, default: setDate },
    updated_at: { type: Number, default: setDate }
  },
  { id: false }
);

const GroupsInvitationsSchema = new Schema(
  {
    list: { type: [GroupsInvitationsListScheme], default: [] },
    created_at: { type: Number, default: setDate },
    updated_at: { type: Number, default: setDate }
  },
  { id: false }
);

GroupsInvitationsSchema.pre<IGroupsInvitations>('save', function (next) {
  this.updated_at = setDate();
  next();
});

GroupsInvitationsListScheme.pre<IGroupsInvitationsList>('save', function (next) {
  this.updated_at = setDate();
  next();
});

GroupsInvitationsSchema.set('toJSON', { getters: true });
GroupsInvitationsListScheme.set('toJSON', { getters: true });

const GroupsInvitations = model<IGroupsInvitations>('groups_invitations', GroupsInvitationsSchema);

export default GroupsInvitations;
