import { Router } from 'express';
import { validateAdmin } from '../../middleware';
import getFamiliesGroups, {
  deleteFamilyGroup, getFamiliesGroupsCounters,
  saveFamilyGroup, showFamilyGroup, updateFamilyGroup, updateMembersFamilyGroup
} from '../../Controllers/admin/families-groups.admin.controller';

const router = Router();

router.route('/')
  .get(validateAdmin, getFamiliesGroups)
  .post(validateAdmin, saveFamilyGroup);

router.get('/counters', validateAdmin, getFamiliesGroupsCounters);

router.route('/:_id')
  .delete(validateAdmin, deleteFamilyGroup)
  .get(validateAdmin, showFamilyGroup)
  .put(validateAdmin, updateFamilyGroup);

router.put('/:_id/members', validateAdmin, updateMembersFamilyGroup);

export default router;
