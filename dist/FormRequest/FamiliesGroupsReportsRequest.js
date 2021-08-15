"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const Validations_1 = require("../Functions/Validations");
function validateFormData(data) {
    var _a;
    const ret = {
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
    };
    const errors = [];
    // brethren
    if (!/[0-9]{1,4}/.test(`${data.brethren}`)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar el número de hermanos.', 'brethren'));
    }
    else {
        ret.brethren = data.brethren;
        ret.total += data.brethren;
    }
    // friends
    if (!/[0-9]{1,4}/.test(`${data.friends}`)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar el número de amigos.', 'friends'));
    }
    else {
        ret.friends = data.friends;
        ret.total += data.friends;
    }
    // christianChildren
    if (!/[0-9]{1,4}/.test(`${data.christianChildren}`)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar indicar el número de niños cristianos.', 'christianChildren'));
    }
    else {
        ret.christianChildren = data.christianChildren;
        ret.total += data.christianChildren;
    }
    // christianChildrenFriends
    if (!/[0-9]{1,4}/.test(`${data.christianChildrenFriends}`)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar indicar el número de amigos de los niños cristianos.', 'christianChildrenFriends'));
    }
    else {
        ret.christianChildrenFriends = data.christianChildrenFriends;
        ret.total += data.christianChildrenFriends;
    }
    // number
    if (Validations_1.checkIfValueIsNumber(`${data.scheduledVisits}`))
        ret.scheduledVisits = data.scheduledVisits;
    if (Validations_1.checkIfValueIsNumber(`${data.discipleshipVisits}`))
        ret.discipleshipVisits = data.discipleshipVisits;
    if (Validations_1.checkIfValueIsNumber(`${data.offering}`))
        ret.offering = data.offering;
    if (Validations_1.checkIfValueIsNumber(`${data.churchAttendance}`))
        ret.churchAttendance = data.churchAttendance;
    if (Validations_1.checkIfValueIsNumber(`${data.churchAttendanceChildren}`))
        ret.churchAttendanceChildren = data.churchAttendanceChildren;
    if (Validations_1.checkIfValueIsNumber(`${data.conversions}`))
        ret.conversions = data.conversions;
    if (Validations_1.checkIfValueIsNumber(`${data.reconciliations}`))
        ret.reconciliations = data.reconciliations;
    if (Validations_1.checkIfValueIsNumber(`${data.conversionsChildren}`))
        ret.conversionsChildren = data.conversionsChildren;
    if (Validations_1.checkIfValueIsNumber(`${data.brethrenPlanning}`))
        ret.brethrenPlanning = data.brethrenPlanning;
    if (Validations_1.checkIfValueIsNumber(`${data.bibleReading}`))
        ret.bibleReading = data.bibleReading;
    // observations
    if (!Validations_1.checkTitlesOrDescriptions(data.observations)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar una dirección.', 'observations'));
    }
    else
        ret.observations = ((_a = data.observations) === null || _a === void 0 ? void 0 : _a.toString().trim()) || null;
    // date
    if (!Validations_1.checkDateAndHour(data.date)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar la fecha y hora del reporte.', 'date'));
    }
    else
        ret.date = data.date;
    return { data: ret, errors };
}
exports.default = validateFormData;
