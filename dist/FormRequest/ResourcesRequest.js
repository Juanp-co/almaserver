"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateResourceForm = void 0;
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const Validations_1 = require("../Functions/Validations");
function validateResourceForm(data) {
    var _a, _b;
    const ret = {
        title: '',
        file: '',
        rolesList: [],
    };
    const errors = [];
    // title
    if (!(0, Validations_1.checkTitlesOrDescriptions)(data.title)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero indicar un título válido.', 'title'));
    }
    else {
        ret.title = `${data.title}`.trim().toUpperCase();
    }
    // file
    if (!(0, Validations_1.checkBase64)(`${data.file}`, true) && !(0, Validations_1.checkUrl)(`${data.file}`)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero el documento suministrado es incorrecto.', 'file'));
    }
    else
        ret.file = data.file;
    // file
    if (((_a = data === null || data === void 0 ? void 0 : data.rolesList) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        let errs = 0;
        (_b = data === null || data === void 0 ? void 0 : data.rolesList) === null || _b === void 0 ? void 0 : _b.forEach(rl => {
            if (!/[0123]{1}/.test(`${rl}`))
                errs += 1;
        });
        if (errs > 0) {
            errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero uno de los roles seleccionados no está permitido.', 'rolesList'));
        }
        else
            ret.rolesList = data.rolesList || [0, 1, 2, 3];
    }
    else
        ret.rolesList = [0, 1, 2, 3];
    return { data: ret, errors };
}
exports.validateResourceForm = validateResourceForm;
exports.default = {
    validateResourceForm
};
