"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const LogosAndBannersSchema = new mongoose_1.Schema({
    picture: { type: String, require: true },
    active: { type: Boolean, default: false },
    created_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate }
}, { id: false });
const SettingsSchema = new mongoose_1.Schema({
    logos: { type: [LogosAndBannersSchema], default: [] },
    banners: { type: [LogosAndBannersSchema], default: [] },
    facebook: { type: String, default: null },
    instagram: { type: String, default: null },
    twitter: { type: String, default: null },
    web: { type: String, default: null },
    youtube: { type: String, default: null },
    updated_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate }
}, { id: false });
LogosAndBannersSchema.set('toJSON', { getters: true });
SettingsSchema.set('toJSON', { getters: true });
const Settings = (0, mongoose_1.model)('settings', SettingsSchema);
exports.default = Settings;
