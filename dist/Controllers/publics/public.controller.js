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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPublicMembers = exports.getBanks = exports.recoveryPassword = exports.logout = exports.login = exports.register = exports.helloWorld = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const CoursesActions_1 = require("../../ActionsData/CoursesActions");
const UsersActions_1 = require("../../ActionsData/UsersActions");
const UsersRequest_1 = __importStar(require("../../FormRequest/UsersRequest"));
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const TokenActions_1 = require("../../Functions/TokenActions");
const Validations_1 = require("../../Functions/Validations");
const AccountsBanks_1 = __importDefault(require("../../Models/AccountsBanks"));
const Referrals_1 = __importDefault(require("../../Models/Referrals"));
const Users_1 = __importDefault(require("../../Models/Users"));
const path = 'Controllers/publics/publics.controller';
function helloWorld(req, res) {
    return res.json({
        msg: `Welcome to ALMA API REST.`
    });
}
exports.helloWorld = helloWorld;
/*
Actions Users
 */
async function register(req, res) {
    try {
        const validate = await UsersRequest_1.default(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const user = new Users_1.default(validate.data);
        user.password = bcrypt_1.default.hashSync(user.password, 10);
        await user.save();
        // create referrals document
        const referrals = new Referrals_1.default({ _id: user._id });
        await referrals.save();
        await CoursesActions_1.addCoursesToUser(user._id.toString());
        // check if exist referred and update
        if (user.referred) {
            // find the principal referrals document
            let ref = await Referrals_1.default.findOne({ _id: user.referred }).exec();
            if (ref)
                ref.members.push(user._id.toString());
            else {
                ref = new Referrals_1.default({
                    _id: user.referred,
                    members: [user._id.toString()]
                });
            }
            await ref.save();
        }
        return res.status(201).json({
            msg: `Registro exitoso.`
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/register`);
    }
}
exports.register = register;
async function login(req, res) {
    try {
        const validate = UsersRequest_1.validateLogin(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const user = await Users_1.default.findOne({ phone: validate.data.phone }, { password: 1, document: 1, roles: 1 }).exec();
        if (!user) {
            return res.status(404).json({
                msg: `Disculpe, pero el número de teléfono o la contraseña son incorrectos.`
            });
        }
        if (!bcrypt_1.default.compareSync(`${validate.data.password}`, `${user.password}`)) {
            return res.status(422).json({
                msg: `Disculpe, pero el número de teléfono o la contraseña son incorrectos.`
            });
        }
        if (validate.data.admin) {
            if (GlobalFunctions_1.checkIfExistsRoleInList(user.roles, [5])) {
                return res.status(401).json({
                    msg: `Disculpe, pero no cuenta con privilegios para poder acceder a esta área.`
                });
            }
        }
        const token = await TokenActions_1.getAccessToken(req, {
            _id: user._id.toString(),
            roles: user.roles
        });
        if (!token) {
            return res.status(500).json({
                msg: '¡Ha ocurrido un error al momento de iniciar la sesión!'
            });
        }
        return res.json({
            msg: '¡Inicio de sesión con éxito!',
            data: await UsersActions_1.getData(user._id.toString(), { __v: 0, password: 0, referred: 0 }),
            token
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/login`);
    }
}
exports.login = login;
async function logout(req, res) {
    try {
        const { token } = req.query;
        await TokenActions_1.disableTokenDB(`${token}`);
        return res.json({
            msg: 'Se ha finalizado la sesión exitosamente.'
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/logout`);
    }
}
exports.logout = logout;
async function recoveryPassword(req, res) {
    try {
        const actionsList = ['check-document', 'check-params', 'change-password'];
        const ret = {
            msg: null,
        };
        const { action } = req.params;
        const { document } = req.body;
        if (actionsList.indexOf(`${action}`) === -1)
            return UsersActions_1.responseErrorsRecoveryPassword(res, 0);
        if (!Validations_1.checkDocument(document))
            return UsersActions_1.responseErrorsRecoveryPassword(res, 1);
        const user = await Users_1.default.findOne({
            document: document.toString().toUpperCase(),
            role: { $nin: [0, 1] }
        }, { email: 1, birthday: 1 }).exec();
        if (!user)
            return UsersActions_1.responseErrorsRecoveryPassword(res, 2);
        if (action === 'check-document') {
            ret.msg = 'Por favor, complete los siguientes campos para recuperar su contraseña.';
            ret.check = {
                email: !!user.email,
                birthday: !!user.birthday,
            };
            return res.json(ret);
        }
        // validate extra params
        const { check } = req.body;
        if (!check || (check && Object.keys(check).length === 0))
            return UsersActions_1.responseErrorsRecoveryPassword(res, 3);
        if (user.email) {
            if (!Validations_1.checkEmail(check.email))
                return UsersActions_1.responseErrorsRecoveryPassword(res, 4);
            if (check.email !== user.email)
                return UsersActions_1.responseErrorsRecoveryPassword(res, 5);
        }
        if (user.birthday) {
            if (!Validations_1.checkDate(check.birthday))
                return UsersActions_1.responseErrorsRecoveryPassword(res, 6);
            if (check.birthday !== user.birthday)
                return UsersActions_1.responseErrorsRecoveryPassword(res, 7);
        }
        if (action === 'check-params') {
            ret.msg = 'Por favor, indique su nueva contraseña.';
            ret.setNewPassword = true;
            return res.json(ret);
        }
        const { password } = req.body;
        if (!Validations_1.checkPassword(password))
            return UsersActions_1.responseErrorsRecoveryPassword(res, 8);
        user.password = bcrypt_1.default.hashSync(password, 10);
        await user.save();
        ret.msg = 'Se ha asignado la nueva contraseña a su cuenta exitosamente.';
        ret.changed = true;
        return res.json(ret);
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/logout`);
    }
}
exports.recoveryPassword = recoveryPassword;
/*
  BANKS
 */
async function getBanks(req, res) {
    try {
        const banks = await AccountsBanks_1.default.find({}, { title: 1, description: 1, picture: 1 }).exec();
        return res.json({
            msg: 'Bancos',
            banks
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/logout`);
    }
}
exports.getBanks = getBanks;
/*
  MEMBERS
 */
async function getPublicMembers(req, res) {
    try {
        const { tokenId } = req.body;
        const { word } = req.query;
        const { limit, skip, sort } = GlobalFunctions_1.getLimitSkipSortSearch(req.query);
        const query = { _id: { $ne: tokenId } };
        let members = [];
        if (/^[0-9]{1,13}/.test(`${word}`.trim())) {
            query.phone = { $regex: new RegExp(`${word}`, 'i') };
        }
        else if (Validations_1.checkNameOrLastName(word)) {
            const pattern = word ? word.toString().trim().replace(' ', '|') : null;
            if (pattern) {
                query.$or = [
                    { names: { $regex: new RegExp(`(${pattern})`, 'i') } },
                    { lastNames: { $regex: new RegExp(`(${pattern})`, 'i') } },
                ];
            }
        }
        if (query.phone || query.$or) {
            members = await Users_1.default.find(query, {
                names: 1,
                lastNames: 1,
                gender: 1,
                phone: 1
            })
                .skip(skip)
                .limit(limit)
                .sort(sort)
                .exec();
        }
        return res.json({
            msg: `Listado de miembros.`,
            members
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getUsers`);
    }
}
exports.getPublicMembers = getPublicMembers;
