"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTestData = void 0;
const CoursesActions_1 = require("../ActionsData/CoursesActions");
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const Validations_1 = require("../Functions/Validations");
async function validateRegister(data, update) {
    var _a, _b, _c;
    const ret = {
        speaker: null,
        speakerPosition: null,
        code: null,
        title: null,
        slug: null,
        banner: null,
        description: null,
        temary: [],
        test: [],
        toRoles: [],
        enable: false,
        draft: true,
    };
    const errors = [];
    // title
    if (!data.title || !Validations_1.checkTitlesOrDescriptions(data.title)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar un título generar para el curso.', 'title'));
    }
    else {
        ret.title = data.title ? data.title.toString().trim().toUpperCase() : data.title;
    }
    // banner
    ret.banner = data.banner ? data.banner.toString().trim() : data.banner;
    // description
    if (!data.description || !Validations_1.checkTitlesOrDescriptions(data.description)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar una descripción general para el curso.', 'description'));
    }
    else {
        ret.description = data.description ? data.description.toString().trim() : data.description;
    }
    // speaker
    if (!data.speaker || !Validations_1.checkNameOrLastName(data.speaker)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar el nombre completo del orador del curso.', 'speaker'));
    }
    else {
        ret.speaker = data.speaker ? data.speaker.toString().trim() : data.speaker;
    }
    // speakerPosition
    if (!Validations_1.checkIfValueIsNumber(data.speakerPosition)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar el cargo o posición del orador del curso.', 'speakerPosition'));
    }
    else {
        ret.speakerPosition = data.speakerPosition;
    }
    // code
    if (!Validations_1.checkTitlesOrDescriptions(data.code)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar el código para identificar el curso.', 'code'));
    }
    else if (!update && (await CoursesActions_1.checkIfExistCode(`${data.code}`))) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero el código indicado ya se encuentra registrado.', 'code'));
    }
    else {
        ret.code = data.code;
    }
    // slug | if exist assign
    if (update && Validations_1.checkSlug(data.slug))
        ret.slug = data.slug;
    // draft
    if (data.draft) {
        ret.draft = data.draft;
        if (!data.temary || typeof data.temary !== 'object' || data.temary.length === 0) {
            errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar el temario del curso.', 'temary'));
        }
        if (!data.test || typeof data.test !== 'object' || data.test.length === 0) {
            errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar las preguntas para la prueba de este curso.', 'test'));
        }
    }
    // temary
    if (data.temary.length > 0) {
        const { temary } = data;
        const totalsTemary = temary.length;
        let error = false;
        for (let i = 0; i < totalsTemary; i++) {
            if (!Validations_1.checkTitlesOrDescriptions(temary[i].title)) {
                errors.push(GlobalFunctions_1.setError('Disculpe, pero todos los temas deben contener un título.', 'temary.title'));
                error = true;
            }
            if (!Validations_1.checkTitlesOrDescriptions(temary[i].description)) {
                errors.push(GlobalFunctions_1.setError('Disculpe, pero todos los temas deben contener una descripción.', 'temary.description'));
                error = true;
            }
            if (!Validations_1.checkYoutubeUrl(temary[i].urlVideo)) {
                errors.push(GlobalFunctions_1.setError('Disculpe, pero las URL permitidas para los videos deben pertenecer a Youtube.', 'temary.urlVideo'));
                error = true;
            }
            if (error)
                break;
            else
                ret.temary.push({
                    title: temary[i].title ? (_a = temary[i].title) === null || _a === void 0 ? void 0 : _a.toString().trim() : null,
                    description: temary[i].description ? (_b = temary[i].description) === null || _b === void 0 ? void 0 : _b.toString().trim() : null,
                    urlVideo: temary[i].urlVideo ? (_c = temary[i].urlVideo) === null || _c === void 0 ? void 0 : _c.toString().trim() : null,
                    comments: []
                });
        }
    }
    // test
    if (data.test.length > 0) {
        const { test } = data;
        const totalsTemary = test.length;
        let error = false;
        for (let i = 0; i < totalsTemary; i++) {
            if (!Validations_1.checkTitlesOrDescriptions(test[i].title)) {
                errors.push(GlobalFunctions_1.setError('Disculpe, pero todas las preguntas para la prueba deben contener un título.', 'test.title'));
                error = true;
            }
            if (!Validations_1.checkTitlesOrDescriptions(test[i].description)) {
                errors.push(GlobalFunctions_1.setError('Disculpe, pero todas las preguntas para la prueba deben contener una descripción.', 'test.description'));
                error = true;
            }
            if (!Validations_1.checkInputTypeValueToTest(test[i].inputType)) {
                errors.push(GlobalFunctions_1.setError('Disculpe, todas las preguntas deben contener un tipo de campo para los formularios.', 'test.inputType'));
                error = true;
            }
            if (['select', 'radio', 'checkbox'].indexOf(`${test[i].inputType}`) > -1) {
                if (['select', 'radio', 'checkbox'].indexOf(`${test[i].inputType}`) > -1 && test[i].values && test[i].values.length === 0) {
                    errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar los valores para los campos la prueba.', 'test.values'));
                    error = true;
                }
                if (!/[0-9]{1,2}/.test(`${test[i].correctAnswer}`)) {
                    errors.push(GlobalFunctions_1.setError('Disculpe, pero las preguntas que contengan un tipo de campo \'Lista, Checkbox o Radio\' deben contener una respuesta.', 'test.correctAnswer'));
                    error = true;
                }
                else if (test[i].values.length > 0 && !!test[i].values[test[i].correctAnswer || -1]) {
                    errors.push(GlobalFunctions_1.setError('Disculpe, pero la respuesta para una de las pregunta no coindiden con opciones indicadas.', 'test.values'));
                    error = true;
                }
            }
            if (error)
                break;
            else
                ret.test.push({
                    title: test[i].title || null,
                    description: test[i].description || null,
                    placeholder: test[i].placeholder || null,
                    extra: test[i].extra || null,
                    inputType: test[i].inputType ? test[i].inputType.toString().toLowerCase() : test[i].inputType,
                    values: test[i].values || [],
                    require: test[i].require || false,
                    correctAnswer: test[i].correctAnswer,
                });
        }
    }
    // toRoles
    if (!data.toRoles || typeof data.toRoles !== 'object' || data.toRoles.length === 0) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe seleccionar los roles a los que será dirigido el curso.', 'toRoles'));
    }
    else {
        ret.toRoles = data.toRoles;
    }
    return { data: ret, errors };
}
exports.default = validateRegister;
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
            if (data[i].answer === undefined || data[i].answer === null) {
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
