"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteQuestions = exports.updateQuestions = exports.saveQuestions = exports.getDetailsQuestion = exports.getQuestions = void 0;
const Question_1 = __importDefault(require("../../Models/Question"));
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const QuestionsRequest_1 = require("../../FormRequest/QuestionsRequest");
const Users_1 = __importDefault(require("../../Models/Users"));
const Validations_1 = require("../../Functions/Validations");
const path = 'Controllers/admin/question.admin.controller';
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
async function getDetailsQuestion(req, res) {
    try {
        const { _id } = req.params;
        if (!Validations_1.checkObjectId(_id)) {
            return res.status(422).json({
                msg: 'Disculpe, pero el ID de la pregunta de seguridad es incorrecto.'
            });
        }
        const question = await Question_1.default.findOne({ _id }, { __v: 0 }).exec();
        if (!question) {
            return res.status(404).json({
                msg: 'Disculpe, pero la pregunta de seguridad no existe.'
            });
        }
        return res.status(200).json({
            msg: `Detalles de la pregunta de seguridad.`,
            question
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getDetailsQuestion`);
    }
}
exports.getDetailsQuestion = getDetailsQuestion;
async function saveQuestions(req, res) {
    try {
        const validate = QuestionsRequest_1.validateRegister(req.body);
        if (validate.errors.length > 0) {
            return res.status(422).json({
                msg: '¡Error en los parametros!',
                errors: validate.errors
            });
        }
        const question = new Question_1.default(validate.data);
        await question.save();
        return res.status(200).json({
            msg: `Se ha registrado la pregunta de seguridad exitosamente.`,
            question
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/saveQuestions`);
    }
}
exports.saveQuestions = saveQuestions;
async function updateQuestions(req, res) {
    try {
        const { _id } = req.params;
        const validate = QuestionsRequest_1.validateUpdate(req.body, _id);
        if (validate.errors.length > 0) {
            return res.status(422).json({
                msg: '¡Error en los parametros!',
                errors: validate.errors
            });
        }
        const question = await Question_1.default.findOne({ _id }, { __v: 0 }).exec();
        if (!question) {
            return res.status(404).json({
                msg: 'La pregunta de seguridad a actualizar no existe.'
            });
        }
        question.question = validate.data.question;
        await question.save();
        return res.status(200).json({
            msg: `Se han actualizado la pregunta de seguridad exitosamente.`,
            question
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/updateQuestions`);
    }
}
exports.updateQuestions = updateQuestions;
async function deleteQuestions(req, res) {
    try {
        const { _id } = req.params;
        if (!Validations_1.checkObjectId(_id)) {
            return res.status(422).json({
                msg: 'Disculpe, pero el ID de la pregunta de seguridad a eliminar es incorrecto.'
            });
        }
        const question = await Question_1.default.findOne({ _id }, { __v: 0 }).exec();
        if (!question) {
            return res.status(404).json({
                msg: 'Disculpe, pero la pregunta de seguridad no existe.'
            });
        }
        // check if questions isn't used for others users.
        const check = await Users_1.default.find({ 'securityQuestion.questionId': _id }).countDocuments().exec();
        if (check > 0) {
            return res.status(422).json({
                msg: 'Disculpe, pero no puede eliminar la pregunta de seguridad, debido a que se encuentra en uso por los usuarios.'
            });
        }
        await question.delete();
        return res.status(200).json({
            msg: `Se han eliminado la pregunta de seguridad exitosamente.`
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/deleteQuestions`);
    }
}
exports.deleteQuestions = deleteQuestions;
