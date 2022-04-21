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
const courses_admin_controller_1 = __importStar(require("../../Controllers/admin/courses.admin.controller"));
const router = (0, express_1.Router)();
router.route('/')
    .get(middleware_1.validateAdmin, courses_admin_controller_1.default)
    .post(middleware_1.validateAdmin, courses_admin_controller_1.saveCourse);
router.route('/:_id')
    .delete(middleware_1.validateAdmin, courses_admin_controller_1.deleteCourse)
    .get(middleware_1.validateAdmin, courses_admin_controller_1.showCourse);
router.put('/:_id/enable', middleware_1.validateAdmin, courses_admin_controller_1.enableCourse);
router.put('/:_id/info', middleware_1.validateAdmin, courses_admin_controller_1.updateInfoCourse);
// theme
router.post('/:_id/theme/', middleware_1.validateAdmin, courses_admin_controller_1.addThemeCourse);
router.put('/:_id/theme/:themeId', middleware_1.validateAdmin, courses_admin_controller_1.updateThemeCourse);
router.delete('/:_id/theme/:themeId', middleware_1.validateAdmin, courses_admin_controller_1.deleteThemeCourse);
exports.default = router;
