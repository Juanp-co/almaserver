"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdate = exports.validateRegister = void 0;
const Validations_1 = require("../Functions/Validations");
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
function validateRegister(data) {
    const ret = {
        question: null
    };
    const errors = [];
    if (!Validations_1.validateTitlesOrDescriptions(data.question)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar la pregunta.', 'question'));
    }
    else {
        ret.question = data.question ? data.question.trim() : '';
    }
    return { data: ret, errors };
}
exports.validateRegister = validateRegister;
function validateUpdate(data, _id) {
    const ret = {
        _id: null,
        question: null
    };
    const errors = [];
    if (!Validations_1.checkObjectId(_id)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero el ID de la pregunta de seguridad es incorrecto.', '_id'));
    }
    else {
        ret._id = `${_id}`;
    }
    if (!Validations_1.validateTitlesOrDescriptions(data.question)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar la pregunta.', 'question'));
    }
    else {
        ret.question = data.question ? data.question.trim() : '';
    }
    return { data: ret, errors };
}
exports.validateUpdate = validateUpdate;
