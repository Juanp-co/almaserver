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
exports.removeLogoOrBannerSettings = exports.changeStatusLogoOrBannerSetting = exports.addLogoOrBannerSetting = exports.updateSettingsUrls = void 0;
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const Settings_1 = __importDefault(require("../../Models/Settings"));
const SettingsRequest_1 = __importStar(require("../../FormRequest/SettingsRequest"));
const AWSService_1 = require("../../Services/AWSService");
const Validations_1 = require("../../Functions/Validations");
const SettingsActions_1 = require("../../ActionsData/SettingsActions");
const path = 'Controllers/admin/settings.admin.controller';
async function getSettings(req, res) {
    try {
        let settings = await Settings_1.default.findOne({}, { __v: 0 })
            .exec();
        if (!settings) {
            settings = new Settings_1.default({});
            await settings.save();
        }
        settings.banners = settings.banners.reverse();
        settings.logos = settings.logos.reverse();
        return res.json({
            msg: `Ajustes.`,
            data: settings
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getSettings`);
    }
}
exports.default = getSettings;
async function updateSettingsUrls(req, res) {
    try {
        const settings = await Settings_1.default.findOne({}, {
            facebook: 1,
            instagram: 1,
            twitter: 1,
            web: 1,
            youtube: 1,
        }).exec();
        if (!settings)
            return (0, SettingsActions_1.return404Or422Settings)(res, 0);
        const validate = (0, SettingsRequest_1.default)(req.body);
        if (validate.errors.length > 0) {
            return res.status(422).json({
                msg: `¡Error en los parámetros!`,
                errors: validate.errors || []
            });
        }
        settings.facebook = validate.data.facebook || null;
        settings.instagram = validate.data.instagram || null;
        settings.twitter = validate.data.twitter || null;
        settings.web = validate.data.web || null;
        settings.youtube = validate.data.youtube || null;
        await settings.save();
        return res.json({
            msg: `Se ha actualizado la configuración exitosamente.`,
            data: settings
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getSettings`);
    }
}
exports.updateSettingsUrls = updateSettingsUrls;
/* Logos */
async function addLogoOrBannerSetting(req, res, type) {
    try {
        const projection = type === 'logos' ? { logos: 1 } : { banners: 1 };
        const settings = await Settings_1.default.findOne({}, projection).exec();
        if (!settings)
            return (0, SettingsActions_1.return404Or422Settings)(res, 0);
        const validate = (0, SettingsRequest_1.validateUpdateLogosOrBannersSettings)(req.body);
        if (validate.errors.length > 0) {
            return res.status(422).json({
                msg: `¡Error en los parámetros!`,
                errors: validate.errors || []
            });
        }
        const url = await (0, SettingsActions_1.uploadLogoOrBanner)(validate.data.picture, type === 'logos');
        if (!url)
            return (0, SettingsActions_1.return404Or422Settings)(res, 1);
        validate.data.picture = url;
        if (validate.data.active) {
            for (const [index, _] of settings[type].entries()) {
                settings[type][index].active = false;
            }
        }
        settings[type].push(validate.data);
        await settings.save();
        return res.json({
            msg: `Se ha agregado ${type === 'logos' ? 'el logo' : 'la portada'} exitosamente.`,
            data: settings[type][settings[type].length - 1]
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/addLogoOrBannerSetting`);
    }
}
exports.addLogoOrBannerSetting = addLogoOrBannerSetting;
async function changeStatusLogoOrBannerSetting(req, res, type) {
    var _a;
    try {
        const projection = type === 'logos' ? { logos: 1 } : { banners: 1 };
        const { _id, action } = req.params;
        if (!['active', 'disable'].includes(action))
            return (0, SettingsActions_1.return404Or422Settings)(res, 3);
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, SettingsActions_1.return404Or422Settings)(res, type === 'logos' ? 2 : 5);
        const settings = await Settings_1.default.findOne({}, projection).exec();
        if (!settings)
            return (0, SettingsActions_1.return404Or422Settings)(res, 0);
        const indexId = (_a = settings[type]) === null || _a === void 0 ? void 0 : _a.findIndex((l) => l._id.toString() === _id);
        if (indexId === -1)
            return (0, SettingsActions_1.return404Or422Settings)(res, type === 'logos' ? 4 : 6);
        for (const [index, _] of settings[type].entries()) {
            if (index !== indexId)
                settings[type][index].active = false;
            else
                settings[type][index].active = action === 'active';
        }
        await settings.save();
        return res.json({
            msg: `Se ha actualizado ${type === 'logos' ? 'el logo' : 'la portada'} exitosamente.`,
            data: settings[type][indexId] || null
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/changeStatusLogoOrBannerSetting`);
    }
}
exports.changeStatusLogoOrBannerSetting = changeStatusLogoOrBannerSetting;
async function removeLogoOrBannerSettings(req, res, type) {
    var _a;
    try {
        const projection = type === 'logos' ? { logos: 1 } : { banners: 1 };
        const { _id } = req.params;
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, SettingsActions_1.return404Or422Settings)(res, type === 'logos' ? 2 : 5);
        const settings = await Settings_1.default.findOne({}, projection).exec();
        if (!settings)
            return (0, SettingsActions_1.return404Or422Settings)(res, 0);
        const index = (_a = settings[type]) === null || _a === void 0 ? void 0 : _a.findIndex((l) => l._id.toString() === _id);
        if (index === -1)
            return (0, SettingsActions_1.return404Or422Settings)(res, type === 'logos' ? 4 : 6);
        // delete picture of s3
        (0, AWSService_1.deleteFile)(settings[type][index].picture);
        settings[type].pull({ _id });
        await settings.save();
        return res.json({
            msg: `Se ha eliminado ${type === 'logos' ? 'el logo' : 'la portada'} exitosamente.`
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/removeLogoOrBannerSettings`);
    }
}
exports.removeLogoOrBannerSettings = removeLogoOrBannerSettings;
