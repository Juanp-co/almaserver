"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTestData = void 0;
const lodash_1 = __importDefault(require("lodash"));
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
        // test: [],
        levels: [],
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
    ret.banner = data.banner ? data.banner.toString().trim() : null;
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
    if (update && !data.draft) {
        ret.draft = false;
        if (!data.temary || typeof data.temary !== 'object' || data.temary.length === 0) {
            errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar el temario del curso.', 'temary'));
        }
    }
    // temary
    if (data.temary && data.temary.length > 0) {
        const { temary } = data;
        const totalsTemary = temary.length;
        let error = false;
        for (let i = 0; i < totalsTemary; i++) {
            const { description, content, test, title, _id } = temary[i];
            const item = {
                _id: null,
                title: null,
                description: null,
                content: [],
                test: [],
                comments: []
            };
            if (_id && Validations_1.checkObjectId(_id))
                item._id = _id;
            if (!Validations_1.checkTitlesOrDescriptions(title)) {
                errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar un título para el tema.', 'temary.title'));
                error = true;
            }
            else
                item.title = title ? title.toString().trim() : title;
            if (description && !Validations_1.checkHtmlContent(description)) {
                errors.push(GlobalFunctions_1.setError('Disculpe, pero la descripción para este tema es incorrecta.', 'temary.description'));
                error = true;
            }
            else
                item.description = description ? description.toString().trim() : null;
            // check content of temary
            if (!error && content && content.length > 0) {
                const totalsContent = content.length;
                for (let j = 0; j < totalsContent; j++) {
                    if (!Validations_1.checkTitlesOrDescriptions(content[j].title)) {
                        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar un título para el contenido.', 'content.title'));
                        error = true;
                    }
                    // if (!checkHtmlContent(content[j].description) || !checkTitlesOrDescriptions(content[j].description)) {
                    if (content[j].description && !Validations_1.checkHtmlContent(content[j].description)) {
                        errors.push(GlobalFunctions_1.setError('Disculpe, pero la descripción ingresada para el contenido es incorrecta.', 'content.description'));
                        error = true;
                    }
                    if (content[j].urlVideo && !Validations_1.checkYoutubeUrl(content[j].urlVideo)) {
                        errors.push(GlobalFunctions_1.setError('Disculpe, pero las URL permitidas para los videos deben pertenecer a Youtube.', 'content.urlVideo'));
                        error = true;
                    }
                    if (error)
                        break;
                    else
                        item.content.push({
                            _id: content[j]._id,
                            title: content[j].title ? (_a = content[j].title) === null || _a === void 0 ? void 0 : _a.toString().trim() : null,
                            description: content[j].description ? (_b = content[j].description) === null || _b === void 0 ? void 0 : _b.toString().trim() : null,
                            urlVideo: content[j].urlVideo ? (_c = content[j].urlVideo) === null || _c === void 0 ? void 0 : _c.toString().trim() : null,
                        });
                }
            }
            // check test of temary
            if (!error && test && test.length > 0) {
                const totalsTest = test.length || 0;
                for (let j = 0; j < totalsTest; j++) {
                    if (!Validations_1.checkTitlesOrDescriptions(test[j].title)) {
                        errors.push(GlobalFunctions_1.setError('Disculpe, pero todas las preguntas para la prueba deben contener un título.', 'test.title'));
                        error = true;
                    }
                    if (!Validations_1.checkHtmlContent(test[j].description)) {
                        errors.push(GlobalFunctions_1.setError('Disculpe, pero todas las preguntas para la prueba deben contener una descripción.', 'test.description'));
                        error = true;
                    }
                    if (!Validations_1.checkInputTypeValueToTest(test[j].inputType)) {
                        errors.push(GlobalFunctions_1.setError('Disculpe, todas las preguntas deben contener un tipo de campo para los formularios.', 'test.inputType'));
                        error = true;
                    }
                    if (['select', 'radio', 'checkbox'].indexOf(`${test[j].inputType}`) > -1) {
                        if (['select', 'radio', 'checkbox'].indexOf(`${test[j].inputType}`) > -1 && test[j].values && test[j].values.length === 0) {
                            errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar los valores para los campos la prueba.', 'test.values'));
                            error = true;
                        }
                        if (!/[0-9]{1,2}/.test(`${test[j].correctAnswer}`)) {
                            errors.push(GlobalFunctions_1.setError('Disculpe, pero las preguntas que contengan un tipo de campo \'Lista, Checkbox o Radio\' deben contener una respuesta.', 'test.correctAnswer'));
                            error = true;
                        }
                        else if (test[j].values.length > 0 && !!test[j].values[test[j].correctAnswer || -1]) {
                            errors.push(GlobalFunctions_1.setError('Disculpe, pero la respuesta para una de las pregunta no coindiden con opciones indicadas.', 'test.values'));
                            error = true;
                        }
                    }
                    if (error)
                        break;
                    else
                        item.test.push({
                            _id: test[j]._id,
                            title: test[j].title || null,
                            description: test[j].description || null,
                            placeholder: test[j].placeholder || null,
                            extra: test[j].extra || null,
                            inputType: test[j].inputType ? test[j].inputType.toString().toLowerCase() : test[j].inputType,
                            values: test[j].values || [],
                            require: test[j].require || false,
                            correctAnswer: test[j].correctAnswer,
                        });
                }
                if (error)
                    break;
            }
            // push data
            if (error)
                break;
            else
                ret.temary.push(item);
        }
    }
    // levels
    if (data.levels && data.levels.length > 0) {
        const { levels } = data;
        const totalsLvl = levels.length;
        for (let i = 0; i < totalsLvl; i++) {
            if (!Validations_1.checkObjectId(levels[i])) {
                errors.push(GlobalFunctions_1.setError('Disculpe, pero alguno de los cursos previos seleccionados es incorrecto.', 'levels'));
                break;
            }
            else
                ret.levels.push(levels[i].trim());
        }
        if (ret.levels.length > 0 && !await CoursesActions_1.checkPreviousIdsCourses(ret.levels)) {
            ret.levels = lodash_1.default.uniq(ret.levels);
            if (ret.levels.length > 0 && !(await CoursesActions_1.checkPreviousIdsCourses(ret.levels))) {
                errors.push(GlobalFunctions_1.setError('Disculpe, pero alguno de los cursos previos seleccionados no existen.', 'levels'));
            }
        }
    }
    // toRoles
    // if (!data.toRoles || typeof data.toRoles !== 'object' || data.toRoles.length === 0) {
    //   errors.push(
    //     setError('Disculpe, pero debe seleccionar los roles a los que será dirigido el curso.', 'toRoles')
    //   );
    // } else {
    //   ret.toRoles = data.toRoles;
    // }
    if (data.toRoles && data.toRoles.length > 0) {
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
