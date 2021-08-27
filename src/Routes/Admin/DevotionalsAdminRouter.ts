import { Router } from 'express';
import { validateAdmin } from '../../middleware';
import getDevotionals, {
  deleteDevotional,
  getTotalsDevotionals,
  saveDevotional,
  showDevotional,
  updateDevotional
} from '../../Controllers/admin/devotionals.admin.controller';

const router = Router();

router.route('/')
  .get(validateAdmin, getDevotionals)
  .post(validateAdmin, saveDevotional);

router.get('/counters', validateAdmin, getTotalsDevotionals);

router.route('/:_id')
  .get(validateAdmin, showDevotional)
  .put(validateAdmin, updateDevotional)
  .delete(validateAdmin, deleteDevotional);

export default router;
