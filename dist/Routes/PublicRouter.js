"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const public_controller_1 = require("../Controllers/public.controller");
const middleware_1 = require("../middleware");
const router = express_1.Router();
// ===================================================================================
/* Test api */
router.get(`/`, public_controller_1.helloWorld);
router.post(`/login`, public_controller_1.login);
router.delete(`/logout`, middleware_1.validateUser, public_controller_1.logout);
router.get('/questions', public_controller_1.getQuestions);
router.post(`/register`, public_controller_1.register);
exports.default = router;
