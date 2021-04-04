import { Document } from 'mongoose';
import { IFamiliesGroupsDetailsToReport } from './IFamiliesGroups';

export interface IFamiliesGroupsReportData {
  brethren: number;
  friends: number;
  scheduledVisits: number;
  discipleshipVisits: number;
  christianChildren: number;
  christianChildrenFriends: number;
  total: number;
  offering: number;
  churchAttendance: number;
  churchAttendanceChildren: number;
  conversions: number;
  reconciliations: number;
  conversionsChildren: number;
  brethrenPlanning: number;
  bibleReading: number;
  consolidated: number;
  observations: string;
  date: number|string;
}

export interface IFamiliesGroupsReportsCounters {
  brethren: number;
  friends: number;
  scheduledVisits: number;
  discipleshipVisits: number;
  christianChildren: number;
  christianChildrenFriends: number;
  total: number;
  offering: number;
  churchAttendance: number;
  churchAttendanceChildren: number;
  conversions: number;
  reconciliations: number;
  conversionsChildren: number;
  brethrenPlanning: number;
  bibleReading: number;
  consolidated: number;
}

export interface IFamiliesGroupsReportsObservations {
  observations: string;
  date: number|string;
}

export interface IFamiliesGroupsReportsAdmin {
  group: IFamiliesGroupsDetailsToReport;
  report: IFamiliesGroupsReportsCounters;
  observations: IFamiliesGroupsReportsObservations[];
}

export interface IFamiliesGroupsReportsUser {
  report: IFamiliesGroupsReportsCounters;
  observations: IFamiliesGroupsReportsObservations[];
}

export interface IFamiliesGroupsReports extends Document {
  familyGroupId: string;
  userid: string;
  report: IFamiliesGroupsReportData;
  created_at: string | number;
  updated_at: string | number;
}

export interface IFamiliesGroupsReportsForm {
  brethren: IFamiliesGroupsReportData['brethren'];
  friends: IFamiliesGroupsReportData['friends'];
  scheduledVisits: IFamiliesGroupsReportData['scheduledVisits'];
  discipleshipVisits: IFamiliesGroupsReportData['discipleshipVisits'];
  christianChildren: IFamiliesGroupsReportData['christianChildren'];
  christianChildrenFriends: IFamiliesGroupsReportData['christianChildrenFriends'];
  offering: IFamiliesGroupsReportData['offering'];
  churchAttendance: IFamiliesGroupsReportData['churchAttendance'];
  churchAttendanceChildren: IFamiliesGroupsReportData['churchAttendanceChildren'];
  conversions: IFamiliesGroupsReportData['conversions'];
  reconciliations: IFamiliesGroupsReportData['reconciliations'];
  conversionsChildren: IFamiliesGroupsReportData['conversionsChildren'];
  brethrenPlanning: IFamiliesGroupsReportData['brethrenPlanning'];
  bibleReading: IFamiliesGroupsReportData['bibleReading'];
  consolidated: IFamiliesGroupsReportData['consolidated'];
  observations: IFamiliesGroupsReportData['observations']|null;
  date: IFamiliesGroupsReportData['date']|null;
}

export interface IFamiliesGroupsReportsData {
  brethren: IFamiliesGroupsReportData['brethren'];
  friends: IFamiliesGroupsReportData['friends'];
  scheduledVisits: IFamiliesGroupsReportData['scheduledVisits'];
  discipleshipVisits: IFamiliesGroupsReportData['discipleshipVisits'];
  christianChildren: IFamiliesGroupsReportData['christianChildren'];
  christianChildrenFriends: IFamiliesGroupsReportData['christianChildrenFriends'];
  total: IFamiliesGroupsReportData['total'];
  offering: IFamiliesGroupsReportData['offering'];
  churchAttendance: IFamiliesGroupsReportData['churchAttendance'];
  churchAttendanceChildren: IFamiliesGroupsReportData['churchAttendanceChildren'];
  conversions: IFamiliesGroupsReportData['conversions'];
  reconciliations: IFamiliesGroupsReportData['reconciliations'];
  conversionsChildren: IFamiliesGroupsReportData['conversionsChildren'];
  brethrenPlanning: IFamiliesGroupsReportData['brethrenPlanning'];
  bibleReading: IFamiliesGroupsReportData['bibleReading'];
  consolidated: IFamiliesGroupsReportData['consolidated'];
  observations: IFamiliesGroupsReportData['observations']|null;
  date: IFamiliesGroupsReportData['date']|null;
}
