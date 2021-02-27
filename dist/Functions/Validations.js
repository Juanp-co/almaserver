"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkHtmlContent = exports.checkUUID = exports.checkSlug = exports.checkUrl = exports.checkBase64 = exports.checkDateMonthAndYear = exports.checkHour = exports.checkDate = exports.checkCodeValue = exports.checkTitlesOrDescriptions = exports.checkObjectId = exports.checkEmail = exports.checkPassword = exports.checkPhone = exports.checkInputTypeValueToTest = exports.checkYoutubeUrl = exports.checkDocument = exports.checkIfValueIsNumber = exports.checkRole = exports.checkNameOrLastName = void 0;
const mongoose_1 = require("mongoose");
function checkNameOrLastName(value) {
    return (value &&
        /^([A-Z\u00C0-\u024F\u1E00-\u1EFF]?)+([[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]+[,.]?[ ]?|[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]+['-]]?)+$/.test(value));
}
exports.checkNameOrLastName = checkNameOrLastName;
function checkRole(value) {
    return value && /^[012345]{1}/.test(`${value}`);
}
exports.checkRole = checkRole;
function checkIfValueIsNumber(value) {
    return value && /^[0-9]{1,3}/.test(`${value}`);
}
exports.checkIfValueIsNumber = checkIfValueIsNumber;
function checkDocument(value) {
    return value && /^([CC|CE|PE|TI|PAS]){2,3}[0-9]{5,20}$/.test(value);
}
exports.checkDocument = checkDocument;
function checkYoutubeUrl(value) {
    return value
        && /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/.test(value);
}
exports.checkYoutubeUrl = checkYoutubeUrl;
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
    return mongoose_1.Types.ObjectId.isValid(value);
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
    return value && /\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*/.test(`${value}`);
}
exports.checkDate = checkDate;
function checkHour(value) {
    // validate hour (HH:MM)
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
function checkUrl(value) {
    return value && /^(?:(?:(?:http?|https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(`${value}`);
}
exports.checkUrl = checkUrl;
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
