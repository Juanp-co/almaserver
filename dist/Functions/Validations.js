"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkYoutubeUrl = exports.checkTwitterUrl = exports.checkInstagramUrl = exports.checkFacebookUrl = exports.checkUrl = exports.isBase64 = exports.checkHtmlContent = exports.checkUUID = exports.checkSlug = exports.checkBase64 = exports.checkDateMonthAndYear = exports.checkHour = exports.checkDateAndHour = exports.checkDate = exports.checkCodeValue = exports.checkTitlesOrDescriptions = exports.checkObjectId = exports.checkEmail = exports.checkPassword = exports.checkPhone = exports.checkInputTypeValueToTest = exports.checkDocument = exports.checkIfValueIsNumber = exports.checkRole = exports.checkNameOrLastName = void 0;
const moment_1 = __importDefault(require("moment"));
function checkNameOrLastName(value) {
    return (value &&
        /^([A-Z\u00C0-\u024F\u1E00-\u1EFF]?)+([[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]+[,.]?[ ]?|[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]+['-]]?)+$/.test(value));
}
exports.checkNameOrLastName = checkNameOrLastName;
function checkRole(value) {
    return /^[012345]{1}/.test(`${value}`);
}
exports.checkRole = checkRole;
function checkIfValueIsNumber(value) {
    return /^[0-9]{1,3}/.test(`${value}`);
}
exports.checkIfValueIsNumber = checkIfValueIsNumber;
function checkDocument(value) {
    return value && /^([CC|CE|PE|TI|PAS]){2,3}[0-9]{5,20}$/.test(value);
}
exports.checkDocument = checkDocument;
function checkInputTypeValueToTest(value) {
    return value && ['text', 'textarea', 'checkbox', 'radio', 'select'].indexOf(`${value}`) > -1;
}
exports.checkInputTypeValueToTest = checkInputTypeValueToTest;
function checkPhone(value) {
    return (value && /^[\+]?[(]?([0-9]{2})?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value));
}
exports.checkPhone = checkPhone;
function checkPassword(value) {
    return (value && /^(?=.*\d)?(?=.*[A-Z]{1})?(?=.*[a-z]{1}?)?(?=.*[^\w\d\s:]?)([^\s]){6,25}$/.test(value));
}
exports.checkPassword = checkPassword;
function checkEmail(value) {
    return value && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
}
exports.checkEmail = checkEmail;
function checkObjectId(value) {
    return /^[0-9a-fA-F]{24}$/.test(`${value}`);
}
exports.checkObjectId = checkObjectId;
function checkTitlesOrDescriptions(value) {
    return (value &&
        /^[a-zA-ZÁÉÍÓÚÀÈÌÒÙàèìòùáéíóúÂÊÎÔÛâêîôûÄËÏÖÜäëïöüñÑ0-9\s.,#*?¿¡!()\-+"'/@]{5,2000}/g.test(value));
}
exports.checkTitlesOrDescriptions = checkTitlesOrDescriptions;
function checkCodeValue(value) {
    return value && /^[a-zA-Z0-9\s.,#*()\-+/@]+$/g.test(value);
}
exports.checkCodeValue = checkCodeValue;
function checkDate(value) {
    // validate date (YYYY-MM-DD)
    if (!value)
        return false;
    const isValid = moment_1.default(`${value}`, 'YYYY-MM-DD', true).isValid();
    return isValid;
}
exports.checkDate = checkDate;
function checkDateAndHour(value) {
    // validate date (YYYY-MM-DD HH:mm)
    return value && moment_1.default(`${value}`).isValid();
}
exports.checkDateAndHour = checkDateAndHour;
function checkHour(value) {
    // validate hour (HH:mm)
    return value && /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(value);
}
exports.checkHour = checkHour;
function checkDateMonthAndYear(value) {
    // validate date (YYYY-MM-DD)
    return value && /(1[0-2]|0[1-9]|\d)-(20\d{2}|19\d{2}|0(?!0)\d|[1-9]\d)/.test(value);
}
exports.checkDateMonthAndYear = checkDateMonthAndYear;
function checkBase64(text, doc = false) {
    if (!text)
        return false;
    if (doc)
        return text.substr(0, 40).indexOf('data:application/pdf') > -1;
    return text.substr(0, 21).indexOf('data:image/') > -1;
}
exports.checkBase64 = checkBase64;
function checkSlug(value) {
    return value && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(`${value}`);
}
exports.checkSlug = checkSlug;
function checkUUID(value) {
    return value && /^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[4][0-9A-Fa-f]{3}-[89AB][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12,13}$/i.test(`${value}`);
}
exports.checkUUID = checkUUID;
function checkHtmlContent(value) {
    return value && /<(\"[^\"]*\"|'[^']*'|[^'\">])*>$/gim.test(`${value}`);
}
exports.checkHtmlContent = checkHtmlContent;
function isBase64(text, doc = false) {
    if (!text)
        return false;
    if (doc)
        return text.substr(0, 25).indexOf('data:application/pdf') > -1;
    return text.substr(0, 15).indexOf('data:image/') > -1;
}
exports.isBase64 = isBase64;
function checkUrl(value) {
    return /^(?:(?:(?:http?|https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(`${value}`);
}
exports.checkUrl = checkUrl;
function checkFacebookUrl(value) {
    return /(?:https?:\/\/)?(?:www|m\.)?(facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/ig.test(`${value}`);
}
exports.checkFacebookUrl = checkFacebookUrl;
function checkInstagramUrl(value) {
    return /(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/([A-Za-z0-9-_\.\/]+)/i.test(`${value}`);
}
exports.checkInstagramUrl = checkInstagramUrl;
function checkTwitterUrl(value) {
    return /^(?:https?:\/\/)?(?:www\.)?twitter\.com\/(#!\/)?[a-zA-Z0-9_]+$/i.test(`${value}`);
}
exports.checkTwitterUrl = checkTwitterUrl;
function checkYoutubeUrl(value) {
    return /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/i.test(`${value}`);
}
exports.checkYoutubeUrl = checkYoutubeUrl;
