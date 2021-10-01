"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReferralsUser = exports.getCoursesUser = exports.deleteUser = exports.changeRoleUser = exports.updateUser = exports.showUser = exports.saveUser = exports.downLoadData = exports.getUsersCounters = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const UsersActions_1 = require("../../ActionsData/UsersActions");
const UsersRequest_1 = require("../../FormRequest/UsersRequest");
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const TokenActions_1 = require("../../Functions/TokenActions");
const Validations_1 = require("../../Functions/Validations");
const CoursesUsers_1 = __importDefault(require("../../Models/CoursesUsers"));
const Groups_1 = __importDefault(require("../../Models/Groups"));
const Referrals_1 = __importDefault(require("../../Models/Referrals"));
const Users_1 = __importDefault(require("../../Models/Users"));
const CoursesActions_1 = require("../../ActionsData/CoursesActions");
const path = 'Controllers/admin/users.admin.controller';
// =====================================================================================================================
async function getUsers(req, res) {
    try {
        const { tokenId } = req.body;
        const { limit, skip, sort } = GlobalFunctions_1.getLimitSkipSortSearch(req.query);
        const query = UsersActions_1.checkFindValueSearch(req.query, tokenId);
        const users = await Users_1.default.find(query, {
            names: 1,
            lastNames: 1,
            gender: 1,
            phone: 1,
            document: 1,
            roles: 1,
            created_at: 1,
            picture: 1,
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
        const { tokenId } = req.body;
        const query = UsersActions_1.checkFindValueSearch(req.query, tokenId);
        const totals = await Users_1.default.find(query).countDocuments().exec();
        return res.json({
            msg: `Total miembros.`,
            totals
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getUsersCounters`);
    }
}
exports.getUsersCounters = getUsersCounters;
async function downLoadData(req, res) {
    try {
        const members = await Users_1.default.find({}, {
            phone: 1,
            document: 1,
            names: 1,
            lastNames: 1,
            email: 1,
            // position: 1,
            gender: 1,
            birthday: 1,
            civilStatus: 1,
            educationLevel: 1,
            profession: 1,
            bloodType: 1,
            company: 1,
            companyType: 1,
            baptized: 1,
            // 0 = admin | 1 = pastor | 2 = supervisor | 3 = Líder | 4 = persona
            roles: 1,
            consolidated: 1,
            petition: 1,
            meetingNew: 1,
            department: 1,
            city: 1,
            locality: 1,
            direction: 1,
            created_at: 1,
        }).exec();
        return res.json({
            msg: `Total miembros.`,
            members
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getUsersCounters`);
    }
}
exports.downLoadData = downLoadData;
async function saveUser(req, res) {
    try {
        const { tokenRoles } = req.body;
        if (!UsersActions_1.checkRoleToActions(tokenRoles))
            return UsersActions_1.responseUsersAdmin(res, 3);
        const validate = await UsersRequest_1.validateFormMemberRegisterAdmin(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const user = new Users_1.default(validate.data);
        const password = 'alma1234'; // default password
        user.password = bcrypt_1.default.hashSync(password, 10);
        await user.save();
        const referrals = new Referrals_1.default({ _id: user._id });
        await referrals.save();
        // get referrals of referred
        if (validate.data.referred) {
            const referredData = await Referrals_1.default.findOne({ _id: validate.data.referred }).exec();
            if (referredData) {
                referredData.members.push(user._id.toString());
                await referredData.save();
            }
        }
        // save currents courses
        await CoursesActions_1.addCoursesToUser(user._id.toString());
        return res.status(201).json({
            msg: `Se ha registrado el nuevo miembro exitosamente.`,
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
            msg: `Detalles del miembro.`,
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
        const { tokenRoles } = req.body;
        const { _id } = req.params;
        if (!UsersActions_1.checkRoleToActions(tokenRoles))
            return UsersActions_1.responseUsersAdmin(res, 3);
        if (!Validations_1.checkObjectId(_id))
            return UsersActions_1.responseUsersAdmin(res, 0);
        const validate = await UsersRequest_1.validateUpdate(req.body, _id, true);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const user = await Users_1.default.findOne({ _id }, { __v: 0, password: 0, referred: 0 }).exec();
        if (!user)
            return UsersActions_1.responseUsersAdmin(res, 1);
        user.phone = validate.data.phone || user.phone;
        user.document = validate.data.document || user.document;
        user.email = validate.data.email || user.email;
        user.names = validate.data.names || user.names;
        user.lastNames = validate.data.lastNames || user.lastNames;
        user.birthday = validate.data.birthday || user.birthday;
        user.position = validate.data.position !== null ? validate.data.position : (user.position || null);
        user.gender = validate.data.gender !== null ? validate.data.gender : user.gender;
        user.civilStatus = validate.data.civilStatus !== null ? validate.data.civilStatus : user.civilStatus;
        user.educationLevel = validate.data.educationLevel !== null ? validate.data.educationLevel : user.educationLevel;
        user.profession = validate.data.profession !== null ? validate.data.profession : user.profession;
        user.bloodType = validate.data.bloodType !== null ? validate.data.bloodType : user.bloodType;
        user.company = validate.data.company !== null ? validate.data.company : user.company;
        user.companyType = validate.data.companyType !== null ? validate.data.companyType : user.companyType;
        user.baptized = validate.data.baptized || user.baptized;
        user.department = validate.data.department !== null ? validate.data.department : user.department;
        user.city = validate.data.city !== null ? validate.data.city : user.city;
        user.locality = validate.data.locality || user.locality;
        user.direction = validate.data.direction || user.direction;
        user.meetingNew = validate.data.meetingNew;
        await user.save();
        return res.json({
            msg: `Se han actualizado los datos del miembro exitosamente.`,
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
        if (!Validations_1.checkObjectId(_id))
            return UsersActions_1.responseUsersAdmin(res, 0);
        const validate = UsersRequest_1.validateRolesToUpdateForm(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const user = await Users_1.default.findOne({ _id }, { roles: 1 }).exec();
        if (!user)
            return UsersActions_1.responseUsersAdmin(res, 1);
        user.roles = validate.data.roles;
        await user.save();
        // disconnect user
        await TokenActions_1.disableTokenDBForUserId([_id]);
        return res.json({
            msg: `Se asignado el nuevo rol al miembro exitosamente.`
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/changeRoleUser`);
    }
}
exports.changeRoleUser = changeRoleUser;
async function deleteUser(req, res) {
    try {
        const { tokenRoles } = req.body;
        const { _id } = req.params;
        if (!UsersActions_1.checkRoleToActions(tokenRoles))
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
            msg: `Se ha eliminado el miembro exitosamente.`
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/deleteUser`);
    }
}
exports.deleteUser = deleteUser;
async function getCoursesUser(req, res) {
    try {
        const { tokenRoles } = req.body;
        const { _id } = req.params;
        if (!UsersActions_1.checkRoleToActions(tokenRoles))
            return UsersActions_1.responseUsersAdmin(res, 3);
        if (!Validations_1.checkObjectId(_id))
            return UsersActions_1.responseUsersAdmin(res, 0);
        const user = await Users_1.default.findOne({ _id }, { __v: 0 }).exec();
        if (!user)
            return UsersActions_1.responseUsersAdmin(res, 1);
        // get all referrals
        const ret = [];
        let courses = [];
        const coursesData = await CoursesUsers_1.default.findOne({ userid: _id }, { 'courses.courseId': 1, 'courses.approved': 1 }).exec();
        if (coursesData) {
            const listIdsCourses = coursesData.courses.length > 0 ? coursesData.courses.map(cd => cd.courseId) : [];
            courses = await CoursesActions_1.getCoursesSimpleList(listIdsCourses || []);
            if (courses.length > 0) {
                for (const c of coursesData.courses) {
                    const index = courses.findIndex(co => co._id.toString() === c.courseId);
                    if (index > -1) {
                        ret.push({
                            _id: courses[index]._id,
                            banner: courses[index].banner,
                            slug: courses[index].slug,
                            title: courses[index].title,
                            description: courses[index].description,
                            level: courses[index].level,
                            approved: c.approved
                        });
                    }
                }
            }
        }
        return res.json({
            msg: `Listado de cursos del miembro.`,
            courses: ret
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getCoursesUser`);
    }
}
exports.getCoursesUser = getCoursesUser;
async function getReferralsUser(req, res) {
    try {
        const { tokenRoles } = req.body;
        const { _id } = req.params;
        if (!UsersActions_1.checkRoleToActions(tokenRoles))
            return UsersActions_1.responseUsersAdmin(res, 3);
        if (!Validations_1.checkObjectId(_id))
            return UsersActions_1.responseUsersAdmin(res, 0);
        const user = await Users_1.default.findOne({ _id }, { __v: 0 }).exec();
        if (!user)
            return UsersActions_1.responseUsersAdmin(res, 1);
        // get all referrals
        const ret = [];
        let referred = await Referrals_1.default.findOne({ _id }).exec();
        if (!referred) {
            referred = new Referrals_1.default({ _id });
            await referred.save();
        }
        if (referred.members.length > 0) {
            const referrals = await UsersActions_1.getNamesUsersList(referred.members);
            if (referrals.length > 0) {
                const refMembers = await Referrals_1.default.find({ _id: { $in: referred.members } }).exec();
                const existRefsMembers = refMembers.length > 0;
                for (const value of referrals) {
                    const model = {
                        ...value,
                        totalsReferrals: 0
                    };
                    if (existRefsMembers) {
                        const index = refMembers.findIndex(rm => rm._id.toString() === value._id.toString());
                        if (index > -1)
                            model.totalsReferrals = refMembers[index].members.length;
                    }
                    ret.push(model);
                }
            }
        }
        return res.json({
            msg: `Listado de referidos del miembro.`,
            referrals: ret
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getReferralsUser`);
    }
}
exports.getReferralsUser = getReferralsUser;
