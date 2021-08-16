"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const Validations_1 = require("../Functions/Validations");
function validateRegister(data) {
    const ret = {
        title: null,
        description: null,
        date: null,
        initHour: null,
        endHour: null,
        toRoles: [],
        picture: null,
    };
    const errors = [];
    // title
    if (!data.title || !Validations_1.checkTitlesOrDescriptions(data.title)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar un título para el evento.', 'title'));
    }
    else {
        ret.title = data.title ? data.title.toString().trim().toUpperCase() : data.title;
    }
    // description
    if (!data.description || (data.description && data.description.length < 5)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar una descripción para el evento.', 'description'));
    }
    else {
        ret.description = data.description ? data.description.toString().trim() : data.description;
    }
    // date
    if (!data.date || !Validations_1.checkDate(data.date)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar la fecha para el evento.', 'date'));
    }
    else {
        ret.date = moment_timezone_1.default(data.date).unix();
    }
    // initHour
    if (!data.initHour || !Validations_1.checkHour(data.initHour)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar la hora de inicio para el evento.', 'initHour'));
    }
    else {
        ret.initHour = data.initHour ? data.initHour.toString().trim() : data.initHour;
    }
    // endHour
    if (!data.endHour || !Validations_1.checkHour(data.endHour)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar la hora de finalización del evento.', 'endHour'));
    }
    else {
        ret.endHour = data.endHour ? data.endHour.toString().trim() : data.endHour;
    }
    // toRoles
    if (!data.toRoles || typeof data.toRoles !== 'object' || data.toRoles.length === 0) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe seleccionar a quienes va dirigido el evento.', 'toRoles'));
    }
    else {
        ret.toRoles = data.toRoles;
    }
    // picture
    if (data.picture)
        ret.picture = data.picture;
    return { data: ret, errors };
}
exports.default = validateRegister;
