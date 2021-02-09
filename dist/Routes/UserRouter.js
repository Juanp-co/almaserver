"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware");
const user_controller_1 = require("../Controllers/user.controller");
const referrals_controller_1 = __importDefault(require("../Controllers/publics/referrals.controller"));
const router = express_1.Router();
// ===================================================================================
/* Profile */
router.route('/').get(middleware_1.validateUser, user_controller_1.get).put(middleware_1.validateUser, user_controller_1.update);
router.put('/change-password', middleware_1.validateUser, user_controller_1.changePassword);
router.put('/change-question', middleware_1.validateUser, user_controller_1.changeSecurityQuestion);
router.get('/referrals', middleware_1.validateUser, referrals_controller_1.default);
exports.default = router;
