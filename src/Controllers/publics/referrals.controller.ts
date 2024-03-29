import _ from 'lodash';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { addCoursesToUser } from '../../ActionsData/CoursesActions';
import { getTotalsReferrals } from '../../ActionsData/ReferralsActions';
import { getInfoUserReferred, getNamesUsersList } from '../../ActionsData/UsersActions';
import validateSimpleRegister from '../../FormRequest/ConsolidatesFormRequest';
import { checkIfExistsRoleInList, returnError, returnErrorParams } from '../../Functions/GlobalFunctions';
import { checkObjectId } from '../../Functions/Validations';
import { validateFormMemberRegisterFromUser } from '../../FormRequest/UsersRequest';
import Referrals from '../../Models/Referrals';
import Users from '../../Models/Users';
import Visits from '../../Models/Visits';
import { forceLogout } from '../../Functions/TokenActions';

const path = 'Controllers/publics/referrals.controller';

export async function getReferrals(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenId } = req.body;
    const ret: any = {
      referred: null,
      totalsGroups: null,
      totals: null,
      referrals: []
    };

    const data = await Referrals.findOne({ _id: tokenId }, { members: 1 }).exec();

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
      const u = await Users.findOne({ _id: tokenId }, { referred: 1 }).exec();
      if (u && u.referred) {
        const list = await getNamesUsersList([u.referred]);

        if (list.length > 0) {
          ret.referred = list[0] || null;
        }
      }
    }

    const user = await Users.findOne({ _id: tokenId }, { familyGroupId: 1 }).exec();
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
    const { tokenId } = req.body;
    const { consolidates } = req.query;

    const validate = await validateFormMemberRegisterFromUser(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    // set current id to referred
    if (!validate.data.referred && !consolidates) validate.data.referred = tokenId;

    const user = new Users(validate.data);
    const password = 'alma1234'; // default password
    user.password = bcrypt.hashSync(password, 10);
    await user.save();

    const referrals = new Referrals({ _id: user._id });
    await referrals.save();

    // save currents courses
    await addCoursesToUser(user._id.toString());

    // get referrals
    const _id = user.referred || (consolidates === 'true' ? null : tokenId);

    if (_id) {
      let referreds = await Referrals.findOne({ _id }).exec();
      if (referreds) {
        referreds.members.push(user._id.toString());
        await referreds.save();
      }
      else {
        referreds = new Referrals({
          _id,
          members: [user.referred]
        });
        await referreds.save();
      }
    }

    return res.status(201).json({
      msg: `Se ha registrado el nuevo ${consolidates === 'true' ? 'consolidado' : 'miembro'} exitosamente.`,
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/saveReferral`);
  }
}

export async function getMemberReferred(req: Request, res: Response): Promise<Response> {
  try {
    const { _id } = req.params;
    const { tokenId, tokenRoles } = req.body;

    if (!checkObjectId(_id)) {
      return res.status(422).json({
        msg: 'Disculpe, pero el miembro seleccionado es incorrecto.'
      });
    }

    if (!checkIfExistsRoleInList(tokenRoles, [0, 1, 2])) {
      const consolidator = await Users.find({ _id: tokenId, consolidator: { $eq: true } }).countDocuments().exec();
      const checkMember = await Referrals.find({ _id: tokenId, members: _id }).countDocuments().exec();
      const checkMember2 = await Users.find({ _id: tokenId, referred: _id }).countDocuments().exec();

      if (checkMember === 0 && checkMember2 === 0 && consolidator === 0) {
        return res.status(404).json({
          msg: 'Disculpe, pero no está autorizado para visualizar la información de este miembro.'
        });
      }
    }

    const ret = await getInfoUserReferred(_id);

    if (!ret) {
      return res.status(404).json({
        msg: 'Disculpe, pero no se logró encontrar la información solicitada.'
      });
    }

    // get visits

    ret.visits = [];
    const visits = await Visits.find({ userid: _id }).sort({ date: -1, created_at: -1 }).exec();

    if (visits.length > 0) {
      const listIds: any[] = _.uniq(visits.map(v => v.referred));
      listIds.push(tokenId);

      const members = await getNamesUsersList(listIds) || [];

      for (const v of visits) {
        const consolidator = members.find((md: any) => md._id.toString() === v.referred) || null;
        if (consolidator) {
          ret.visits.push({
            consolidator,
            date: v.date || null,
            observation: v.observation || null,
            action: v.action || null,
          });
        }
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
    const { tokenId } = req.body;
    const validate = validateSimpleRegister(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const consolidate = new Visits({
      referred: validate.data.visitor || tokenId,
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

export async function removeReferral(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenId } = req.body;
    const { _id } = req.params;

    const referrals = await Referrals.findOne({ _id: tokenId }).exec();

    // logout
    if (!referrals) return forceLogout(res, `${req.query.token}`);

    referrals.members = referrals.members.filter(m => m !== _id);

    const user = await Users.findOne({ _id }, { referred: 1 }).exec();

    if (user) {
      user.referred = null;
      await user.save();
    }

    await referrals.save();

    return res.status(200).json({
      msg: `Se ha removido el hijo espiritual exitosamente.`,
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/removeReferral`);
  }
}
