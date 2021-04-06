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
    let query3: any = null;
    let pending = false;
    const sort: any = {};
    const ret: any = {
      consolidates: [],
      members: [],
      pendingVisits: []
    };

    if (input && input === 'date') {
      sort.date = value && value === '1' ? 1 : -1;
    }

    if (initDate && checkDate(initDate)) {

      // get pending
      const compare = moment().startOf('d');
      pending = compare.diff(moment(`${initDate}`).startOf('d'), 'months') >= 1;

      query3 = {};
      query.date = { $gte: moment(`${initDate}`).startOf('d').unix() };
      query2.created_at = { $gte: moment(`${initDate}`).startOf('d').unix() };
      query3.date = { $lt: moment(`${initDate}`).startOf('d').subtract(1, 'months').endOf('d').unix() };
      if (checkDate(endDate)) {
        query.date.$lt = moment(`${endDate}`).endOf('d').unix();
        query2.created_at.$lt = moment(`${endDate}`).endOf('d').unix();
        query3.date = { $lt: moment(`${endDate}`).startOf('d').subtract(1, 'months').endOf('d').unix() };
      }
    }

    const consolidates = await Consolidates.find(query).sort(sort).exec();

    if (consolidates.length > 0) {
      const listIds: string[] = [];
      consolidates.forEach(c => {
        if (c.userid) listIds.push(c.userid);
        if (c.consolidatorId) listIds.push(c.consolidatorId);
      });

      // find all members
      ret.members = await Users.find(
        {
          $or: [
            { consolidatorId: { $ne: null }, ...query2 },
            { _id: { $in: _.uniq(listIds) || [] } }
          ]
        },
        { names: 1, lastNames: 1, document: 1, gender: 1, phone: 1 }
      ).exec() as any;

      let pendingForVisits = false;

      for (const c of consolidates) {

        if (!pendingForVisits) {
          pendingForVisits = moment().diff(moment(`${c.date}`, 'DD-MM-YYYY', true), 'months') >= 1;
        }

        ret.consolidates.push({
          _id: c._id,
          consolidator: ret.members.find((m: any) => m._id.toString() === c.consolidatorId) || null,
          member: ret.members.find((m: any) => m._id.toString() === c.userid) || null,
          date: c.date,
          observation: c.observation
        });
      }

      // check pendings for visits
      if (pending) {
        if (pendingForVisits) {
          const list = await Consolidates.find(
            query3 || { date: { $lt: moment().startOf('d').subtract(1, 'months').endOf('d').unix() } },
            { userid: 1 }
          ).exec();

          ret.pendingVisits = list.length > 0 ? _.uniq(list.map(l => l.userid)) : [];
        }
      }
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
