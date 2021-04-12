import _ from 'lodash';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { getInfoUserReferred, getNamesUsersList } from '../../ActionsData/UsersActions';
import { returnError, returnErrorParams } from '../../Functions/GlobalFunctions';
import { checkObjectId } from '../../Functions/Validations';
import Referrals from '../../Models/Referrals';
import Users from '../../Models/Users';
import { getTotalsReferrals } from '../../ActionsData/ReferralsActions';
import { validateFormMemberRegisterFromUser } from '../../FormRequest/UsersRequest';
import { addCoursesToUser } from '../../ActionsData/CoursesActions';
import Consolidates from '../../Models/Consolidates';
import validateSimpleRegister from '../../FormRequest/ConsolidatesFormRequest';

const path = 'src/Controllers/publics/referrals.controller';

export async function getReferrals(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;
    const ret: any = {
      referred: null,
      totalsGroups: null,
      totals: null,
      referrals: []
    };

    if (!checkObjectId(userid)) {
      return res.status(401).json({
        msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
      });
    }

    const data = await Referrals.findOne({ _id: userid }, { members: 1 }).exec();

    if (data) {
      ret.referrals = await getNamesUsersList(data.members);
      ret.referrals = _.sortBy(ret.referrals, ['names'], ['asc']);
      ret.totals += await getTotalsReferrals(data.members);

      for (const [index, value] of ret.referrals.entries()) {
        const refMembers = await Referrals.findOne({ _id: value._id }).exec();
        ret.referrals[index] = {
          ...value,
          totalsReferrals: refMembers ? refMembers.members.length : 0
        };
      }

      // get referred data
      const u = await Users.findOne({ _id: userid }, { referred: 1 }).exec();
      if (u && u.referred) {
        const list = await getNamesUsersList([u.referred]);

        if (list.length > 0) {
          ret.referred = list[0] || null;
        }
      }
    }

    const user = await Users.findOne({ _id: userid }, { familyGroupId: 1 }).exec();
    ret.totalsGroups = user && user.familyGroupId ? (user.familyGroupId.length || 0) : 0;

    return res.json({
      msg: `Mis referidos.`,
      ...ret
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getReferrals`);
  }
}

export async function saveReferral(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;

    const validate = await validateFormMemberRegisterFromUser(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    validate.data.referred = userid; // set current id to referred

    const user = new Users(validate.data);
    const password = 'alma1234'; // default password
    user.password = bcrypt.hashSync(password, 10);
    await user.save();

    const referrals = new Referrals({ _id: user._id });
    await referrals.save();

    // save currents courses
    await addCoursesToUser(user._id.toString());

    // get my referrals
    const myReferrals = await Referrals.findOne({ _id: userid }).exec();
    if (myReferrals) {
      myReferrals.members.push(user._id.toString());
      await myReferrals.save();
    }

    return res.status(201).json({
      msg: `Se ha registrado el nuevo miebro exitosamente.`,
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/saveReferral`);
  }
}

export async function getMemberReferred(req: Request, res: Response): Promise<Response> {
  try {
    const { userid, _id } = req.params;

    if (!checkObjectId(userid)) {
      return res.status(401).json({
        msg: 'Disculpe, pero no se logró encontrar los datos de su sesión.'
      });
    }

    if (!checkObjectId(_id)) {
      return res.status(422).json({
        msg: 'Disculpe, pero el miembro seleccionado es incorrecto.'
      });
    }

    const checkMember = await Referrals.find({ _id: userid, members: _id }).countDocuments().exec();
    const checkMember2 = await Users.find({ _id: userid, referred: _id }).countDocuments().exec();

    if (checkMember === 0 && checkMember2 === 0) {
      return res.status(404).json({
        msg: 'Disculpe, pero no está autorizado para visualizar la información de este miembro.'
      });
    }

    const ret = await getInfoUserReferred(_id);

    if (!ret) {
      return res.status(404).json({
        msg: 'Disculpe, pero no se logró encontrar la información solicitada.'
      });
    }

    // get visits

    ret.visits = [];
    const visits = await Consolidates.find({ userid: _id }).sort({ date: -1, created_at: -1 }).exec();

    if (visits.length > 0) {
      const listIds: any[] = _.uniq(visits.map(v => v.referred));
      listIds.push(userid);

      const members = await getNamesUsersList(listIds) || [];

      for (const v of visits) {
        ret.visits.push({
          consolidator: members.find((md: any) => md._id.toString() === v.referred) || null,
          date: v.date || null,
          observation: v.observation || null,
        });
      }
    }

    return res.json({
      msg: `Miembro.`,
      data: ret
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getMemberReferred`);
  }
}

export async function saveReferralVisit(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;
    const validate = validateSimpleRegister(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const consolidate = new Consolidates({
      referred: userid,
      userid: validate.data.userId,
      ...validate.data
    });
    await consolidate.save();

    return res.status(201).json({
      msg: `Se ha registrado la visita al consolidado exitosamente.`
    });

  } catch (error: any) {
    return returnError(res, error, `${path}/saveVisit`);
  }
}
