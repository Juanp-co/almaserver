import { setError } from '../Functions/GlobalFunctions';
import {
  checkDateAndHour,
  checkIfValueIsNumber,
  checkTitlesOrDescriptions
} from '../Functions/Validations';
import { IFamiliesGroupsReportsData, IFamiliesGroupsReportsForm } from '../Interfaces/IFamiliesGroupsReports';

export default function validateFormData(data: IFamiliesGroupsReportsForm) : { data: IFamiliesGroupsReportsData; errors: any } {
  const ret: IFamiliesGroupsReportsData = {
    brethren: 0,
    friends: 0,
    christianChildren: 0,
    christianChildrenFriends: 0,
    scheduledVisits: 0,
    discipleshipVisits: 0,
    total: 0,
    offering: 0,
    churchAttendance: 0,
    churchAttendanceChildren: 0,
    conversions: 0,
    reconciliations: 0,
    conversionsChildren: 0,
    brethrenPlanning: 0,
    bibleReading: 0,
    consolidated: 0,
    observations: null,
    date: null,
  } as IFamiliesGroupsReportsData;

  const errors: any = [];

  // brethren
  if (!/[0-9]{1,4}/.test(`${data.brethren}`)) {
    errors.push(
      setError('Disculpe, pero debe indicar el número de hermanos.', 'brethren')
    );
  }
  else {
    ret.brethren = parseInt(`${data.brethren}`, 10);
    ret.total += ret.brethren;
  }

  // friends
  if (!/[0-9]{1,4}/.test(`${data.friends}`)) {
    errors.push(
      setError('Disculpe, pero debe indicar el número de amigos.', 'friends')
    );
  }
  else {
    ret.friends = parseInt(`${data.friends}`, 10);
    ret.total += ret.friends;
  }

  // christianChildren
  if (!/[0-9]{1,4}/.test(`${data.christianChildren}`)) {
    errors.push(
      setError('Disculpe, pero debe indicar indicar el número de niños cristianos.', 'christianChildren')
    );
  }
  else {
    ret.christianChildren = parseInt(`${data.christianChildren}`, 10);
    ret.total += ret.christianChildren;
  }

  // christianChildrenFriends
  if (!/[0-9]{1,4}/.test(`${data.christianChildrenFriends}`)) {
    errors.push(
      setError(
        'Disculpe, pero debe indicar indicar el número de amigos de los niños cristianos.',
        'christianChildrenFriends'
      )
    );
  }
  else {
    ret.christianChildrenFriends = parseInt(`${data.christianChildrenFriends}`, 10);
    ret.total += ret.christianChildrenFriends;
  }

  // number
  if (checkIfValueIsNumber(`${data.scheduledVisits}`)) ret.scheduledVisits = data.scheduledVisits;
  if (checkIfValueIsNumber(`${data.discipleshipVisits}`)) ret.discipleshipVisits = data.discipleshipVisits;
  if (checkIfValueIsNumber(`${data.offering}`)) ret.offering = data.offering;
  if (checkIfValueIsNumber(`${data.churchAttendance}`)) ret.churchAttendance = data.churchAttendance;
  if (checkIfValueIsNumber(`${data.churchAttendanceChildren}`)) ret.churchAttendanceChildren = data.churchAttendanceChildren;
  if (checkIfValueIsNumber(`${data.conversions}`)) ret.conversions = data.conversions;
  if (checkIfValueIsNumber(`${data.reconciliations}`)) ret.reconciliations = data.reconciliations;
  if (checkIfValueIsNumber(`${data.conversionsChildren}`)) ret.conversionsChildren = data.conversionsChildren;
  if (checkIfValueIsNumber(`${data.brethrenPlanning}`)) ret.brethrenPlanning = data.brethrenPlanning;
  if (checkIfValueIsNumber(`${data.bibleReading}`)) ret.bibleReading = data.bibleReading;

  // observations
  if (!checkTitlesOrDescriptions(data.observations)) {
    errors.push(
      setError('Disculpe, pero debe indicar una observación para el reporte.', 'observations')
    );
  }
  else ret.observations = data.observations?.toString().trim() || null;

  // date
  if (!checkDateAndHour(data.date)) {
    errors.push(
      setError('Disculpe, pero debe indicar la fecha y hora del reporte.', 'date')
    );
  }
  else ret.date = data.date;

  return { data: ret, errors };
}
