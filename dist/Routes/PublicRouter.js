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
const middleware_1 = require("../middleware");
const courses_controller_1 = __importStar(require("../Controllers/publics/courses.controller"));
const events_controller_1 = require("../Controllers/events/events.controller");
const public_controller_1 = require("../Controllers/publics/public.controller");
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
router.get(`/courses/:slug/theme/:_id`, middleware_1.validateUser, courses_controller_1.showCourseContentTheme); // get theme
// get test
router.route('/courses/:slug/theme/:_id/test')
    .get(middleware_1.validateUser, courses_controller_1.getTest)
    .post(middleware_1.validateUser, courses_controller_1.evaluateTest);
// update historical content (action = watching | viewed)
router.put(`/courses/:slug/theme/:_id/content/:contentId/:action`, middleware_1.validateUser, courses_controller_1.updateHistoricalCourseContent);
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
  Recovery Password
 */
router.post(`/recovery-password/:action`, public_controller_1.recoveryPassword);
router.put(`/recovery-password/:action`, public_controller_1.recoveryPassword);
/*
  Register
 */
router.post(`/register`, public_controller_1.register);
exports.default = router;
