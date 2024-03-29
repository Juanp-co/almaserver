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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfExistsRoleInList = exports.createSlug = exports.deleteImages = exports.checkAndUploadPicture = exports.getLimitSkipSortSearch = exports.calculateAge = exports.generatePassword = exports.cleanWhiteSpaces = exports.getSimpleDate = exports.getDate = exports.setDate = exports.toUpperValue = exports.upperCaseFirstLettersWords = exports.loadEnvironmentVars = exports.returnErrorParams = exports.returnError = exports.setError = exports.showConsoleLog = exports.showConsoleError = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const slug_1 = __importDefault(require("slug"));
const fs = __importStar(require("fs"));
const fs_1 = require("fs");
/*
  Console logs
 */
function showConsoleError(pathFile, error) {
    console.error(`${(0, moment_timezone_1.default)().toISOString()} - Error: ${pathFile}`);
    console.error(error);
}
exports.showConsoleError = showConsoleError;
function showConsoleLog(type, msg) {
    if (type === 0)
        console.error(`${(0, moment_timezone_1.default)().toISOString()} - ${msg}`);
    else
        console.log(`${(0, moment_timezone_1.default)().toISOString()} - ${msg}`);
}
exports.showConsoleLog = showConsoleLog;
/*
  Errors
 */
function setError(msg, input) {
    return { input, msg };
}
exports.setError = setError;
function returnError(res, error, pathFile) {
    showConsoleError(pathFile, error);
    return res.status(500).json({
        msg: 'Ha ocurrido un error inesperado.',
        errors: [{ msg: `${error === null || error === void 0 ? void 0 : error.toString()}` }]
    });
}
exports.returnError = returnError;
function returnErrorParams(res, errors) {
    return res.status(422).json({
        msg: '¡Error en los parámetros!',
        errors
    });
}
exports.returnErrorParams = returnErrorParams;
/*
  Load enviroments
 */
function checkIfExistFile(value) {
    try {
        return fs.existsSync(value);
    }
    catch (err) {
        showConsoleError('src/server.js', err);
        return false;
    }
}
function loadEnvironmentVars() {
    const pathEnvFile = process.env.NODE_ENV
        ? `.${process.env.NODE_ENV || 'development'}`
        : '';
    const pathEnv = path_1.default.resolve(__dirname, `../../.env${pathEnvFile}`);
    if (checkIfExistFile(pathEnv)) {
        dotenv_1.default.config({ path: pathEnv });
    }
    else if (checkIfExistFile(path_1.default.resolve(__dirname, `../../.env`))) {
        dotenv_1.default.config({ path: path_1.default.resolve(__dirname, `../../.env`) });
    }
    else {
        showConsoleError('src/server.js', 'No existe archivo de variable de entorno en el sistema. Asegúrese de contar con uno. ' +
            'Para más información, leer el archivo README.md del proyecto.');
        process.exit(0);
    }
}
exports.loadEnvironmentVars = loadEnvironmentVars;
loadEnvironmentVars();
// =================================================================================================
function upperCaseFirstLettersWords(words) {
    let ret = '';
    const arrayWords = words ? words.trim().split(' ') : [];
    for (let i = 0; i < arrayWords.length; i += 1) {
        arrayWords[i] = arrayWords[i].charAt(0).toUpperCase() + arrayWords[i].slice(1);
        ret += ` ${arrayWords[i]}`;
    }
    return ret.length > 0 ? ret.trim() : null;
}
exports.upperCaseFirstLettersWords = upperCaseFirstLettersWords;
function toUpperValue(value) {
    return value ? value.toUpperCase() : null;
}
exports.toUpperValue = toUpperValue;
function setDate() {
    return (0, moment_timezone_1.default)().tz('America/Bogota').unix();
}
exports.setDate = setDate;
function getDate(timestamp) {
    return timestamp ? moment_timezone_1.default.unix(timestamp).tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss') || null : timestamp;
}
exports.getDate = getDate;
function getSimpleDate(timestamp) {
    return timestamp ? moment_timezone_1.default.unix(timestamp).format('YYYY-MM-DD') || null : timestamp;
}
exports.getSimpleDate = getSimpleDate;
function cleanWhiteSpaces(value) {
    if (value)
        return value.toString().trim();
    return null;
}
exports.cleanWhiteSpaces = cleanWhiteSpaces;
function generatePassword() {
    let password = '';
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ123467890';
    for (let i = 0; i < 10; i += 1)
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    return password;
}
exports.generatePassword = generatePassword;
function calculateAge(birthday) {
    const minAge = 16;
    if (birthday) {
        const a = (0, moment_timezone_1.default)().tz('America/Bogota');
        const b = (0, moment_timezone_1.default)(birthday).format('YYYY-MM-DD');
        return a.diff(b, 'year') >= minAge;
    }
    return false;
}
exports.calculateAge = calculateAge;
function getLimitSkipSortSearch(data) {
    if (!data)
        return {};
    const { limit, page, value, input } = data;
    let retLimit = 10;
    let retSkip = 0;
    const retSort = {};
    // limit
    if (limit) {
        if (/[0-9]/.test(limit)) {
            const x = Number.parseInt(limit.toString(), 10);
            if (x > 0)
                retLimit = x;
        }
    }
    // skip
    if (page) {
        if (/[0-9]/.test(page)) {
            const y = Number.parseInt(page.toString(), 10);
            if (y >= 1)
                retSkip = (y - 1) * retLimit;
        }
    }
    // sort
    const v = value && /[1 -]/.test(value) && value.toString() === '1' ? 1 : -1;
    const listCases = [
        'created_at',
        'code',
        'date',
        'document',
        'lastNames',
        'name',
        'names',
        'role',
        'status',
        'title',
        'updated_at',
        'level',
        'sector',
        'subSector',
        'number',
    ];
    const index = listCases.indexOf(input);
    if (index > -1)
        retSort[listCases[index]] = v;
    else
        retSort.created_at = v;
    return { limit: retLimit, skip: retSkip, sort: retSort };
}
exports.getLimitSkipSortSearch = getLimitSkipSortSearch;
async function checkAndUploadPicture(picture, pathFolder = '') {
    if (!picture)
        return null;
    // check if exist 'images' folder
    if (!fs.existsSync(`./images`))
        fs.mkdirSync(`./images`);
    const pathRoute = `${pathFolder !== '' ? `images/${pathFolder}` : 'images'}`;
    // check if exist folder
    if (!fs.existsSync(`./${pathRoute}`))
        fs.mkdirSync(`./${pathRoute}`);
    // get extension file
    const extFile = picture.substring("data:image/".length, picture.indexOf(";base64"));
    // to convert base64 format into random filename
    const base64Data = picture.replace(/^data:([A-Za-z-+/]+);base64,/, '');
    // set path
    const pathFile = `${pathRoute}/${(0, moment_timezone_1.default)().unix()}.${extFile}`;
    // write
    await fs.writeFileSync(`./${pathFile}`, base64Data, { encoding: 'base64' });
    return pathFile;
}
exports.checkAndUploadPicture = checkAndUploadPicture;
function deleteImages(pathFile) {
    try {
        if (pathFile)
            (0, fs_1.unlinkSync)(pathFile);
    }
    catch (e) {
        showConsoleError('src/Functions/GlobalFunctions/deleteImage', e);
    }
}
exports.deleteImages = deleteImages;
function createSlug(value) {
    return value ? (0, slug_1.default)(value) : null;
}
exports.createSlug = createSlug;
function checkIfExistsRoleInList(roles, toCompare) {
    return (roles === null || roles === void 0 ? void 0 : roles.some(r => toCompare === null || toCompare === void 0 ? void 0 : toCompare.includes(r))) || false;
}
exports.checkIfExistsRoleInList = checkIfExistsRoleInList;
