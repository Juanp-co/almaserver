"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const questions_admin_controller_1 = require("../Controllers/admin/questions.admin.controller");
const users_admin_controller_1 = require("../Controllers/admin/users.admin.controller");
const middleware_1 = require("../middleware");
const router = express_1.Router();
// ===================================================================================
/* Questions */
router.route('/questions')
    .get(middleware_1.validateAdmin, questions_admin_controller_1.getQuestions)
    .post(middleware_1.validateAdmin, questions_admin_controller_1.saveQuestions);
router.route('/questions/:_id')
    .get(middleware_1.validateAdmin, questions_admin_controller_1.getDetailsQuestion)
    .put(middleware_1.validateAdmin, questions_admin_controller_1.updateQuestions)
    .delete(middleware_1.validateAdmin, questions_admin_controller_1.deleteQuestions);
/* Users */
router.route('/users')
    .get(middleware_1.validateAdmin, users_admin_controller_1.getUsers)
    .post(middleware_1.validateAdmin, users_admin_controller_1.saveUser);
router.route('/users/counters')
    .get(middleware_1.validateAdmin, users_admin_controller_1.getUsersCounters);
router.route('/users/:_id')
    .get(middleware_1.validateAdmin, users_admin_controller_1.showUser)
    .put(middleware_1.validateAdmin, users_admin_controller_1.updateUser);
// .delete(validateAdmin, deleteUser);
router.route('/users/:_id/role')
    .put(middleware_1.validateAdmin, users_admin_controller_1.changeRoleUser);
exports.default = router;
