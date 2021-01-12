"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware");
const user_controller_1 = require("../Controllers/user.controller");
const router = express_1.Router();
// ===================================================================================
/* Profile */
router.route('/').get(middleware_1.validateUser, user_controller_1.get).put(middleware_1.validateUser, user_controller_1.update);
router.put('/change-password', middleware_1.validateUser, user_controller_1.changePassword);
router.put('/change-question', middleware_1.validateUser, user_controller_1.changeSecurityQuestion);
exports.default = router;
