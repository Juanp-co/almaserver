"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDetailsEvent = void 0;
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
        if (endDate && Validations_1.checkDate(endDate))
            end = moment_timezone_1.default(`${endDate}`).endOf('d').unix();
        if (end !== 0) {
            events.forEach((e) => {
                if (e.toObject({ getters: false }).date <= end)
                    list.push(e);
            });
        }
        else
            list = events;
        const listIds = lodash_1.default.uniq(lodash_1.default.map(events, 'userid'));
        const users = await UsersActions_1.getNamesUsersList(listIds);
        if (users.length > 0) {
            list.forEach(e => {
                const index = lodash_1.default.findIndex(users, (v) => v._id.toString() === e.userid);
                if (index > -1) {
                    ret.push({
                        _id: e._id,
                        title: e.title,
                        date: e.date,
                        initHour: e.initHour,
                        endHour: e.endHour,
                        toRoles: e.toRoles,
                        user: users[index],
                    });
                }
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
        };
        const users = await UsersActions_1.getNamesUsersList([event.userid]);
        if (users.length > 0)
            ret.user = users[0] ? users[0] : null;
        return ret;
    }
    return null;
}
exports.getDetailsEvent = getDetailsEvent;
