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
exports.deleteUser = exports.updateUser = exports.showUser = exports.saveUser = exports.getUsersCounters = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const UsersActions_1 = require("../../ActionsData/UsersActions");
const UsersRequest_1 = __importStar(require("../../FormRequest/UsersRequest"));
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const TokenActions_1 = require("../../Functions/TokenActions");
const Validations_1 = require("../../Functions/Validations");
const CoursesUsers_1 = __importDefault(require("../../Models/CoursesUsers"));
const Groups_1 = __importDefault(require("../../Models/Groups"));
const Referrals_1 = __importDefault(require("../../Models/Referrals"));
const Users_1 = __importDefault(require("../../Models/Users"));
const path = 'Controllers/admin/users.admin.controller';
function checkRoleToActions(role) {
    if (!/[01]{1}/.test(`${role}`))
        return false;
    return ['0', '1'].indexOf(`${role}`) > -1;
}
// =====================================================================================================================
async function getUsers(req, res) {
    try {
        const { userid } = req.params;
        const { limit, skip, sort } = GlobalFunctions_1.getLimitSkipSortSearch(req.query);
        const query = UsersActions_1.checkFindValueSearch({ _id: { $ne: userid } }, req.query.word);
        const users = await Users_1.default.find(query, {
            names: 1,
            lastNames: 1,
            gender: 1,
            phone: 1,
            document: 1,
            role: 1,
            created_at: 1,
        })
            .skip(skip)
            .limit(limit)
            .sort(sort)
            .exec();
        return res.json({
            msg: `Usuarios.`,
            users
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getUsers`);
    }
}
exports.default = getUsers;
async function getUsersCounters(req, res) {
    try {
        const { userid } = req.params;
        const query = UsersActions_1.checkFindValueSearch({ _id: { $ne: userid } }, req.query.word);
        const totals = await Users_1.default.find(query).countDocuments().exec();
        return res.json({
            msg: `Total usuarios.`,
            totals
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getUsersCounters`);
    }
}
exports.getUsersCounters = getUsersCounters;
async function saveUser(req, res) {
    try {
        const { userrole } = req.body;
        if (!checkRoleToActions(userrole))
            return UsersActions_1.responseUsersAdmin(res, 3);
        const validate = await UsersRequest_1.default(req.body, true);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const user = new Users_1.default(validate.data);
        const password = GlobalFunctions_1.generatePassword();
        user.password = bcrypt_1.default.hashSync(password, 10);
        await user.save();
        return res.status(201).json({
            msg: `Se ha registrado el nuevo usuario exitosamente.`,
            password
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/saveUser`);
    }
}
exports.saveUser = saveUser;
async function showUser(req, res) {
    try {
        const { _id } = req.params;
        if (!Validations_1.checkObjectId(_id))
            return UsersActions_1.responseUsersAdmin(res, 0);
        const user = await UsersActions_1.getUserData(_id);
        if (!user)
            return UsersActions_1.responseUsersAdmin(res, 1);
        return res.json({
            msg: `Detalles del usuario.`,
            user
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/showUser`);
    }
}
exports.showUser = showUser;
async function updateUser(req, res) {
    try {
        const { userrole } = req.body;
        const { _id } = req.params;
        if (!checkRoleToActions(userrole))
            return UsersActions_1.responseUsersAdmin(res, 3);
        if (!Validations_1.checkObjectId(_id))
            return UsersActions_1.responseUsersAdmin(res, 0);
        const validate = await UsersRequest_1.validateUpdate(req.body, _id, true);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const user = await Users_1.default.findOne({ _id }, { __v: 0, password: 0, referred: 0 }).exec();
        if (!user)
            return UsersActions_1.responseUsersAdmin(res, 1);
        user.email = validate.data.email;
        user.phone = validate.data.phone;
        user.names = validate.data.names;
        user.lastNames = validate.data.lastNames;
        user.document = validate.data.document;
        user.gender = validate.data.gender;
        user.birthday = validate.data.birthday;
        user.civilStatus = validate.data.civilStatus;
        user.educationLevel = validate.data.educationLevel;
        user.profession = validate.data.profession;
        user.bloodType = validate.data.bloodType;
        user.company = validate.data.company;
        user.companyType = validate.data.companyType;
        user.baptized = validate.data.baptized;
        user.department = validate.data.department;
        user.city = validate.data.city;
        user.locality = validate.data.locality;
        user.direction = validate.data.direction;
        await user.save();
        return res.json({
            msg: `Se han actualizado los datos del usuario exitosamente.`,
            user
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/updateUser`);
    }
}
exports.updateUser = updateUser;
// export async function changeRoleUser(req: Request, res: Response): Promise<Response> {
//   try {
//     const { _id } = req.params;
//     const { role } = req.body;
//
//     if (!checkObjectId(_id)) return responseUsersAdmin(res, 0);
//
//     if (!checkRole(role)) return responseUsersAdmin(res, 2);
//
//     const user = await Users.findOne({_id}, { role: 1 }).exec();
//
//     if (!user) return responseUsersAdmin(res, 1);
//
//     user.role = role;
//     await user.save();
//
//     // disconnect user
//     await disableTokenDBForUserId([_id]);
//
//     return res.json({
//       msg: `Se asignado el nuevo rol al usuario exitosamente.`
//     });
//   } catch (error: any) {
//     return returnError(res, error, `${path}/changeRoleUser`);
//   }
// }
async function deleteUser(req, res) {
    try {
        const { userrole } = req.body;
        const { _id } = req.params;
        if (!checkRoleToActions(userrole))
            return UsersActions_1.responseUsersAdmin(res, 3);
        if (!Validations_1.checkObjectId(_id))
            return UsersActions_1.responseUsersAdmin(res, 0);
        const user = await Users_1.default.findOne({ _id }, { __v: 0 }).exec();
        if (!user)
            return UsersActions_1.responseUsersAdmin(res, 1);
        // delete all data
        const groups = await Groups_1.default.find({ members: _id }).exec();
        const referrals = await Referrals_1.default.find({ members: _id }).exec();
        if (groups.length > 0) {
            const totalsGroups = groups.length;
            for (let i = 0; i < totalsGroups; i++) {
                groups[i].members = groups[i].members.filter(m => m !== _id);
                await groups[i].save();
            }
        }
        if (referrals.length > 0) {
            const totalsGroups = referrals.length;
            for (let i = 0; i < totalsGroups; i++) {
                referrals[i].members = referrals[i].members.filter(m => m !== _id);
                await referrals[i].save();
            }
        }
        await CoursesUsers_1.default.deleteMany({ userid: _id }).exec();
        await Referrals_1.default.deleteMany({ _id }).exec();
        await TokenActions_1.disableTokenDBForUserId([_id]);
        await user.delete();
        return res.json({
            msg: `Se ha eliminado el usuario exitosamente.`
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/deleteUser`);
    }
}
exports.deleteUser = deleteUser;
