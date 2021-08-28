import _ from 'lodash';
import { Request, Response } from 'express';
import getModelFamiliesGroupsDetails, {
  checkIfExistsGroup,
  checkIfMembersWasChanged,
  getModelFamiliesGroupsMembersDetails, getQueryParamsList,
  getUsersIdsList,
  return404,
  returnErrorId
} from '../../ActionsData/FamiliesGroupsActions';
import { setFamilyGroupIdValueUsers } from '../../ActionsData/UsersActions';
import validateDataForm, { validateUpdateMembersForm } from '../../FormRequest/FamiliesGroupsRequest';
import { getLimitSkipSortSearch, returnError, returnErrorParams } from '../../Functions/GlobalFunctions';
import { checkObjectId } from '../../Functions/Validations';
import FamiliesGroups from '../../Models/FamiliesGroups';
import FamiliesGroupsReports from '../../Models/FamiliesGroupsReports';

const path = 'Controllers/admin/families-groups.admin.controller';

export default async function getFamiliesGroups(req: Request, res: Response) : Promise<Response> {
  try {
    const { limit, skip, sort } = getLimitSkipSortSearch(req.query);
    const query = getQueryParamsList(req.query);

    const groups = await FamiliesGroups.find(
      query,
      { number: 1, sector: 1, subSector: 1, created_at: 1, }
      )
      .skip(skip)
      .limit(limit)
      .sort(sort)
      .exec();

    return res.json({
      msg: 'Grupos familiares',
      groups
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getFamiliesGroups`);
  }
}

export async function getFamiliesGroupsCounters(req: Request, res: Response) : Promise<Response> {
  try {
    const query = getQueryParamsList(req.query);

    const totals = await FamiliesGroups.find(query).countDocuments().exec();

    return res.json({
      msg: 'Total de grupos familiares',
      totals
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getFamiliesGroups`);
  }
}

export async function showFamilyGroup(req: Request, res: Response) : Promise<Response> {
  try {
    const { _id } = req.params;
    if (!checkObjectId(_id)) return returnErrorId(res);

    const group = await FamiliesGroups.findOne({ _id }).exec();
    if (!group) return return404(res);

    return res.json({
      msg: 'Grupo Familiar',
      group: await getModelFamiliesGroupsDetails(group)
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/showFamilyGroup`);
  }
}

export async function saveFamilyGroup(req: Request, res: Response) : Promise<Response> {
  try {
    const validate = validateDataForm(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    // check if exist number in sector and subSector
    if ((await checkIfExistsGroup({
      sector: validate.data.sector,
      subSector: validate.data.subSector,
      number: validate.data.number,
    }))) {
      return res.status(422).json({
        msg: `Disculpe, pero el número del grupo ya se encuentra registrado para este sector y sub-sector.`,
      });
    }

    const group = new FamiliesGroups(validate.data);
    await group.save();

    return res.json({
      msg: 'Se ha creado el nuevo grupo exitosamente.',
      group: await getModelFamiliesGroupsDetails(group)
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/saveFamilyGroup`);
  }
}

export async function updateFamilyGroup(req: Request, res: Response) : Promise<Response> {
  try {
    const { _id } = req.params;
    if (!checkObjectId(_id)) return returnErrorId(res);

    const validate = validateDataForm(req.body);
    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const group = await FamiliesGroups.findOne(
      { _id },
      { __v: 0, members: 0, created_at: 0 }
    ).exec();

    if (!group) return return404(res);

    if (validate.data.number !== group.number) {
      // check if exist number in sector and subSector
      if ((await checkIfExistsGroup({
        sector: validate.data.sector,
        subSector: validate.data.subSector,
        number: validate.data.number,
        _id: { $ne: _id }
      }))) {
        return res.status(422).json({
          msg: `Disculpe, pero el número del grupo ya se encuentra registrado para este sector y sub-sector.`,
        });
      }
    }

    group.number = validate.data.number || group.number;
    group.direction = validate.data.direction;
    group.location.coordinates = validate.data.location.coordinates;
    group.sector = validate.data.sector;
    group.subSector = validate.data.subSector;

    await group.save();

    return res.json({
      msg: 'Se ha actualizado el grupo familiar exitosamente.',
      group
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/updateFamilyGroup`);
  }
}

export async function updateMembersFamilyGroup(req: Request, res: Response) : Promise<Response> {
  try {
    const { _id } = req.params;
    if (!checkObjectId(_id)) return returnErrorId(res);

    const validate = validateUpdateMembersForm(req.body);
    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const group = await FamiliesGroups.findOne({ _id }, { members: 1 }).exec();

    if (!group) return return404(res);

    // check if the members of the group was changed
    if (checkIfMembersWasChanged(group.members, validate.data.members) > 0) {
      // remove previous members
      await setFamilyGroupIdValueUsers(
        getUsersIdsList(group.members),
        group._id.toString(),
        true
      );
      // update new members
      group.members.leaderId = validate.data.members.leaderId;
      group.members.assistantsIds = _.uniq(validate.data.members.assistantsIds);
      group.members.helperId = validate.data.members.helperId;
      group.members.hostId = validate.data.members.hostId;
      group.members.masterId = validate.data.members.masterId;

      await group.save();

      await setFamilyGroupIdValueUsers(
        getUsersIdsList(group.members),
        group._id.toString()
      );
    }

    return res.json({
      msg: 'Grupo Familiar',
      members: await getModelFamiliesGroupsMembersDetails(group.members)
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/updateMembersFamilyGroup`);
  }
}

export async function deleteFamilyGroup(req: Request, res: Response) : Promise<Response> {
  try {
    const { _id } = req.params;
    if (!checkObjectId(_id)) return returnErrorId(res);

    const group: any = await FamiliesGroups.findOne({ _id }).exec();

    if (!group) return return404(res);

    // check if exists reports
    const exist = await FamiliesGroupsReports.find({ familyGroupId: _id }).countDocuments().exec();

    if (exist > 0) {
      return res.status(422).json({
        msg: 'Disculpe, pero este grupo no puede eliminarse debido a que ya tiene reportes registrados.'
      });
    }

    // remove the 'familyGroupId' from users
    await setFamilyGroupIdValueUsers(
      getUsersIdsList(group.members),
      group._id.toString(),
      true
    );
    // delete
    await group.delete();

    return res.json({
      msg: 'Se ha eliminado el grupo familiar exitosamente.'
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/deleteFamilyGroup`);
  }
}
