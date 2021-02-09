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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware");
const courses_admin_controller_1 = __importStar(require("../Controllers/admin/courses.admin.controller"));
const events_controller_1 = __importStar(require("../Controllers/events/events.controller"));
const groups_admin_controller_1 = __importStar(require("../Controllers/admin/groups.admin.controller"));
const questions_admin_controller_1 = __importStar(require("../Controllers/admin/questions.admin.controller"));
const referrals_admin_controller_1 = __importDefault(require("../Controllers/admin/referrals.admin.controller"));
const users_admin_controller_1 = __importStar(require("../Controllers/admin/users.admin.controller"));
const router = express_1.Router();
// ===================================================================================
/*
  Events
*/
router.route('/courses')
    .get(middleware_1.validateAdmin, courses_admin_controller_1.default)
    .post(middleware_1.validateAdmin, courses_admin_controller_1.saveCourse);
router.get('/courses/counters', middleware_1.validateAdmin, courses_admin_controller_1.getCoursesCounters);
router.route('/courses/:_id')
    .delete(middleware_1.validateAdmin, courses_admin_controller_1.deleteCourse)
    .get(middleware_1.validateAdmin, courses_admin_controller_1.showCourse)
    .put(middleware_1.validateAdmin, courses_admin_controller_1.updateCourse);
router.get('/courses/:_id/comments', middleware_1.validateAdmin, courses_admin_controller_1.commentsCourseOrTheme);
router.put('/courses/:_id/enable', middleware_1.validateAdmin, courses_admin_controller_1.enableCourse);
router.get('/courses/:_id/likes', middleware_1.validateAdmin, courses_admin_controller_1.likesAndUnlikesCourseOrTheme);
router.get('/courses/:_id/theme/:themeId/comments', middleware_1.validateAdmin, courses_admin_controller_1.commentsCourseOrTheme);
router.get('/courses/:_id/theme/:themeId/likes', middleware_1.validateAdmin, courses_admin_controller_1.likesAndUnlikesCourseOrTheme);
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
    .get(middleware_1.validateAdmin, questions_admin_controller_1.default)
    .post(middleware_1.validateAdmin, questions_admin_controller_1.saveQuestions);
router.route('/questions/:_id')
    .get(middleware_1.validateAdmin, questions_admin_controller_1.getDetailsQuestion)
    .put(middleware_1.validateAdmin, questions_admin_controller_1.updateQuestions)
    .delete(middleware_1.validateAdmin, questions_admin_controller_1.deleteQuestions);
/*
  Groups
*/
router.route('/groups')
    .get(middleware_1.validateAdmin, groups_admin_controller_1.default)
    .post(middleware_1.validateAdmin, groups_admin_controller_1.saveGroup);
router.get('/groups/counters', middleware_1.validateAdmin, groups_admin_controller_1.getGroupsCounters);
router.route('/groups/:_id')
    .get(middleware_1.validateAdmin, groups_admin_controller_1.showGroup)
    .put(middleware_1.validateAdmin, groups_admin_controller_1.updateGroup)
    .delete(middleware_1.validateAdmin, groups_admin_controller_1.deleteGroup);
router.put('/groups/:_id/members/:action', middleware_1.validateAdmin, groups_admin_controller_1.addOrRemoveMembersGroup);
/*
  Users
*/
router.route('/users')
    .get(middleware_1.validateAdmin, users_admin_controller_1.default)
    .post(middleware_1.validateAdmin, users_admin_controller_1.saveUser);
router.get('/users/counters', middleware_1.validateAdmin, users_admin_controller_1.getUsersCounters);
router.route('/users/:_id')
    .get(middleware_1.validateAdmin, users_admin_controller_1.showUser)
    .put(middleware_1.validateAdmin, users_admin_controller_1.updateUser);
// .delete(validateAdmin, deleteUser);
router.get('/users/:_id/referrals', middleware_1.validateAdmin, referrals_admin_controller_1.default);
router.put('/users/:_id/role', middleware_1.validateAdmin, users_admin_controller_1.changeRoleUser);
exports.default = router;
