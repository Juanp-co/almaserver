import { Router } from 'express';
import { validateAdmin } from '../../middleware';
import {
  deleteChurch,
  getChurches,
  saveChurch,
  showChurch,
  updateChurch,
} from '../../Controllers/admin/churches.admin.controller';

const router = Router();

router.route('/')
  .get(validateAdmin, getChurches)
  .post(validateAdmin, saveChurch);

router.route('/:_id')
  .get(validateAdmin, showChurch)
  .put(validateAdmin, updateChurch)
  .delete(validateAdmin, deleteChurch);

export default router;
