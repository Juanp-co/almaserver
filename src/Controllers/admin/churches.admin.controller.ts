import moment from 'moment-timezone';
import { Request, Response } from 'express';
import { getChurchData, responsesErrorChurches } from '../../ActionsData/ChurchesActions';
import { validateRegisterOrUpdateChurch } from '../../FormRequest/ChurchesFormRequest';
import { returnError } from '../../Functions/GlobalFunctions';
import { checkObjectId, checkUrl, isBase64 } from '../../Functions/Validations';
import Churches from '../../Models/Churches';
import Users from '../../Models/Users';
import uploadFile, { deleteFile } from '../../Services/AWSService';

const path = 'Controllers/admin/churches.admin.controller';

export async function getChurches(req: Request, res: Response): Promise<Response> {
  try {
    const churches = await Churches.find({}, { userid: 0, created_at: 0, updated_at: 0, __v: 0 }).exec();
    return res.json({
      msg: `Listado de iglesias`,
      churches
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getChurches`);
  }
}

export async function showChurch(req: Request, res: Response): Promise<Response> {
  try {
    const { _id } = req.params;
    if (!checkObjectId(_id)) return responsesErrorChurches(res, 1);

    const church = await getChurchData(_id, true);

    if (!church) return responsesErrorChurches(res, 0);

    return res.json({
      msg: `Detalles iglesia`,
      church
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/showChurch`);
  }
}

export async function updateChurch(req: Request, res: Response): Promise<Response> {
  try {
    const { _id } = req.params;
    const validate = validateRegisterOrUpdateChurch(req.body);

    if (!checkObjectId(_id)) return responsesErrorChurches(res, 1);
    if (validate.errors.length > 0) return responsesErrorChurches(res, 1, validate.errors);

    const church = await Churches.findOne({ _id }, { userid: 0, created_at: 0, updated_at: 0, __v: 0 }).exec();

    if (!church) return responsesErrorChurches(res, 0);

    if (validate.data.picture !== church.picture) {
      if (isBase64(validate.data.picture)) {
        const s3 = process.env.AWS_S3_BUCKET || null;
        if (!s3) return responsesErrorChurches(res, 3);
        const newUrl = `alma/churches/church-${church._id.toString()}-${moment().tz('America/Bogota').unix()}`;
        await uploadFile(newUrl, validate.data.picture);
        if (church.picture && church.picture?.indexOf(`${s3}`) > -1) deleteFile(church.picture);
        church.picture = `${s3}/${newUrl}.jpg`;
      }
      else if (checkUrl(validate.data.picture)) {
        church.picture = validate.data.picture;
      }
    }
    else if (validate.data.picture && checkUrl(validate.data.picture)) {
      church.picture = validate.data.picture;
    }
    else church.picture = null;

    church.name = validate.data.name;
    church.description = validate.data.description;
    church.phone1 = validate.data.phone1;
    church.phone2 = validate.data.phone2;
    church.email = validate.data.email;
    church.address = validate.data.address;
    church.location.coordinates = validate.data.location.coordinates;
    await church.save();

    return res.json({
      msg: `Se ha actualizado la iglesia exitosamente.`,
      church
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/updateChurch`);
  }
}

export async function saveChurch(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenId } = req.body;
    const validate = validateRegisterOrUpdateChurch(req.body);

    if (validate.errors.length > 0) return responsesErrorChurches(res, 1, validate.errors);

    const church = new Churches(validate.data);
    // save picture
    if (validate.data.picture) {
      if (isBase64(validate.data.picture)) {
        const s3 = process.env.AWS_S3_BUCKET || null;
        if (!s3) return responsesErrorChurches(res, 3);
        const newUrl = `alma/churches/church-${church._id.toString()}-${moment().tz('America/Bogota').unix()}`;
        await uploadFile(newUrl, validate.data.picture);
        church.picture = `${s3}/${newUrl}.jpg`;
      }
      else if (checkUrl(validate.data.picture)) {
        church.picture = validate.data.picture;
      }
    }
    church.userid = tokenId;
    await church.save();

    return res.json({
      msg: `Se registrado la iglesia exitosamente.`,
      church
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/saveChurch`);
  }
}

export async function deleteChurch(req: Request, res: Response): Promise<Response> {
  try {
    const { _id } = req.params;
    if (!checkObjectId(_id)) return responsesErrorChurches(res, 1);

    // check the principal church ID is different to _id (check Migrations/Jsons/Churches.json)
    if (_id === '624a357644f15f3ce8200c2f') return responsesErrorChurches(res, 4);

    const church = await Churches.findOne({ _id },  { _id: 1, picture: 1 }).exec();
    if (!church) return responsesErrorChurches(res, 0);

    if (church.picture) {
      const s3 = process.env.AWS_S3_BUCKET || null;
      if (church.picture && church.picture?.indexOf(`${s3}`) > -1) deleteFile(church.picture);
    }

    // change the church value for all members that own this _id.
    Users.updateMany({ church: _id },{ $set: { church: '624a357644f15f3ce8200c2f' } }).exec();

    // delete church
    await church.delete();

    return res.json({
      msg: `Se ha eliminado la iglesia exitosamente.`
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/deleteChurch`);
  }
}

export default {
  deleteChurch,
  getChurches,
  saveChurch,
  showChurch,
  updateChurch,
}
