"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateLogosOrBannersSettings = void 0;
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const Validations_1 = require("../Functions/Validations");
function validateUpdateUrlsSettings(data) {
    const ret = {
        facebook: null,
        instagram: null,
        twitter: null,
        web: null,
        youtube: null,
    };
    const errors = [];
    if (data.facebook && !Validations_1.checkFacebookUrl(data.facebook)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero la URL de Facebook indicada es incorrecta.', 'facebook'));
    }
    else
        ret.facebook = data.facebook;
    if (data.instagram && !Validations_1.checkInstagramUrl(data.instagram)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero la URL de Instagram indicada es incorrecta.', 'instagram'));
    }
    else
        ret.instagram = data.instagram;
    if (data.twitter && !Validations_1.checkTwitterUrl(data.twitter)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero la URL de Twitter indicada es incorrecta.', 'twitter'));
    }
    else
        ret.twitter = data.twitter;
    if (data.web && !Validations_1.checkUrl(data.web)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero la URL del Sitio Web indicado es incorrecto.', 'web'));
    }
    else
        ret.web = data.web;
    if (data.youtube && !Validations_1.checkYoutubeUrl(data.youtube)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero la URL de Youtube indicada es incorrecta.', 'youtube'));
    }
    else
        ret.youtube = data.youtube;
    return { data: ret, errors };
}
exports.default = validateUpdateUrlsSettings;
function validateUpdateLogosOrBannersSettings(data) {
    const ret = {
        picture: null,
        active: false,
    };
    const errors = [];
    if (!Validations_1.isBase64(data.picture)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, la imagen sumistrada es incorrecta.', 'picture'));
    }
    else
        ret.picture = data.picture;
    if (data.active)
        ret.active = typeof data.active === 'boolean' ? data.active : true;
    return { data: ret, errors };
}
exports.validateUpdateLogosOrBannersSettings = validateUpdateLogosOrBannersSettings;
