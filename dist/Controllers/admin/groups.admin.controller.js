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
exports.deleteGroup = exports.findNewMembers = exports.addOrRemoveMembersGroup = exports.updateGroup = exports.saveGroup = exports.showGroup = exports.getGroupsCounters = void 0;
const lodash_1 = __importDefault(require("lodash"));
const UsersActions_1 = require("../../ActionsData/UsersActions");
const GroupsRequest_1 = __importStar(require("../../FormRequest/GroupsRequest"));
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const Validations_1 = require("../../Functions/Validations");
const Groups_1 = __importDefault(require("../../Models/Groups"));
const Users_1 = __importDefault(require("../../Models/Users"));
const path = 'src/admin/groups.admin.controller';
function return404(res) {
    return res.status(404).json({
        msg: 'Disculpe, pero el grupo seleccionado no existe o no se encuentra disponible.',
    });
}
function returnExistCode(res) {
    return res.status(422).json({
        msg: 'Disculpe, pero el código indicado ya se encuentra asignado a otro grupo.',
    });
}
function returnErrorId(res) {
    return res.status(422).json({
        msg: 'Disculpe, pero el grupo seleccionado es incorrecto.',
    });
}
// =================================================================================================
async function getGroups(req, res) {
    try {
        const { limit, skip, sort } = GlobalFunctions_1.getLimitSkipSortSearch(req.query);
        const { word } = req.query;
        const query = {};
        if (word) {
            if (word && word.toString().indexOf(' ') > -1) {
                query.name = { $regex: new RegExp(`${word}`, 'i') };
            }
            else {
                query.$or = [
                    { name: { $regex: new RegExp(`${word}`, 'i') } },
                    { code: { $regex: new RegExp(`${word}`, 'i') } },
                ];
            }
        }
        const ret = [];
        const groups = await Groups_1.default.find(query)
            .skip(skip)
            .limit(limit)
            .sort(sort)
            .exec();
        if (groups.length > 0) {
            groups.forEach(g => {
                ret.push({
                    _id: g._id,
                    name: g.name,
                    code: g.code,
                    totalMembers: g.members.length,
                    created_at: g.created_at
                });
            });
        }
        return res.json({
            msg: 'Grupos',
            groups: ret
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getGroups`);
    }
}
exports.default = getGroups;
async function getGroupsCounters(req, res) {
    try {
        const { word } = req.query;
        const query = {};
        if (word) {
            if (word && word.toString().indexOf(' ') > -1) {
                query.name = { $regex: new RegExp(`${word}`, 'i') };
            }
            else {
                query.$or = [
                    { name: { $regex: new RegExp(`${word}`, 'i') } },
                    { code: { $regex: new RegExp(`${word}`, 'i') } },
                ];
            }
        }
        const totals = await Groups_1.default.find(query).countDocuments().exec();
        return res.json({
            msg: 'Total de grupos',
            totals
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/getGroupsCounters`);
    }
}
exports.getGroupsCounters = getGroupsCounters;
async function showGroup(req, res) {
    try {
        const { _id } = req.params;
        const ret = {};
        if (!Validations_1.checkObjectId(_id))
            return returnErrorId(res);
        const group = await Groups_1.default.findOne({ _id }).exec();
        if (!group)
            return return404(res);
        const user = await UsersActions_1.getNamesUsersList([group.userid]);
        ret._id = group._id;
        ret.user = user[0] || null;
        ret.name = group.name;
        ret.code = group.code;
        ret.members = await UsersActions_1.getNamesUsersList(lodash_1.default.uniq(group.members || []));
        ret.created_at = group.created_at;
        ret.updated_at = group.updated_at;
        return res.json({
            msg: 'Grupo',
            group: ret
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/showGroup`);
    }
}
exports.showGroup = showGroup;
async function saveGroup(req, res) {
    try {
        const validate = GroupsRequest_1.default(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        // check if exist code
        if (validate.data.code) {
            const check = await Groups_1.default.find({ code: validate.data.code }).countDocuments().exec();
            if (check > 0)
                return returnExistCode(res);
        }
        // generate a new code
        else {
            const totalGroups = await Groups_1.default.find().countDocuments().exec();
            validate.data.code = `group-${totalGroups}`;
        }
        const group = new Groups_1.default(validate.data);
        group.userid = req.params.userid;
        await group.save();
        return res.status(201).json({
            msg: 'Se ha creado el grupo exitosamente.',
            group
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/saveGroup`);
    }
}
exports.saveGroup = saveGroup;
async function updateGroup(req, res) {
    try {
        const { _id } = req.params;
        if (!Validations_1.checkObjectId(_id))
            return returnErrorId(res);
        const validate = GroupsRequest_1.default(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const group = await Groups_1.default.findOne({ _id }, { members: 0, __v: 0, userid: 0 }).exec();
        if (!group)
            return return404(res);
        group.name = validate.data.name;
        // check if exist code
        if (validate.data.code && group.code !== validate.data.code) {
            const check = await Groups_1.default.find({ _id: { $ne: _id }, code: validate.data.code }).countDocuments().exec();
            if (check > 0)
                return returnExistCode(res);
            group.code = validate.data.code;
        }
        await group.save();
        return res.status(201).json({
            msg: 'Se ha creado el grupo exitosamente.',
            group
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/updateGroup`);
    }
}
exports.updateGroup = updateGroup;
async function addOrRemoveMembersGroup(req, res) {
    try {
        const { _id, action } = req.params;
        let notInserts = [];
        let notInsertsIds = [];
        if (!Validations_1.checkObjectId(_id))
            return returnErrorId(res);
        if (['add', 'remove'].indexOf(action) === -1) {
            return res.status(422).json({
                msg: 'Disculpe, pero no se logró determinar la acción a realizar.',
            });
        }
        const validate = GroupsRequest_1.validateIdsMembers(req.body);
        if (validate.errors.length > 0)
            return GlobalFunctions_1.returnErrorParams(res, validate.errors);
        const group = await Groups_1.default.findOne({ _id }, { members: 1 }).exec();
        if (!group)
            return return404(res);
        if (action === 'add') {
            // check if any member exist in another group
            const checkIfExist = await Groups_1.default.find({ _id: { $ne: _id }, members: { $in: validate.data.members } }, { 'members.$': 1 }).exec();
            if (checkIfExist.length > 0) {
                // concat insertsIds
                checkIfExist.forEach(c => {
                    notInsertsIds = notInsertsIds.concat(c.members);
                });
                notInsertsIds = lodash_1.default.uniq(notInsertsIds);
                // get users data was that not inserted
                notInserts = await UsersActions_1.getNamesUsersList(notInsertsIds);
                // update the members ids to insert
                validate.data.members = lodash_1.default.difference(validate.data.members, notInsertsIds);
            }
            group.members = lodash_1.default.uniq(validate.data.members.concat(group.members));
            await group.save();
            // update group value in users
            await UsersActions_1.updateGroupIdInUsers(group.members, _id);
        }
        else {
            let membersToRemoveOfGroup = [];
            if (validate.data.members.length === 0) {
                membersToRemoveOfGroup = group.members;
                group.members = [];
            }
            else {
                membersToRemoveOfGroup = lodash_1.default.difference(group.members, validate.data.members);
                group.members = lodash_1.default.filter(group.members, m => validate.data.members.indexOf(m) > -1);
            }
            await group.save();
            // update group value in users
            await UsersActions_1.updateGroupIdInUsers(membersToRemoveOfGroup);
        }
        if (notInserts.length > 0) {
            return res.status(201).json({
                msg: 'Se ha actualizado el listado de miembros exitosamente. Algunos miembros no lograron ser agregados porque ya pertenecen a otro grupo.',
                notInserts
            });
        }
        return res.status(201).json({
            msg: 'Se ha actualizado el listado de miembros exitosamente.'
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/addOrRemoveMembersGroup`);
    }
}
exports.addOrRemoveMembersGroup = addOrRemoveMembersGroup;
async function findNewMembers(req, res) {
    try {
        const { _id, userid } = req.params;
        const { limit, skip, sort } = GlobalFunctions_1.getLimitSkipSortSearch(req.query);
        if (!Validations_1.checkObjectId(_id))
            return returnErrorId(res);
        const group = await Groups_1.default.findOne({ _id }, { members: 1 })
            .skip(skip)
            .limit(limit)
            .sort(sort)
            .exec();
        if (!group)
            return return404(res);
        const query = UsersActions_1.checkFindValueSearch({
            _id: { $nin: [userid, ...group.members] },
            role: { $ne: 0 },
            group: { $in: [null, undefined, ''] },
        }, req.query.word);
        const users = await Users_1.default.find(query, { names: 1, lastNames: 1, document: 1, gender: 1 }).exec();
        return res.status(201).json({
            msg: 'Usuarios disponibles para grupos',
            users
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/addOrRemoveMembersGroup`);
    }
}
exports.findNewMembers = findNewMembers;
async function deleteGroup(req, res) {
    try {
        const { _id } = req.params;
        if (!Validations_1.checkObjectId(_id))
            return returnErrorId(res);
        const group = await Groups_1.default.findOne({ _id }, { members: 1 }).exec();
        if (!group)
            return return404(res);
        await UsersActions_1.updateGroupIdInUsers(group.members || []);
        await group.delete();
        return res.json({
            msg: 'Se ha eliminado el grupo exitosamente.'
        });
    }
    catch (error) {
        return GlobalFunctions_1.returnError(res, error, `${path}/deleteGroup`);
    }
}
exports.deleteGroup = deleteGroup;
