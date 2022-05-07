import _ from 'lodash';
import { Request, Response } from 'express';
import { returnGroupsMsgErrors } from '../../ActionsData/GroupsActions';
import { getInfoUserReferred, getNamesUsersList, updateGroupIdInUsers } from '../../ActionsData/UsersActions';
import validateRegister, { validateIdsMembers } from '../../FormRequest/GroupsRequest';
import { getLimitSkipSortSearch, returnError, returnErrorParams } from '../../Functions/GlobalFunctions';
import { checkObjectId } from '../../Functions/Validations';
import Groups from '../../Models/Groups';
import GroupsInvitations from '../../Models/GroupsInvitations';
import Users from '../../Models/Users';

const path = 'Controllers/User/group.controller';

export async function getGroup(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenId } = req.body;
    let group: any = null;

    if (!checkObjectId(tokenId)) return returnGroupsMsgErrors(res, 0);

    const user = await Users.findOne({ _id: tokenId }, { group: 1 }).exec();

    if (!user) return returnGroupsMsgErrors(res, 0);

    if (user.group) {
      const data = await Groups.findOne({ _id: user.group }).exec();

      if (data) {
        group = {
          _id: data._id,
          name: data.name,
          code: data.code,
          userid: data.userid,
          members: await getNamesUsersList(_.uniq(data.members || [])),
          created_at: data.created_at,
          updated_at: data.updated_at,
        }
      }
    }

    return res.json({
      msg: 'Mi grupo familiar',
      group
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getGroup`);
  }
}

export async function saveGroup(req: Request, res: Response) : Promise<Response> {
  try {
    const { tokenId } = req.body;
    const validate = validateRegister(req.body);

    if (!checkObjectId(tokenId)) return returnGroupsMsgErrors(res, 0);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const user = await Users.findOne({ _id: tokenId }, { group: 1 }).exec();

    if (!user) return returnGroupsMsgErrors(res, 0);

    if (user.group) return returnGroupsMsgErrors(res, 11);

    // check if exist code
    if (validate.data.code) {
      const check = await Groups.find({ code: validate.data.code }).countDocuments().exec();
      if (check > 0) return returnGroupsMsgErrors(res, 4);
    }
    // generate a new code
    else {
      const totalGroups = await Groups.find().countDocuments().exec();
      validate.data.code = `group-${totalGroups}`;
    }

    const group = new Groups(validate.data);
    group.userid = tokenId;
    group.members.push(tokenId);
    await group.save();

    user.group = group._id.toString();
    await user.save();

    return res.status(201).json({
      msg: 'Se ha creado el nucleo familiar exitosamente.',
      group
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/saveGroup`);
  }
}

export async function updateGroup(req: Request, res: Response) : Promise<Response> {
  try {
    const { tokenId } = req.body;
    const { _id } = req.params;

    if (!checkObjectId(tokenId)) return returnGroupsMsgErrors(res, 0);

    if (!checkObjectId(_id)) return returnGroupsMsgErrors(res, 2);

    const validate = validateRegister(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const group = await Groups.findOne({ _id }, { members: 0, __v: 0 }).exec();

    if (!group) return returnGroupsMsgErrors(res, 3);

    if (group.userid !== tokenId) {
      return res.status(403).json({
        msg: 'Disculpe, pero no puede realizar esta acción.'
      });
    }

    group.name = validate.data.name;

    // check if exist code
    if (validate.data.code && group.code !== validate.data.code) {
      const check = await Groups.find({ _id: { $ne: _id }, code: validate.data.code }).countDocuments().exec();

      if (check > 0) return returnGroupsMsgErrors(res, 4);
      group.code = validate.data.code;
    }

    await group.save();

    return res.status(201).json({
      msg: 'Se ha actualizado el nucleo familiar exitosamente.',
      group
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/updateGroup`);
  }
}

export async function addOrRemoveMembersGroup(req: Request, res: Response) : Promise<Response> {
  try {
    const { _id, action } = req.params;
    const { tokenId } = req.body;

    if (!checkObjectId(tokenId)) return returnGroupsMsgErrors(res, 0);

    if (!checkObjectId(_id)) return returnGroupsMsgErrors(res, 2);

    if (['add', 'remove'].indexOf(action) === -1) {
      return res.status(422).json({
        msg: 'Disculpe, pero no se logró determinar la acción a realizar.',
      });
    }

    const validate = validateIdsMembers(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const group = await Groups.findOne({ _id }, { members: 1, userid: 1 }).exec();

    if (!group) return returnGroupsMsgErrors(res, 3);

    if (group.userid !== tokenId) {
      return res.status(422).json({
        msg: 'Disculpe, pero no puede realizar esta acción.'
      });
    }

    if (action === 'add') {
      // send invitations
      const invitations = await GroupsInvitations.find({ _id: { $in: validate.data.members } }).exec();

      if (invitations.length > 0) {
        const promises: any[] = [];
        validate.data.members.forEach(id => {
          const index = invitations.findIndex(item => item._id.toString() === id);

          if (index === -1) {
            const invs = new GroupsInvitations({ _id: id });

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
        const promises: any[] = [];
        validate.data.members.forEach(id => {
          const invs = new GroupsInvitations({ _id: id });
          invs.list.push({ userid: tokenId, groupId: group._id.toString() });
          promises.push(invs.save());
        });
        await Promise.all(promises);
      }

      return res.status(200).json({
        msg: 'Solicitudes enviadas exitosamente.'
      });
    }

    if (validate.data.members.length === 0) group.members = [];
    else {
      group.members = group.members.filter(m => !validate.data.members.includes(m));
      await updateGroupIdInUsers(validate.data.members);
    }
    await group.save();

    return res.status(200).json({
      msg: 'Se ha actualizado el listado de miembros exitosamente.'
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/addOrRemoveMembersGroup`);
  }
}

export async function deleteGroup(req: Request, res: Response) : Promise<Response> {
  try {
    const { tokenId } = req.body;
    const { _id } = req.params;

    if (!checkObjectId(tokenId)) return returnGroupsMsgErrors(res, 0);

    if (!checkObjectId(_id)) return returnGroupsMsgErrors(res, 2);

    const user = await Users.findOne({ _id: tokenId }).exec();

    if (!user) return returnGroupsMsgErrors(res, 0);
    user.group = null;

    const group = await Groups.findOne({ _id }, { members: 1, userid: 1 }).exec();

    if (!group) return returnGroupsMsgErrors(res, 3);

    if (group.userid !== tokenId) {
      return res.status(422).json({
        msg: 'Disculpe, pero no puede realizar esta acción.'
      });
    }

    await updateGroupIdInUsers(group.members || []);

    await group.delete();
    await user.save();

    return res.json({
      msg: 'Se ha eliminado el grupo exitosamente.'
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/deleteGroup`);
  }
}

/* Any person group */

export async function getGroupInvitationsTotals(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenId } = req.body;

    if (!checkObjectId(tokenId)) return returnGroupsMsgErrors(res, 0);

    let invitations = await GroupsInvitations.findOne({ _id: tokenId }, { list: 1 }).exec();

    if (!invitations) {
      invitations = new GroupsInvitations({ _id: tokenId });
      await invitations.save();
    }

    return res.json({
      msg: 'Total de invitaciones',
      totals: invitations.list?.length || 0
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getGroupInvitationsTotals`);
  }
}

export async function getGroupInvitations(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenId } = req.body;
    const { limit, skip } = getLimitSkipSortSearch(req.query);
    const ret: any[] = [];

    if (!checkObjectId(tokenId)) return returnGroupsMsgErrors(res, 0);

    let invitations = await GroupsInvitations.findOne({ _id: tokenId }, { list: 1 }).exec();

    if (!invitations) {
      invitations = new GroupsInvitations({ _id: tokenId });
      await invitations.save();
    }

    if (invitations.list.length > 0) {
      const paginate = invitations.list.reverse().slice(skip, skip + limit);
      const listIdsGroups = _.uniq(paginate.map(l => l.groupId));
      const groups = await Groups.find({ _id: { $in: listIdsGroups } }).exec();

      if (groups.length > 0) {
        const indexGroups: any = {};
        const indexUsers: any = {};
        const listUsersIds: string[] = [];
        groups.forEach((g: any, i) => {
          indexGroups[g._id.toString()] = i;
          if (g.userid) listUsersIds.push(g.userid);
        });

        // get users creators
        const users = await getNamesUsersList(_.uniq(listUsersIds));

        if (users.length > 0) {
          users.forEach((u: any, i: number) => {
            indexUsers[u._id.toString()] = i;
          });
        }

        paginate.forEach((p: any) => {
          if (p) {
            const g = groups[indexGroups[p.groupId]];
            ret.push({
              _id: p._id,
              group: {
                _id: g._id,
                name: g.name,
                code: g.code,
                totalMembers: g.members?.length || 0
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
  } catch (error: any) {
    return returnError(res, error, `${path}/getGroupInvitations`);
  }
}

export async function approveGroupInvitations(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenId } = req.body;
    const { _id } = req.params;

    if (!checkObjectId(tokenId)) return returnGroupsMsgErrors(res, 0);

    if (!checkObjectId(_id)) return returnGroupsMsgErrors(res, 5);

    const user: any = await Users.findOne({ _id: tokenId }, { group: 1 }).exec();

    if (!user) return returnGroupsMsgErrors(res, 0);

    let invitations: any = await GroupsInvitations.findOne({ _id: tokenId }, { list: 1 }).exec();

    if (!invitations) {
      invitations = new GroupsInvitations({ _id: tokenId });
      await invitations.save();
      return returnGroupsMsgErrors(res, 6);
    }

    const index = invitations.list.findIndex((v: any) => v._id.toString() === _id);
    if (index === -1) return returnGroupsMsgErrors(res, 6);

    const newGroup: any = await Groups.findOne({ _id: invitations.list[index].groupId }).exec();

    if (!newGroup) {
      invitations.list.pull({ _id });
      await invitations.save();
      return returnGroupsMsgErrors(res, 7);
    }

    const currentGroup = user.group;

    if (currentGroup) {
      const group: any = await Groups.findOne({ _id: currentGroup }).exec();

      if (group) {
        group.members.pull(tokenId);
        if (group.userid === tokenId && group.members.length > 0) [group.userid] = group.members;
        else group.userid = null;
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
  } catch (error: any) {
    return returnError(res, error, `${path}/approveGroupInvitations`);
  }
}

export async function rejectGroupInvitations(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenId } = req.body;
    const { _id } = req.params;

    if (!checkObjectId(tokenId)) return returnGroupsMsgErrors(res, 0);
    if (!checkObjectId(_id)) return returnGroupsMsgErrors(res, 5);

    const user = await Users.findOne({ _id: tokenId }, { group: 1 }).exec();
    if (!user) return returnGroupsMsgErrors(res, 0);

    let invitations: any = await GroupsInvitations.findOne({ _id: tokenId }, { list: 1 }).exec();

    if (!invitations) {
      invitations = new GroupsInvitations({ _id: tokenId });
      await invitations.save();
      return returnGroupsMsgErrors(res, 6);
    }

    const index = invitations.list.findIndex((v: any) => v._id.toString() === _id);

    if (index === -1) return returnGroupsMsgErrors(res, 6);

    invitations.list.pull({ _id });
    await invitations.save();

    return res.json({
      msg: 'Se ha rechazado la invitación exitosamente.',
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/rejectGroupInvitations`);
  }
}

/* Any person group */
export async function getMemberGroup(req: Request, res: Response): Promise<Response> {
  try {
    const { memberId } = req.params;
    const { tokenId } = req.body;

    if (!checkObjectId(tokenId)) return returnGroupsMsgErrors(res, 0);

    if (!checkObjectId(memberId)) return returnGroupsMsgErrors(res, 8);

    const user = await Users.findOne({ _id: tokenId }, { group: 1 }).exec();

    if (!user) return returnGroupsMsgErrors(res, 0);

    if (!user.group) return returnGroupsMsgErrors(res, 9);

    const data = await Groups.findOne({ _id: user.group }, { members: 1 }).exec();

    if (!data) return returnGroupsMsgErrors(res, 3);

    if (!data.members.includes(memberId)) return returnGroupsMsgErrors(res, 10);

    const ret = await getInfoUserReferred(memberId);

    if (!ret.member) return returnGroupsMsgErrors(res, 10);

    return res.json({
      msg: `Miembro.`,
      data: ret
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getMemberGroup`);
  }
}
