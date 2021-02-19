"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGroup = exports.getCourses = exports.changePassword = exports.update = exports.get = void 0;
const lodash_1 = __importDefault(require("lodash"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const UsersActions_1 = require("../ActionsData/UsersActions");
const GlobalFunctions_1 = require("../Functions/GlobalFunctions");
const TokenActions_1 = require("../Functions/TokenActions");
const UsersRequest_1 = require("../FormRequest/UsersRequest");
const Validations_1 = require("../Functions/Validations");
const Courses_1 = __importDefault(require("../Models/Courses"));
const CoursesUsers_1 = __importDefault(require("../Models/CoursesUsers"));
const Groups_1 = __importDefault(require("../Models/Groups"));
const Users_1 = __importDefault(require("../Models/Users"));
const path = 'Controllers/user.controller';
async function get(req, res) {
    try {
        const { userid } = req.params;
        const user = await Users_1.default.findOne({ _id: userid }, { __v: 0, password: 0, referred: 0 }).exec();
        // logout
        if (!user)
            return TokenActions_1.forceLogout(res, `${req.query.token}`);
        return res.json({
            msg: 'Datos de la sesión',
            data: user
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/get`);
    }
}
exports.get = get;
async function update(req, res) {
    try {
        const { userid } = req.params;
        const user = await Users_1.default.findOne({ _id: userid }, { _id: 1 }).exec();
        // logout
        if (!user)
            return TokenActions_1.forceLogout(res, `${req.query.token}`);
        const validate = await UsersRequest_1.validateUpdate(req.body, userid);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const updated = await Users_1.default.findByIdAndUpdate(userid, validate.data, {
            projection: {
                document: 0,
                password: 0,
                __v: 0,
                created_at: 0,
                updated_at: 0,
                role: 0,
                referred: 0,
            },
            new: true
        });
        return res.json({
            msg: 'Se ha actualizado la información exitosamente.',
            data: updated
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/update`);
    }
}
exports.update = update;
async function changePassword(req, res) {
    try {
        const { userid } = req.params;
        const user = await Users_1.default.findOne({ _id: userid }, { password: 1 }).exec();
        // logout
        if (!user)
            return TokenActions_1.forceLogout(res, `${req.query.token}`);
        const validate = await UsersRequest_1.validatePasswords(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        if (!bcrypt_1.default.compareSync(validate.data.password, `${user.password}`)) {
            return res.status(422).json({
                msg: 'Disculpe, pero la contraseña actual es incorrecta.'
            });
        }
        user.password = bcrypt_1.default.hashSync(validate.data.newPassword, 10);
        await user.save();
        return res.json({
            msg: 'Se ha actualizado su contraseña exitosamente.'
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/changePassword`);
    }
}
exports.changePassword = changePassword;
/*
  COURSES, GROUP & REFERRALS
 */
async function getCourses(req, res) {
    try {
        const { userid } = req.params;
        let courses = [];
        if (!Validations_1.checkObjectId(userid)) {
            return res.status(401).json({
                msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
            });
        }
        const myCourses = await CoursesUsers_1.default.find({ userid }, { courseId: 1 }).exec();
        if (myCourses.length > 0) {
            courses = await Courses_1.default.find({ _id: { $in: lodash_1.default.map(myCourses, 'courseId') || [] } }, { _id: 1, title: 1, banner: 1, slug: 1, description: 1 }).exec();
        }
        return res.json({
            msg: `Mis cursos.`,
            courses
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getCourses`);
    }
}
exports.getCourses = getCourses;
async function getGroup(req, res) {
    try {
        const { userid } = req.params;
        if (!Validations_1.checkObjectId(userid)) {
            return res.status(401).json({
                msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
            });
        }
        const data = await Groups_1.default.findOne({ members: userid }).exec();
        return res.json({
            msg: 'Mi grupo familiar',
            group: !data ?
                null :
                {
                    _id: data._id,
                    name: data.name,
                    code: data.code,
                    members: await UsersActions_1.getNamesUsersList(lodash_1.default.uniq(data.members || [])),
                    created_at: data.created_at,
                    updated_at: data.updated_at,
                }
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getGroup`);
    }
}
exports.getGroup = getGroup;
