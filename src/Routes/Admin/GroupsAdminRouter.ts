import { Router } from 'express';
import { validateAdmin } from '../../middleware';
import getGroups, {
  addOrRemoveMembersGroup,
  deleteGroup, findNewMembers,
  getGroupsCounters,
  saveGroup, showGroup, updateGroup
} from '../../Controllers/admin/groups.admin.controller';

const router = Router();

router.route('/')
  .get(validateAdmin, getGroups)
  .post(validateAdmin, saveGroup);

router.get('/counters', validateAdmin, getGroupsCounters);

router.route('/:_id')
  .get(validateAdmin, showGroup)
  .put(validateAdmin, updateGroup)
  .delete(validateAdmin, deleteGroup);

router.get('/:_id/find-members', validateAdmin, findNewMembers);
router.put('/:_id/members/:action', validateAdmin, addOrRemoveMembersGroup);

export default router;
