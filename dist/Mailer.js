"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const path_1 = __importDefault(require("path"));
const pathEnv = path_1.default.resolve(__dirname, `../.env.${process.env.NODE_ENV || 'development'}`);
dotenv_1.default.config({ path: pathEnv });
const HOST_MAIL = process.env.HOST_MAIL || '';
const PORT_MAIL = process.env.PORT_MAIL || '';
const USER_AUTH_MAIL = process.env.USER_AUTH_MAIL || '';
const PASS_AUTH_MAIL = process.env.PASS_AUTH_MAIL || '';
function default_1() {
    if (HOST_MAIL !== '' && PORT_MAIL !== '' && USER_AUTH_MAIL !== '' && PASS_AUTH_MAIL !== '') {
        return nodemailer_1.default.createTransport({
            host: HOST_MAIL,
            port: PORT_MAIL,
            auth: {
                user: USER_AUTH_MAIL,
                pass: PASS_AUTH_MAIL
            }
        });
    }
    return null;
}
exports.default = default_1;
