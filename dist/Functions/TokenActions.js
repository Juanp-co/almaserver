"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableTokenDBForUserId = exports.forceLogout = exports.disableTokenDB = exports.getAccessToken = exports.checkTokenDB = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Whitelist_1 = __importDefault(require("../Models/Whitelist"));
async function checkTokenDB(token) {
    const exits = await Whitelist_1.default.findOne({ token, status: true }, { _id: 1 }).exec();
    return !!exits;
}
exports.checkTokenDB = checkTokenDB;
async function getAccessToken(req, data) {
    const token = jsonwebtoken_1.default.sign({ _id: data._id, phone: data.phone, role: data.role }, req.app.get('secretKey'), { expiresIn: '1y' });
    if (!token)
        return null;
    const model = {
        userid: data._id,
        token,
        ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress || null
    };
    const wl = new Whitelist_1.default(model);
    await wl.save();
    return token;
}
exports.getAccessToken = getAccessToken;
async function disableTokenDB(token) {
    const dataSession = await Whitelist_1.default.findOne({ token }).exec();
    if (dataSession) {
        dataSession.status = false;
        await dataSession.save();
    }
}
exports.disableTokenDB = disableTokenDB;
async function forceLogout(res, token) {
    const dataSession = await Whitelist_1.default.findOne({ token }).exec();
    if (dataSession) {
        dataSession.status = false;
        await dataSession.save();
    }
    return res.status(401).json({
        msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
    });
}
exports.forceLogout = forceLogout;
async function disableTokenDBForUserId(listUsersIds) {
    await Whitelist_1.default.updateMany({ userid: { $in: listUsersIds } }, { status: false });
}
exports.disableTokenDBForUserId = disableTokenDBForUserId;
