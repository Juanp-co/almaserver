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
const family_group_controller_1 = require("../Controllers/publics/family-group.controller");
const devotionals_controller_1 = require("../Controllers/publics/devotionals.controller");
const router = (0, express_1.Router)();
// ===================================================================================
/* Test api */
router.get(`/`, public_controller_1.helloWorld);
/* banks */
router.get(`/banks`, middleware_1.validateUser, public_controller_1.getBanks);
/*
  Courses
*/
// list and counters
router.get(`/courses`, middleware_1.validateUser, courses_controller_1.default);
router.get(`/courses/:slug`, middleware_1.validateUser, courses_controller_1.showCourse);
router.post(`/courses/:slug/theme/:_id/quiz`, middleware_1.validateUser, courses_controller_1.evaluateQuiz);
router.put(`/courses/:slug/theme/:_id/:action`, middleware_1.validateUser, courses_controller_1.updateHistoricalCourseContent);
/*
  Families Groups
*/
router.get(`/devotionals`, devotionals_controller_1.getDevotionalsPublic);
router.get(`/devotionals/counters`, devotionals_controller_1.getTotalsDevotionalsPublic);
router.get(`/devotionals/:_id`, devotionals_controller_1.showDevotionalPublic);
/*
  Families Groups
*/
router.get(`/families-groups`, middleware_1.validateUser, family_group_controller_1.getFamiliesGroupsPublic);
/*
  Events
*/
router.route(`/events`)
    .get(events_controller_1.getPublicEvents)
    .post(middleware_1.validateUser, events_controller_1.saveEvent);
router.route(`/events/:_id`)
    .get(events_controller_1.showPublicEvent)
    .put(middleware_1.validateUser, events_controller_1.updateEvent)
    .delete(middleware_1.validateUser, events_controller_1.deleteEvent);
/*
  Login, logout
*/
router.post(`/login`, public_controller_1.login);
router.delete(`/logout`, middleware_1.validateUser, public_controller_1.logout);
/*
  Families Groups
*/
router.get(`/members`, middleware_1.validateUser, public_controller_1.getPublicMembers);
router.get(`/organization`, public_controller_1.getOrganization);
router.get(`/params-app`, public_controller_1.getPublicParams);
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
