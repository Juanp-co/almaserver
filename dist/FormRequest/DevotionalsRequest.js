"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const Validations_1 = require("../Functions/Validations");
function validateForm(data) {
    const ret = {
        title: null,
        description: null,
        picture: null,
        urlVideo: null,
    };
    const errors = [];
    // title
    if (!(0, Validations_1.checkTitlesOrDescriptions)(data.title)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero indicar un título válido.', 'title'));
    }
    else {
        ret.title = `${data.title}`.trim().toUpperCase();
    }
    // description
    if (!data.description) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe indicar una descripción.', 'description'));
    }
    else
        ret.description = data.description;
    // picture
    if (data.picture) {
        if (!(0, Validations_1.checkBase64)(`${data.picture}`) && !(0, Validations_1.checkUrl)(`${data.picture}`)) {
            errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero la imagen suministrada es incorrecta.', 'picture'));
        }
        else
            ret.picture = data.picture;
    }
    // urlVideo
    if (data.urlVideo) {
        if (!(0, Validations_1.checkYoutubeUrl)(`${data.urlVideo}`)) {
            errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero la URL para el video debe ser de YouTube.', 'urlVideo'));
        }
        else
            ret.urlVideo = `${data.urlVideo}`.trim();
    }
    return { data: ret, errors };
}
exports.default = validateForm;
