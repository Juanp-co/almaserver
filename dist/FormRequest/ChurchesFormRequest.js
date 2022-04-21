"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegisterOrUpdateChurch = void 0;
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const Validations_1 = require("../Functions/Validations");
const checkCoordsNumbersType = (coords = []) => {
    let counter = 0;
    coords === null || coords === void 0 ? void 0 : coords.forEach((c) => {
        if (typeof c !== 'number')
            counter += 1;
    });
    return counter === 0;
};
const staticCoords = [-73.630175, 4.134516];
function validateRegisterOrUpdateChurch(data) {
    var _a;
    const ret = {
        name: null,
        description: null,
        phone1: null,
        phone2: null,
        email: null,
        address: null,
        picture: null,
        location: {
            type: 'Point',
            coordinates: [0, 0]
        },
    };
    const errors = [];
    // name
    if (!(0, Validations_1.checkTitlesOrDescriptions)(data.name)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero indicar el nombre para la iglesia.', 'name'));
    }
    else {
        ret.name = data.name ? data.name.toString().trim().toUpperCase() : data.name;
    }
    // description
    if (!data.description) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe indicar una descripción para la iglesia.', 'description'));
    }
    else
        ret.description = data.description;
    // picture
    if (data.picture) {
        if (!(0, Validations_1.checkBase64)(`${data.picture}`) && !(0, Validations_1.checkUrl)(data.picture)) {
            errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero la imagen indicada es incorrecta.', 'picture'));
        }
        else
            ret.picture = data.picture;
    }
    // location
    if (data.location) {
        if (((_a = data.location.coordinates) === null || _a === void 0 ? void 0 : _a.length) !== 2) {
            errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero la ubicación seleccionada es incorrecta.', 'location'));
        }
        else if (!checkCoordsNumbersType(data.location.coordinates)) {
            errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero las coordenadas de la ubicación seleccionada son incorrectas.', 'location'));
        }
        else {
            ret.location.coordinates = data.location.coordinates || staticCoords;
        }
    }
    // address
    if (data.address) {
        if (!(0, Validations_1.checkTitlesOrDescriptions)(`${data.address}`)) {
            errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero la dirección indicada es incorrecta.', 'address'));
        }
        else
            ret.address = data.address;
    }
    // phone1
    if (data.phone1) {
        if (!/^[0-9]{5,15}/.test(`${data.phone1}`)) {
            errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero el teléfono principal indicado es incorrecto.', 'phone1'));
        }
        else
            ret.phone1 = data.phone1;
    }
    // phone2
    if (data.phone2) {
        if (!/^[0-9]{5,15}/.test(`${data.phone2}`)) {
            errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero el teléfono secundario indicado es incorrecto.', 'phone2'));
        }
        else
            ret.phone2 = data.phone2;
    }
    // email
    if (data.email) {
        if (!(0, Validations_1.checkEmail)(`${data.email}`)) {
            errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero el correo electrónico indicado es incorrecto.', 'email'));
        }
        else
            ret.email = data.email;
    }
    return { data: ret, errors };
}
exports.validateRegisterOrUpdateChurch = validateRegisterOrUpdateChurch;
exports.default = {
    validateRegisterOrUpdateChurch
};
