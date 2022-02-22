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
exports.validateUpdatePictureProfile = exports.validateRolesToUpdateForm = exports.validatePasswords = exports.validateLogin = exports.validateUpdate = exports.validateFormMemberRegisterFromUser = exports.validateFormMemberRegisterAdmin = void 0;
const UsersActions_1 = __importStar(require("../ActionsData/UsersActions"));
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const Validations_1 = require("../Functions/Validations");
async function validateSimpleRegister(data, admin) {
    const ret = {
        phone: null,
        password: null,
        names: null,
        lastNames: null,
        roles: [4],
        referred: null,
        consolidated: false,
    };
    const errors = [];
    // phone
    if (!(0, Validations_1.checkPhone)(data.phone)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe indicar un número de teléfono.', 'phone'));
    }
    else if (await (0, UsersActions_1.checkIfExistPhone)(data.phone)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero el número de teléfono indicado ya se encuentra asignado a otro miembro. Verifíquelo e intente nuevamente.', 'email'));
    }
    else
        ret.phone = data.phone;
    // password
    if (!admin) {
        if (!data.password || !(0, Validations_1.checkPassword)(data.password)) {
            errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe asignar una contraseña. Esta debe contener ' +
                'letras (a-Z, A-Z), números (0-9) y debe contener al menos 6 caracteres.', 'password'));
        }
        else
            ret.password = data.password;
    }
    // names
    if (!data.names || !(0, Validations_1.checkNameOrLastName)(data.names)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe asegurarse de indicar su(s) nombre(s).', 'names'));
    }
    else
        ret.names = data.names.toUpperCase();
    // lastNames
    if (!data.lastNames || !(0, Validations_1.checkNameOrLastName)(data.lastNames)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe asegurarse de indicar su(s) apellido(s).', 'lastNames'));
    }
    else
        ret.lastNames = data.lastNames.toUpperCase();
    // referred
    if (data.referred && (0, Validations_1.checkDocument)(data.referred)) {
        ret.referred = await (0, UsersActions_1.getIdUserFromDocument)(data.referred.toUpperCase());
    }
    if (admin) {
        ret.roles = (0, GlobalFunctions_1.checkIfExistsRoleInList)(data.roles, [0, 1, 2, 3, 4]) ? data.roles : [4];
    }
    return { data: ret, errors };
}
exports.default = validateSimpleRegister;
async function validateFormMemberRegisterAdmin(data) {
    var _a;
    const ret = {
        email: null,
        phone: null,
        password: null,
        names: null,
        lastNames: null,
        gender: null,
        birthday: null,
        civilStatus: null,
        locality: null,
        direction: null,
        petition: null,
        attendGroup: false,
        groupId: null,
        familyGroupId: [],
        roles: [4],
        referred: null,
        consolidated: false,
    };
    const errors = [];
    // phone
    if (!(0, Validations_1.checkPhone)(data.phone)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe indicar un número de teléfono.', 'phone'));
    }
    else if (await (0, UsersActions_1.checkIfExistPhone)(data.phone)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero el número de teléfono indicado ya se encuentra asignado a otro miembro. Verifíquelo e intente nuevamente.', 'email'));
    }
    else
        ret.phone = data.phone;
    // names
    if (!data.names || !(0, Validations_1.checkNameOrLastName)(data.names)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe asegurarse de indicar el nombre nombre del miembro.', 'names'));
    }
    else
        ret.names = data.names.toUpperCase();
    // lastNames
    if (!data.lastNames || !(0, Validations_1.checkNameOrLastName)(data.lastNames)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe asegurarse de indicar el apellido del miembro.', 'lastNames'));
    }
    else
        ret.lastNames = data.lastNames.toUpperCase();
    // email
    if (data.email) {
        if (!(0, Validations_1.checkEmail)(data.email)) {
            errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero el correo electrónico indicado es incorrecto.', 'email'));
        }
        else
            ret.email = data.email.toLowerCase();
    }
    // birthday
    if (data.birthday) {
        if (!(0, Validations_1.checkDate)(data.birthday)) {
            errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero la fecha de cumpleaños indicada es incorrecta.', 'birthday'));
        }
        else
            ret.birthday = ((_a = data.birthday) === null || _a === void 0 ? void 0 : _a.trim().toUpperCase()) || null;
    }
    // locality
    if ((0, Validations_1.checkTitlesOrDescriptions)(`${data.locality}`))
        ret.locality = data.locality || null;
    // direction
    if ((0, Validations_1.checkTitlesOrDescriptions)(`${data.direction}`))
        ret.direction = data.direction || null;
    // petition
    if ((0, Validations_1.checkTitlesOrDescriptions)(`${data.petition}`))
        ret.petition = data.petition || null;
    // civilStatus
    if ((0, Validations_1.checkIfValueIsNumber)(`${data.civilStatus}`))
        ret.civilStatus = data.civilStatus;
    // gender
    if ((0, Validations_1.checkIfValueIsNumber)(`${data.gender}`))
        ret.gender = data.gender;
    // attendGroup
    if (data.attendGroup) {
        ret.attendGroup = true;
        // familyGroupId
        if (data.groupId) {
            if (!(0, Validations_1.checkObjectId)(`${data.groupId}`)) {
                errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero el grupo seleccionado es incorrecto.', 'groupId'));
            }
            else
                ret.familyGroupId.push(data.groupId);
        }
    }
    // consolidated
    if (data.consolidated) {
        ret.consolidated = data.consolidated || false;
        // referred
        if (data.referred) {
            if (!(0, Validations_1.checkObjectId)(`${data.referred}`)) {
                errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero el miembro seleccionado es incorrecto.', 'referred'));
            }
            else
                ret.referred = data.referred;
        }
    }
    // role
    ret.roles = (0, GlobalFunctions_1.checkIfExistsRoleInList)(data.roles, [0, 1, 2, 3, 4]) ? data.roles : [4];
    return { data: ret, errors };
}
exports.validateFormMemberRegisterAdmin = validateFormMemberRegisterAdmin;
async function validateFormMemberRegisterFromUser(data) {
    var _a;
    const ret = {
        email: null,
        phone: null,
        password: null,
        names: null,
        lastNames: null,
        gender: null,
        birthday: null,
        civilStatus: null,
        locality: null,
        direction: null,
        petition: null,
        attendGroup: false,
        groupId: null,
        familyGroupId: [],
        roles: [4],
        referred: null,
        consolidated: false,
    };
    const errors = [];
    // phone
    if (!(0, Validations_1.checkPhone)(data.phone)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe indicar un número de teléfono.', 'phone'));
    }
    else if (await (0, UsersActions_1.checkIfExistPhone)(data.phone)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero el número de teléfono indicado ya se encuentra asignado a otro miembro. Verifíquelo e intente nuevamente.', 'email'));
    }
    else
        ret.phone = data.phone;
    // names
    if (!data.names || !(0, Validations_1.checkNameOrLastName)(data.names)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe asegurarse de indicar su(s) nombre(s).', 'names'));
    }
    else
        ret.names = data.names.toUpperCase();
    // lastNames
    if (!data.lastNames || !(0, Validations_1.checkNameOrLastName)(data.lastNames)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe asegurarse de indicar su(s) apellido(s).', 'lastNames'));
    }
    else
        ret.lastNames = data.lastNames.toUpperCase();
    // email
    if (data.email) {
        if (!(0, Validations_1.checkEmail)(data.email)) {
            errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero el correo electrónico indicado es incorrecto.', 'email'));
        }
        else
            ret.email = data.email.toLowerCase();
    }
    // birthday
    if (data.birthday) {
        if (!(0, Validations_1.checkDate)(data.birthday)) {
            errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero la fecha de cumpleaños indicada es incorrecta.', 'birthday'));
        }
        else
            ret.birthday = ((_a = data.birthday) === null || _a === void 0 ? void 0 : _a.trim().toUpperCase()) || null;
    }
    // locality
    if ((0, Validations_1.checkTitlesOrDescriptions)(`${data.locality}`))
        ret.locality = data.locality || null;
    // direction
    if ((0, Validations_1.checkTitlesOrDescriptions)(`${data.direction}`))
        ret.direction = data.direction || null;
    // petition
    if ((0, Validations_1.checkTitlesOrDescriptions)(`${data.petition}`))
        ret.petition = data.petition || null;
    // gender
    if ((0, Validations_1.checkIfValueIsNumber)(`${data.gender}`))
        ret.gender = data.gender;
    // civilStatus
    if ((0, Validations_1.checkIfValueIsNumber)(`${data.civilStatus}`))
        ret.civilStatus = data.civilStatus;
    // attendGroup
    if (data.attendGroup) {
        ret.attendGroup = true;
        // familyGroupId
        if (data.groupId) {
            if (!(0, Validations_1.checkObjectId)(`${data.groupId}`)) {
                errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero el grupo seleccionado es incorrecto.', 'groupId'));
            }
            else
                ret.familyGroupId.push(data.groupId);
        }
    }
    // consolidated
    ret.consolidated = data.consolidated || false;
    // referred
    if (data.referred) {
        if (!(0, Validations_1.checkObjectId)(`${data.referred}`)) {
            errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero el miembro seleccionado es incorrecto.', 'referred'));
        }
        else
            ret.referred = data.referred;
    }
    return { data: ret, errors };
}
exports.validateFormMemberRegisterFromUser = validateFormMemberRegisterFromUser;
async function validateUpdate(data, _id, admin = false) {
    var _a;
    const ret = {
        phone: null,
        email: null,
        document: null,
        names: null,
        lastNames: null,
        position: null,
        gender: null,
        birthday: null,
        civilStatus: null,
        educationLevel: null,
        profession: null,
        bloodType: null,
        company: false,
        companyType: null,
        baptized: false,
        meetingNew: false,
        department: null,
        city: null,
        locality: null,
        direction: null,
    };
    const errors = [];
    // phone
    if (!(0, Validations_1.checkPhone)(data.phone)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe indicar un número de teléfono. Sólo se permiten números (0-9).', 'phone'));
    }
    else if (await (0, UsersActions_1.checkIfExistPhone)(data.phone, _id)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero el número de teléfono indicado ya se encuentra asignado a otro miembro. Verifíquelo e intente nuevamente.', 'phone'));
    }
    else
        ret.phone = data.phone;
    // names
    if (!data.names || !(0, Validations_1.checkNameOrLastName)(data.names)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe asegurarse de indicar el nombre.', 'names'));
    }
    else {
        ret.names = data.names.trim();
    }
    // lastNames
    if (!data.lastNames || !(0, Validations_1.checkNameOrLastName)(data.lastNames)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe asegurarse de indicar el apellido.', 'lastNames'));
    }
    else {
        ret.lastNames = data.lastNames.trim();
    }
    // document
    if (data.document) {
        if (!(0, Validations_1.checkDocument)(data.document)) {
            errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe asegurarse de indicar el número de documento.', 'document'));
        }
        else if (await (0, UsersActions_1.default)(data.document, _id)) {
            errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero el número de documento ya se encuentra asignado a otro miembro. Verifíquelo e intente nuevamente.', 'document'));
        }
        else
            ret.document = data.document.toUpperCase();
    }
    // email
    if (data.email) {
        if (!(0, Validations_1.checkEmail)(data.email)) {
            errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero el correo electrónico indicado es incorrecto.', 'email'));
        }
        else
            ret.email = data.email.toLowerCase();
    }
    // birthday
    if (data.birthday) {
        if (!(0, Validations_1.checkDate)(`${data.birthday}`)) {
            errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero la fecha de cumpleaños indicada es incorrecta.', 'birthday'));
        }
        else {
            ret.birthday = ((_a = data.birthday) === null || _a === void 0 ? void 0 : _a.trim().toUpperCase()) || null;
        }
    }
    // educationLevel
    if ((0, Validations_1.checkIfValueIsNumber)(`${data.educationLevel}`))
        ret.educationLevel = data.educationLevel;
    // profession
    if ((0, Validations_1.checkIfValueIsNumber)(`${data.profession}`))
        ret.profession = data.profession;
    // bloodType
    if ((0, Validations_1.checkIfValueIsNumber)(`${data.bloodType}`))
        ret.bloodType = data.bloodType;
    // gender
    if ((0, Validations_1.checkIfValueIsNumber)(`${data.gender}`))
        ret.gender = data.gender;
    // civilStatus
    if ((0, Validations_1.checkIfValueIsNumber)(`${data.civilStatus}`))
        ret.civilStatus = data.civilStatus;
    // department
    if ((0, Validations_1.checkIfValueIsNumber)(`${data.department}`))
        ret.department = data.department;
    // city
    if ((0, Validations_1.checkIfValueIsNumber)(`${data.city}`))
        ret.city = data.city;
    // locality
    if ((0, Validations_1.checkTitlesOrDescriptions)(`${data.locality}`))
        ret.locality = data.locality || null;
    // direction
    if ((0, Validations_1.checkTitlesOrDescriptions)(`${data.direction}`))
        ret.direction = data.direction || null;
    // position
    if ((0, Validations_1.checkTitlesOrDescriptions)(`${data.position}`))
        ret.position = data.position || null;
    // baptized
    if (data.baptized)
        ret.baptized = data.baptized;
    // meetingNew
    if (data.meetingNew)
        ret.meetingNew = data.meetingNew;
    // company
    if (data.company) {
        ret.company = true;
        // companyType
        if ((0, Validations_1.checkIfValueIsNumber)(`${data.companyType}`))
            ret.companyType = data.companyType;
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
    if (!(0, Validations_1.checkPhone)(`${data.phone}`)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe indicar su número de teléfono.', 'phone'));
    }
    else
        ret.phone = data.phone;
    // password
    if (!data.password || (data.password && data.password.length < 4)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe indicar su contraseña correctamente.', 'password'));
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
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero debe indicar su contraseña actual.', 'password'));
    }
    else
        ret.password = data.password.trim();
    // newPassword
    if (!data.newPassword || !(0, Validations_1.checkPassword)(data.newPassword)) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero la nueva contraseña debe contener ' +
            'letras (a-Z, A-Z), números (0-9) y al menos 6 caracteres.', 'newPassword'));
    }
    else
        ret.newPassword = data.newPassword.trim();
    return { data: ret, errors };
}
exports.validatePasswords = validatePasswords;
function validateRolesToUpdateForm(request) {
    const data = {
        roles: []
    };
    const errors = [];
    const { roles } = request;
    if (!roles) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero no se recibió la información a actualizar.', 'roles'));
    }
    else if (!(0, GlobalFunctions_1.checkIfExistsRoleInList)(roles, [0, 1, 2, 3, 4])) {
        errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero alguno de los roles indicados es incorrecto.', 'roles'));
    }
    else
        data.roles = roles;
    return { data, errors };
}
exports.validateRolesToUpdateForm = validateRolesToUpdateForm;
function validateUpdatePictureProfile(data) {
    const ret = {
        picture: null,
    };
    const errors = [];
    if (data.picture) {
        // document
        if (!(0, Validations_1.isBase64)(data.picture) && !(0, Validations_1.checkUrl)(data.picture)) {
            errors.push((0, GlobalFunctions_1.setError)('Disculpe, pero la imagen imagen para su perfil es incorrecta.', 'picture'));
        }
        else
            ret.picture = `${data.picture}`;
    }
    return { data: ret, errors };
}
exports.validateUpdatePictureProfile = validateUpdatePictureProfile;
