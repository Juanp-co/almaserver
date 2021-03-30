"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePasswords = exports.validateLogin = exports.validateUpdate = void 0;
const UsersActions_1 = __importStar(require("../ActionsData/UsersActions"));
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const Validations_1 = require("../Functions/Validations");
async function validateSimpleRegister(data, admin) {
    const ret = {
        email: null,
        phone: null,
        password: null,
        document: null,
        names: null,
        lastNames: null,
        role: 5,
        referred: null
    };
    const errors = [];
    // phone
    if (!Validations_1.checkPhone(data.phone)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar un número de teléfono.', 'phone'));
    }
    else if (await UsersActions_1.checkIfExistPhone(data.phone)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero el número de teléfono indicado ya se encuentra asignado a otro miembro. Verifíquelo e intente nuevamente.', 'email'));
    }
    else
        ret.phone = data.phone;
    // document
    if (!data.document || !Validations_1.checkDocument(data.document)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe asegurarse de indicar su número de documento.', 'document'));
    }
    else if (await UsersActions_1.default(data.document.toUpperCase())) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero el número de documento ya se encuentra registrado. Verifíquelo e intente nuevamente.', 'document'));
    }
    else
        ret.document = data.document.toUpperCase();
    // password
    if (!admin) {
        if (!data.password || !Validations_1.checkPassword(data.password)) {
            errors.push(GlobalFunctions_1.setError('Disculpe, pero debe asignar una contraseña. Esta debe contener ' +
                'letras (a-Z, A-Z), números (0-9) y debe contener al menos 6 caracteres.', 'password'));
        }
        else
            ret.password = data.password;
    }
    // names
    if (!data.names || !Validations_1.checkNameOrLastName(data.names)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe asegurarse de indicar su(s) nombre(s).', 'names'));
    }
    else
        ret.names = data.names.toUpperCase();
    // lastNames
    if (!data.lastNames || !Validations_1.checkNameOrLastName(data.lastNames)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe asegurarse de indicar su(s) apellido(s).', 'lastNames'));
    }
    else
        ret.lastNames = data.lastNames.toUpperCase();
    // referred
    if (data.referred && Validations_1.checkDocument(data.referred)) {
        ret.referred = await UsersActions_1.getIdUserFromDocument(data.referred.toUpperCase());
    }
    // email
    if (data.email) {
        if (!Validations_1.checkEmail(data.email)) {
            errors.push(GlobalFunctions_1.setError('Disculpe, pero el correo electrónico indicado es incorrecto.', 'email'));
        }
        else
            ret.email = data.email.toLowerCase();
    }
    if (admin) {
        if (data.role !== null && [0, 1, 2, 3, 4, 5].indexOf(data.role) > -1) {
            ret.role = data.role;
        }
    }
    return { data: ret, errors };
}
exports.default = validateSimpleRegister;
async function validateUpdate(data, _id, admin = false) {
    var _a;
    const ret = {
        phone: null,
        email: null,
        document: null,
        names: null,
        lastNames: null,
        gender: null,
        birthday: null,
        civilStatus: null,
        educationLevel: null,
        profession: null,
        bloodType: null,
        company: false,
        companyType: null,
        baptized: false,
        department: null,
        city: null,
        locality: null,
        direction: null,
    };
    const errors = [];
    if (admin) {
        // document
        if (!data.document || !Validations_1.checkDocument(data.document)) {
            errors.push(GlobalFunctions_1.setError('Disculpe, pero debe asegurarse de indicar el número de documento.', 'document'));
        }
        else if (await UsersActions_1.default(data.document, _id)) {
            errors.push(GlobalFunctions_1.setError('Disculpe, pero el número de documento ya se encuentra asignado a otro miembro. Verifíquelo e intente nuevamente.', 'email'));
        }
        else {
            ret.document = data.document.toLowerCase();
        }
    }
    // phone
    if (!Validations_1.checkPhone(data.phone)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar un número de teléfono. Sólo se permiten números (0-9).', 'phone'));
    }
    else if (await UsersActions_1.checkIfExistPhone(data.phone, _id)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero el número de teléfono indicado ya se encuentra asignado a otro miembro. Verifíquelo e intente nuevamente.', 'phone'));
    }
    else
        ret.phone = data.phone;
    // email
    if (data.email) {
        if (!Validations_1.checkEmail(data.email)) {
            errors.push(GlobalFunctions_1.setError('Disculpe, pero el correo electrónico indicado es incorrecto.', 'email'));
        }
        else
            ret.email = data.email.toLowerCase();
    }
    // names
    if (!data.names || !Validations_1.checkNameOrLastName(data.names)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe asegurarse de indicar su(s) nombre(s).', 'names'));
    }
    else {
        ret.names = data.names.trim();
    }
    // lastNames
    if (!data.lastNames || !Validations_1.checkNameOrLastName(data.lastNames)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe asegurarse de indicar su(s) apellido(s).', 'lastNames'));
    }
    else {
        ret.lastNames = data.lastNames.trim();
    }
    // birthday
    if (data.birthday) {
        if (!Validations_1.checkDate(`${data.birthday}`)) {
            errors.push(GlobalFunctions_1.setError('Disculpe, pero la fecha de cumpleaños indicada es incorrecta.', 'birthday'));
        }
        else {
            ret.birthday = ((_a = data.birthday) === null || _a === void 0 ? void 0 : _a.trim().toUpperCase()) || null;
        }
    }
    // educationLevel
    if (!Validations_1.checkIfValueIsNumber(`${data.educationLevel}`)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar su nivel educativo.', 'educationLevel'));
    }
    else
        ret.educationLevel = data.educationLevel;
    // profession
    if (!Validations_1.checkIfValueIsNumber(`${data.profession}`)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar su profesión.', 'profession'));
    }
    else
        ret.profession = data.profession;
    // bloodType
    if (!Validations_1.checkIfValueIsNumber(`${data.bloodType}`)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar su tipo de sangre.', 'bloodType'));
    }
    else
        ret.bloodType = data.bloodType;
    // gender
    if (!Validations_1.checkIfValueIsNumber(`${data.gender}`)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar su sexo.', 'gender'));
    }
    else
        ret.gender = data.gender;
    // civilStatus
    if (!Validations_1.checkIfValueIsNumber(`${data.civilStatus}`)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar su estado civil.', 'civilStatus'));
    }
    else
        ret.civilStatus = data.civilStatus;
    // department
    if (!Validations_1.checkIfValueIsNumber(`${data.department}`)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar el departamento de residencia.', 'department'));
    }
    else
        ret.department = data.department;
    // city
    if (!Validations_1.checkIfValueIsNumber(`${data.city}`)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar la ciudad de residencia.', 'city'));
    }
    else
        ret.city = data.city;
    // locality
    if (!data.locality || !Validations_1.checkTitlesOrDescriptions(`${data.locality}`)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar el nombre del barrio o localidad en la que reside.', 'locality'));
    }
    else
        ret.locality = data.locality || null;
    // direction
    if (!data.direction || !Validations_1.checkTitlesOrDescriptions(`${data.direction}`)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar su dirección.', 'direction'));
    }
    else
        ret.direction = data.direction || null;
    // baptized
    if (data.baptized)
        ret.baptized = data.baptized;
    // company
    if (data.company) {
        ret.company = true;
        // companyType
        if (!Validations_1.checkIfValueIsNumber(`${data.companyType}`)) {
            errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar a qué se dedica su empresa.', 'companyType'));
        }
        else {
            ret.companyType = data.companyType;
        }
    }
    return { data: ret, errors };
}
exports.validateUpdate = validateUpdate;
function validateLogin(data) {
    const ret = {
        phone: null,
        password: null,
        admin: false,
    };
    const errors = [];
    // phone
    if (!Validations_1.checkPhone(`${data.phone}`)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar su número de teléfono.', 'phone'));
    }
    else
        ret.phone = data.phone;
    // password
    if (!data.password || (data.password && data.password.length < 4)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar su contraseña correctamente.', 'password'));
    }
    else
        ret.password = data.password;
    if (data.admin)
        ret.admin = true;
    return { data: ret, errors };
}
exports.validateLogin = validateLogin;
async function validatePasswords(data) {
    const ret = {
        password: null,
        newPassword: null
    };
    const errors = [];
    // password
    if (!data.password) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar su contraseña actual.', 'password'));
    }
    else
        ret.password = data.password.trim();
    // newPassword
    if (!data.newPassword || !Validations_1.checkPassword(data.newPassword)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero la nueva contraseña debe contener ' +
            'letras (a-Z, A-Z), números (0-9) y al menos 6 caracteres.', 'newPassword'));
    }
    else
        ret.newPassword = data.newPassword.trim();
    return { data: ret, errors };
}
exports.validatePasswords = validatePasswords;
