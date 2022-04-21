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
exports.deleteChurch = exports.saveChurch = exports.updateChurch = exports.showChurch = exports.getChurches = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const ChurchesActions_1 = require("../../ActionsData/ChurchesActions");
const ChurchesFormRequest_1 = require("../../FormRequest/ChurchesFormRequest");
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const Validations_1 = require("../../Functions/Validations");
const Churches_1 = __importDefault(require("../../Models/Churches"));
const Users_1 = __importDefault(require("../../Models/Users"));
const AWSService_1 = __importStar(require("../../Services/AWSService"));
const path = 'Controllers/admin/churches.admin.controller';
async function getChurches(req, res) {
    try {
        const churches = await Churches_1.default.find({}, { userid: 0, created_at: 0, updated_at: 0, __v: 0 }).exec();
        return res.json({
            msg: `Listado de iglesias`,
            churches
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getChurches`);
    }
}
exports.getChurches = getChurches;
async function showChurch(req, res) {
    try {
        const { _id } = req.params;
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, ChurchesActions_1.responsesErrorChurches)(res, 1);
        const church = await (0, ChurchesActions_1.getChurchData)(_id, true);
        if (!church)
            return (0, ChurchesActions_1.responsesErrorChurches)(res, 0);
        return res.json({
            msg: `Detalles iglesia`,
            church
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/showChurch`);
    }
}
exports.showChurch = showChurch;
async function updateChurch(req, res) {
    var _a;
    try {
        const { _id } = req.params;
        const validate = (0, ChurchesFormRequest_1.validateRegisterOrUpdateChurch)(req.body);
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, ChurchesActions_1.responsesErrorChurches)(res, 1);
        if (validate.errors.length > 0)
            return (0, ChurchesActions_1.responsesErrorChurches)(res, 1, validate.errors);
        const church = await Churches_1.default.findOne({ _id }, { userid: 0, created_at: 0, updated_at: 0, __v: 0 }).exec();
        if (!church)
            return (0, ChurchesActions_1.responsesErrorChurches)(res, 0);
        if (validate.data.picture !== church.picture) {
            if ((0, Validations_1.isBase64)(validate.data.picture)) {
                const s3 = process.env.AWS_S3_BUCKET || null;
                if (!s3)
                    return (0, ChurchesActions_1.responsesErrorChurches)(res, 3);
                const newUrl = `alma/churches/church-${church._id.toString()}-${(0, moment_timezone_1.default)().tz('America/Bogota').unix()}`;
                await (0, AWSService_1.default)(newUrl, validate.data.picture);
                if (church.picture && ((_a = church.picture) === null || _a === void 0 ? void 0 : _a.indexOf(`${s3}`)) > -1)
                    (0, AWSService_1.deleteFile)(church.picture);
                church.picture = `${s3}/${newUrl}.jpg`;
            }
            else if ((0, Validations_1.checkUrl)(validate.data.picture)) {
                church.picture = validate.data.picture;
            }
        }
        else if (validate.data.picture && (0, Validations_1.checkUrl)(validate.data.picture)) {
            church.picture = validate.data.picture;
        }
        else
            church.picture = null;
        church.name = validate.data.name;
        church.description = validate.data.description;
        church.phone1 = validate.data.phone1;
        church.phone2 = validate.data.phone2;
        church.email = validate.data.email;
        church.address = validate.data.address;
        church.location.coordinates = validate.data.location.coordinates;
        await church.save();
        return res.json({
            msg: `Se ha actualizado la iglesia exitosamente.`,
            church
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/updateChurch`);
    }
}
exports.updateChurch = updateChurch;
async function saveChurch(req, res) {
    try {
        const { tokenId } = req.body;
        const validate = (0, ChurchesFormRequest_1.validateRegisterOrUpdateChurch)(req.body);
        if (validate.errors.length > 0)
            return (0, ChurchesActions_1.responsesErrorChurches)(res, 1, validate.errors);
        const church = new Churches_1.default(validate.data);
        // save picture
        if (validate.data.picture) {
            if ((0, Validations_1.isBase64)(validate.data.picture)) {
                const s3 = process.env.AWS_S3_BUCKET || null;
                if (!s3)
                    return (0, ChurchesActions_1.responsesErrorChurches)(res, 3);
                const newUrl = `alma/churches/church-${church._id.toString()}-${(0, moment_timezone_1.default)().tz('America/Bogota').unix()}`;
                await (0, AWSService_1.default)(newUrl, validate.data.picture);
                church.picture = `${s3}/${newUrl}.jpg`;
            }
            else if ((0, Validations_1.checkUrl)(validate.data.picture)) {
                church.picture = validate.data.picture;
            }
        }
        church.userid = tokenId;
        await church.save();
        return res.json({
            msg: `Se registrado la iglesia exitosamente.`,
            church
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/saveChurch`);
    }
}
exports.saveChurch = saveChurch;
async function deleteChurch(req, res) {
    var _a;
    try {
        const { _id } = req.params;
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, ChurchesActions_1.responsesErrorChurches)(res, 1);
        // check the principal church ID is different to _id (check Migrations/Jsons/Churches.json)
        if (_id === '624a357644f15f3ce8200c2f')
            return (0, ChurchesActions_1.responsesErrorChurches)(res, 4);
        const church = await Churches_1.default.findOne({ _id }, { _id: 1, picture: 1 }).exec();
        if (!church)
            return (0, ChurchesActions_1.responsesErrorChurches)(res, 0);
        if (church.picture) {
            const s3 = process.env.AWS_S3_BUCKET || null;
            if (church.picture && ((_a = church.picture) === null || _a === void 0 ? void 0 : _a.indexOf(`${s3}`)) > -1)
                (0, AWSService_1.deleteFile)(church.picture);
        }
        // change the church value for all members that own this _id.
        Users_1.default.updateMany({ church: _id }, { $set: { church: '624a357644f15f3ce8200c2f' } }).exec();
        // delete church
        await church.delete();
        return res.json({
            msg: `Se ha eliminado la iglesia exitosamente.`
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/deleteChurch`);
    }
}
exports.deleteChurch = deleteChurch;
exports.default = {
    deleteChurch,
    getChurches,
    saveChurch,
    showChurch,
    updateChurch,
};
