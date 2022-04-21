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
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe indicar el número de hermanos.', 'brethren'));
    }
    else {
        ret.brethren = parseInt(`${data.brethren}`, 10);
        ret.total += ret.brethren;
    }
    // friends
    if (!/[0-9]{1,4}/.test(`${data.friends}`)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe indicar el número de amigos.', 'friends'));
    }
    else {
        ret.friends = parseInt(`${data.friends}`, 10);
        ret.total += ret.friends;
    }
    // christianChildren
    if (!/[0-9]{1,4}/.test(`${data.christianChildren}`)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe indicar indicar el número de niños cristianos.', 'christianChildren'));
    }
    else {
        ret.christianChildren = parseInt(`${data.christianChildren}`, 10);
        ret.total += ret.christianChildren;
    }
    // christianChildrenFriends
    if (!/[0-9]{1,4}/.test(`${data.christianChildrenFriends}`)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe indicar indicar el número de amigos de los niños cristianos.', 'christianChildrenFriends'));
    }
    else {
        ret.christianChildrenFriends = parseInt(`${data.christianChildrenFriends}`, 10);
        ret.total += ret.christianChildrenFriends;
    }
    // number
    if ((0, Validations_1.checkIfValueIsNumber)(`${data.scheduledVisits}`))
        ret.scheduledVisits = data.scheduledVisits;
    if ((0, Validations_1.checkIfValueIsNumber)(`${data.discipleshipVisits}`))
        ret.discipleshipVisits = data.discipleshipVisits;
    if ((0, Validations_1.checkIfValueIsNumber)(`${data.offering}`))
        ret.offering = data.offering;
    if ((0, Validations_1.checkIfValueIsNumber)(`${data.churchAttendance}`))
        ret.churchAttendance = data.churchAttendance;
    if ((0, Validations_1.checkIfValueIsNumber)(`${data.churchAttendanceChildren}`))
        ret.churchAttendanceChildren = data.churchAttendanceChildren;
    if ((0, Validations_1.checkIfValueIsNumber)(`${data.conversions}`))
        ret.conversions = data.conversions;
    if ((0, Validations_1.checkIfValueIsNumber)(`${data.reconciliations}`))
        ret.reconciliations = data.reconciliations;
    if ((0, Validations_1.checkIfValueIsNumber)(`${data.conversionsChildren}`))
        ret.conversionsChildren = data.conversionsChildren;
    if ((0, Validations_1.checkIfValueIsNumber)(`${data.brethrenPlanning}`))
        ret.brethrenPlanning = data.brethrenPlanning;
    if ((0, Validations_1.checkIfValueIsNumber)(`${data.bibleReading}`))
        ret.bibleReading = data.bibleReading;
    // observations
    if (!(0, Validations_1.checkTitlesOrDescriptions)(data.observations)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe indicar una observación para el reporte.', 'observations'));
    }
    else
        ret.observations = ((_a = data.observations) === null || _a === void 0 ? void 0 : _a.toString().trim()) || null;
    // date
    if (!(0, Validations_1.checkDateAndHour)(data.date)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe indicar la fecha y hora del reporte.', 'date'));
    }
    else
        ret.date = data.date;
    return { data: ret, errors };
}
exports.default = validateFormData;
