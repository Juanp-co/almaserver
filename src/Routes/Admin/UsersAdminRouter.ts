import { Router } from 'express';
import { validateAdmin } from '../../middleware';
import getUsers, {
  changeRoleUser,
  deleteUser, downLoadData, getCoursesUser, getReferralsUser,
  getUsersCounters,
  saveUser, setAsConsolidatorUser,
  showUser,
  updateUser
} from '../../Controllers/admin/users.admin.controller';

const router = Router();

router.route('/')
  .get(validateAdmin, getUsers)
  .post(validateAdmin, saveUser);

router.get('/counters', validateAdmin, getUsersCounters);
router.get('/download', validateAdmin, downLoadData);

router.route('/:_id')
  .delete(validateAdmin, deleteUser)
  .get(validateAdmin, showUser)
  .put(validateAdmin, updateUser);

router.get('/:_id/courses', validateAdmin, getCoursesUser);
router.put('/:_id/consolidator', validateAdmin, setAsConsolidatorUser);
router.get('/:_id/referrals', validateAdmin, getReferralsUser);
router.put('/:_id/role', validateAdmin, changeRoleUser);

export default router;
