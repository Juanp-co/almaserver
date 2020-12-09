import { Router } from 'express';
import {
  changePassword,
  changeSecurityQuestion,
  get,
  update
} from '../Controllers/user.controller';
import { validateUser } from '../middleware';

const router = Router();

// ===================================================================================

/* Test api */

router.route('/').get(validateUser, get).put(validateUser, update);
router.put('/change-password', validateUser, changePassword);
router.put('/change-question', validateUser, changeSecurityQuestion);

export default router;
