"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryParamsList = exports.getModelDataListDevotionals = void 0;
const lodash_1 = __importDefault(require("lodash"));
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const UsersActions_1 = require("./UsersActions");
function returnDevotionalResponse(res, option, errors = undefined) {
    const ret = [
        { status: 404, msg: 'Disculpe, pero el devocional seleccionado no existe o no se encuentra disponible.' },
        { status: 422, msg: 'Disculpe, pero el devocional seleccionado es incorrecto.' },
        { status: 422, msg: '¡Error en los parámetros!' },
        { status: 500, msg: 'Ha ocurrido un error al momento de guardar la imagen suministrada.' },
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
exports.default = returnDevotionalResponse;
async function getModelDataListDevotionals(list = [], simpleUser = true) {
    const ret = [];
    if (list.length > 0) {
        const listIds = lodash_1.default.uniq(list.map(l => l.userid));
        let listUsers = [];
        if (listIds.length > 0) {
            listUsers = simpleUser ?
                await UsersActions_1.getUsersSimpleList(listIds)
                : await UsersActions_1.getNamesUsersList(listIds);
        }
        if (listUsers.length > 0) {
            list.forEach(l => {
                const user = listUsers.find(u => u._id.toString() === l.userid) || null;
                ret.push({
                    _id: l._id,
                    title: l.title,
                    description: l.description,
                    picture: l.picture,
                    urlVideo: l.urlVideo,
                    user,
                    created_at: l.created_at,
                    updated_at: l.updated_at,
                });
            });
        }
    }
    return ret;
}
exports.getModelDataListDevotionals = getModelDataListDevotionals;
function getQueryParamsList({ endDate, initDate, search }) {
    const query = {};
    if (search)
        query.title = { $regex: new RegExp(`${search}`, 'i') };
    if (initDate) {
        const check1 = moment_timezone_1.default(initDate, 'YYYY-MM-DD', true);
        if (check1.isValid()) {
            query.created_at = { $gte: check1.startOf('d').unix() };
        }
    }
    if (endDate) {
        const check2 = moment_timezone_1.default(endDate, 'YYYY-MM-DD', true);
        if (check2.isValid()) {
            if (!query.created_at)
                query.create_at = { $lte: check2.endOf('d').unix() };
            else
                query.created_at.$lte = check2.endOf('d').unix();
        }
    }
    return query;
}
exports.getQueryParamsList = getQueryParamsList;
