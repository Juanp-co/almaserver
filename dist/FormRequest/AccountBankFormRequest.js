"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const Validations_1 = require("../Functions/Validations");
function validateSimpleRegister(data) {
    const ret = {
        title: null,
        description: null,
        picture: null,
    };
    const errors = [];
    // title
    if (!Validations_1.checkTitlesOrDescriptions(data.title)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero indicar un título válido para el banco.', 'title'));
    }
    else {
        ret.title = data.title ? data.title.toString().trim().toUpperCase() : data.title;
    }
    // description
    if (!data.description) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar una descripción para el banco.', 'description'));
    }
    else
        ret.description = data.description;
    // picture
    if (!Validations_1.checkUrl(`${data.picture}`) && !Validations_1.checkBase64(`${data.picture}`)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar una imagen para el banco.', 'picture'));
    }
    else
        ret.picture = data.picture;
    return { data: ret, errors };
}
exports.default = validateSimpleRegister;
