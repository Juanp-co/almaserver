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
exports.getPublicResources = exports.getOrganization = exports.getPublicParams = exports.getPublicMembers = exports.getPublicMembersTotals = exports.getGroupDetails = exports.getChurches = exports.getBirthdays = exports.getBanks = exports.recoveryPassword = exports.logout = exports.login = exports.register = exports.helloWorld = void 0;
const lodash_1 = __importDefault(require("lodash"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const CoursesActions_1 = require("../../ActionsData/CoursesActions");
const UsersActions_1 = require("../../ActionsData/UsersActions");
const UsersRequest_1 = __importStar(require("../../FormRequest/UsersRequest"));
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const TokenActions_1 = require("../../Functions/TokenActions");
const Validations_1 = require("../../Functions/Validations");
const AccountsBanks_1 = __importDefault(require("../../Models/AccountsBanks"));
const Referrals_1 = __importDefault(require("../../Models/Referrals"));
const Settings_1 = __importDefault(require("../../Models/Settings"));
const Users_1 = __importDefault(require("../../Models/Users"));
const Groups_1 = __importDefault(require("../../Models/Groups"));
const Churches_1 = __importDefault(require("../../Models/Churches"));
const ResourcesActions_1 = require("../../ActionsData/ResourcesActions");
const Resources_1 = __importDefault(require("../../Models/Resources"));
const path = 'Controllers/publics/public.controller';
function helloWorld(req, res) {
    return res.json({ msg: `Welcome to ALMA API REST.` });
}
exports.helloWorld = helloWorld;
/* Actions Users */
async function register(req, res) {
    try {
        const validate = await (0, UsersRequest_1.default)(req.body);
        if (validate.errors.length > 0)
            return (0, GlobalFunctions_1.returnErrorParams)(res, validate.errors);
        const user = new Users_1.default(validate.data);
        user.password = bcrypt_1.default.hashSync(user.password, 10);
        await user.save();
        // create referrals document
        const referrals = new Referrals_1.default({ _id: user._id });
        await referrals.save();
        await (0, CoursesActions_1.addCoursesToUser)(user._id.toString());
        // check if exist referred and update
        if (user.referred) {
            // find the principal referrals document
            let ref = await Referrals_1.default.findOne({ _id: user.referred }).exec();
            if (ref)
                ref.members.push(user._id.toString());
            else {
                ref = new Referrals_1.default({
                    _id: user.referred,
                    members: [user._id.toString()]
                });
            }
            await ref.save();
        }
        return res.status(201).json({
            msg: `Registro exitoso.`
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/register`);
    }
}
exports.register = register;
async function login(req, res) {
    try {
        const validate = (0, UsersRequest_1.validateLogin)(req.body);
        if (validate.errors.length > 0)
            return (0, GlobalFunctions_1.returnErrorParams)(res, validate.errors);
        const user = await Users_1.default.findOne({ phone: validate.data.phone }, { password: 1, document: 1, roles: 1 }).exec();
        if (!user) {
            return res.status(404).json({
                msg: `Disculpe, pero el número de teléfono o la contraseña son incorrectos.`
            });
        }
        if (!bcrypt_1.default.compareSync(`${validate.data.password}`, `${user.password}`)) {
            return res.status(422).json({
                msg: `Disculpe, pero el número de teléfono o la contraseña son incorrectos.`
            });
        }
        if (validate.data.admin) {
            if (!(0, GlobalFunctions_1.checkIfExistsRoleInList)(user.roles, [0, 1, 2, 3])) {
                return res.status(401).json({
                    msg: `Disculpe, pero no cuenta con privilegios para poder acceder a esta área.`
                });
            }
        }
        const token = await (0, TokenActions_1.getAccessToken)(req, {
            _id: user._id.toString(),
            roles: user.roles
        });
        if (!token) {
            return res.status(500).json({
                msg: '¡Ha ocurrido un error al momento de iniciar la sesión!'
            });
        }
        return res.json({
            msg: '¡Inicio de sesión con éxito!',
            data: await (0, UsersActions_1.getData)(user._id.toString(), { __v: 0, password: 0, referred: 0 }),
            token
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/login`);
    }
}
exports.login = login;
async function logout(req, res) {
    try {
        const { token } = req.query;
        await (0, TokenActions_1.disableTokenDB)(`${token}`);
        return res.json({
            msg: 'Se ha finalizado la sesión exitosamente.'
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/logout`);
    }
}
exports.logout = logout;
async function recoveryPassword(req, res) {
    try {
        const actionsList = ['check-phone', 'check-params', 'change-password'];
        const ret = {
            msg: null,
        };
        const { action } = req.params;
        const { phone } = req.body;
        if (actionsList.indexOf(`${action}`) === -1)
            return (0, UsersActions_1.responseErrorsRecoveryPassword)(res, 0);
        if (!(0, Validations_1.checkPhone)(phone))
            return (0, UsersActions_1.responseErrorsRecoveryPassword)(res, 1);
        const user = await Users_1.default.findOne({
            phone: `${phone}`.trim(),
            role: { $nin: [0, 1] }
        }, { email: 1, birthday: 1 }).exec();
        if (!user)
            return (0, UsersActions_1.responseErrorsRecoveryPassword)(res, 2);
        if (action === 'check-phone') {
            if (!!user.email || !!user.birthday) {
                ret.msg = 'Por favor, complete los siguientes campos para recuperar su contraseña.';
                ret.check = {
                    email: !!user.email,
                    birthday: !!user.birthday,
                };
            }
            else {
                ret.msg = 'Ahora puede asignar su nueva contraseña para recuperar el acceso a su cuenta.';
                ret.setNewPassword = true;
            }
            return res.json(ret);
        }
        // validate extra params
        const { check } = req.body;
        if (!check || (check && Object.keys(check).length === 0))
            return (0, UsersActions_1.responseErrorsRecoveryPassword)(res, 3);
        if (!check.ommiteChecking) {
            if (user.email) {
                if (!(0, Validations_1.checkEmail)(check.email))
                    return (0, UsersActions_1.responseErrorsRecoveryPassword)(res, 4);
                if (check.email !== user.email)
                    return (0, UsersActions_1.responseErrorsRecoveryPassword)(res, 5);
            }
            if (user.birthday) {
                if (!(0, Validations_1.checkDate)(check.birthday))
                    return (0, UsersActions_1.responseErrorsRecoveryPassword)(res, 6);
                if (check.birthday !== user.birthday)
                    return (0, UsersActions_1.responseErrorsRecoveryPassword)(res, 7);
            }
            if (action === 'check-params') {
                ret.msg = 'Por favor, indique su nueva contraseña.';
                ret.setNewPassword = true;
                return res.json(ret);
            }
        }
        const { password } = req.body;
        if (!(0, Validations_1.checkPassword)(password))
            return (0, UsersActions_1.responseErrorsRecoveryPassword)(res, 8);
        user.password = bcrypt_1.default.hashSync(`${password}`, 10);
        await user.save();
        ret.msg = 'Se ha asignado la nueva contraseña a su cuenta exitosamente.';
        ret.changed = true;
        return res.json(ret);
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/logout`);
    }
}
exports.recoveryPassword = recoveryPassword;
/* BANKS */
async function getBanks(req, res) {
    try {
        const banks = await AccountsBanks_1.default.find({}, { title: 1, description: 1, picture: 1 }).exec();
        return res.json({
            msg: 'Bancos',
            banks
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/logout`);
    }
}
exports.getBanks = getBanks;
/* BIRTHDAYS */
async function getBirthdays(req, res) {
    try {
        const birthdayList = await Users_1.default.find({ birthday: { $ne: null } }, {
            _id: 1,
            names: 1,
            lastNames: 1,
            document: 1,
            gender: 1,
            birthday: 1,
            phone: 1,
            picture: 1,
            position: 1,
        })
            .sort({ names: 1 })
            .exec();
        return res.json({
            msg: `Datos de cumpleaños`,
            birthdayList
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getBirthdays`);
    }
}
exports.getBirthdays = getBirthdays;
/* CHURCHES */
async function getChurches(req, res) {
    try {
        const churches = await Churches_1.default.find({}, { name: 1, }).sort({ name: 1 }).exec();
        return res.json({
            msg: `Listado de iglesias`,
            churches
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getChurches`);
    }
}
exports.getChurches = getChurches;
/* GROUP DETAILS */
async function getGroupDetails(req, res) {
    try {
        const { _id } = req.params;
        let ret = null;
        const group = await Groups_1.default.findOne({ _id }, { __v: 0 }).exec();
        if (group) {
            ret = {
                _id: group._id,
                name: group.name,
                code: group.code,
                members: await (0, UsersActions_1.getNamesUsersList)(lodash_1.default.uniq(group.members || [])),
                created_at: group.created_at,
                updated_at: group.updated_at,
            };
        }
        return res.json({
            msg: 'Grupo familiar',
            group: ret
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/logout`);
    }
}
exports.getGroupDetails = getGroupDetails;
/* MEMBERS */
async function getPublicMembersTotals(req, res) {
    try {
        const { tokenId } = req.body;
        const query = (0, UsersActions_1.checkFindValueSearch)(req.query, tokenId);
        const totals = await Users_1.default.find(query).countDocuments().exec();
        return res.json({
            msg: `Total de miembros.`,
            totals
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getPublicMembersTotals`);
    }
}
exports.getPublicMembersTotals = getPublicMembersTotals;
async function getPublicMembers(req, res) {
    try {
        const { tokenId } = req.body;
        const query = (0, UsersActions_1.checkFindValueSearch)(req.query, tokenId);
        const { limit, skip, sort } = (0, GlobalFunctions_1.getLimitSkipSortSearch)(req.query);
        const members = await Users_1.default.find(query, {
            names: 1,
            lastNames: 1,
            gender: 1,
            phone: 1,
            picture: 1
        })
            .skip(skip)
            .limit(limit)
            .sort(sort)
            .exec();
        return res.json({
            msg: `Listado de miembros.`,
            members
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getPublicMembers`);
    }
}
exports.getPublicMembers = getPublicMembers;
/* Params */
async function getPublicParams(req, res) {
    try {
        let settings = await Settings_1.default.findOne().exec();
        if (!settings) {
            settings = new Settings_1.default({});
            await settings.save();
        }
        const banner = settings.banners.find((l) => l.active) || null;
        const logo = settings.logos.find((l) => l.active) || null;
        return res.json({
            msg: `Parámetros`,
            data: {
                facebook: settings.facebook || null,
                instagram: settings.instagram || null,
                twitter: settings.twitter || null,
                web: settings.web || null,
                youtube: settings.youtube || null,
                banner: (banner === null || banner === void 0 ? void 0 : banner.picture) || null,
                logo: (logo === null || logo === void 0 ? void 0 : logo.picture) || null,
            }
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getPublicParams`);
    }
}
exports.getPublicParams = getPublicParams;
/* Organizations */
async function getOrganization(req, res) {
    try {
        const ret = [];
        const churches = await Churches_1.default.find({}, { userid: 0, created_at: 0, updated_at: 0, __v: 0 }).exec();
        const users = await Users_1.default.find({}, { names: 1, lastNames: 1, church: 1, gender: 1, picture: 1, roles: 1 }).sort({ names: 1 }).exec();
        if (churches.length > 0) {
            churches.forEach(c => {
                const lvls = {
                    1: [],
                    2: [],
                    3: [],
                    4: [],
                };
                const m = {
                    church: c,
                    lvls: {},
                    users: [],
                };
                const userList = users.filter((u) => u.church === c._id.toString());
                if (userList.length > 0) {
                    userList.forEach(u => {
                        var _a;
                        m.users.push({
                            _id: u._id || null,
                            fullname: `${u.names || ''} ${u.lastNames || ''}`,
                            gender: u.gender || null,
                            picture: u.picture || null,
                            church: u.church || null,
                        });
                        (_a = u.roles) === null || _a === void 0 ? void 0 : _a.forEach(r => {
                            if (r !== 0)
                                lvls[r].push(u._id);
                        });
                    });
                }
                m.lvls.pastors = lvls['1'];
                m.lvls.supervisors = lvls['2'];
                m.lvls.leaders = lvls['3'];
                m.lvls.peoples = lvls['4'];
                ret.push(m);
            });
        }
        return res.json({
            msg: `Organización`,
            data: ret
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getOrganization`);
    }
}
exports.getOrganization = getOrganization;
/* Resources */
async function getPublicResources(req, res) {
    try {
        const { tokenId } = req.body;
        const group = null;
        const ret = [];
        if (!(0, Validations_1.checkObjectId)(tokenId))
            return (0, ResourcesActions_1.returnResourcesMsgErrors)(res, 0);
        const user = await Users_1.default.findOne({ _id: tokenId }, { roles: 1 }).exec();
        if (!user)
            return (0, ResourcesActions_1.returnResourcesMsgErrors)(res, 0);
        const resources = await Resources_1.default.find({}, { __v: 0 }).exec();
        if (resources.length > 0) {
            const resourcesList = resources.filter(r => ((0, GlobalFunctions_1.checkIfExistsRoleInList)(user.roles, r.roles) || user._id.toString() === r.userid));
            if (resourcesList.length > 0) {
                const listIds = resourcesList.map(r => r.userid);
                if (listIds.length > 0) {
                    const users = await (0, UsersActions_1.getNamesUsersList)(lodash_1.default.uniq(listIds));
                    const positions = {};
                    users === null || users === void 0 ? void 0 : users.forEach((u) => {
                        positions[u._id.toString()] = u;
                    });
                    resourcesList.forEach(r => {
                        ret.push({
                            _id: r._id,
                            title: r.title,
                            urlDoc: r.urlDoc,
                            user: positions[r.userid] || null,
                            roles: r.roles,
                            created_at: r.created_at,
                            updated_at: r.updated_at,
                        });
                    });
                }
            }
        }
        return res.json({
            msg: 'Documentos compartidos',
            resources: ret
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getPublicResources`);
    }
}
exports.getPublicResources = getPublicResources;
