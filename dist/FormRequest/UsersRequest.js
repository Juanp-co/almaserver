"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSecurityQuestion = exports.validatePasswords = exports.validateLogin = exports.validateUpdate = exports.validateRegister = void 0;
const Validations_1 = require("../Functions/Validations");
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const UsersActions_1 = __importDefault(require("../ActionsData/UsersActions"));
const QuestionsActions_1 = __importDefault(require("../ActionsData/QuestionsActions"));
async function validateRegister(data, admin) {
    const ret = {
        phone: null,
        password: null,
        document: null,
        names: null,
        lastNames: null,
        direction: null,
        educationLevel: null,
        profession: null,
        bloodType: null,
        company: false,
        companyType: null,
        baptized: false,
        role: admin ? null : 5,
        securityQuestion: {
            questionId: null,
            answer: null
        }
    };
    const errors = [];
    // phone
    if (!data.phone || !Validations_1.checkPhone(data.phone)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe asegurarse de indicar su número de teléfono.', 'phone'));
    }
    else {
        ret.phone = data.phone;
    }
    // password
    if (!data.password || !Validations_1.checkPassword(data.password)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe asignar una contraseña. Esta debe contener ' +
            'letras (a-Z, A-Z), números (0-9) y debe contener al menos 6 caracteres.', 'password'));
    }
    else {
        ret.password = data.password;
    }
    // names
    if (!data.names || !Validations_1.checkNameOrLastName(data.names)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe asegurarse de indicar su(s) nombre(s).', 'names'));
    }
    else {
        ret.names = data.names.toUpperCase();
    }
    // lastNames
    if (!data.lastNames || !Validations_1.checkNameOrLastName(data.lastNames)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe asegurarse de indicar su(s) apellido(s).', 'lastNames'));
    }
    else {
        ret.lastNames = data.lastNames.toUpperCase();
    }
    // document
    if (!data.document || !Validations_1.checkDocument(data.document)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe asegurarse de indicar su número de documento.', 'document'));
    }
    else if (await UsersActions_1.default(data.document.toUpperCase())) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero el número de documento ya se encuentra registrado. Verifíquelo e intente nuevamente.', 'document'));
    }
    else {
        ret.document = data.document.toUpperCase();
    }
    // direction
    if (!data.direction) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar su dirección.', 'direction'));
    }
    else {
        ret.direction = data.direction;
    }
    // bloodType
    if (!Validations_1.checkIfValueIsNumber(`${data.bloodType}`)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar su tipo de sangre.', 'bloodType'));
    }
    else {
        ret.bloodType = data.bloodType;
    }
    // questionId
    if (!data.questionId || !Validations_1.checkObjectId(data.questionId)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero seleccionar una pregunta de seguridad.', 'questionId'));
    }
    else if (!(await QuestionsActions_1.default(data.questionId))) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero la pregunta de seguridad seleccionada es incorrecta.', 'questionId'));
    }
    else
        ret.securityQuestion.questionId = data.questionId;
    // answer
    if (!data.answer || data.answer.length < 4) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar una respuesta de seguridad.', 'answer'));
    }
    else
        ret.securityQuestion.answer = data.answer.trim();
    // educationLevel
    if (Validations_1.checkIfValueIsNumber(`${data.educationLevel}`))
        ret.educationLevel = data.educationLevel;
    // profession
    if (Validations_1.checkIfValueIsNumber(`${data.profession}`))
        ret.profession = data.profession;
    // bloodType
    if (Validations_1.checkIfValueIsNumber(`${data.bloodType}`))
        ret.bloodType = data.bloodType;
    // baptized
    if (data.baptized)
        ret.baptized = data.baptized;
    // bloodType
    if (data.company) {
        ret.company = data.company;
        // companyType
        if (!data.companyType || !Validations_1.checkDocument(data.companyType)) {
            errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar a qué se dedica su empresa.', 'companyType'));
        }
        else
            ret.companyType = data.companyType;
    }
    // role
    if (admin) {
        if (!Validations_1.checkIfValueIsNumber(`${data.role}`)) {
            errors.push(GlobalFunctions_1.setError('Disculpe, pero debe seleccionar un rol para el usuario.', 'role'));
        }
        else
            ret.role = data.role;
    }
    return { data: ret, errors };
}
exports.validateRegister = validateRegister;
async function validateUpdate(data, _id) {
    const ret = {
        phone: null,
        document: null,
        names: null,
        lastNames: null,
        direction: null,
        educationLevel: null,
        profession: null,
        bloodType: null,
        company: false,
        companyType: null,
        baptized: false
    };
    const errors = [];
    // phone
    if (!data.phone || !Validations_1.checkPhone(data.phone)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe asegurarse de indicar su número de teléfono.', 'phone'));
    }
    else {
        ret.phone = data.phone;
    }
    // names
    if (!data.names || !Validations_1.checkNameOrLastName(data.names)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe asegurarse de indicar su(s) nombre(s).', 'names'));
    }
    else {
        ret.names = data.names.toUpperCase();
    }
    // lastNames
    if (!data.lastNames || !Validations_1.checkNameOrLastName(data.lastNames)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe asegurarse de indicar su(s) apellido(s).', 'lastNames'));
    }
    else {
        ret.lastNames = data.lastNames.toUpperCase();
    }
    // document
    if (!data.document || !Validations_1.checkDocument(data.document)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe asegurarse de indicar su número de documento.', 'document'));
    }
    else if (await UsersActions_1.default(data.document.toUpperCase(), _id)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero el número de documento ya se encuentra con otro usuario. Verifíquelo e intente nuevamente.', 'document'));
    }
    else {
        ret.document = data.document.toUpperCase();
    }
    // direction
    if (!data.direction) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar su dirección.', 'direction'));
    }
    else {
        ret.direction = data.direction;
    }
    // bloodType
    if (!Validations_1.checkIfValueIsNumber(`${data.bloodType}`)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar su tipo de sangre.', 'bloodType'));
    }
    else {
        ret.bloodType = data.bloodType;
    }
    // educationLevel
    if (Validations_1.checkIfValueIsNumber(`${data.educationLevel}`))
        ret.educationLevel = data.educationLevel;
    // profession
    if (Validations_1.checkIfValueIsNumber(`${data.profession}`))
        ret.profession = data.profession;
    // bloodType
    if (data.bloodType)
        ret.bloodType = data.bloodType;
    // baptized
    if (data.baptized)
        ret.baptized = data.baptized;
    // bloodType
    if (data.company) {
        ret.company = data.company;
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
        document: null,
        password: null
    };
    const errors = [];
    // phone
    if (!data.document || !Validations_1.checkDocument(data.document ? data.document.toUpperCase() : '')) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe asegurarse de indicar su número de documento.', 'document'));
    }
    else {
        ret.document = data.document.toUpperCase();
    }
    // password
    if (!data.password || (data.password && data.password.length < 4)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe asignar su contraseña correctamente.', 'password'));
    }
    else {
        ret.password = data.password;
    }
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
async function validateSecurityQuestion(data) {
    const ret = {
        questionId: null,
        answer: null
    };
    const errors = [];
    // questionId
    if (!data.questionId || !Validations_1.checkObjectId(data.questionId)) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero seleccionar una pregunta de seguridad.', 'questionId'));
    }
    else if (!(await QuestionsActions_1.default(data.questionId))) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero la pregunta de seguridad seleccionada es incorrecta.', 'questionId'));
    }
    else
        ret.questionId = data.questionId;
    // answer
    if (!data.answer || data.answer.length < 4) {
        errors.push(GlobalFunctions_1.setError('Disculpe, pero debe indicar una respuesta de seguridad.', 'answer'));
    }
    else
        ret.answer = data.answer.trim();
    return { data: ret, errors };
}
exports.validateSecurityQuestion = validateSecurityQuestion;
