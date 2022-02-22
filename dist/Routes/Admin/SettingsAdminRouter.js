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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../../middleware");
const settings_admin_controller_1 = __importStar(require("../../Controllers/admin/settings.admin.controller"));
const router = (0, express_1.Router)();
router.route('/')
    .get(middleware_1.validateAdmin, settings_admin_controller_1.default)
    .put(middleware_1.validateAdmin, settings_admin_controller_1.updateSettingsUrls);
router.post('/banners', middleware_1.validateAdmin, (req, res) => (0, settings_admin_controller_1.addLogoOrBannerSetting)(req, res, 'banners'));
router.delete('/banners/:_id', middleware_1.validateAdmin, (req, res) => (0, settings_admin_controller_1.removeLogoOrBannerSettings)(req, res, 'banners'));
router.put('/banners/:_id/:action', middleware_1.validateAdmin, (req, res) => (0, settings_admin_controller_1.changeStatusLogoOrBannerSetting)(req, res, 'banners'));
router.post('/logos', middleware_1.validateAdmin, (req, res) => (0, settings_admin_controller_1.addLogoOrBannerSetting)(req, res, 'logos'));
router.delete('/logos/:_id', middleware_1.validateAdmin, (req, res) => (0, settings_admin_controller_1.removeLogoOrBannerSettings)(req, res, 'logos'));
router.put('/logos/:_id/:action', middleware_1.validateAdmin, (req, res) => (0, settings_admin_controller_1.changeStatusLogoOrBannerSetting)(req, res, 'logos'));
exports.default = router;
