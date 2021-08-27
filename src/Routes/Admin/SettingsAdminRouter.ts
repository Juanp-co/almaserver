import { Request, Response, Router } from 'express';
import { validateAdmin } from '../../middleware';
import getSettings, {
  addLogoOrBannerSetting,
  changeStatusLogoOrBannerSetting,
  removeLogoOrBannerSettings,
  updateSettingsUrls
} from '../../Controllers/admin/settings.admin.controller';

const router = Router();

router.route('/')
  .get(validateAdmin, getSettings)
  .put(validateAdmin, updateSettingsUrls);

router.post(
  '/banners',
  validateAdmin,
  (req: Request, res: Response) => addLogoOrBannerSetting(req, res, 'banners')
);
router.delete(
  '/banners/:_id',
  validateAdmin,
  (req: Request, res: Response) => removeLogoOrBannerSettings(req, res, 'banners')
);
router.put(
  '/banners/:_id/:action',
  validateAdmin,
  (req: Request, res: Response) => changeStatusLogoOrBannerSetting(req, res, 'banners')
);

router.post(
  '/logos',
  validateAdmin,
  (req: Request, res: Response) => addLogoOrBannerSetting(req, res, 'logos')
);
router.delete(
  '/logos/:_id',
  validateAdmin,
  (req: Request, res: Response) => removeLogoOrBannerSettings(req, res, 'logos')
);
router.put(
  '/logos/:_id/:action',
  validateAdmin,
  (req: Request, res: Response) => changeStatusLogoOrBannerSetting(req, res, 'logos')
);

export default router;
