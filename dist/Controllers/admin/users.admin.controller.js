"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeRoleUser = exports.updateUser = exports.showUser = exports.saveUser = exports.getUsersCounters = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
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
        let query = {
            _id: { $ne: userid }
        };
        const { document, name } = req.query;
        if (document) {
            query = Object.assign(query, { document: { $regex: new RegExp(`${document}`, 'i') } });
        }
        if (Validations_1.checkNameOrLastName(name)) {
            const pattern = name ? name.toString().trim().replace(' ', '|') : null;
            if (pattern)
                query = Object.assign(query, { $or: [
                        { names: { $regex: new RegExp(`(${pattern})`, 'i') } },
                        { lastNames: { $regex: new RegExp(`(${pattern})`, 'i') } },
                    ]
                });
        }
        const users = await Users_1.default.find(query, {
            names: 1,
            lastNames: 1,
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
        let query = {
            _id: { $ne: userid }
        };
        const { document, name } = req.query;
        const { userrole } = req.body;
        if (Validations_1.checkRole(userrole))
            query = Object.assign(query, { role: userrole });
        if (document)
            query = Object.assign(query, { document: { $regex: new RegExp(`${document}`, 'i') } });
        if (Validations_1.checkNameOrLastName(name)) {
            const pattern = name ? name.toString().trim().replace(' ', '|') : null;
            if (pattern)
                query = Object.assign(query, { $or: [
                        { names: { $regex: new RegExp(`(${pattern})`, 'i') } },
                        { lastNames: { $regex: new RegExp(`(${pattern})`, 'i') } },
                    ]
                });
        }
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
        const validate = await UsersRequest_1.validateRegister(req.body, true);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const user = new Users_1.default(validate.data);
        user.password = bcrypt_1.default.hashSync(user.password, 10);
        user.securityQuestion.answer = bcrypt_1.default.hashSync(`${user.securityQuestion.answer}`, 10);
        await user.save();
        return res.status(201).json({
            msg: `Se ha registrado el nuevo usuario exitosamente.`,
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
        if (!Validations_1.checkObjectId(_id)) {
            return res.status(422).json({
                msg: 'Disculpe, pero el usuario seleccionado es incorrecto.'
            });
        }
        const user = await Users_1.default.findOne({ _id }, { __v: 0, password: 0, 'securityQuestion.answer': 0 })
            .exec();
        if (!user) {
            return res.status(404).json({
                msg: 'Disculpe, pero el usuario seleccionado no existe.'
            });
        }
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
        if (!Validations_1.checkObjectId(_id)) {
            return res.status(422).json({
                msg: 'Disculpe, pero el usuario seleccionado es incorrecto.'
            });
        }
        const validate = await UsersRequest_1.validateUpdate(req.body, _id);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const user = await Users_1.default.findOne({ _id }, { __v: 0, password: 0, 'securityQuestion.answer': 0 }).exec();
        if (!user) {
            return res.status(404).json({
                msg: 'El usuario a actualizar no exite.'
            });
        }
        user.phone = validate.data.phone;
        user.names = validate.data.names;
        user.lastNames = validate.data.lastNames;
        user.direction = validate.data.direction;
        user.document = validate.data.document;
        user.educationLevel = validate.data.educationLevel;
        user.profession = validate.data.profession;
        user.bloodType = validate.data.bloodType;
        user.company = validate.data.company;
        user.companyType = validate.data.companyType;
        user.baptized = validate.data.baptized;
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
        if (!Validations_1.checkObjectId(_id)) {
            return res.status(422).json({
                msg: 'Disculpe, pero el usuario seleccionado es incorrecto.'
            });
        }
        if (!Validations_1.checkRole(role)) {
            return res.status(422).json({
                msg: 'Disculpe, pero el rol seleccionado es incorrecto.'
            });
        }
        const user = await Users_1.default.findOne({ _id }, { role: 1 }).exec();
        if (!user) {
            return res.status(404).json({
                msg: 'Disculpe, pero el usuario a actualizar no existe.'
            });
        }
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
//     if (!checkObjectId(_id)) {
//       return res.status(422).json({
//         msg: 'Disculpe, pero el usuario seleccionado es incorrecto.'
//       });
//     }
//
//     const user = await Users.findOne({_id}, { __v: 0 }).exec();
//
//     if (!user) {
//       return res.status(404).json({
//         msg: 'Disculpe, pero el usuario no existe.'
//       });
//     }
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
