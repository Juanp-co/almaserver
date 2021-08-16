"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const getDateEvent = (timestamp) => {
    if (timestamp)
        return moment_timezone_1.default.unix(timestamp).format('YYYY-MM-DD');
    return timestamp;
};
const EventSchema = new mongoose_1.Schema({
    userid: { type: String, require: true },
    title: { type: String, require: true },
    toRoles: { type: [Number], require: true },
    description: { type: String, require: true },
    date: { type: Number, require: true, get: getDateEvent },
    initHour: { type: String, require: true },
    endHour: { type: String, require: true },
    picture: { type: String, default: null },
    created_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate },
    updated_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate }
}, { id: false });
EventSchema.pre('save', function (next) {
    this.updated_at = GlobalFunctions_1.setDate();
    next();
});
EventSchema.set('toJSON', { getters: true });
const Events = mongoose_1.model('event', EventSchema);
exports.default = Events;
