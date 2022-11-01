import _ from 'lodash';
import { Request, Response } from 'express';
import moment from 'moment-timezone';
import { returnResourcesMsgErrors } from '../../ActionsData/ResourcesActions';
import { getNamesUsersList } from '../../ActionsData/UsersActions';
import { validateResourceForm } from '../../FormRequest/ResourcesRequest';
import { checkIfExistsRoleInList, returnError, returnErrorParams } from '../../Functions/GlobalFunctions';
import { checkObjectId } from '../../Functions/Validations';
import Resources from '../../Models/Resources';
import Users from '../../Models/Users';
import { deleteFile, uploadFilePdf } from '../../Services/AWSService';

const path = 'Controllers/admin/resources.admin.controller';

export async function getResourcesAdmin(req: Request, res: Response): Promise<Response> {
  try {
    const { tokenId } = req.body;
    const ret: any[] = [];

    if (!checkObjectId(tokenId)) return returnResourcesMsgErrors(res, 0);

    const resources = await Resources.find({}, { __v: 0 }).exec();

    if (resources.length > 0) {
      const usersIds = _.uniq(resources.map(r => r.userid));
      const users = await getNamesUsersList(usersIds);

      resources.forEach(r => {
        ret.push({
          _id: r._id,
          title: r.title,
          urlDoc: r.urlDoc,
          roles: r.roles,
          member: users.find((u: any) => u._id.toString() === r.userid) || null,
          created_at: r.created_at,
        })
      })
    }


    return res.json({
      msg: 'Recursos compartidos',
      resources: ret
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getResourcesAdmin`);
  }
}

export async function saveResourceAdmin(req: Request, res: Response) : Promise<Response> {
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
    return returnError(res, error, `${path}/saveResourceAdmin`);
  }
}

export async function deleteResourceAdmin(req: Request, res: Response) : Promise<Response> {
  try {
    const { tokenId, tokenRoles } = req.body;
    const { _id } = req.params;

    if (!checkObjectId(_id)) return returnResourcesMsgErrors(res, 3);

    const resource = await Resources.findOne({ _id }, { __v: 0 }).exec();

    if (!resource) return returnResourcesMsgErrors(res, 4);

    if (resource.userid !== tokenId && !checkIfExistsRoleInList(tokenRoles, [0, 1])) return returnResourcesMsgErrors(res, 1)

    if (resource.urlDoc) await deleteFile(resource.urlDoc);

    await resource.delete();

    return res.json({
      msg: 'Se ha eliminado el documento exitosamente.'
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/deleteResourceAdmin`);
  }
}

export default {
  deleteResourceAdmin,
  getResourcesAdmin,
  saveResourceAdmin
}
