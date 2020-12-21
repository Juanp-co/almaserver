"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNamesUsersList = exports.getData = void 0;
const Users_1 = __importDefault(require("../Models/Users"));
async function checkIfExistDocument(document, _id) {
    return document ?
        (await Users_1.default.find({ document, _id: { $ne: _id } })
            .countDocuments()
            .exec()) > 0
        : false;
}
exports.default = checkIfExistDocument;
async function getData(_id) {
    return _id ?
        Users_1.default.findOne({ _id }, { __v: 0, password: 0, 'securityQuestion.answer': 0 }).exec()
        : null;
}
exports.getData = getData;
async function getNamesUsersList(listIds) {
    return listIds.length > 0 ?
        Users_1.default.find({ _id: { $in: listIds } }, { names: 1, lastNames: 1, document: 1 }).exec()
        : [];
}
exports.getNamesUsersList = getNamesUsersList;
