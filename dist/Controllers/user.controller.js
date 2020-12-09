"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeSecurityQuestion = exports.changePassword = exports.update = exports.get = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const UsersRequest_1 = require("../FormRequest/UsersRequest");
const Users_1 = __importDefault(require("../Models/Users"));
const TokenActions_1 = require("../Functions/TokenActions");
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const path = 'Controllers/user.controller';
async function get(req, res) {
    try {
        const { userid } = req.params;
        const user = await Users_1.default.findOne({ _id: userid }, { __v: 0, password: 0, 'securityQuestion.answer': 0 }).exec();
        if (!user) {
            // logout
            const { token } = req.query;
            return TokenActions_1.forceLogout(res, `${token}`);
        }
        return res.status(200).json({
            msg: 'Datos de la sesión',
            data: user
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/get`);
    }
}
exports.get = get;
async function update(req, res) {
    try {
        const { userid } = req.params;
        const user = await Users_1.default.findOne({ _id: userid }, { _id: 1 }).exec();
        if (!user) {
            // logout
            const { token } = req.query;
            return TokenActions_1.forceLogout(res, `${token}`);
        }
        const validate = await UsersRequest_1.validateUpdate(req.body, userid);
        if (validate.errors.length > 0) {
            return res.status(422).json({
                msg: '¡Error en los parametros!',
                errors: validate.errors
            });
        }
        const updated = await Users_1.default.findByIdAndUpdate(userid, validate.data, {
            projection: { password: 0, __v: 0, 'securityQuestion.answer': 0 },
            new: true
        });
        return res.status(200).json({
            msg: 'Se ha actualizado la información exitosamente.',
            data: updated
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/update`);
    }
}
exports.update = update;
async function changePassword(req, res) {
    try {
        const { userid } = req.params;
        const user = await Users_1.default.findOne({ _id: userid }, { password: 1 }).exec();
        if (!user) {
            // logout
            const { token } = req.query;
            return TokenActions_1.forceLogout(res, `${token}`);
        }
        const validate = await UsersRequest_1.validatePasswords(req.body);
        if (validate.errors.length > 0) {
            return res.status(422).json({
                msg: '¡Error en los parametros!',
                errors: validate.errors
            });
        }
        if (!bcrypt_1.default.compareSync(validate.data.password, `${user.password}`)) {
            return res.status(422).json({
                msg: 'Disculpe, pero la contraseña actual es incorrecta.'
            });
        }
        user.password = bcrypt_1.default.hashSync(validate.data.newPassword, 10);
        await user.save();
        return res.status(200).json({
            msg: 'Se ha actualizado su contraseña exitosamente.'
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/changePassword`);
    }
}
exports.changePassword = changePassword;
async function changeSecurityQuestion(req, res) {
    try {
        const { userid } = req.params;
        const user = await Users_1.default.findOne({ _id: userid }, { securityQuestion: 1 }).exec();
        if (!user) {
            // logout
            const { token } = req.query;
            return TokenActions_1.forceLogout(res, `${token}`);
        }
        const validate = await UsersRequest_1.validateSecurityQuestion(req.body);
        if (validate.errors.length > 0) {
            return res.status(422).json({
                msg: '¡Error en los parametros!',
                errors: validate.errors
            });
        }
        user.securityQuestion.questionId = validate.data.questionId;
        user.securityQuestion.answer = bcrypt_1.default.hashSync(validate.data.answer, 10);
        await user.save();
        return res.status(200).json({
            msg: 'Se ha actualizado los datos de seguridad exitosamente.'
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/changeSecurityQuestion`);
    }
}
exports.changeSecurityQuestion = changeSecurityQuestion;