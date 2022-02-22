"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAdmin = exports.validatePublic = exports.validateUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const TokenActions_1 = require("./Functions/TokenActions");
const GlobalFunctions_1 = require("./Functions/GlobalFunctions");
const path = 'src/middleware';
function responseErrorSession(res) {
    return res.status(401).json({
        msg: 'Disculpe, pero su sesión ha expirado. Debe iniciar sesión nuevamente.',
        redirect: true
    });
}
function responseErrorCatchSessionToken(res, e) {
    (0, GlobalFunctions_1.showConsoleError)(path, e);
    return res.status(500).json({
        msg: 'Disculpe, pero ha ocurrido un error interno al momento de verificar las sesión.'
    });
}
async function validateUser(req, res, next) {
    try {
        const token = `${req.headers['x-access-token'] || req.headers.Authorization}`;
        const check = jsonwebtoken_1.default.verify(token, req.app.get('secretKey'));
        const session = await (0, TokenActions_1.checkTokenDB)(token);
        if (!session)
            return responseErrorSession(res);
        req.body.tokenId = `${check._id}`;
        req.body.tokenRoles = check.roles;
        req.query.token = token;
        return next();
    }
    catch (e) {
        return responseErrorCatchSessionToken(res, e);
    }
}
exports.validateUser = validateUser;
async function validatePublic(req, res, next) {
    try {
        const token = `${req.headers['x-access-token'] || req.headers.Authorization}`;
        const check = jsonwebtoken_1.default.verify(token, req.app.get('secretKey'));
        const session = await (0, TokenActions_1.checkTokenDB)(token);
        if (session) {
            req.body.tokenId = check._id;
            req.body.tokenRoles = check.roles;
            req.query.token = token;
        }
        return next();
    }
    catch (e) {
        return responseErrorCatchSessionToken(res, e);
    }
}
exports.validatePublic = validatePublic;
async function validateAdmin(req, res, next) {
    try {
        const token = `${req.headers['x-access-token'] || req.headers.Authorization}`;
        const check = jsonwebtoken_1.default.verify(token, req.app.get('secretKey'));
        const session = await (0, TokenActions_1.checkTokenDB)(token);
        if (!session)
            return responseErrorSession(res);
        if (!(0, GlobalFunctions_1.checkIfExistsRoleInList)(check.roles, [0, 1, 2, 3])) {
            return res.status(401).json({
                msg: 'Disculpe, pero no cuenta con privilegios para realizar esta acción.',
                redirect: true
            });
        }
        req.body.superadmin = (0, GlobalFunctions_1.checkIfExistsRoleInList)(check.roles, [0]);
        req.body.tokenId = check._id;
        req.body.tokenRoles = check.roles;
        req.query.token = token;
        return next();
    }
    catch (e) {
        return responseErrorCatchSessionToken(res, e);
    }
}
exports.validateAdmin = validateAdmin;
