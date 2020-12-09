"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveQuestions = exports.getQuestions = void 0;
const Question_1 = __importDefault(require("../../Models/Question"));
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const path = 'Controllers/admin/question.controller';
async function getQuestions(req, res) {
    try {
        const questions = await Question_1.default.find({}, { __v: 0 }).exec();
        return res.status(200).json({
            msg: `Preguntas de seguridad.`,
            questions
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getQuestions`);
    }
}
exports.getQuestions = getQuestions;
async function saveQuestions(req, res) {
    try {
        // const { data } = req.body;
        // await Questions.insertMany(data);
        return res.status(200).json({
            msg: `Se han guardado las preguntas de seguridad exitosamente.`
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/saveQuestions`);
    }
}
exports.saveQuestions = saveQuestions;
