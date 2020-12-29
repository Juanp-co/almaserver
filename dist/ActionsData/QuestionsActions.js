"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Question_1 = __importDefault(require("../Models/Question"));
async function checkIfExistQuestion(_id) {
    return _id ? (await Question_1.default.find({ _id }, { _id: 1 }).countDocuments().exec()) > 0 : false;
}
exports.default = checkIfExistQuestion;
