import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { addCoursesToUser } from '../../ActionsData/CoursesActions';
import { getLimitSkipSortSearch, returnError, returnErrorParams } from '../../Functions/GlobalFunctions';
import { validateFormMemberRegisterFromUser } from '../../FormRequest/UsersRequest';
import Referrals from '../../Models/Referrals';
import Users from '../../Models/Users';
import { getModelDataListDevotionals, getQueryParamsList } from '../../ActionsData/DevotionalsActions';
import Devotionals from '../../Models/Devotionals';
import returnDevotionalResponse from '../../ActionsData/DevotionalsActions';
import { checkObjectId } from '../../Functions/Validations';

const path = 'Controllers/publics/devotionals.controller';

export async function getDevotionalsPublic(req: Request, res: Response): Promise<Response> {
  try {
    const { limit, skip, sort } = getLimitSkipSortSearch(req.query);
    const query = getQueryParamsList(req.query);

    const devotionals = await Devotionals.find(query,  { __v: 0 })
      .skip(skip)
      .limit(limit)
      .sort(sort)
      .exec();

    return res.json({
      msg: `Devocionales.`,
      devotionals: await getModelDataListDevotionals(devotionals, false)
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getDevotionals`);
  }
}

export async function getTotalsDevotionalsPublic(req: Request, res: Response): Promise<Response> {
  try {
    const query = getQueryParamsList(req.query);

    const totals = await Devotionals.find(query)
      .countDocuments()
      .exec();

    return res.json({
      msg: `Devocionales.`,
      data: {
        totals
      }
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getDevotionals`);
  }
}

export async function showDevotionalPublic(req: Request, res: Response): Promise<Response> {
  try {
    const { _id } = req.params;
    if (!checkObjectId(_id)) return returnDevotionalResponse(res, 1);

    const devotional = await Devotionals.findOne({ _id },  { __v: 0 }).exec();

    if (!devotional) return returnDevotionalResponse(res, 0);

    const ret: any[] = await getModelDataListDevotionals([devotional], false);

    return res.json({
      msg: `Detalles del devocional.`,
      devotional: ret[0] || null
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/showDevotional`);
  }
}
