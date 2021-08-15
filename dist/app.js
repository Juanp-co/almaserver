"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const GlobalFunctions_1 = require("./Functions/GlobalFunctions");
GlobalFunctions_1.loadEnvironmentVars();
const app = express_1.default();
app.use(cors_1.default());
app.set('port', process.env.API_PORT || 9000);
app.set('secretKey', 'n&m#y20oBG09GX*awZuwC&C5Yde^lw4IWQHPz#S0GzgVZ@CSHx');
app.use(morgan_1.default(process.env.LOGS_FORMAT || 'dev'));
// middleware
app.use(express_1.default.json({ limit: '25mb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '25mb' }));
app.use(express_1.default.static('public'));
app.use('/images', express_1.default.static('images'));
exports.default = app;
