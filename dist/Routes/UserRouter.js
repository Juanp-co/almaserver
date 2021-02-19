"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware");
const user_controller_1 = require("../Controllers/user.controller");
const referrals_controller_1 = require("../Controllers/publics/referrals.controller");
const router = express_1.Router();
// ===================================================================================
/* Profile */
router.route('/').get(middleware_1.validateUser, user_controller_1.get).put(middleware_1.validateUser, user_controller_1.update);
router.put('/change-password', middleware_1.validateUser, user_controller_1.changePassword);
router.get('/courses', middleware_1.validateUser, user_controller_1.getCourses);
/*
  Group
 */
router.get('/group', middleware_1.validateUser, user_controller_1.getGroup);
/*
  Referrals
 */
router.get('/referrals', middleware_1.validateUser, referrals_controller_1.getReferrals);
router.get('/referrals/:_id', middleware_1.validateUser, referrals_controller_1.getMemberReferred);
exports.default = router;
