"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateSpanish = exports.getLimitSkipSortSearch = exports.calculateAge = exports.generatePassword = exports.cleanWhiteSpaces = exports.getDate = exports.setDate = exports.upperCaseFirstLettersWords = exports.returnError = exports.setError = exports.showConsoleLog = exports.showConsoleError = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
/*
  Console logs
 */
function showConsoleError(path, error) {
    console.error(`${moment_timezone_1.default().toISOString()} - Error: ${path}`);
    console.error(error);
}
exports.showConsoleError = showConsoleError;
function showConsoleLog(type, msg) {
    if (type === 0)
        console.error(`${moment_timezone_1.default().toISOString()} - ${msg}`);
    else
        console.log(`${moment_timezone_1.default().toISOString()} - ${msg}`);
}
exports.showConsoleLog = showConsoleLog;
/*
  Errors
 */
function setError(msg, input) {
    return { input, msg };
}
exports.setError = setError;
function returnError(res, error, path) {
    showConsoleError(path, error);
    return res.status(500).json({
        msg: 'Ha ocurrido un error inesperado.',
        errors: [{ msg: error.toString() }]
    });
}
exports.returnError = returnError;
// =================================================================================================
function upperCaseFirstLettersWords(words) {
    let ret = '';
    const arrayWords = words ? words.trim().split(' ') : [];
    for (let i = 0; i < arrayWords.length; i++) {
        arrayWords[i] = arrayWords[i].charAt(0).toUpperCase() + arrayWords[i].slice(1);
        ret += ` ${arrayWords[i]}`;
    }
    return ret.length > 0 ? ret.trim() : null;
}
exports.upperCaseFirstLettersWords = upperCaseFirstLettersWords;
function setDate() {
    return moment_timezone_1.default().tz('America/Bogota').unix();
}
exports.setDate = setDate;
function getDate(timestamp) {
    if (timestamp)
        return moment_timezone_1.default.unix(timestamp).tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss');
    return timestamp;
}
exports.getDate = getDate;
function cleanWhiteSpaces(value) {
    if (value)
        return value.toString().trim();
    return null;
}
exports.cleanWhiteSpaces = cleanWhiteSpaces;
function generatePassword() {
    let password = '';
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ123467890';
    for (let i = 0; i < 10; i++)
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    return password;
}
exports.generatePassword = generatePassword;
function calculateAge(birthday) {
    const minAge = 16;
    if (birthday) {
        const a = moment_timezone_1.default().tz('America/Bogota');
        const b = moment_timezone_1.default(birthday).format('YYYY-MM-DD');
        return a.diff(b, 'year') >= minAge;
    }
    return false;
}
exports.calculateAge = calculateAge;
function getLimitSkipSortSearch(data) {
    const { limit, page, value, input } = data;
    let retLimit = 10;
    let retSkip = 0;
    const retSort = {};
    // limit
    if (limit) {
        if (/[0-9]/.test(limit)) {
            const x = Number.parseInt(limit.toString(), 10);
            if (x > 0)
                retLimit = x;
        }
    }
    // skip
    if (page) {
        if (/[0-9]/.test(page)) {
            const y = Number.parseInt(page.toString(), 10);
            if (y >= 1)
                retSkip = (y - 1) * retLimit;
        }
    }
    // sort
    const v = value && /[1 -]/.test(value) && value.toString() === '1' ? 1 : -1;
    switch (input) {
        case 'created_at':
            retSort.created_at = v;
            break;
        case 'code':
            retSort.code = v;
            break;
        case 'date':
            // to events
            retSort.date = v;
            break;
        case 'document':
            retSort.document = v;
            break;
        case 'lastNames':
            retSort.lastNames = v;
            break;
        case 'name':
            retSort.name = v;
            break;
        case 'names':
            retSort.names = v;
            break;
        case 'role':
            retSort.role = v;
            break;
        case 'status':
            retSort.status = v;
            break;
        case 'title':
            retSort.title = v;
            break;
        case 'updated_at':
            retSort.updated_at = v;
            break;
        default:
            retSort.created_at = v;
    }
    return { limit: retLimit, skip: retSkip, sort: retSort };
}
exports.getLimitSkipSortSearch = getLimitSkipSortSearch;
function dateSpanish(timestamp) {
    return timestamp ? moment_timezone_1.default.unix(timestamp).locale('es').format('DD [de] MMMM [de] YYYY') : null;
}
exports.dateSpanish = dateSpanish;
