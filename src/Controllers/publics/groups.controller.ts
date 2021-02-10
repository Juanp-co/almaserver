import _ from 'lodash';
import { Request, Response } from 'express';
import Referrals from '../../Models/Referrals';
import { checkObjectId } from '../../Functions/Validations';
import Users from '../../Models/Users';
import CoursesUsers from '../../Models/CoursesUsers';
import { returnError } from '../../Functions/GlobalFunctions';
import { getNamesUsersList } from '../../ActionsData/UsersActions';
import Groups from '../../Models/Groups';

const path = 'src/Controllers/publics/groups.controller';

export default async function getGroup(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;

    if (!checkObjectId(userid)) {
      return res.status(401).json({
        msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
      });
    }

    const data = await Groups.findOne({ members: userid }).exec();

    return res.json({
      msg: 'Mi grupo familiar',
      group: !data ?
        null :
        {
          _id: data._id,
          name: data.name,
          code: data.code,
          members: await getNamesUsersList(
            _.uniq(data.members || []),
            { names: 1, lastNames: 1, direction: 1 }
          ),
          created_at: data.created_at,
          updated_at: data.updated_at,
        }
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getGroup`);
  }
}

export async function getMemberGroup(req: Request, res: Response): Promise<Response> {
  try {

    const { userid, _id } = req.params;
    const ret: any = {
      member: null,
      totalReferrals: 0,
      totalCourses: 0
    };

    if (!checkObjectId(userid)) {
      return res.status(403).json({
        msg: 'Disculpe, pero no está autorizado para ver este contenido.'
      });
    }

    if (!checkObjectId(_id)) {
      return res.status(422).json({
        msg: 'Disculpe, pero el miembro seleccionado es incorrecto.'
      });
    }

    const checkMember = await Groups.find({ members: { $eq: [userid, _id] } }).countDocuments().exec();

    if (checkMember === 0) {
      return res.status(404).json({
        msg: 'Disculpe, pero el miembro seleccionado no pertenece a su grupo familiar.'
      });
    }

    ret.member = await Users.findOne(
      { _id },
      { names: 1, lastNames: 1, direction: 1, phone: 1 }
    ).exec();

    if (!ret.member) {
      return res.status(404).json({
        msg: 'Disculpe, pero no se logró encontrar la información del miembro.'
      });
    }

    // get totals members referrals
    const referrals = await Referrals.findOne({ _id: ret.member._id }).exec();

    if (referrals) {
      ret.totalReferrals = referrals.members.length || 0;
    }

    // get totals courses
    ret.totalCourses = await CoursesUsers.find({ userid: ret.member._id.toString() }).countDocuments().exec();

    return res.json({
      msg: `Miembro.`,
      data: ret
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getMemberGroup`);
  }
}
