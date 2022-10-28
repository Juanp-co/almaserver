"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateIdsMembers = void 0;
const lodash_1 = __importDefault(require("lodash"));
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const Validations_1 = require("../Functions/Validations");
function validateRegister(data) {
    const ret = {
        name: '',
        code: null,
        members: []
    };
    const errors = [];
    // group name
    if (!(0, Validations_1.checkTitlesOrDescriptions)(data.name)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe indicar un nombre correcto para el grupo.', 'name'));
    }
    else
        ret.name = data.name.trim();
    // group code
    if (data.code)
        ret.code = data.code.trim();
    return { data: ret, errors };
}
exports.default = validateRegister;
function validateIdsMembers(data) {
    const ret = {
        members: []
    };
    const errors = [];
    if (!data.members) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero los datos enviados son incorrectos.', 'members'));
    }
    else if (data.members && typeof data.members !== 'object') {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero los datos enviados son incorrectos.', 'members'));
    }
    else {
        const listIds = lodash_1.default.uniq(data.members);
        const totals = listIds.length || 0;
        if (totals > 0) {
            for (let i = 0; i < totals; i += 1) {
                if ((0, Validations_1.checkObjectId)(listIds[i]))
                    ret.members.push(listIds[i]);
                else {
                    errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero alguno de los miembros seleccionados son incorrectos.', 'members'));
                    break;
                }
            }
        }
    }
    return { data: ret, errors };
}
exports.validateIdsMembers = validateIdsMembers;
