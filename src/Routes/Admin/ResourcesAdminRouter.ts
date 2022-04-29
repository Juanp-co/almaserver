import { Router } from 'express';
import { deleteResourceAdmin, getResourcesAdmin, saveResourceAdmin } from '../../Controllers/admin/resources.admin.controller';
import { validateAdmin } from '../../middleware';

const router = Router();

router.route('/')
  .get(validateAdmin, getResourcesAdmin)
  .post(validateAdmin, saveResourceAdmin);
router.delete('/:_id', validateAdmin, deleteResourceAdmin);

export default router;
