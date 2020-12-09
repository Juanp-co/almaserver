"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const TokenActions_1 = require("./Functions/TokenActions");
async function validateUser(req, res, next) {
    try {
        const token = `${req.headers['x-access-token'] || req.headers.Authorization}`;
        const check = jsonwebtoken_1.default.verify(token, req.app.get('secretKey'));
        const session = await TokenActions_1.checkTokenDB(token);
        if (!session) {
            return res.status(401).json({
                msg: 'Disculpe, pero su sesión ha expirado. Debe iniciar sesión nuevamente.',
                redirect: true
            });
        }
        req.params.userid = `${check._id}`;
        req.body.userid = `${check._id}`;
        req.query.role = `${check.role}`;
        req.query.token = token;
        return next();
    }
    catch (e) {
        return res.status(401).json({
            msg: 'Disculpe, pero no se logró encontrar una sesión activa.'
        });
    }
}
exports.validateUser = validateUser;
