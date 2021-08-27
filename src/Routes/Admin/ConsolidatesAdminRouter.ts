import { Router } from 'express';
import { validateAdmin } from '../../middleware';
import getConsolidates, {
  getConsolidatesMembers,
  saveConsolidateVisit
} from '../../Controllers/admin/consolidated.admin.controller';

const router = Router();

router.get('/', validateAdmin, getConsolidates);
router.post('/report', validateAdmin, saveConsolidateVisit);
router.get('/members', validateAdmin, getConsolidatesMembers);

export default router;
