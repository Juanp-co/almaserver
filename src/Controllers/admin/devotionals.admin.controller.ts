import { Request, Response } from 'express';
import moment from 'moment-timezone';
import returnDevotionalResponse, {
  getModelDataListDevotionals,
  getQueryParamsList
} from '../../ActionsData/DevotionalsActions';
import validateForm from '../../FormRequest/DevotionalsRequest';
import { getLimitSkipSortSearch, returnError } from '../../Functions/GlobalFunctions';
import { checkObjectId, checkUrl, isBase64 } from '../../Functions/Validations';
import Devotionals from '../../Models/Devotionals';
import uploadFile, { deleteFile } from '../../Services/AWSService';

const path = 'Controllers/events/devotionals.controller';

export default async function getDevotionals(req: Request, res: Response): Promise<Response> {
  try {
    const { limit, skip, sort } = getLimitSkipSortSearch(req.query);
    const query = getQueryParamsList(req.query);

    const devotionals = await Devotionals.find(
      query,
      { description: 0, urlVideo: 0, __v: 0 }
    )
      .skip(skip)
      .limit(limit)
      .sort(sort)
      .exec();

    return res.json({
      msg: `Devocionales.`,
      devotionals: await getModelDataListDevotionals(devotionals)
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getDevotionals`);
  }
}

export async function getTotalsDevotionals(req: Request, res: Response): Promise<Response> {
  try {
    const query = getQueryParamsList(req.query);
    const totals = await Devotionals.find(query).countDocuments().exec();
    return res.json({
      msg: `Total de devocionales.`,
      data: { totals }
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getTotalsDevotionals`);
  }
}

export async function showDevotional(req: Request, res: Response): Promise<Response> {
  try {
    const { _id } = req.params;
    if (!checkObjectId(_id)) return returnDevotionalResponse(res, 1);

    const devotional = await Devotionals.findOne({ _id },  { __v: 0 }).exec();

    if (!devotional) return returnDevotionalResponse(res, 0);

    const ret: any[] = await getModelDataListDevotionals([devotional], false);

    return res.json({
      msg: `Detalles del devocional.`,
      devotional: ret[0] || null
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/showDevotional`);
  }
}

export async function updateDevotional(req: Request, res: Response): Promise<Response> {
  try {
    const { _id } = req.params;
    const validate = validateForm(req.body);

    if (!checkObjectId(_id)) return returnDevotionalResponse(res, 1);
    if (validate.errors.length > 0) return returnDevotionalResponse(res, 2, validate.errors);

    const devotional = await Devotionals.findOne({ _id },  { __v: 0 }).exec();

    if (!devotional) return returnDevotionalResponse(res, 0);

    if (validate.data.picture !== devotional.picture) {
      if (validate.data.picture) {
        const s3 = process.env.AWS_S3_BUCKET || null;
        if (!s3) return returnDevotionalResponse(res, 3);
        if (devotional.picture !== null && devotional.picture.indexOf(`${s3}`))
          await deleteFile(devotional.picture);

        if (isBase64(validate.data.picture)) {
          const newUrl = `alma/devotionals/devotional-${devotional._id.toString()}-${moment().tz('America/Bogota').unix()}`;
          await uploadFile(newUrl, validate.data.picture);
          devotional.picture = `${s3}/${newUrl}.jpg`;
        }
        else if (checkUrl(validate.data.picture)) {
          devotional.picture = validate.data.picture;
        }
      }
      else devotional.picture = validate.data.picture || null;
    }

    devotional.title = validate.data.title;
    devotional.description = validate.data.description;
    devotional.urlVideo = validate.data.urlVideo;
    await devotional.save();

    return res.json({
      msg: `Se ha actualizado el devocional exitosamente.`,
      devotional
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/updateDevotional`);
  }
}

export async function saveDevotional(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenId } = req.body;
    const validate = validateForm(req.body);

    if (validate.errors.length > 0) return returnDevotionalResponse(res, 2, validate.errors);
    const devotional = new Devotionals(validate.data);
    devotional.userid = tokenId;

    if (validate.data.picture) {
      if (isBase64(validate.data.picture)) {
        const s3 = process.env.AWS_S3_BUCKET || null;
        if (!s3) return returnDevotionalResponse(res, 3);
        const newUrl = `alma/devotionals/devotional-${devotional._id.toString()}-${moment().tz('America/Bogota').unix()}`;
        await uploadFile(newUrl, validate.data.picture);
        devotional.picture = `${s3}/${newUrl}.jpg`;
      }
      else if (checkUrl(validate.data.picture)) {
        devotional.picture = validate.data.picture;
      }
    }

    await devotional.save();
    const ret: any[] = await getModelDataListDevotionals([devotional], false);

    return res.json({
      msg: `Se registrado el devocional exitosamente.`,
      devotional: ret[0] || null
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/saveDevotional`);
  }
}

export async function deleteDevotional(req: Request, res: Response): Promise<Response> {
  try {
    const { _id } = req.params;
    if (!checkObjectId(_id)) return returnDevotionalResponse(res, 1);

    const devotional = await Devotionals.findOne({ _id },  { _id: 1, picture: 1 }).exec();
    if (!devotional) return returnDevotionalResponse(res, 0);

    const s3 = process.env.AWS_S3_BUCKET || null;
    if (devotional.picture && devotional.picture?.indexOf(`${s3}`) > -1) deleteFile(devotional.picture);

    // delete
    await devotional.delete();

    return res.json({
      msg: `Se ha eliminado el devocional exitosamente.`
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/deleteDevotional`);
  }
}
