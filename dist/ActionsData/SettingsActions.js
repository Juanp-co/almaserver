"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.return404Or422Settings = exports.uploadLogoOrBanner = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const AWSService_1 = __importDefault(require("../Services/AWSService"));
async function uploadLogoOrBanner(base64 = null, logo = false) {
    let ret = null;
    const s3 = process.env.AWS_S3_BUCKET || null;
    if (!s3)
        return ret;
    const newUrl = `alma/settings/${logo ? 'logos' : 'banners'}/picture-${(0, moment_timezone_1.default)().tz('America/Bogota').unix()}`;
    await (0, AWSService_1.default)(newUrl, base64);
    ret = `${s3}/${newUrl}.jpg`;
    return ret;
}
exports.uploadLogoOrBanner = uploadLogoOrBanner;
function return404Or422Settings(res, index = -1) {
    const msgs = [
        'ha ocurrido un error al obtener la configuración.',
        'ha ocurrido un error inesperado al momento de subir la imagen.',
        'el logo seleccionado es incorrecto.',
        'no se logró determinar la acción a realizar.',
        'el logo seleccionado no existe o no se encuentra disponible.',
        'la portada seleccionada es incorrecta.',
        'la portada seleccionada no existe o no se encuentra disponible.',
    ];
    const status = [0, 4, 6].includes(index) ? 404 : 422;
    return res.status(status).json({
        msg: `Disculpe, pero ${msgs[index] || 'no de logró deteminar el error.'}`
    });
}
exports.return404Or422Settings = return404Or422Settings;
