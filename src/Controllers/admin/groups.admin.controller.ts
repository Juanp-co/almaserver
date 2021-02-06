import _ from 'lodash';
import { Request, Response } from 'express';
import validateRegister, { validateIdsMembers } from '../../FormRequest/GroupsRequest';
import Groups from '../../Models/Groups';
import { IGroupsDetails, IGroupsList } from '../../Interfaces/IGroups';
import { getLimitSkipSortSearch, returnError, returnErrorParams } from '../../Functions/GlobalFunctions';
import { checkObjectId } from '../../Functions/Validations';
import { getNamesUsersList } from '../../ActionsData/UsersActions';
import { IUserSimpleInfo } from '../../Interfaces/IUser';

const path = 'src/admin/groups.admin.controller';

function return404(res: Response) : Response {
  return res.status(404).json({
    msg: 'Disculpe, pero el grupo seleccionado no existe o no se encuentra disponible.',
  });
}

function returnExistCode(res: Response) : Response {
  return res.status(422).json({
    msg: 'Disculpe, pero el código indicado ya se encuentra asignado a otro grupo.',
  });
}

function returnErrorId(res: Response) : Response {
  return res.status(422).json({
    msg: 'Disculpe, pero el grupo seleccionado es incorrecto.',
  });
}

// =================================================================================================


export default async function getGroups(req: Request, res: Response) : Promise<Response> {
  try {
    const { limit, skip, sort } = getLimitSkipSortSearch(req.query);
    const { code, name } = req.query;
    const query: any = {};

    if (code) query.code = { $regex: new RegExp(`${code}`, 'i')};
    if (name) query.name = { $regex: new RegExp(`${name}`, 'i')};

    const ret: IGroupsList[] = [];

    const groups = await Groups.find(query)
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
        })
      })
    }

    return res.json({
      msg: 'Grupos',
      groups: ret
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getGroups`);
  }
}

export async function getGroupsCounters(req: Request, res: Response) : Promise<Response> {
  try {
    const { code, name } = req.query;
    const query: any = {};

    if (code) query.code = { $regex: new RegExp(`${code}`, 'i')};
    if (name) query.name = { $regex: new RegExp(`${name}`, 'i')};

    const totals = await Groups.find(query).countDocuments().exec();

    return res.json({
      msg: 'Total de grupos',
      totals
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getGroupsCounters`);
  }
}

export async function showGroup(req: Request, res: Response) : Promise<Response> {
  try {
    const { _id } = req.params;
    const ret = {} as IGroupsDetails;

    if (!checkObjectId(_id)) return returnErrorId(res);

    const group = await Groups.findOne({ _id }).exec();

    if (!group) return return404(res);

    const user = await getNamesUsersList([group.userid]);

    ret._id = group._id;
    ret.user = user[0] || null;
    ret.name = group.name;
    ret.code = group.code;
    ret.members = await getNamesUsersList(_.uniq(group.members || []));
    ret.created_at = group.created_at;
    ret.updated_at = group.updated_at;

    return res.json({
      msg: 'Grupo',
      group: ret
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/showGroup`);
  }
}

export async function saveGroup(req: Request, res: Response) : Promise<Response> {
  try {
    const validate = validateRegister(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    // check if exist code
    if (validate.data.code) {
      const check = await Groups.find({ code: validate.data.code }).countDocuments().exec();
      if (check > 0) return returnExistCode(res);
    }
    // generate a new code
    else {
      const totalGroups = await Groups.find().countDocuments().exec();
      validate.data.code = `group-${totalGroups}`;
    }

    const group = new Groups(validate.data);
    group.userid = req.params.userid;
    await group.save();

    return res.status(201).json({
      msg: 'Se ha creado el grupo exitosamente.',
      group
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/saveGroup`);
  }
}

export async function updateGroup(req: Request, res: Response) : Promise<Response> {
  try {
    const { _id } = req.params;

    if (!checkObjectId(_id)) return returnErrorId(res);

    const validate = validateRegister(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const group = await Groups.findOne({ _id }, { members: 0, __v: 0, userid: 0 }).exec();

    if (!group) return return404(res);

    group.name = validate.data.name;

    // check if exist code
    if (validate.data.code && group.code !== validate.data.code) {
      const check = await Groups.find({ _id: { $ne: _id }, code: validate.data.code }).countDocuments().exec();

      if (check > 0) return returnExistCode(res);
      group.code = validate.data.code;
    }

    await group.save();

    return res.status(201).json({
      msg: 'Se ha creado el grupo exitosamente.',
      group
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/updateGroup`);
  }
}

export async function addOrRemoveMembersGroup(req: Request, res: Response) : Promise<Response> {
  try {
    const { _id, action } = req.params;
    let notInserts: IUserSimpleInfo[] = [];
    let notInsertsIds: string[] = [];

    if (!checkObjectId(_id)) return returnErrorId(res);

    if (['add', 'remove'].indexOf(action) === -1) {
      return res.status(422).json({
        msg: 'Disculpe, pero no se logró determinar la acción a realizar.',
      });
    }

    const validate = validateIdsMembers(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    if (validate.data.members.length === 0)
      return res.status(200).json({ msg: '¡Nada que actualizar!' });

    const group = await Groups.findOne({ _id }, { members: 1 }).exec();

    if (!group) return return404(res);

    if (action === 'add') {
      // check if any member exist in another group
      const checkIfExist = await Groups.find(
        { _id: { $ne: _id }, members: { $in: validate.data.members } },
        { 'members.$': 1 }
      ).exec();

      if (checkIfExist.length > 0) {
        // concat insertsIds
        checkIfExist.forEach(c => {
          notInsertsIds = notInsertsIds.concat(c.members)
        });
        notInsertsIds = _.uniq(notInsertsIds);

        // get users data was that not inserted
        notInserts = await getNamesUsersList(notInsertsIds);

        // update the members ids to insert
        validate.data.members = _.difference(validate.data.members, notInsertsIds);
      }

      group.members = _.uniq(validate.data.members.concat(group.members));
    }
    else {
      group.members = _.difference(group.members, validate.data.members);
    }

    await group.save();

    if (notInserts.length > 0) {
      return res.status(201).json({
        msg: 'Se ha actualizado el listado de miembros exitosamente. Algunos miembros no lograron ser agregados porque ya pertenecen a otro grupo.',
        notInserts
      });
    }

    return res.status(201).json({
      msg: 'Se ha actualizado el listado de miembros exitosamente.'
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/addOrRemoveMembersGroup`);
  }
}

export async function deleteGroup(req: Request, res: Response) : Promise<Response> {
  try {
    const { _id } = req.params;

    if (!checkObjectId(_id)) return returnErrorId(res);

    const group = await Groups.findOne({ _id }, { members: 0 }).exec();

    if (!group) return return404(res);

    await group.delete();

    return res.json({
      msg: 'Se ha eliminado el grupo exitosamente.'
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/deleteGroup`);
  }
}
