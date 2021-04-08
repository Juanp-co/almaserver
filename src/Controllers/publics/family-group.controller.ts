import { Request, Response } from 'express';
import moment from 'moment-timezone';
import { returnError, returnErrorParams } from '../../Functions/GlobalFunctions';
import validateFormData from '../../FormRequest/FamiliesGroupsReportsRequest';
import getModelFamiliesGroupsDetails, {
  checkIfUsersBelowAtFamilyGroup, getReportsFamilyGroup, return404,
  returnErrorId,
  returnFamilyGroup404
} from '../../ActionsData/FamiliesGroupsActions';
import FamiliesGroupsReports from '../../Models/FamiliesGroupsReports';
import { checkDate, checkObjectId } from '../../Functions/Validations';
import FamiliesGroups from '../../Models/FamiliesGroups';
import Users from '../../Models/Users';
import { IFamiliesGroupsList } from '../../Interfaces/IFamiliesGroups';


const path = 'src/Controllers/publics/family-group.controller';

export default async function getFamiliesGroups(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;
    let ret: IFamiliesGroupsList[] = [];

    const user = await Users.findOne({ _id: userid }, { familyGroupId: 1 }).exec();

    if (!user) return returnFamilyGroup404(res);

    if (user.familyGroupId && user.familyGroupId.length > 0) {
      ret = await FamiliesGroups.find(
        { _id: { $in: user.familyGroupId } },
        { number: 1, sector: 1, subSector: 1, direction: 1, created_at: 1, }
        ).exec() as IFamiliesGroupsList[];
    }

    return res.json({
      msg: 'Grupos familiares',
      groups: ret
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getReports`);
  }
}

export async function showFamilyGroup(req: Request, res: Response): Promise<Response> {
  try {
    const { userid, _id } = req.params;
    if (!checkObjectId(_id)) return returnErrorId(res);

    if (!(await checkIfUsersBelowAtFamilyGroup(userid, _id))) return returnFamilyGroup404(res);

    const group = await FamiliesGroups.findOne({ _id }).exec();
    if (!group) return return404(res);

    return res.json({
      msg: 'Grupo Familiar',
      group: await getModelFamiliesGroupsDetails(group)
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getReports`);
  }
}

export async function saveFamilyGroupReport(req: Request, res: Response): Promise<Response> {
  try {
    const { userid, _id } = req.params;
    if (!checkObjectId(_id)) return returnErrorId(res);

    if (!(await checkIfUsersBelowAtFamilyGroup(userid, _id))) return returnFamilyGroup404(res);

    const validate = validateFormData(req.body);
    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const r = new FamiliesGroupsReports({
      familyGroupId: _id,
      userid,
      report: {...validate.data}
    });

    await r.save();

    return res.status(201).json({
      msg: 'Se ha agregado el reporte exitosamente.',
      report: r.report
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/saveReport`);
  }
}

export async function reportsFamilyGroup(req: Request, res: Response): Promise<Response> {
  try {
    const { userid, _id } = req.params;
    if (!checkObjectId(_id)) return returnErrorId(res);

    if (!(await checkIfUsersBelowAtFamilyGroup(userid, _id))) return returnFamilyGroup404(res);

    const { initDate, endDate } = req.query;
    const query: any = {};

    if (initDate && checkDate(initDate)) {
      query['report.date'] = { $gte: moment(`${initDate}`).startOf('d').unix() };
      if (checkDate(endDate))
        query['report.date'].$lt = moment(`${endDate}`).endOf('d').unix();
    }

    const data = await getReportsFamilyGroup(query);

    return res.json({
      msg: 'Reporte del grupo familiar',
      data
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/reportsFamilyGroup`);
  }
}
