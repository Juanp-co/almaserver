import _ from 'lodash';
import moment from 'moment-timezone';
import { Request, Response } from 'express';
import validateSimpleRegister from '../../FormRequest/ConsolidatesFormRequest';
import { returnError, returnErrorParams } from '../../Functions/GlobalFunctions';
import { checkDate } from '../../Functions/Validations';
import Users from '../../Models/Users';
import Visits from '../../Models/Visits';
import { IUserSimpleInfo } from '../../Interfaces/IUser';

const path = 'Controllers/admin/consolidated.admin.controller';

// =====================================================================================================================

export default async function getConsolidates(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenId } = req.params;
    const { initDate, endDate, input, value } = req.query;
    const query: any = {};
    const query2: any = { referred: { $ne: null }, consolidated: { $ne: false } };
    const sort: any = {};
    const ret: any = {
      consolidates: [],
      members: [],
      pendingVisits: []
    };

    if (input && input === 'date') sort.date = value && value === '1' ? 1 : -1;

    if (initDate && checkDate(initDate)) {
      query.date = { $gte: moment(`${initDate}`).startOf('d').unix() };
      query2.created_at = { $gte: moment(`${initDate}`).startOf('d').unix() };
      if (checkDate(endDate)) {
        query.date.$lt = moment(`${endDate}`).endOf('d').unix();
        query2.created_at.$lt = moment(`${endDate}`).endOf('d').unix();
      }
    }

    const members = await Users.find({ referred: { $ne: null }, ...query}).exec();
    const visits = await Visits.find(query).sort(sort).exec();

    if (members.length > 0) {
      const listIds: string[] = [tokenId];
      if (members) {
        members.forEach(c => {
          if (!listIds.includes(c._id.toString())) listIds.push(c._id.toString());
          if (c.referred && !listIds.includes(c.referred)) listIds.push(c.referred);
        });
      }
      if (visits) {
        visits.forEach(v => {
          if (v.referred && !listIds.includes(v.referred)) listIds.push(v.referred);
          if (v.userid && !listIds.includes(v.userid)) listIds.push(v.userid);
        });
      }

      // find all members
      ret.members = await Users.find(
        { $or: [ query2, { _id: { $in: listIds || [] } } ] },
        { names: 1, lastNames: 1, document: 1, gender: 1, phone: 1, picture: 1, position: 1 }
      )
        .sort({ names: 1 })
        .exec() as IUserSimpleInfo[];

      const listToCheck: string[] = [];
      let listIdsPending: string[] = [];

      for (const v of visits) {
        // add to list for the next check
        if (v.userid && !listToCheck.includes(v.userid)) listToCheck.push(v.userid);

        if (moment().diff(moment(`${v.date}`, 'YYYY-MM-DD', true), 'months') >= 1) {
          if (v.userid && !listIdsPending.includes(v.userid)) listIdsPending.push(v.userid);
        }
        else listIdsPending = listIdsPending.filter( lip => lip !== v.userid);

        const consolidator = ret.members.find((md: any) => md._id.toString() === v.referred) || null;
        const member = ret.members.find((md: any) => md._id.toString() === v.userid) || null;

        if (member && consolidator) {
          ret.consolidates.push({
            consolidator,
            member,
            date: v.date || null,
            observation: v.observation || null,
            action: v.action || 'Visita',
          });
        }
      }

      for (const m of members) {
        // add to list for the next check
        if (!listToCheck.includes(m._id.toString())) listToCheck.push(m._id.toString());
      }

      // check whats ids was not recived visits
      const idsMembers = ret.members.length > 0 ? ret.members.map((m: any) => m._id.toString()) : [];
      const diff = _.difference(idsMembers, listToCheck);
      ret.pendingVisits = _.uniq(listIdsPending.concat(diff || []));
      ret.pendingVisits = ret.pendingVisits.filter((pv: string) => pv !== tokenId);
    }

    return res.json({
      msg: `Consolidaciones.`,
      data: ret
    });

  } catch (error: any) {
    return returnError(res, error, `${path}/getConsolidates`);
  }
}

export async function saveConsolidateVisit(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenId } = req.body;
    const validate = validateSimpleRegister(req.body);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const visit = new Visits({
      referred: tokenId,
      userid: validate.data.userId,
      ...validate.data
    });
    await visit.save();

    return res.status(201).json({
      msg: `Se ha registrado la visita al consolidado exitosamente.`
    });

  } catch (error: any) {
    return returnError(res, error, `${path}/saveVisit`);
  }
}

export async function getConsolidatesMembers(req: Request, res: Response): Promise<Response> {
  try {
    const members = await Users.find(
      { referred: { $ne: null }, consolidated: { $ne: false } },
      { names: 1, lastNames: 1, document: 1, gender: 1, phone: 1, position: 1, picture: 1 }
      )
      .sort({ names: 1 })
      .exec();

    return res.json({
      msg: `Miembros`,
      members
    });

  } catch (error: any) {
    return returnError(res, error, `${path}/getConsolidatesMembers`);
  }
}
