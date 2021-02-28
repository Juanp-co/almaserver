import { Router } from 'express';
import { validateUser } from '../middleware';
import {
  changePassword,
  get, getCourses, getGroup, getMemberGroup,
  update
} from '../Controllers/user.controller';
import { getMemberReferred, getReferrals } from '../Controllers/publics/referrals.controller';

const router = Router();

// ===================================================================================

/* Profile */

router.route('/').get(validateUser, get).put(validateUser, update);
router.put('/change-password', validateUser, changePassword);
router.get('/courses', validateUser, getCourses);

/*
  Group
 */
router.get('/group', validateUser, getGroup);
router.get('/group/:memberId', validateUser, getMemberGroup);

/*
  Referrals
 */
router.get('/referrals', validateUser, getReferrals);
router.get('/referrals/:_id', validateUser, getMemberReferred);

export default router;
