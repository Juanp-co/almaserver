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
const public_controller_1 = require("../Controllers/publics/public.controller");
const middleware_1 = require("../middleware");
const events_controller_1 = require("../Controllers/events/events.controller");
const courses_controller_1 = __importStar(require("../Controllers/publics/courses.controller"));
const router = express_1.Router();
// ===================================================================================
/* Test api */
router.get(`/`, public_controller_1.helloWorld);
/*
  Courses
*/
// list and counters
router.get(`/courses`, middleware_1.validateUser, courses_controller_1.default);
router.get(`/courses/counters`, middleware_1.validateUser, courses_controller_1.getCoursesCounters);
router.get(`/courses/:slug`, middleware_1.validateUser, courses_controller_1.showCourse);
router.post('/courses/:slug/add', middleware_1.validateUser, courses_controller_1.addCourseUser); // add course to user
// comment and likes course
router.post('/courses/:slug/like', middleware_1.validateUser, courses_controller_1.likeOrUnlikeCourse);
router.post('/courses/:slug/comment', middleware_1.validateUser, courses_controller_1.commentCourse);
router.post('/courses/:slug/comment/:_id/like', middleware_1.validateUser, courses_controller_1.likeOrUnlikeCourseComment);
// get test
router.route('/courses/:slug/test')
    .get(middleware_1.validateUser, courses_controller_1.getTestCourse)
    .post(middleware_1.validateUser, courses_controller_1.evaluateTestCourse);
router.get(`/courses/:slug/theme/:_id`, middleware_1.validateUser, courses_controller_1.showCourseTheme); // get theme
// comment and like comments
router.post(`/courses/:slug/theme/:_id/comment`, middleware_1.validateUser, courses_controller_1.commentCourseTheme);
router.post(`/courses/:slug/theme/:_id/comment/:commentId/like`, middleware_1.validateUser, courses_controller_1.likeOrUnlikeCourseThemeComment);
router.post(`/courses/:slug/theme/:_id/like`, middleware_1.validateUser, courses_controller_1.likeOrUnlikeTheme);
/*
  Events
*/
router.get(`/events`, middleware_1.validateUser, events_controller_1.getPublicEvents);
router.get(`/events/:_id`, middleware_1.validateUser, events_controller_1.showPublicEvent);
/*
  Login, logout
*/
router.post(`/login`, public_controller_1.login);
router.delete(`/logout`, middleware_1.validateUser, public_controller_1.logout);
/*
  Questions
 */
router.get('/questions', public_controller_1.getQuestions);
/*
  Register
 */
router.post(`/register`, public_controller_1.register);
exports.default = router;
