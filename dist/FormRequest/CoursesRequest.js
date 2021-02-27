"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTestData = exports.validateThemeUpdate = exports.validateQuestionTestUpdate = exports.validateLevelsData = exports.validateInfoUpdate = exports.validateContentThemeUpdate = exports.validateBannerUpdate = void 0;
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const Validations_1 = require("../Functions/Validations");
function validateSimpleRegister(data) {
    const ret = {
        code: null,
        slug: null,
        title: null,
        banner: null,
        description: null,
        toRoles: [],
    };
    const errors = [];
    // title
    if (!data.title || !Validations_1.checkTitlesOrDescriptions(data.title)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar un título válido para el curso.', 'title'));
    }
    else {
        ret.title = data.title ? data.title.toString().trim().toUpperCase() : data.title;
    }
    // description
    if (!data.description || !Validations_1.checkTitlesOrDescriptions(data.description)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar una descripción válida para el curso.', 'description'));
    }
    else {
        ret.description = data.description;
    }
    // toRoles
    if (!data.toRoles || typeof data.toRoles !== 'object' || (data.toRoles && data.toRoles.length === 0)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero los roles a los que va digido el curso.', 'toRoles'));
    }
    else {
        ret.toRoles = data.toRoles;
    }
    // banner
    if (!Validations_1.checkBase64(`${data.banner}`)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar una imagen para el curso.', 'banner'));
    }
    else
        ret.banner = data.banner ? data.banner.toString().trim() : null;
    return { data: ret, errors };
}
exports.default = validateSimpleRegister;
function validateBannerUpdate(data) {
    const ret = {
        banner: null,
    };
    const errors = [];
    // banner
    if (!Validations_1.checkBase64(data.banner)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero la imagen seleccionada es incorrecta.', 'banner'));
    }
    else
        ret.banner = data.banner;
    return { data: ret, errors };
}
exports.validateBannerUpdate = validateBannerUpdate;
function validateContentThemeUpdate(data) {
    const ret = {
        title: null,
        description: null,
        urlVideo: null,
    };
    const errors = [];
    // title
    if (!data.title || !Validations_1.checkTitlesOrDescriptions(data.title)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar un título válido para el contenido.', 'title'));
    }
    else {
        ret.title = data.title ? data.title.toString().trim().toUpperCase() : data.title;
    }
    if (!data.description && !data.urlVideo) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar una descripción o un video para el contenido.', 'description'));
    }
    // description
    if (data.description)
        ret.description = data.description;
    // urlVideo
    if (data.urlVideo)
        ret.urlVideo = data.urlVideo;
    return { data: ret, errors };
}
exports.validateContentThemeUpdate = validateContentThemeUpdate;
function validateInfoUpdate(data) {
    const ret = {
        title: null,
        description: null,
        speaker: null,
        speakerPosition: null,
        toRoles: [],
    };
    const errors = [];
    // title
    if (!data.title || !Validations_1.checkTitlesOrDescriptions(data.title)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar un título válido para el curso.', 'title'));
    }
    else {
        ret.title = data.title ? data.title.toString().trim().toUpperCase() : data.title;
    }
    // description
    if (!data.description || !Validations_1.checkTitlesOrDescriptions(data.description)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar una descripción válida para el curso.', 'description'));
    }
    else {
        ret.description = data.description;
    }
    // speaker
    if (!data.speaker || !Validations_1.checkNameOrLastName(data.speaker)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar el nombre del ponenete.', 'speaker'));
    }
    else {
        ret.speaker = data.speaker ? data.speaker.toString().trim().toUpperCase() : data.speaker;
    }
    // speakerPosition
    if (!data.speakerPosition || !Validations_1.checkTitlesOrDescriptions(data.speakerPosition)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar el cargo del ponente.', 'speakerPosition'));
    }
    else {
        ret.speakerPosition = data.speakerPosition ? data.speakerPosition.toString().trim().toUpperCase() : data.speakerPosition;
    }
    // toRoles
    if (!data.toRoles || typeof data.toRoles !== 'object' || (data.toRoles && data.toRoles.length === 0)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero los roles a los que va digido el curso.', 'toRoles'));
    }
    else {
        ret.toRoles = data.toRoles;
    }
    return { data: ret, errors };
}
exports.validateInfoUpdate = validateInfoUpdate;
function validateLevelsData(data) {
    const ret = [];
    const errors = [];
    if (!data || !data.listIds || (data && data.listIds && data.listIds.length === 0)) {
        errors.push({
            msg: 'Disculpe, pero no se logró recibir la información.',
            input: 'listIds'
        });
    }
    else {
        const { listIds } = data;
        const totalItems = listIds ? listIds.length : 0;
        for (let i = 0; i < totalItems; i++) {
            if (!Validations_1.checkObjectId(listIds[i])) {
                errors.push({
                    msg: 'Disculpe, pero alguno de los cursos seleccionados es incorrecto.',
                    input: 'levelId'
                });
                break;
            }
            ret.push(listIds[i]);
        }
    }
    return { data: ret, errors };
}
exports.validateLevelsData = validateLevelsData;
function validateQuestionTestUpdate(data) {
    const ret = {
        title: null,
        description: null,
        placeholder: null,
        inputType: '',
        require: true,
        values: [],
        correctAnswer: null,
    };
    const errors = [];
    // title
    if (!Validations_1.checkTitlesOrDescriptions(data.title)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar un título válido para el pregunta.', 'title'));
    }
    else
        ret.title = data.title ? data.title.toString().trim().toUpperCase() : data.title;
    // inputType
    if (!data.inputType || (data.inputType && ['radio', 'checkbox', 'text', 'textarea'].indexOf(`${data.inputType}`) === -1)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe seleccionar un tipo de campo válido para la pregunta.', 'inputType'));
    }
    else
        ret.inputType = data.inputType;
    // check values in case inputType = 'radio' | 'select'
    if (data.inputType && ['radio', 'checkbox'].indexOf(`${data.inputType}`) > -1) {
        // values
        if (!data.values || typeof data.values !== 'object') {
            errors.push(GlobalFunctions_1.setError('Disculpe, pero las respuestas indicadas no son correctas.', 'values'));
        }
        else if (data.values && data.values.length === 0) {
            errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar las opciones de respuestas para la pregunta.', 'values'));
        }
        else
            ret.values = data.values;
        // correctAnswer
        if (!Validations_1.checkIfValueIsNumber(`${data.correctAnswer}`)) {
            errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar la respuesta correcta.', 'correctAnswer'));
        }
        else
            ret.correctAnswer = data.correctAnswer;
    }
    // description
    if (data.description)
        ret.description = data.description;
    // placeholder
    if (data.placeholder)
        ret.placeholder = data.placeholder;
    // require
    if (data.require !== null || data.require !== undefined && typeof data.require === 'boolean')
        ret.require = data.require;
    return { data: ret, errors };
}
exports.validateQuestionTestUpdate = validateQuestionTestUpdate;
function validateThemeUpdate(data) {
    const ret = {
        title: null,
        description: null
    };
    const errors = [];
    // title
    if (!data.title || !Validations_1.checkTitlesOrDescriptions(data.title)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar un título válido para el tema.', 'title'));
    }
    else {
        ret.title = data.title ? data.title.toString().trim().toUpperCase() : data.title;
    }
    // description
    if (data.description)
        ret.description = data.description;
    return { data: ret, errors };
}
exports.validateThemeUpdate = validateThemeUpdate;
function validateTestData(data) {
    const ret = [];
    const errors = [];
    if (!data || data === undefined || data === null) {
        errors.push({
            msg: 'Disculpe, pero no se logró recibir la información de la prueba.',
            input: 'data'
        });
    }
    else {
        const totalItems = data ? data.length : 0;
        for (let i = 0; i < totalItems; i++) {
            let stop = false;
            if (!Validations_1.checkObjectId(data[i].questionId)) {
                errors.push({
                    msg: 'Disculpe, pero una de las preguntas de la prueba es incorrecta.',
                    input: 'questionId'
                });
                stop = true;
            }
            if (data[i].answer === undefined) {
                errors.push({
                    msg: 'Disculpe, pero debe completar todas las respuesta de la prueba.',
                    input: 'answer'
                });
                stop = true;
            }
            if (stop)
                break;
            else
                ret.push(data[i]);
        }
    }
    return { data: ret, errors };
}
exports.validateTestData = validateTestData;
