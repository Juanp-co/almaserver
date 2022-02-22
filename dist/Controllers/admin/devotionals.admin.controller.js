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
exports.deleteDevotional = exports.saveDevotional = exports.updateDevotional = exports.showDevotional = exports.getTotalsDevotionals = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const DevotionalsActions_1 = __importStar(require("../../ActionsData/DevotionalsActions"));
const DevotionalsRequest_1 = __importDefault(require("../../FormRequest/DevotionalsRequest"));
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const Validations_1 = require("../../Functions/Validations");
const Devotionals_1 = __importDefault(require("../../Models/Devotionals"));
const AWSService_1 = __importStar(require("../../Services/AWSService"));
const path = 'Controllers/events/devotionals.controller';
async function getDevotionals(req, res) {
    try {
        const { limit, skip, sort } = (0, GlobalFunctions_1.getLimitSkipSortSearch)(req.query);
        const query = (0, DevotionalsActions_1.getQueryParamsList)(req.query);
        const devotionals = await Devotionals_1.default.find(query, { description: 0, urlVideo: 0, __v: 0 })
            .skip(skip)
            .limit(limit)
            .sort(sort)
            .exec();
        return res.json({
            msg: `Devocionales.`,
            devotionals: await (0, DevotionalsActions_1.getModelDataListDevotionals)(devotionals)
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getDevotionals`);
    }
}
exports.default = getDevotionals;
async function getTotalsDevotionals(req, res) {
    try {
        const query = (0, DevotionalsActions_1.getQueryParamsList)(req.query);
        const totals = await Devotionals_1.default.find(query).countDocuments().exec();
        return res.json({
            msg: `Total de devocionales.`,
            data: { totals }
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getTotalsDevotionals`);
    }
}
exports.getTotalsDevotionals = getTotalsDevotionals;
async function showDevotional(req, res) {
    try {
        const { _id } = req.params;
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, DevotionalsActions_1.default)(res, 1);
        const devotional = await Devotionals_1.default.findOne({ _id }, { __v: 0 }).exec();
        if (!devotional)
            return (0, DevotionalsActions_1.default)(res, 0);
        const ret = await (0, DevotionalsActions_1.getModelDataListDevotionals)([devotional], false);
        return res.json({
            msg: `Detalles del devocional.`,
            devotional: ret[0] || null
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/showDevotional`);
    }
}
exports.showDevotional = showDevotional;
async function updateDevotional(req, res) {
    try {
        const { _id } = req.params;
        const validate = (0, DevotionalsRequest_1.default)(req.body);
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, DevotionalsActions_1.default)(res, 1);
        if (validate.errors.length > 0)
            return (0, DevotionalsActions_1.default)(res, 2, validate.errors);
        const devotional = await Devotionals_1.default.findOne({ _id }, { __v: 0 }).exec();
        if (!devotional)
            return (0, DevotionalsActions_1.default)(res, 0);
        if (validate.data.picture !== devotional.picture) {
            if (validate.data.picture) {
                const s3 = process.env.AWS_S3_BUCKET || null;
                if (!s3)
                    return (0, DevotionalsActions_1.default)(res, 3);
                if (devotional.picture !== null && devotional.picture.indexOf(`${s3}`))
                    await (0, AWSService_1.deleteFile)(devotional.picture);
                if ((0, Validations_1.isBase64)(validate.data.picture)) {
                    const newUrl = `alma/devotionals/devotional-${devotional._id.toString()}-${(0, moment_timezone_1.default)().tz('America/Bogota').unix()}`;
                    await (0, AWSService_1.default)(newUrl, validate.data.picture);
                    devotional.picture = `${s3}/${newUrl}.jpg`;
                }
                else if ((0, Validations_1.checkUrl)(validate.data.picture)) {
                    devotional.picture = validate.data.picture;
                }
            }
            else
                devotional.picture = validate.data.picture || null;
        }
        devotional.title = validate.data.title;
        devotional.description = validate.data.description;
        devotional.urlVideo = validate.data.urlVideo;
        await devotional.save();
        return res.json({
            msg: `Se ha actualizado el devocional exitosamente.`,
            devotional
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/updateDevotional`);
    }
}
exports.updateDevotional = updateDevotional;
async function saveDevotional(req, res) {
    try {
        const { tokenId } = req.body;
        const validate = (0, DevotionalsRequest_1.default)(req.body);
        if (validate.errors.length > 0)
            return (0, DevotionalsActions_1.default)(res, 2, validate.errors);
        const devotional = new Devotionals_1.default(validate.data);
        devotional.userid = tokenId;
        if (validate.data.picture) {
            if ((0, Validations_1.isBase64)(validate.data.picture)) {
                const s3 = process.env.AWS_S3_BUCKET || null;
                if (!s3)
                    return (0, DevotionalsActions_1.default)(res, 3);
                const newUrl = `alma/devotionals/devotional-${devotional._id.toString()}-${(0, moment_timezone_1.default)().tz('America/Bogota').unix()}`;
                await (0, AWSService_1.default)(newUrl, validate.data.picture);
                devotional.picture = `${s3}/${newUrl}.jpg`;
            }
            else if ((0, Validations_1.checkUrl)(validate.data.picture)) {
                devotional.picture = validate.data.picture;
            }
        }
        await devotional.save();
        const ret = await (0, DevotionalsActions_1.getModelDataListDevotionals)([devotional], false);
        return res.json({
            msg: `Se registrado el devocional exitosamente.`,
            devotional: ret[0] || null
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/saveDevotional`);
    }
}
exports.saveDevotional = saveDevotional;
async function deleteDevotional(req, res) {
    var _a;
    try {
        const { _id } = req.params;
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, DevotionalsActions_1.default)(res, 1);
        const devotional = await Devotionals_1.default.findOne({ _id }, { _id: 1, picture: 1 }).exec();
        if (!devotional)
            return (0, DevotionalsActions_1.default)(res, 0);
        const s3 = process.env.AWS_S3_BUCKET || null;
        if (devotional.picture && ((_a = devotional.picture) === null || _a === void 0 ? void 0 : _a.indexOf(`${s3}`)) > -1)
            (0, AWSService_1.deleteFile)(devotional.picture);
        // delete
        await devotional.delete();
        return res.json({
            msg: `Se ha eliminado el devocional exitosamente.`
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/deleteDevotional`);
    }
}
exports.deleteDevotional = deleteDevotional;
