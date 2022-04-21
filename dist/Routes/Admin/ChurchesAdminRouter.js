"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../../middleware");
const churches_admin_controller_1 = require("../../Controllers/admin/churches.admin.controller");
const router = (0, express_1.Router)();
router.route('/')
    .get(middleware_1.validateAdmin, churches_admin_controller_1.getChurches)
    .post(middleware_1.validateAdmin, churches_admin_controller_1.saveChurch);
router.route('/:_id')
    .get(middleware_1.validateAdmin, churches_admin_controller_1.showChurch)
    .put(middleware_1.validateAdmin, churches_admin_controller_1.updateChurch)
    .delete(middleware_1.validateAdmin, churches_admin_controller_1.deleteChurch);
exports.default = router;
