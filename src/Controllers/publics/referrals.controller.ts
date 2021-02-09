import { Request, Response } from 'express';
import { getNamesUsersList } from '../../ActionsData/UsersActions';
import { returnError } from '../../Functions/GlobalFunctions';
import { checkObjectId } from '../../Functions/Validations';
import { IUserSimpleInfo } from '../../Interfaces/IUser';
import Referrals from '../../Models/Referrals';

const path = 'Controllers/publics/referrals.controller';

export default async function getReferrals(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;
    let referrals: IUserSimpleInfo[] = [];

    if (!checkObjectId(userid)) {
      return res.status(401).json({
        msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
      });
    }

    const data = await Referrals.findOne({ _id: userid }, { members: 1 }).exec();

    if (data) referrals = await getNamesUsersList(data.members);

    return res.json({
      msg: `Mis referidos.`,
      referrals
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getReferrals`);
  }
}
