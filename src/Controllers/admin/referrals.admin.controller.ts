import { Request, Response } from 'express';
import getReferralsData from '../../ActionsData/ReferralsActions';
import { getData } from '../../ActionsData/UsersActions';
import { returnError } from '../../Functions/GlobalFunctions';
import { checkObjectId } from '../../Functions/Validations';
import { IReferralsList } from '../../Interfaces/IReferrals';
import Referrals from '../../Models/Referrals';

const path = 'Controllers/admin/referrals.admin.controller';

export default async function getReferrals(req: Request, res: Response): Promise<Response> {
  try {
    const { _id } = req.params;
    const ret = {
      user: null,
      totals: 0,
      members: []
    } as IReferralsList;

    if (!checkObjectId(_id)) {
      return res.status(401).json({
        msg: 'Disculpe, pero el usuario seleccionado es incorrecto.'
      });
    }

    const user: any = await getData(_id, { _id: 1, names: 1, lastNames: 1, document: 1, referred: 1 });

    if (!user) {
      return res.status(404).json({
        msg: 'Disculpe, pero el usuario seleccionado no existe.'
      });
    }

    ret.user = Object.assign({}, user._doc);

    if (ret.user.referred && checkObjectId(ret.user.referred)) {
      ret.user.referred = await getData(ret.user.referred, { _id: 1, names: 1, lastNames: 1, document: 1 });
    }
    else ret.user.referred = null;

    const data = await Referrals.findOne({ _id }, { members: 1 }).exec();

    if (data) {
      ret.members = await getReferralsData(data.members);
      ret.totals = ret.members.length;
    }

    return res.json({
      msg: `Listado de referidos.`,
      data: ret
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getReferrals`);
  }
}
