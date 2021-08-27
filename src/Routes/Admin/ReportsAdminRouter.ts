import { Router } from 'express';
import { validateAdmin } from '../../middleware';
import getReports, { getFamiliesGroupsReports } from '../../Controllers/admin/reports.admin.controller';

const router = Router();
/*
  Reports
*/
router.get('/', validateAdmin, getReports);
router.get('/families-groups', validateAdmin, getFamiliesGroupsReports);

export default router;
