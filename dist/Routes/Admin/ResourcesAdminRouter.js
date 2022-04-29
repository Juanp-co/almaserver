"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resources_admin_controller_1 = require("../../Controllers/admin/resources.admin.controller");
const middleware_1 = require("../../middleware");
const router = (0, express_1.Router)();
router.route('/')
    .get(middleware_1.validateAdmin, resources_admin_controller_1.getResourcesAdmin)
    .post(middleware_1.validateAdmin, resources_admin_controller_1.saveResourceAdmin);
router.delete('/:_id', middleware_1.validateAdmin, resources_admin_controller_1.deleteResourceAdmin);
exports.default = router;
