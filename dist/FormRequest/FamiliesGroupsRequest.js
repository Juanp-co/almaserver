"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateMembersForm = void 0;
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const Validations_1 = require("../Functions/Validations");
const membersList = ['leaderId', 'hostId', 'assistantsIds', 'helperId', 'masterId'];
const membersMsgList = ['líder', 'anfitrión', 'asistentes', 'auxiliar', 'maestro'];
const staticCoords = [-73.630175, 4.134516];
const checkCoordsNumbersType = (coords = []) => {
    let counter = 0;
    coords === null || coords === void 0 ? void 0 : coords.forEach((c) => {
        if (typeof c !== 'number')
            counter += 1;
    });
    return counter === 0;
};
function validateDataForm(data) {
    var _a, _b;
    const ret = {
        number: null,
        direction: null,
        sector: null,
        subSector: null,
        location: {
            type: 'Point',
            coordinates: staticCoords
        }
    };
    const errors = [];
    // sector
    if (!/[0-9]{1,4}/.test(`${data.sector}`)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar el sector.', 'sector'));
    }
    else
        ret.sector = data.sector;
    // subSector
    if (!/[0-9]{1,4}/.test(`${data.subSector}`)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar el sub-sector.', 'subSector'));
    }
    else
        ret.subSector = data.subSector;
    // number
    if (!/[0-9]{1,4}/.test(`${data.number}`)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar el número del grupo.', 'number'));
    }
    else
        ret.number = data.number;
    // direction
    if (!Validations_1.checkTitlesOrDescriptions(data.direction)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar una dirección.', 'direction'));
    }
    else
        ret.direction = ((_a = data.direction) === null || _a === void 0 ? void 0 : _a.toString().trim()) || null;
    // location
    if (data.location) {
        if (((_b = data.location.coordinates) === null || _b === void 0 ? void 0 : _b.length) !== 2) {
            errors.push(GlobalFunctions_1.setError('Disculpe, pero la ubicación seleccionada en el mapa es incorrecta.', 'location'));
        }
        else if (!checkCoordsNumbersType(data.location.coordinates)) {
            errors.push(GlobalFunctions_1.setError('Disculpe, pero las coordenadas de la ubicación seleccionada en el mapa son incorrectas.', 'location'));
        }
        else {
            ret.location.type = data.location.type || 'Point';
            ret.location.coordinates = data.location.coordinates || staticCoords;
        }
    }
    return { data: ret, errors };
}
exports.default = validateDataForm;
function validateUpdateMembersForm(data) {
    const ret = {
        members: {
            leaderId: null,
            hostId: null,
            assistantsIds: [],
            helperId: null,
            masterId: null,
        },
    };
    const errors = [];
    // members
    if (!data.members) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero no se recibió la información a actualizar.', 'members'));
    }
    else {
        const { members } = data;
        for (const [index, value] of membersList.entries()) {
            if (value !== 'assistantsIds') {
                if (members[`${value}`]) {
                    if (!Validations_1.checkObjectId(data.members[value])) {
                        errors.push(GlobalFunctions_1.setError(`Disculpe, pero el miembro seleccionado como ${membersMsgList[index] || 'líder'} es incorrecto.`, value));
                    }
                    else
                        ret.members[value] = members[value];
                }
            }
            else {
                const { length } = (members === null || members === void 0 ? void 0 : members.assistantsIds) || [];
                for (let i = 0; i < length; i++) {
                    if (!Validations_1.checkObjectId(members.assistantsIds[i])) {
                        errors.push(GlobalFunctions_1.setError(`Disculpe, pero uno de los miembros seleccionados como asistentes es incorrecto.`, 'assistantsIds'));
                        break;
                    }
                    else
                        ret.members.assistantsIds.push(members.assistantsIds[i]);
                }
            }
        }
    }
    return { data: ret, errors };
}
exports.validateUpdateMembersForm = validateUpdateMembersForm;
