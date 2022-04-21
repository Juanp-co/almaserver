"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteResource = exports.saveResource = exports.getResources = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const ResourcesActions_1 = require("../../ActionsData/ResourcesActions");
const ResourcesRequest_1 = require("../../FormRequest/ResourcesRequest");
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const Validations_1 = require("../../Functions/Validations");
const Resources_1 = __importDefault(require("../../Models/Resources"));
const Users_1 = __importDefault(require("../../Models/Users"));
const AWSService_1 = require("../../Services/AWSService");
const path = 'Controllers/User/resources.controller';
async function getResources(req, res) {
    try {
        const { tokenId } = req.body;
        let group = null;
        const ret = [];
        if (!(0, Validations_1.checkObjectId)(tokenId))
            return (0, ResourcesActions_1.returnResourcesMsgErrors)(res, 0);
        const resources = await Resources_1.default.find({ userid: tokenId }, { userid: 0, __v: 0 }).exec();
        return res.json({
            msg: 'Mis recursos compartidos',
            resources
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getResources`);
    }
}
exports.getResources = getResources;
async function saveResource(req, res) {
    var _a, _b;
    try {
        const { tokenId } = req.body;
        const validate = (0, ResourcesRequest_1.validateResourceForm)(req.body);
        if (!(0, Validations_1.checkObjectId)(tokenId))
            return (0, ResourcesActions_1.returnResourcesMsgErrors)(res, 0);
        if (validate.errors.length > 0)
            return (0, GlobalFunctions_1.returnErrorParams)(res, validate.errors);
        const user = await Users_1.default.findOne({ _id: tokenId }, { roles: 1 }).exec();
        if (!user)
            return (0, ResourcesActions_1.returnResourcesMsgErrors)(res, 0);
        // without privileges
        if (((_a = user.roles) === null || _a === void 0 ? void 0 : _a.length) === 1 && ((_b = user.roles) === null || _b === void 0 ? void 0 : _b.includes(4)))
            return (0, ResourcesActions_1.returnResourcesMsgErrors)(res, 1);
        const s3 = process.env.AWS_S3_BUCKET || null;
        if (!s3)
            return (0, ResourcesActions_1.returnResourcesMsgErrors)(res, 2);
        const newUrl = `alma/resources/documento-${(0, moment_timezone_1.default)().unix()}`;
        await (0, AWSService_1.uploadFilePdf)(newUrl, `${validate.data.file}`);
        const urlDoc = `${s3}/${newUrl}.pdf`;
        const resource = new Resources_1.default();
        resource.userid = tokenId;
        resource.title = validate.data.title;
        resource.urlDoc = urlDoc;
        resource.roles = validate.data.rolesList;
        await resource.save();
        return res.status(201).json({
            msg: 'Se ha agregado el nuevo documento exitosamente.',
            resource
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/saveResource`);
    }
}
exports.saveResource = saveResource;
async function deleteResource(req, res) {
    try {
        const { tokenId } = req.body;
        const { _id } = req.params;
        if (!(0, Validations_1.checkObjectId)(tokenId))
            return (0, ResourcesActions_1.returnResourcesMsgErrors)(res, 0);
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, ResourcesActions_1.returnResourcesMsgErrors)(res, 3);
        const resource = await Resources_1.default.findOne({ _id }, { __v: 0 }).exec();
        if (!resource)
            return (0, ResourcesActions_1.returnResourcesMsgErrors)(res, 4);
        if (resource.userid !== tokenId)
            (0, ResourcesActions_1.returnResourcesMsgErrors)(res, 1);
        if (resource.urlDoc)
            await (0, AWSService_1.deleteFile)(resource.urlDoc);
        await resource.delete();
        return res.json({
            msg: 'Se ha eliminado el documento exitosamente.'
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/deleteResource`);
    }
}
exports.deleteResource = deleteResource;
exports.default = {
    deleteResource,
    getResources,
    saveResource
};
