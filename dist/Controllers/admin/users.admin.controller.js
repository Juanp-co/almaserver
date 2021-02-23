"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeRoleUser = exports.updateUser = exports.showUser = exports.saveUser = exports.getUsersCounters = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const UsersActions_1 = require("../../ActionsData/UsersActions");
const UsersRequest_1 = require("../../FormRequest/UsersRequest");
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const TokenActions_1 = require("../../Functions/TokenActions");
const Validations_1 = require("../../Functions/Validations");
const Users_1 = __importDefault(require("../../Models/Users"));
const path = 'Controllers/admin/users.admin.controller';
async function getUsers(req, res) {
    try {
        const { userid } = req.params;
        const { limit, skip, sort } = GlobalFunctions_1.getLimitSkipSortSearch(req.query);
        let query = { _id: { $ne: userid } };
        query = UsersActions_1.checkFindValueSearch(query, req.query.word);
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
        const { userrole } = req.body;
        let query = { _id: { $ne: userid } };
        query = UsersActions_1.checkFindValueSearch(query, req.query.word);
        if (Validations_1.checkRole(userrole))
            query = Object.assign(query, { role: userrole });
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
        if (userrole !== 0) {
            return res.status(403).json({
                msg: `Disculpe, pero no tiene permisos para realizar esta acción.`,
            });
        }
        const validate = await UsersRequest_1.validateSimpleRegister(req.body, true);
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
        const { _id } = req.params;
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
async function changeRoleUser(req, res) {
    try {
        const { _id } = req.params;
        const { role } = req.body;
        if (!Validations_1.checkObjectId(_id))
            return UsersActions_1.responseUsersAdmin(res, 0);
        if (!Validations_1.checkRole(role))
            return UsersActions_1.responseUsersAdmin(res, 2);
        const user = await Users_1.default.findOne({ _id }, { role: 1 }).exec();
        if (!user)
            return UsersActions_1.responseUsersAdmin(res, 1);
        user.role = role;
        await user.save();
        // disconnect user
        await TokenActions_1.disableTokenDBForUserId([_id]);
        return res.json({
            msg: `Se asignado el nuevo rol al usuario exitosamente.`
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/changeRoleUser`);
    }
}
exports.changeRoleUser = changeRoleUser;
/* PENDIENTE */
// export async function deleteUser(req: Request, res: Response): Promise<Response> {
//   try {
//     const { _id } = req.params;
//
//     if (!checkObjectId(_id)) return responseUsersAdmin(res, 0);
//
//     const user = await Users.findOne({_id}, { __v: 0 }).exec();
//
//     if (!user) return responseUsersAdmin(res, 1);
//
//     await user.delete();
//
//     return res.json({
//       msg: `Se ha eliminado el usuario exitosamente.`
//     });
//   } catch (error: any) {
//     return returnError(res, error, `${path}/deleteUser`);
//   }
// }
