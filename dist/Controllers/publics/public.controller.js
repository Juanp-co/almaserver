"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.register = exports.helloWorld = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const UsersActions_1 = require("../../ActionsData/UsersActions");
const UsersRequest_1 = require("../../FormRequest/UsersRequest");
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const TokenActions_1 = require("../../Functions/TokenActions");
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
        const validate = await UsersRequest_1.validateSimpleRegister(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const user = new Users_1.default(validate.data);
        user.password = bcrypt_1.default.hashSync(user.password, 10);
        await user.save();
        // create referrals document
        const referrals = new Referrals_1.default({
            _id: user._id
        });
        await referrals.save();
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
        const user = await Users_1.default.findOne({ document: validate.data.document }, { password: 1, document: 1, role: 1 }).exec();
        if (!user) {
            return res.status(404).json({
                msg: `Disculpe, pero el número de documento no se encuentra registrado.`
            });
        }
        if (validate.data.admin) {
            if (user.role === 5) {
                return res.status(401).json({
                    msg: `Disculpe, pero no cuenta con privilegios para poder acceder a esta área.`
                });
            }
        }
        if (!bcrypt_1.default.compareSync(`${validate.data.password}`, `${user.password}`)) {
            return res.status(422).json({
                msg: 'Contraseña incorrecta.'
            });
        }
        const token = await TokenActions_1.getAccessToken(req, {
            _id: user._id.toString(),
            document: user.document,
            role: user.role
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
