import { Request, Response } from 'express';
import moment from 'moment-timezone';
import { returnResourcesMsgErrors } from '../../ActionsData/ResourcesActions';
import { validateResourceForm } from '../../FormRequest/ResourcesRequest';
import { returnError, returnErrorParams } from '../../Functions/GlobalFunctions';
import { checkObjectId } from '../../Functions/Validations';
import Resources from '../../Models/Resources';
import Users from '../../Models/Users';
import { deleteFile, uploadFilePdf } from '../../Services/AWSService';

const path = 'Controllers/User/resources.controller';

export async function getResources(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenId } = req.body;

    if (!checkObjectId(tokenId)) return returnResourcesMsgErrors(res, 0);

    const resources = await Resources.find({ userid: tokenId }, { userid: 0, __v: 0 }).exec();

    return res.json({
      msg: 'Mis recursos compartidos',
      resources
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getResources`);
  }
}

export async function saveResource(req: Request, res: Response) : Promise<Response> {
  try {
    const { tokenId } = req.body;
    const validate = validateResourceForm(req.body);

    if (!checkObjectId(tokenId)) return returnResourcesMsgErrors(res, 0);

    if (validate.errors.length > 0) return returnErrorParams(res, validate.errors);

    const user = await Users.findOne({ _id: tokenId }, { roles: 1 }).exec();

    if (!user) return returnResourcesMsgErrors(res, 0);

    // without privileges
    if (user.roles?.length === 1 && user.roles?.includes(4)) return returnResourcesMsgErrors(res, 1);

    const s3 = process.env.AWS_S3_BUCKET || null;
    if (!s3) return returnResourcesMsgErrors(res, 2);

    const newUrl = `alma/resources/documento-${moment().unix()}`;
    await uploadFilePdf(newUrl, `${validate.data.file}`);
    const urlDoc = `${s3}/${newUrl}.pdf`;

    const resource = new Resources();
    resource.userid = tokenId;
    resource.title = validate.data.title;
    resource.urlDoc = urlDoc;
    resource.roles = validate.data.rolesList;
    await resource.save();

    return res.status(201).json({
      msg: 'Se ha agregado el nuevo documento exitosamente.',
      resource
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/saveResource`);
  }
}

export async function deleteResource(req: Request, res: Response) : Promise<Response> {
  try {
    const { tokenId } = req.body;
    const { _id } = req.params;

    if (!checkObjectId(tokenId)) return returnResourcesMsgErrors(res, 0);
    if (!checkObjectId(_id)) return returnResourcesMsgErrors(res, 3);

    const resource = await Resources.findOne({ _id }, { __v: 0 }).exec();

    if (!resource) return returnResourcesMsgErrors(res, 4);

    if (resource.userid !== tokenId) return returnResourcesMsgErrors(res, 1)

    if (resource.urlDoc) await deleteFile(resource.urlDoc);

    await resource.delete();

    return res.json({
      msg: 'Se ha eliminado el documento exitosamente.'
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/deleteResource`);
  }
}

export default {
  deleteResource,
  getResources,
  saveResource
}
