"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.responsesErrorChurches = exports.getChurchData = void 0;
const UsersActions_1 = require("./UsersActions");
const Churches_1 = __importDefault(require("../Models/Churches"));
async function getChurchData(_id = null, withUser = false) {
    const projection = {
        _id: 1,
        name: 1,
        description: 1,
        picture: 1,
        phone1: 1,
        phone2: 1,
        address: 1,
        location: 1,
    };
    let ret = {};
    if (withUser)
        projection.userid = 1;
    const church = await Churches_1.default.findOne({ _id }, projection).exec() || null;
    if (!church)
        return null;
    if (withUser) {
        ret = {
            _id: church._id,
            name: church.name,
            description: church.description,
            picture: church.picture,
            phone1: church.phone1,
            phone2: church.phone2,
            address: church.address,
            location: church.location,
        };
        const user = await (0, UsersActions_1.getNamesUsersList)([church.userid]) || null;
        ret.user = user ? (user[0] || null) : null;
    }
    else
        ret = church;
    return ret;
}
exports.getChurchData = getChurchData;
/* Responses */
function responsesErrorChurches(res, option, errors = undefined) {
    const ret = [
        { status: 404, msg: 'Disculpe, pero la iglesia seleccionada no existe o no se encuentra disponible.' },
        { status: 422, msg: 'Disculpe, pero la iglesia seleccionada es incorrecto.' },
        { status: 422, msg: '¡Error en los parámetros!' },
        { status: 500, msg: 'Ha ocurrido un error al momento de guardar la imagen suministrada.' },
        { status: 422, msg: 'Disculpe, pero no puede eliminar la iglesia principal.' },
    ];
    if (ret[option])
        return res.status(ret[option].status).json({
            msg: ret[option].msg,
            errors
        });
    return res.status(500).json({
        msg: '¡Error desconocido!',
    });
}
exports.responsesErrorChurches = responsesErrorChurches;
exports.default = {
    getChurchData,
    responsesErrorChurches,
};
