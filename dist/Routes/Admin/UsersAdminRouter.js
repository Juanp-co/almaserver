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
const users_admin_controller_1 = __importStar(require("../../Controllers/admin/users.admin.controller"));
const router = (0, express_1.Router)();
router.route('/')
    .get(middleware_1.validateAdmin, users_admin_controller_1.default)
    .post(middleware_1.validateAdmin, users_admin_controller_1.saveUser);
router.get('/counters', middleware_1.validateAdmin, users_admin_controller_1.getUsersCounters);
router.get('/download', middleware_1.validateAdmin, users_admin_controller_1.downLoadData);
router.route('/:_id')
    .delete(middleware_1.validateAdmin, users_admin_controller_1.deleteUser)
    .get(middleware_1.validateAdmin, users_admin_controller_1.showUser)
    .put(middleware_1.validateAdmin, users_admin_controller_1.updateUser);
router.get('/:_id/courses', middleware_1.validateAdmin, users_admin_controller_1.getCoursesUser);
router.put('/:_id/consolidator', middleware_1.validateAdmin, users_admin_controller_1.setAsConsolidatorUser);
router.get('/:_id/referrals', middleware_1.validateAdmin, users_admin_controller_1.getReferralsUser);
router.put('/:_id/reset-password', middleware_1.validateAdmin, users_admin_controller_1.updatePassword);
router.put('/:_id/role', middleware_1.validateAdmin, users_admin_controller_1.changeRoleUser);
exports.default = router;
