"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const UsersActions_1 = require("./UsersActions");
const Referrals_1 = __importDefault(require("../Models/Referrals"));
async function getReferralsData(listIds) {
    const ret = [];
    if (listIds.length > 0) {
        const refsData = await Referrals_1.default.find({ _id: { $in: listIds } }).exec();
        if (refsData.length > 0) {
            const usersIds = lodash_1.default.map(refsData, '_id');
            const users = await UsersActions_1.getNamesUsersList(usersIds);
            if (users.length > 0) {
                users.forEach((u) => {
                    const ref = lodash_1.default.find(refsData, r => r._id.toString() === u._id.toString());
                    ret.push({
                        user: u,
                        totalsReferrals: ref ? ref.members.length : 0
                    });
                });
            }
        }
    }
    return ret;
}
exports.default = getReferralsData;
