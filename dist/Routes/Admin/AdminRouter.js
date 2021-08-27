"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../../middleware");
const router = express_1.Router();
const getResponse = (req, res) => {
    return res.json({
        msg: 'Admin paths'
    });
};
router.route('/')
    .delete(middleware_1.validateAdmin, getResponse)
    .get(middleware_1.validateAdmin, getResponse)
    .post(middleware_1.validateAdmin, getResponse)
    .put(middleware_1.validateAdmin, getResponse);
exports.default = router;
