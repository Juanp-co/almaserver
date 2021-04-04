import moment from 'moment';
import { Schema, model } from 'mongoose';
import { getDate, setDate, toUpperValue } from '../Functions/GlobalFunctions';
import { IFamiliesGroupsReports } from '../Interfaces/IFamiliesGroupsReports';

const convertDateToTimestamp = (value: any) => value ? moment(value).tz('America/Bogota').unix() : null;

const ReportGroupSchema = new Schema(
  {
    brethren: { type: Number, default: 0 },
    friends: { type: Number, default: 0 },
    scheduledVisits: { type: Number, default: 0 },
    discipleshipVisits: { type: Number, default: 0 },
    christianChildren: { type: Number, default: 0 },
    christianChildrenFriends: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    offering: { type: Number, default: 0 },
    churchAttendance: { type: Number, default: 0 },
    churchAttendanceChildren: { type: Number, default: 0 },
    conversions: { type: Number, default: 0 },
    reconciliations: { type: Number, default: 0 },
    conversionsChildren: { type: Number, default: 0 },
    brethrenPlanning: { type: Number, default: 0 },
    bibleReading: { type: Number, default: 0 },
    consolidated: { type: Number, default: 0 },
    observations: { type: String, default: null, set: toUpperValue },
    date: { type: String, require: true, set: convertDateToTimestamp, get: getDate },
  },
  { _id: false, id: false }
);

const FamiliesGroupsReportsSchema = new Schema(
  {
    familyGroupId: { type: String, require: true },
    userid: { type: String, require: true },
    report: { type: ReportGroupSchema, default: {ReportGroupSchema} },
    created_at: { type: Number, default: setDate, get: getDate },
    updated_at: { type: Number, default: setDate, get: getDate }
  },
  { id: false }
);

FamiliesGroupsReportsSchema.pre<IFamiliesGroupsReports>('save', function (next) {
  this.updated_at = setDate();
  next();
});

ReportGroupSchema.set('toJSON', { getters: true });
FamiliesGroupsReportsSchema.set('toJSON', { getters: true });

const FamiliesGroupsReports = model<IFamiliesGroupsReports>('families_groups_reports', FamiliesGroupsReportsSchema);

export default FamiliesGroupsReports;
