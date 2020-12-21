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
const questions_admin_controller_1 = require("../Controllers/admin/questions.admin.controller");
const users_admin_controller_1 = require("../Controllers/admin/users.admin.controller");
const middleware_1 = require("../middleware");
const events_controller_1 = __importStar(require("../Controllers/events/events.controller"));
const router = express_1.Router();
// ===================================================================================
/*
  Events
*/
router.route('/events')
    .get(middleware_1.validateAdmin, events_controller_1.default)
    .post(middleware_1.validateAdmin, events_controller_1.saveEvent);
router.route('/events/:_id')
    .delete(middleware_1.validateAdmin, events_controller_1.deleteEvent)
    .get(middleware_1.validateAdmin, events_controller_1.showEvent)
    .put(middleware_1.validateAdmin, events_controller_1.updateEvent);
/* Questions */
router.route('/questions')
    .get(middleware_1.validateAdmin, questions_admin_controller_1.getQuestions)
    .post(middleware_1.validateAdmin, questions_admin_controller_1.saveQuestions);
router.route('/questions/:_id')
    .get(middleware_1.validateAdmin, questions_admin_controller_1.getDetailsQuestion)
    .put(middleware_1.validateAdmin, questions_admin_controller_1.updateQuestions)
    .delete(middleware_1.validateAdmin, questions_admin_controller_1.deleteQuestions);
/*
  Users
*/
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
