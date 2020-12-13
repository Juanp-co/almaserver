"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUUID = exports.isBase64 = exports.validateDateMonthAndYear = exports.validateDate = exports.validateCodeValue = exports.validateTitlesOrDescriptions = exports.checkObjectId = exports.checkEmail = exports.checkPassword = exports.checkPhone = exports.checkDocument = exports.checkIfValueIsNumber = exports.checkRole = exports.checkNameOrLastName = void 0;
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
function validateTitlesOrDescriptions(value) {
    return (value &&
        /^[a-zA-ZÁÉÍÓÚÀÈÌÒÙàèìòùáéíóúÂÊÎÔÛâêîôûÄËÏÖÜäëïöüñÑ0-9\s.,#*?¿¡!()\-+"'/@]{5,500}/g.test(value));
}
exports.validateTitlesOrDescriptions = validateTitlesOrDescriptions;
function validateCodeValue(value) {
    return value && /^[a-zA-Z0-9\s.,#*()\-+/@]+$/g.test(value);
}
exports.validateCodeValue = validateCodeValue;
function validateDate(value) {
    // validate date (YYYY-MM-DD)
    return value && !Number.isNaN(Date.parse(value));
}
exports.validateDate = validateDate;
function validateDateMonthAndYear(value) {
    // validate date (YYYY-MM-DD)
    return value && /(1[0-2]|0[1-9]|\d)-(20\d{2}|19\d{2}|0(?!0)\d|[1-9]\d)/.test(value);
}
exports.validateDateMonthAndYear = validateDateMonthAndYear;
function isBase64(text, doc = false) {
    if (doc)
        return text.substr(0, 40).indexOf('data:application/pdf') > -1;
    return text.substr(0, 21).indexOf('data:image/') > -1;
}
exports.isBase64 = isBase64;
function validateUUID(value) {
    return /^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[4][0-9A-Fa-f]{3}-[89AB][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12,13}$/i.test(value);
}
exports.validateUUID = validateUUID;
