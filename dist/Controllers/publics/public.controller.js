"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuestions = exports.logout = exports.login = exports.register = exports.helloWorld = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const UsersRequest_1 = require("../../FormRequest/UsersRequest");
const Users_1 = __importDefault(require("../../Models/Users"));
const TokenActions_1 = require("../../Functions/TokenActions");
const UsersActions_1 = require("../../ActionsData/UsersActions");
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const Question_1 = __importDefault(require("../../Models/Question"));
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
        const validate = await UsersRequest_1.validateRegister(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const user = new Users_1.default(validate.data);
        user.password = bcrypt_1.default.hashSync(user.password, 10);
        user.securityQuestion.answer = bcrypt_1.default.hashSync(`${user.securityQuestion.answer}`, 10);
        await user.save();
        return res.json({
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
            data: await UsersActions_1.getData(user._id.toString()),
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
/*
Public actions
 */
async function getQuestions(req, res) {
    try {
        const questions = await Question_1.default.find({}, { question: 1 }).exec();
        return res.json({
            msg: `Preguntas de seguridad.`,
            questions
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getQuestions`);
    }
}
exports.getQuestions = getQuestions;
