import { Router } from 'express';
import { validateUser } from '../middleware';
import {
  changePassword,
  changeSecurityQuestion,
  get, getCourses,
  getGroup,
  getReferrals,
  update
} from '../Controllers/user.controller';

const router = Router();

// ===================================================================================

/* Profile */

router.route('/').get(validateUser, get).put(validateUser, update);
router.put('/change-password', validateUser, changePassword);
router.put('/change-question', validateUser, changeSecurityQuestion);
router.get('/courses', validateUser, getCourses);
router.get('/group', validateUser, getGroup);
router.get('/referrals', validateUser, getReferrals);

export default router;
