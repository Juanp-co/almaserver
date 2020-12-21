"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const public_controller_1 = require("../Controllers/public.controller");
const middleware_1 = require("../middleware");
const events_controller_1 = require("../Controllers/events/events.controller");
const router = express_1.Router();
// ===================================================================================
/* Test api */
router.get(`/`, public_controller_1.helloWorld);
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
