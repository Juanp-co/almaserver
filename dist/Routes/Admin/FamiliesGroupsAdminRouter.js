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
const families_groups_admin_controller_1 = __importStar(require("../../Controllers/admin/families-groups.admin.controller"));
const router = (0, express_1.Router)();
router.route('/')
    .get(middleware_1.validateAdmin, families_groups_admin_controller_1.default)
    .post(middleware_1.validateAdmin, families_groups_admin_controller_1.saveFamilyGroup);
router.get('/counters', middleware_1.validateAdmin, families_groups_admin_controller_1.getFamiliesGroupsCounters);
router.route('/:_id')
    .delete(middleware_1.validateAdmin, families_groups_admin_controller_1.deleteFamilyGroup)
    .get(middleware_1.validateAdmin, families_groups_admin_controller_1.showFamilyGroup)
    .put(middleware_1.validateAdmin, families_groups_admin_controller_1.updateFamilyGroup);
router.put('/:_id/members', middleware_1.validateAdmin, families_groups_admin_controller_1.updateMembersFamilyGroup);
exports.default = router;
