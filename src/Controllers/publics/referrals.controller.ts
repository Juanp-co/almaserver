import { Request, Response } from 'express';
import { getNamesUsersList, getUserData } from '../../ActionsData/UsersActions';
import { returnError } from '../../Functions/GlobalFunctions';
import { checkObjectId } from '../../Functions/Validations';
import CoursesUsers from '../../Models/CoursesUsers';
import Referrals from '../../Models/Referrals';
import Users from '../../Models/Users';
import { getTotalsReferrals } from '../../ActionsData/ReferralsActions';

const path = 'src/Controllers/publics/referrals.controller';

export async function getReferrals(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;
    const ret: any = {
      referred: null,
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
      ret.totals += await getTotalsReferrals(data.members);

      for (let [index, value] of ret.referrals.entries()) {
        ret.referrals[index] = { ...value._doc, totalsReferrals: 0 };
        const refMembers = await Referrals.findOne({ _id: value._id }).exec();
        ret.referrals[index].totalsReferrals = refMembers ? refMembers.members.length : 0;
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

    return res.json({
      msg: `Mis referidos.`,
      ...ret
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getReferrals`);
  }
}

export async function getMemberReferred(req: Request, res: Response): Promise<Response> {
  try {
    const { userid, _id } = req.params;
    const ret: any = {
      member: null,
      totalCourses: 0,
      totalReferrals: 0,
      referrals: []
    };

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

    ret.member = await Users.findOne(
      { _id },
      {
        names: 1,
        lastNames: 1,
        phone: 1,
        email: 1,
        gender: 1,
        civilStatus: 1,
        department: 1,
        city: 1,
        locality: 1 ,
        direction: 1,
      }
    ).exec();

    if (!ret.member) {
      return res.status(404).json({
        msg: 'Disculpe, pero no se logró encontrar la información solicitada.'
      });
    }

    // get totals members referrals
    const referrals = await Referrals.findOne({ _id: ret.member._id }).exec();

    if (referrals) {
      // get data referrals and get totals subreferrals
      ret.referrals = await getNamesUsersList(referrals.members);
      ret.totalReferrals += await getTotalsReferrals(referrals.members);

      for (let [index, value] of ret.referrals.entries()) {
        ret.referrals[index] = { ...value._doc, totalsReferrals: 0 };
        const refMembers = await Referrals.findOne({ _id: value._id }).exec();
        ret.referrals[index].totalsReferrals = refMembers ? refMembers.members.length : 0;
      }
    }

    // get totals courses
    ret.totalCourses = await CoursesUsers.find({ userid: ret.member._id.toString() }).countDocuments().exec();

    return res.json({
      msg: `Miembro.`,
      data: ret
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getMemberReferred`);
  }
}
