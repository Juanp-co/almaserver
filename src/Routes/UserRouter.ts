import { Router } from 'express';
import { validateUser } from '../middleware';
import {
  changePassword,
  changeSecurityQuestion,
  get,
  update
} from '../Controllers/user.controller';
import getReferrals from '../Controllers/publics/referrals.controller';

const router = Router();

// ===================================================================================

/* Profile */

router.route('/').get(validateUser, get).put(validateUser, update);
router.put('/change-password', validateUser, changePassword);
router.put('/change-question', validateUser, changeSecurityQuestion);
router.get('/referrals', validateUser, getReferrals);

export default router;
