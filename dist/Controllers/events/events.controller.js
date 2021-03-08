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
exports.showPublicEvent = exports.getPublicEvents = exports.deleteEvent = exports.updateEvent = exports.saveEvent = exports.showEvent = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const EventsActions_1 = __importStar(require("../../ActionsData/EventsActions"));
const UsersActions_1 = require("../../ActionsData/UsersActions");
const EventsRequest_1 = __importDefault(require("../../FormRequest/EventsRequest"));
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const Validations_1 = require("../../Functions/Validations");
const Events_1 = __importDefault(require("../../Models/Events"));
const path = 'src/controllers/events/events.controller';
async function getEvents(req, res) {
    try {
        const { userid } = req.params;
        const { initDate, endDate } = req.query;
        const { limit, skip, sort } = GlobalFunctions_1.getLimitSkipSortSearch(req.query);
        let query = {};
        if (!req.body.superadmin)
            query = Object.assign(query, { userid });
        if (initDate && Validations_1.checkDate(initDate)) {
            query = Object.assign(query, { date: { $gte: moment_timezone_1.default(`${initDate}`).startOf('d').unix() } });
        }
        return res.json({
            msg: `Eventos.`,
            events: await EventsActions_1.default({ skip, limit, sort, endDate, query })
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getEvents`);
    }
}
exports.default = getEvents;
async function showEvent(req, res) {
    try {
        const { _id, userid } = req.params;
        let query = { _id };
        if (!req.body.superadmin)
            query = Object.assign(query, { userid });
        if (!Validations_1.checkObjectId(_id))
            return EventsActions_1.return404Or422(res);
        const event = await EventsActions_1.getDetailsEvent({ query });
        if (!event)
            return EventsActions_1.return404Or422(res, true);
        return res.json({
            msg: `Evento.`,
            event
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/showEvent`);
    }
}
exports.showEvent = showEvent;
async function saveEvent(req, res) {
    try {
        const validate = EventsRequest_1.default(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const event = new Events_1.default(validate.data);
        event.userid = req.params.userid;
        await event.save();
        const user = await UsersActions_1.getNamesUsersList([req.params.userid]);
        return res.status(201).json({
            msg: `Se ha creado el evento exitosamente.`,
            event: {
                _id: event._id,
                title: event.title,
                description: event.description,
                date: event.date,
                initHour: event.initHour,
                endHour: event.endHour,
                toRoles: event.toRoles,
                user: user[0] || null
            }
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/saveEvent`);
    }
}
exports.saveEvent = saveEvent;
async function updateEvent(req, res) {
    try {
        const { _id, userid } = req.params;
        let query = { _id };
        if (!req.body.superadmin)
            query = Object.assign(query, { userid });
        if (!Validations_1.checkObjectId(_id))
            return EventsActions_1.return404Or422(res);
        const validate = EventsRequest_1.default(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const event = await Events_1.default.findOne(query, { __v: 0 }).exec();
        if (!event)
            return EventsActions_1.return404Or422(res, true);
        event.title = validate.data.title;
        event.description = validate.data.description;
        event.date = validate.data.date;
        event.initHour = validate.data.initHour;
        event.endHour = validate.data.endHour;
        event.toRoles = validate.data.toRoles;
        await event.save();
        return res.json({
            msg: `Se ha actualizado el evento exitosamente.`,
            event: {
                _id: event._id,
                title: event.title,
                description: event.description,
                date: event.date,
                initHour: event.initHour,
                endHour: event.endHour,
                toRoles: event.toRoles
            }
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/updateEvent`);
    }
}
exports.updateEvent = updateEvent;
async function deleteEvent(req, res) {
    try {
        const { _id, userid } = req.params;
        let query = { _id };
        if (!req.body.superadmin)
            query = Object.assign(query, { userid });
        if (!Validations_1.checkObjectId(_id))
            return EventsActions_1.return404Or422(res);
        const event = await Events_1.default.findOne(query, { __v: 0 }).exec();
        if (!event)
            return EventsActions_1.return404Or422(res, true);
        await event.delete();
        return res.json({
            msg: `Se ha eliminado el evento exitosamente.`,
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/deleteEvent`);
    }
}
exports.deleteEvent = deleteEvent;
/*
  PUBLIC EVENTS
 */
async function getPublicEvents(req, res) {
    try {
        const { initDate, endDate } = req.query;
        const { limit, skip, sort } = GlobalFunctions_1.getLimitSkipSortSearch(req.query);
        const query = {};
        if (initDate && Validations_1.checkDate(initDate)) {
            query.date = { $gte: moment_timezone_1.default(`${initDate}`).startOf('d').unix() };
        }
        return res.json({
            msg: `Eventos.`,
            events: await EventsActions_1.default({ skip, limit, sort, endDate, query })
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getEvents`);
    }
}
exports.getPublicEvents = getPublicEvents;
async function showPublicEvent(req, res) {
    try {
        const { _id } = req.params;
        const query = { _id };
        if (!Validations_1.checkObjectId(_id))
            return EventsActions_1.return404Or422(res);
        const event = await EventsActions_1.getDetailsEvent({ query });
        if (!event)
            return EventsActions_1.return404Or422(res, true);
        return res.json({
            msg: `Evento.`,
            event
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/showEvent`);
    }
}
exports.showPublicEvent = showPublicEvent;
