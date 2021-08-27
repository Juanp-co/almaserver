import { Router } from 'express';
import { validateAdmin } from '../../middleware';
import getBanks, {
  deleteBank,
  saveBank,
  showBank,
  updateBank
} from '../../Controllers/admin/accounts.banks.admin.controller';

const router = Router();

router.route('/')
  .get(validateAdmin, getBanks)
  .post(validateAdmin, saveBank);

router.route('/:_id')
  .get(validateAdmin, showBank)
  .put(validateAdmin, updateBank)
  .delete(validateAdmin, deleteBank);

export default router;
