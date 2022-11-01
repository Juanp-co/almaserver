import { Request, Response } from 'express';
import { returnError } from '../../Functions/GlobalFunctions';
import Settings from '../../Models/Settings';
import validateUpdateUrlsSettings, { validateUpdateLogosOrBannersSettings } from '../../FormRequest/SettingsRequest';
import { deleteFile } from '../../Services/AWSService';
import { checkObjectId } from '../../Functions/Validations';
import { return404Or422Settings, uploadLogoOrBanner } from '../../ActionsData/SettingsActions';

const path = 'Controllers/admin/settings.admin.controller';

export default async function getSettings(req: Request, res: Response): Promise<Response> {
  try {
    let settings: any = await Settings.findOne(
      {}, { __v: 0 }
    )
      .exec();

    if (!settings) {
      settings = new Settings({});
      await settings.save();
    }

    settings.banners = settings.banners.reverse();
    settings.logos = settings.logos.reverse();

    return res.json({
      msg: `Ajustes.`,
      data: settings
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getSettings`);
  }
}

export async function updateSettingsUrls(req: Request, res: Response): Promise<Response> {
  try {
    const settings: any = await Settings.findOne(
      {},
      {
        facebook: 1,
        instagram: 1,
        twitter: 1,
        web: 1,
        youtube: 1,
      }
    ).exec();

    if (!settings) return return404Or422Settings(res, 0);

    const validate = validateUpdateUrlsSettings(req.body);

    if (validate.errors.length > 0) {
      return res.status(422).json({
        msg: `¡Error en los parámetros!`,
        errors: validate.errors || []
      });
    }

    settings.facebook = validate.data.facebook || null;
    settings.instagram = validate.data.instagram || null;
    settings.twitter = validate.data.twitter || null;
    settings.web = validate.data.web || null;
    settings.youtube = validate.data.youtube || null;
    await settings.save();

    return res.json({
      msg: `Se ha actualizado la configuración exitosamente.`,
      data: settings
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/getSettings`);
  }
}

/* Logos */
export async function addLogoOrBannerSetting(req: Request, res: Response, type: string): Promise<Response> {
  try {
    const projection = type === 'logos' ? { logos: 1 } : { banners: 1 };

    const settings: any = await Settings.findOne({}, projection).exec();

    if (!settings) return return404Or422Settings(res, 0);

    const validate = validateUpdateLogosOrBannersSettings(req.body);

    if (validate.errors.length > 0) {
      return res.status(422).json({
        msg: `¡Error en los parámetros!`,
        errors: validate.errors || []
      });
    }

    const url = await uploadLogoOrBanner(validate.data.picture, type === 'logos');
    if (!url) return return404Or422Settings(res, 1);

    validate.data.picture = url;
    if (validate.data.active) {
      const { length } = settings[type];

      for (let i = 0; i < length; i += 1) {
        settings[type][i].active = false;
      }
    }
    settings[type].push(validate.data);
    await settings.save();

    return res.json({
      msg: `Se ha agregado ${type === 'logos' ? 'el logo' : 'la portada'} exitosamente.`,
      data: settings[type][ settings[type].length - 1 ]
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/addLogoOrBannerSetting`);
  }
}

export async function changeStatusLogoOrBannerSetting(req: Request, res: Response, type: string): Promise<Response> {
  try {
    const projection = type === 'logos' ? { logos: 1 } : { banners: 1 };
    const { _id, action } = req.params;

    if (!['active', 'disable'].includes(action)) return return404Or422Settings(res, 3);
    if (!checkObjectId(_id)) return return404Or422Settings(res, type === 'logos' ? 2 : 5);

    const settings: any = await Settings.findOne({}, projection).exec();

    if (!settings) return return404Or422Settings(res, 0);

    const indexId = settings[type]?.findIndex((l: any) => l._id.toString() === _id);
    if (indexId === -1) return return404Or422Settings(res, type === 'logos' ? 4 : 6);

    const { length } = settings[type];
    for (let i = 0; i < length; i += 1) {
      if (i !== indexId) settings[type][i].active = false;
      else settings[type][i].active = action === 'active';
    }

    await settings.save();

    return res.json({
      msg: `Se ha actualizado ${type === 'logos' ? 'el logo' : 'la portada'} exitosamente.`,
      data: settings[type][indexId] || null
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/changeStatusLogoOrBannerSetting`);
  }
}

export async function removeLogoOrBannerSettings(req: Request, res: Response, type: string): Promise<Response> {
  try {
    const projection = type === 'logos' ? { logos: 1 } : { banners: 1 };
    const { _id } = req.params;

    if (!checkObjectId(_id)) return return404Or422Settings(res, type === 'logos' ? 2 : 5);

    const settings: any = await Settings.findOne({}, projection).exec();

    if (!settings) return return404Or422Settings(res, 0);

    const index = settings[type]?.findIndex((l: any) => l._id.toString() === _id);
    if (index === -1) return return404Or422Settings(res, type === 'logos' ? 4 : 6);

    // delete picture of s3
    deleteFile(settings[type][index].picture);
    settings[type].pull({ _id });
    await settings.save();

    return res.json({
      msg: `Se ha eliminado ${type === 'logos' ? 'el logo' : 'la portada'} exitosamente.`
    });
  } catch (error: any) {
    return returnError(res, error, `${path}/removeLogoOrBannerSettings`);
  }
}
