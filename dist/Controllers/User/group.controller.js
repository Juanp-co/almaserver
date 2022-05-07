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
exports.getMemberGroup = exports.rejectGroupInvitations = exports.approveGroupInvitations = exports.getGroupInvitations = exports.getGroupInvitationsTotals = exports.deleteGroup = exports.addOrRemoveMembersGroup = exports.updateGroup = exports.saveGroup = exports.getGroup = void 0;
const lodash_1 = __importDefault(require("lodash"));
const GroupsActions_1 = require("../../ActionsData/GroupsActions");
const UsersActions_1 = require("../../ActionsData/UsersActions");
const GroupsRequest_1 = __importStar(require("../../FormRequest/GroupsRequest"));
const GlobalFunctions_1 = require("../../Functions/GlobalFunctions");
const Validations_1 = require("../../Functions/Validations");
const Groups_1 = __importDefault(require("../../Models/Groups"));
const GroupsInvitations_1 = __importDefault(require("../../Models/GroupsInvitations"));
const Users_1 = __importDefault(require("../../Models/Users"));
const path = 'Controllers/User/group.controller';
async function getGroup(req, res) {
    try {
        const { tokenId } = req.body;
        let group = null;
        if (!(0, Validations_1.checkObjectId)(tokenId))
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 0);
        const user = await Users_1.default.findOne({ _id: tokenId }, { group: 1 }).exec();
        if (!user)
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 0);
        if (user.group) {
            const data = await Groups_1.default.findOne({ _id: user.group }).exec();
            if (data) {
                group = {
                    _id: data._id,
                    name: data.name,
                    code: data.code,
                    userid: data.userid,
                    members: await (0, UsersActions_1.getNamesUsersList)(lodash_1.default.uniq(data.members || [])),
                    created_at: data.created_at,
                    updated_at: data.updated_at,
                };
            }
        }
        return res.json({
            msg: 'Mi grupo familiar',
            group
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getGroup`);
    }
}
exports.getGroup = getGroup;
async function saveGroup(req, res) {
    try {
        const { tokenId } = req.body;
        const validate = (0, GroupsRequest_1.default)(req.body);
        if (!(0, Validations_1.checkObjectId)(tokenId))
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 0);
        if (validate.errors.length > 0)
            return (0, GlobalFunctions_1.returnErrorParams)(res, validate.errors);
        const user = await Users_1.default.findOne({ _id: tokenId }, { group: 1 }).exec();
        if (!user)
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 0);
        if (user.group)
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 11);
        // check if exist code
        if (validate.data.code) {
            const check = await Groups_1.default.find({ code: validate.data.code }).countDocuments().exec();
            if (check > 0)
                return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 4);
        }
        // generate a new code
        else {
            const totalGroups = await Groups_1.default.find().countDocuments().exec();
            validate.data.code = `group-${totalGroups}`;
        }
        const group = new Groups_1.default(validate.data);
        group.userid = tokenId;
        group.members.push(tokenId);
        await group.save();
        user.group = group._id.toString();
        await user.save();
        return res.status(201).json({
            msg: 'Se ha creado el nucleo familiar exitosamente.',
            group
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/saveGroup`);
    }
}
exports.saveGroup = saveGroup;
async function updateGroup(req, res) {
    try {
        const { tokenId } = req.body;
        const { _id } = req.params;
        if (!(0, Validations_1.checkObjectId)(tokenId))
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 0);
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 2);
        const validate = (0, GroupsRequest_1.default)(req.body);
        if (validate.errors.length > 0)
            return (0, GlobalFunctions_1.returnErrorParams)(res, validate.errors);
        const group = await Groups_1.default.findOne({ _id }, { members: 0, __v: 0 }).exec();
        if (!group)
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 3);
        if (group.userid !== tokenId) {
            return res.status(403).json({
                msg: 'Disculpe, pero no puede realizar esta acción.'
            });
        }
        group.name = validate.data.name;
        // check if exist code
        if (validate.data.code && group.code !== validate.data.code) {
            const check = await Groups_1.default.find({ _id: { $ne: _id }, code: validate.data.code }).countDocuments().exec();
            if (check > 0)
                return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 4);
            group.code = validate.data.code;
        }
        await group.save();
        return res.status(201).json({
            msg: 'Se ha actualizado el nucleo familiar exitosamente.',
            group
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/updateGroup`);
    }
}
exports.updateGroup = updateGroup;
async function addOrRemoveMembersGroup(req, res) {
    try {
        const { _id, action } = req.params;
        const { tokenId } = req.body;
        if (!(0, Validations_1.checkObjectId)(tokenId))
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 0);
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 2);
        if (['add', 'remove'].indexOf(action) === -1) {
            return res.status(422).json({
                msg: 'Disculpe, pero no se logró determinar la acción a realizar.',
            });
        }
        const validate = (0, GroupsRequest_1.validateIdsMembers)(req.body);
        if (validate.errors.length > 0)
            return (0, GlobalFunctions_1.returnErrorParams)(res, validate.errors);
        const group = await Groups_1.default.findOne({ _id }, { members: 1, userid: 1 }).exec();
        if (!group)
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 3);
        if (group.userid !== tokenId) {
            return res.status(422).json({
                msg: 'Disculpe, pero no puede realizar esta acción.'
            });
        }
        if (action === 'add') {
            // send invitations
            const invitations = await GroupsInvitations_1.default.find({ _id: { $in: validate.data.members } }).exec();
            if (invitations.length > 0) {
                const promises = [];
                validate.data.members.forEach(id => {
                    const index = invitations.findIndex(item => item._id.toString() === id);
                    if (index === -1) {
                        const invs = new GroupsInvitations_1.default({ _id: id });
                        invs.list.push({
                            userid: tokenId,
                            groupId: group._id.toString()
                        });
                        promises.push(invs.save());
                    }
                    else {
                        const index2 = invitations[index].list.findIndex(l => l.groupId === _id);
                        if (index2 === -1) {
                            invitations[index].list.push({
                                userid: tokenId,
                                groupId: _id
                            });
                            promises.push(invitations[index].save());
                        }
                    }
                });
                await Promise.all(promises);
            }
            else {
                const promises = [];
                validate.data.members.forEach(id => {
                    const invs = new GroupsInvitations_1.default({ _id: id });
                    invs.list.push({ userid: tokenId, groupId: group._id.toString() });
                    promises.push(invs.save());
                });
                await Promise.all(promises);
            }
            return res.status(200).json({
                msg: 'Solicitudes enviadas exitosamente.'
            });
        }
        if (validate.data.members.length === 0)
            group.members = [];
        else {
            group.members = group.members.filter(m => !validate.data.members.includes(m));
            await (0, UsersActions_1.updateGroupIdInUsers)(validate.data.members);
        }
        await group.save();
        return res.status(200).json({
            msg: 'Se ha actualizado el listado de miembros exitosamente.'
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/addOrRemoveMembersGroup`);
    }
}
exports.addOrRemoveMembersGroup = addOrRemoveMembersGroup;
async function deleteGroup(req, res) {
    try {
        const { tokenId } = req.body;
        const { _id } = req.params;
        if (!(0, Validations_1.checkObjectId)(tokenId))
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 0);
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 2);
        const user = await Users_1.default.findOne({ _id: tokenId }).exec();
        if (!user)
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 0);
        user.group = null;
        const group = await Groups_1.default.findOne({ _id }, { members: 1, userid: 1 }).exec();
        if (!group)
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 3);
        if (group.userid !== tokenId) {
            return res.status(422).json({
                msg: 'Disculpe, pero no puede realizar esta acción.'
            });
        }
        await (0, UsersActions_1.updateGroupIdInUsers)(group.members || []);
        await group.delete();
        await user.save();
        return res.json({
            msg: 'Se ha eliminado el grupo exitosamente.'
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/deleteGroup`);
    }
}
exports.deleteGroup = deleteGroup;
/* Any person group */
async function getGroupInvitationsTotals(req, res) {
    var _a;
    try {
        const { tokenId } = req.body;
        if (!(0, Validations_1.checkObjectId)(tokenId))
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 0);
        let invitations = await GroupsInvitations_1.default.findOne({ _id: tokenId }, { list: 1 }).exec();
        if (!invitations) {
            invitations = new GroupsInvitations_1.default({ _id: tokenId });
            await invitations.save();
        }
        return res.json({
            msg: 'Total de invitaciones',
            totals: ((_a = invitations.list) === null || _a === void 0 ? void 0 : _a.length) || 0
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getGroupInvitationsTotals`);
    }
}
exports.getGroupInvitationsTotals = getGroupInvitationsTotals;
async function getGroupInvitations(req, res) {
    try {
        const { tokenId } = req.body;
        const { limit, skip } = (0, GlobalFunctions_1.getLimitSkipSortSearch)(req.query);
        const ret = [];
        if (!(0, Validations_1.checkObjectId)(tokenId))
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 0);
        let invitations = await GroupsInvitations_1.default.findOne({ _id: tokenId }, { list: 1 }).exec();
        if (!invitations) {
            invitations = new GroupsInvitations_1.default({ _id: tokenId });
            await invitations.save();
        }
        if (invitations.list.length > 0) {
            const paginate = invitations.list.reverse().slice(skip, skip + limit);
            const listIdsGroups = lodash_1.default.uniq(paginate.map(l => l.groupId));
            const groups = await Groups_1.default.find({ _id: { $in: listIdsGroups } }).exec();
            if (groups.length > 0) {
                const indexGroups = {};
                const indexUsers = {};
                const listUsersIds = [];
                groups.forEach((g, i) => {
                    indexGroups[g._id.toString()] = i;
                    if (g.userid)
                        listUsersIds.push(g.userid);
                });
                // get users creators
                const users = await (0, UsersActions_1.getNamesUsersList)(lodash_1.default.uniq(listUsersIds));
                if (users.length > 0) {
                    users.forEach((u, i) => {
                        indexUsers[u._id.toString()] = i;
                    });
                }
                paginate.forEach((p) => {
                    var _a;
                    if (p) {
                        const g = groups[indexGroups[p.groupId]];
                        ret.push({
                            _id: p._id,
                            group: {
                                _id: g._id,
                                name: g.name,
                                code: g.code,
                                totalMembers: ((_a = g.members) === null || _a === void 0 ? void 0 : _a.length) || 0
                            },
                            member: users[indexUsers[p.userid]]
                        });
                    }
                });
            }
        }
        return res.json({
            msg: 'Invitaciones',
            invitations: ret
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getGroupInvitations`);
    }
}
exports.getGroupInvitations = getGroupInvitations;
async function approveGroupInvitations(req, res) {
    try {
        const { tokenId } = req.body;
        const { _id } = req.params;
        if (!(0, Validations_1.checkObjectId)(tokenId))
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 0);
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 5);
        const user = await Users_1.default.findOne({ _id: tokenId }, { group: 1 }).exec();
        if (!user)
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 0);
        let invitations = await GroupsInvitations_1.default.findOne({ _id: tokenId }, { list: 1 }).exec();
        if (!invitations) {
            invitations = new GroupsInvitations_1.default({ _id: tokenId });
            await invitations.save();
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 6);
        }
        const index = invitations.list.findIndex((v) => v._id.toString() === _id);
        if (index === -1)
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 6);
        const newGroup = await Groups_1.default.findOne({ _id: invitations.list[index].groupId }).exec();
        if (!newGroup) {
            invitations.list.pull({ _id });
            await invitations.save();
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 7);
        }
        const currentGroup = user.group;
        if (currentGroup) {
            const group = await Groups_1.default.findOne({ _id: currentGroup }).exec();
            if (group) {
                group.members.pull(tokenId);
                if (group.userid === tokenId && group.members.length > 0)
                    [group.userid] = group.members;
                else
                    group.userid = null;
                await group.save();
            }
        }
        user.group = invitations.list[index].groupId;
        await user.save();
        newGroup.members.push(tokenId);
        await newGroup.save();
        invitations.list.pull({ _id });
        await invitations.save();
        return res.json({
            msg: 'Se ha aceptado la invitación exitosamente.',
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/approveGroupInvitations`);
    }
}
exports.approveGroupInvitations = approveGroupInvitations;
async function rejectGroupInvitations(req, res) {
    try {
        const { tokenId } = req.body;
        const { _id } = req.params;
        if (!(0, Validations_1.checkObjectId)(tokenId))
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 0);
        if (!(0, Validations_1.checkObjectId)(_id))
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 5);
        const user = await Users_1.default.findOne({ _id: tokenId }, { group: 1 }).exec();
        if (!user)
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 0);
        let invitations = await GroupsInvitations_1.default.findOne({ _id: tokenId }, { list: 1 }).exec();
        if (!invitations) {
            invitations = new GroupsInvitations_1.default({ _id: tokenId });
            await invitations.save();
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 6);
        }
        const index = invitations.list.findIndex((v) => v._id.toString() === _id);
        if (index === -1)
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 6);
        invitations.list.pull({ _id });
        await invitations.save();
        return res.json({
            msg: 'Se ha rechazado la invitación exitosamente.',
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/rejectGroupInvitations`);
    }
}
exports.rejectGroupInvitations = rejectGroupInvitations;
/* Any person group */
async function getMemberGroup(req, res) {
    try {
        const { memberId } = req.params;
        const { tokenId } = req.body;
        if (!(0, Validations_1.checkObjectId)(tokenId))
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 0);
        if (!(0, Validations_1.checkObjectId)(memberId))
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 8);
        const user = await Users_1.default.findOne({ _id: tokenId }, { group: 1 }).exec();
        if (!user)
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 0);
        if (!user.group)
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 9);
        const data = await Groups_1.default.findOne({ _id: user.group }, { members: 1 }).exec();
        if (!data)
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 3);
        if (!data.members.includes(memberId))
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 10);
        const ret = await (0, UsersActions_1.getInfoUserReferred)(memberId);
        if (!ret.member)
            return (0, GroupsActions_1.returnGroupsMsgErrors)(res, 10);
        return res.json({
            msg: `Miembro.`,
            data: ret
        });
    }
    catch (error) {
        return (0, GlobalFunctions_1.returnError)(res, error, `${path}/getMemberGroup`);
    }
}
exports.getMemberGroup = getMemberGroup;
