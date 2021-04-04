"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTestData = exports.validateContentThemeUpdate = exports.validateInfoUpdate = void 0;
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const Validations_1 = require("../Functions/Validations");
function validateSimpleRegister(data) {
    const ret = {
        code: null,
        slug: null,
        title: null,
        banner: null,
        description: null,
        level: null,
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
    // level
    if ([1, 2, 3, 4, 5].indexOf(data.level || -1) === -1) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero seleccionar el nivel para el curso.', 'level'));
    }
    else
        ret.level = data.level;
    // toRoles
    if (!data.toRoles || typeof data.toRoles !== 'object' || (data.toRoles && data.toRoles.length === 0)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero los roles a los que va digido el curso.', 'toRoles'));
    }
    else {
        ret.toRoles = data.toRoles;
    }
    return { data: ret, errors };
}
exports.default = validateSimpleRegister;
function validateInfoUpdate(data) {
    const ret = {
        title: null,
        description: null,
        speaker: null,
        speakerPosition: null,
        toRoles: [],
        level: null,
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
    // level
    if ([1, 2, 3, 4, 5].indexOf(data.level || -1) === -1) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero seleccionar el nivel para el curso.', 'level'));
    }
    else
        ret.level = data.level;
    // toRoles
    if (!data.toRoles || typeof data.toRoles !== 'object' || (data.toRoles && data.toRoles.length === 0)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar los roles a los que va digido el curso.', 'toRoles'));
    }
    else {
        ret.toRoles = data.toRoles;
    }
    return { data: ret, errors };
}
exports.validateInfoUpdate = validateInfoUpdate;
function validateContentThemeUpdate(data) {
    const ret = {
        title: null,
        description: null,
        urlVideo: null,
        quiz: null,
    };
    const errors = [];
    // title
    if (!data.title || !Validations_1.checkTitlesOrDescriptions(data.title)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar un título válido para el contenido.', 'title'));
    }
    else {
        ret.title = data.title ? data.title.toString().trim().toUpperCase() : data.title;
    }
    // description
    if (data.description)
        ret.description = data.description;
    if (data.quiz !== undefined && data.quiz !== null) {
        if (data.quiz.length === 0) {
            errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar el contenido del QUIZ.', 'quiz'));
        }
        else {
            ret.quiz = [];
            for (const q of data.quiz) {
                const error = false;
                const model = {
                    title: null,
                    description: null,
                    placeholder: null,
                    inputType: '',
                    require: true,
                    values: [],
                    correctAnswer: null,
                };
                if (q._id)
                    model._id = q._id;
                // title
                if (!Validations_1.checkTitlesOrDescriptions(q.title)) {
                    errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar un título válido para el pregunta.', 'title'));
                }
                else
                    model.title = q.title ? q.title.toString().trim().toUpperCase() : q.title;
                // inputType
                if (!q.inputType || (q.inputType && ['radio', 'checkbox', 'text', 'textarea'].indexOf(`${q.inputType}`) === -1)) {
                    errors.push(GlobalFunctions_1.setError('Disculpe, pero debe seleccionar un tipo de campo válido para la pregunta.', 'inputType'));
                }
                else
                    model.inputType = q.inputType;
                // check values in case inputType = 'radio' | 'select'
                if (q.inputType && ['radio', 'checkbox'].indexOf(`${q.inputType}`) > -1) {
                    // values
                    if (!q.values || typeof q.values !== 'object') {
                        errors.push(GlobalFunctions_1.setError('Disculpe, pero las respuestas indicadas no son correctas.', 'values'));
                    }
                    else if (q.values && q.values.length === 0) {
                        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar las opciones de respuestas para la pregunta.', 'values'));
                    }
                    else
                        model.values = q.values;
                    // correctAnswer
                    if (!Validations_1.checkIfValueIsNumber(`${q.correctAnswer}`)) {
                        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar la respuesta correcta.', 'correctAnswer'));
                    }
                    else
                        model.correctAnswer = q.correctAnswer;
                }
                // description
                if (q.description)
                    model.description = q.description;
                // placeholder
                if (q.placeholder)
                    model.placeholder = q.placeholder;
                // require
                if (q.require !== null || q.require !== undefined && typeof q.require === 'boolean')
                    model.require = q.require;
                if (!error)
                    ret.quiz.push(model);
                else
                    break;
            }
        }
    }
    // urlVideo
    if (data.urlVideo) {
        if (!Validations_1.checkYoutubeUrl(data.urlVideo)) {
            errors.push(GlobalFunctions_1.setError('Disculpe, pero la URL del vídeo solo debe prevenir de youtube.', 'urlVideo'));
        }
        else
            ret.urlVideo = data.urlVideo;
    }
    return { data: ret, errors };
}
exports.validateContentThemeUpdate = validateContentThemeUpdate;
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
