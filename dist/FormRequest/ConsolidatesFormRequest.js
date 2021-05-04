"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const Validations_1 = require("../Functions/Validations");
function validateSimpleRegister(data) {
    const ret = {
        userId: null,
        action: null,
        observation: null,
        date: null,
    };
    const errors = [];
    const types = ['Visita', 'Llamada'];
    // userId
    if (!Validations_1.checkObjectId(data.userId)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero el miembro seleccionado es incorrecto.', 'userId'));
    }
    else
        ret.userId = data.userId;
    // date
    if (!Validations_1.checkDate(data.date)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar una fecha para la visita.', 'date'));
    }
    else
        ret.date = moment_timezone_1.default(data.date, 'YYYY-MM-DD', true).unix();
    // date
    if (!types[`${data.action || 0}`]) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar el tipo de acción realizada.', 'action'));
    }
    else
        ret.action = types[data.action || 0];
    // observation
    if (!Validations_1.checkTitlesOrDescriptions(data.observation)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar un observación válida.', 'observation'));
    }
    else
        ret.observation = data.observation;
    return { data: ret, errors };
}
exports.default = validateSimpleRegister;
