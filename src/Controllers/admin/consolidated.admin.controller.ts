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
    const { initDate, endDate, input, value } = req.query;
    const query: any = {};
    const query2: any = {};
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

    const consolidates = await Consolidates.find(query).sort(sort).exec();

    if (consolidates.length > 0) {
      const listIds: string[] = [];
      consolidates.forEach(c => {
        if (c.userid && !listIds.includes(c.userid)) listIds.push(c.userid);
        if (c.consolidatorId && !listIds.includes(c.consolidatorId)) listIds.push(c.consolidatorId);
      });

      // find all members
      ret.members = await Users.find(
        {
          $or: [
            { consolidatorId: { $ne: null }, ...query2 },
            { _id: { $in: listIds || [] } }
          ]
        },
        { names: 1, lastNames: 1, document: 1, gender: 1, phone: 1 }
      ).exec() as any;

      const listToCheck: string[] = [];
      let listIdsPending: string[] = [];

      for (const c of consolidates) {

        // add to list for the next check
        if (c.userid && !listToCheck.includes(c.userid)) listToCheck.push(c.userid);

        // check last visit and add or remove id from list
        if (moment().diff(moment(`${c.date}`, 'YYYY-MM-DD', true), 'months') >= 1) {
          if (c.userid && !listIdsPending.includes(c.userid)) listIdsPending.push(c.userid);
        }
        else listIdsPending = listIdsPending.filter( lip => lip !== c.userid);

        ret.consolidates.push({
          _id: c._id,
          consolidator: ret.members.find((m: any) => m._id.toString() === c.consolidatorId) || null,
          member: ret.members.find((m: any) => m._id.toString() === c.userid) || null,
          date: c.date,
          observation: c.observation
        });
      }

      // check whats ids was not recived visits
      const idsMembers = ret.members.length > 0 ? ret.members.map((m: any) => m._id.toString()) : [];
      const diff = _.difference(idsMembers, listToCheck);
      ret.pendingVisits = _.uniq(listIdsPending.concat(diff || []));
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
      consolidatorId: userid,
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
      { consolidatorId: { $ne: null } },
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
