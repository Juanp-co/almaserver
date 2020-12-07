"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import Auth from '../Middleware/Authentication';
// import CompaniesController from '../Controllers/Companies/CompaniesController';
// import PublicController from '../Controllers/Public/PublicController';
// dotenv.config();
const router = express_1.default.Router();
// ===================================================================================
/*
  Test api
 */
router.get(`/`, (req, res) => {
    res.status(200).json({
        msg: `Welcome to ALMA API REST`
    });
});
exports.default = router;
