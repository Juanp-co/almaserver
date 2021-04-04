"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateMembersForm = exports.validateUpdateForm = void 0;
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const Validations_1 = require("../Functions/Validations");
const membersList = ['leaderId', 'hostId', 'assistantId', 'masterId'];
const membersMsgList = ['líder', 'anfitrión', 'asistente', 'maestro'];
function validateFormData(data) {
    var _a;
    const ret = {
        number: null,
        direction: null,
        sector: null,
        subSector: null,
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
    return { data: ret, errors };
}
exports.default = validateFormData;
function validateUpdateForm(data) {
    var _a;
    const ret = {
        number: null,
        direction: null,
        sector: null,
        subSector: null,
    };
    const errors = [];
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
    // sector
    if (!/[0-9]{1,4}/.test(`${data.sector}`)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar seleccionar un sector.', 'sector'));
    }
    else
        ret.sector = data.sector;
    // subSector
    if (!/[0-9]{1,4}/.test(`${data.subSector}`)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar seleccionar un sub-sector.', 'subSector'));
    }
    else
        ret.subSector = data.subSector;
    return { data: ret, errors };
}
exports.validateUpdateForm = validateUpdateForm;
function validateUpdateMembersForm(data) {
    const ret = {
        members: {
            leaderId: null,
            hostId: null,
            assistantId: null,
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
            if (members[`${value}`]) {
                if (!Validations_1.checkObjectId(data.members[value])) {
                    errors.push(GlobalFunctions_1.setError(`Disculpe, pero el miembro seleccionado como ${membersMsgList[index] || 'líder'} es incorrecto.`, value));
                }
                else
                    ret.members[value] = members[value];
            }
            else if (index === 0 && !members[`${value}`]) {
                errors.push(GlobalFunctions_1.setError(`Disculpe, pero debe seleccionar a un miembro como líder del grupo.`, value));
            }
        }
    }
    return { data: ret, errors };
}
exports.validateUpdateMembersForm = validateUpdateMembersForm;
