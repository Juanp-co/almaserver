import { Router } from 'express';
import { validateAdmin } from '../../middleware';
import getUsers, {
  changeRoleUser,
  deleteUser, getCoursesUser, getReferralsUser,
  getUsersCounters,
  saveUser,
  showUser,
  updateUser
} from '../../Controllers/admin/users.admin.controller';

const router = Router();

router.route('/')
  .get(validateAdmin, getUsers)
  .post(validateAdmin, saveUser);

router.get('/counters', validateAdmin, getUsersCounters);

router.route('/:_id')
  .delete(validateAdmin, deleteUser)
  .get(validateAdmin, showUser)
  .put(validateAdmin, updateUser);

router.get('/:_id/courses', validateAdmin, getCoursesUser);
router.get('/:_id/referrals', validateAdmin, getReferralsUser);

router.put('/:_id/role', validateAdmin, changeRoleUser);

export default router;
