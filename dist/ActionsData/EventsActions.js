"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.return404Or422 = exports.getDetailsEvent = void 0;
const lodash_1 = __importDefault(require("lodash"));
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const UsersActions_1 = require("./UsersActions");
const Validations_1 = require("../Functions/Validations");
const Events_1 = __importDefault(require("../Models/Events"));
async function getEventsList({ query, skip, sort, limit, endDate }) {
    const ret = [];
    const events = await Events_1.default.find(query, { __v: 0, description: 0 })
        .skip(skip)
        .limit(limit)
        .sort(sort)
        .exec();
    if (events.length > 0) {
        let end = 0;
        let list = [];
        if (endDate && (0, Validations_1.checkDate)(endDate))
            end = (0, moment_timezone_1.default)(`${endDate}`, 'YYYY-MM-DD', true).endOf('d').unix();
        if (end !== 0) {
            events.forEach((e) => {
                if (e.toObject({ getters: false }).date <= end)
                    list.push(e);
            });
        }
        else
            list = events;
        const listIds = lodash_1.default.uniq(lodash_1.default.map(events, 'userid'));
        const users = await (0, UsersActions_1.getNamesUsersList)(listIds);
        if (users.length > 0) {
            list.forEach(e => {
                const user = users.find((v) => v._id.toString() === e.userid);
                ret.push({
                    _id: e._id,
                    title: e.title,
                    date: e.date,
                    initHour: e.initHour,
                    endHour: e.endHour,
                    toRoles: e.toRoles,
                    picture: e.picture,
                    user: user || null,
                });
            });
        }
        return ret;
    }
    return [];
}
exports.default = getEventsList;
async function getDetailsEvent({ query }) {
    let ret = {};
    const event = await Events_1.default.findOne(query, { __v: 0 }).exec();
    if (event) {
        ret = {
            _id: event._id,
            title: event.title,
            description: event.description,
            date: event.date,
            initHour: event.initHour,
            endHour: event.endHour,
            toRoles: event.toRoles,
            picture: event.picture,
        };
        const users = await (0, UsersActions_1.getNamesUsersList)([event.userid]);
        if (users.length > 0)
            ret.user = users[0] || null;
        return ret;
    }
    return null;
}
exports.getDetailsEvent = getDetailsEvent;
function return404Or422(res, index = -1) {
    const msgs = [
        'el evento seleccionado es incorrecto',
        'el evento seleccionado no existe o no se encuentra disponible.',
        'ha ocurrido un error inesperado al momento de subir la imagen para el evento.',
    ];
    const status = index === 1 ? 404 : 422;
    return res.status(status).json({
        msg: `Disculpe, pero ${msgs[index] || 'no de logró deteminar el error.'}`
    });
}
exports.return404Or422 = return404Or422;
