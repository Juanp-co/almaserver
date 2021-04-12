import _ from 'lodash';
import moment from 'moment-timezone';
import { Request, Response } from 'express';
import validateSimpleRegister from '../../FormRequest/ConsolidatesFormRequest';
import { returnError, returnErrorParams } from '../../Functions/GlobalFunctions';
import { checkDate } from '../../Functions/Validations';
import Consolidates from '../../Models/Consolidates';
import Users from '../../Models/Users';

const path = 'Controllers/admin/users.admin.controller';

// =====================================================================================================================

export default async function getConsolidates(req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.params;
    const { initDate, endDate, input, value } = req.query;
    const query: any = {};
    const query2: any = { referred: { $ne: null } };
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
    const visits = await Consolidates.find(query).sort(sort).exec();

    if (members.length > 0) {
      const listIds: string[] = [userid];
      members.forEach(c => {
        if (!listIds.includes(c._id.toString())) listIds.push(c._id.toString());
        if (c.referred && !listIds.includes(c.referred)) listIds.push(c.referred);
      });

      // find all members
      ret.members = await Users.find(
        {
          $or: [
            query2,
            { _id: { $in: listIds || [] } }
          ]
        },
        { names: 1, lastNames: 1, document: 1, gender: 1, phone: 1 }
      ).exec() as any;

      const listToCheck: string[] = [];
      let listIdsPending: string[] = [];

      for (const m of members) {
        // add to list for the next check
        if (!listToCheck.includes(m._id.toString())) listToCheck.push(m._id.toString());

        const index = visits.findIndex(v => v.userid === m._id.toString());

        // check last visit and add or remove id from list
        if (index > -1) {
          if (moment().diff(moment(`${visits[index].date}`, 'YYYY-MM-DD', true), 'months') >= 1) {
            if (!listIdsPending.includes(m._id.toString())) listIdsPending.push(m._id.toString());
          }
          else listIdsPending = listIdsPending.filter( lip => lip !== m._id.toString());

          ret.consolidates.push({
            consolidator: ret.members.find((md: any) => md._id.toString() === m.referred) || null,
            member: ret.members.find((md: any) => md._id.toString() === m._id.toString()) || null,
            date: visits[index] && visits[index].date ? visits[index].date : null,
            observation: visits[index] && visits[index].observation ? visits[index].observation : null,
          });
        }
        else if (!listIdsPending.includes(m._id.toString())) listIdsPending.push(m._id.toString());
      }

      // check whats ids was not recived visits
      const idsMembers = ret.members.length > 0 ? ret.members.map((m: any) => m._id.toString()) : [];
      const diff = _.difference(idsMembers, listToCheck);
      ret.pendingVisits = _.uniq(listIdsPending.concat(diff || []));
      ret.pendingVisits = ret.pendingVisits.filter((pv: string) => pv !== userid);
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

export async function getConsolidatesMembers(req: Request, res: Response): Promise<Response> {
  try {
    const members = await Users.find(
      { referred: { $ne: null } },
      { names: 1, lastNames: 1, document: 1, gender: 1, phone: 1 }
      ).exec();

    return res.json({
      msg: `Miembros`,
      members
    });

  } catch (error: any) {
    return returnError(res, error, `${path}/getConsolidatesMembers`);
  }
}
