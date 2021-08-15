"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const getBannerUrl = (value) => {
    if (!value)
        return value;
    return `${process.env.URL_API}/${value}`;
};
const AccountBankSchema = new mongoose_1.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    picture: { type: String, require: true, get: getBannerUrl },
    created_at: { type: Number, default: GlobalFunctions_1.setDate, get: GlobalFunctions_1.getDate }
}, { id: false });
AccountBankSchema.set('toJSON', { getters: true });
const AccountsBanks = mongoose_1.model('accounts_banks', AccountBankSchema);
exports.default = AccountsBanks;
