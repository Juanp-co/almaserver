import { Router } from 'express';
import { validateUser } from '../middleware';
import {
  changePassword,
  get, getCourses, getGroup, getMemberGroup, getReports,
  update
} from '../Controllers/user.controller';
import {
  getMemberReferred,
  getReferrals,
  saveReferral,
  saveReferralVisit
} from '../Controllers/publics/referrals.controller';
import getFamiliesGroups, {
  reportsFamilyGroup,
  saveFamilyGroupReport,
  showFamilyGroup
} from '../Controllers/publics/family-group.controller';

const router = Router();

// ===================================================================================

/* Profile */

router.route('/').get(validateUser, get).put(validateUser, update);
router.put('/change-password', validateUser, changePassword);
router.get('/courses', validateUser, getCourses);

/*
  Families Group
*/

router.get(`/families-groups`, validateUser, getFamiliesGroups);
router.get(`/families-groups/:_id`, validateUser, showFamilyGroup);
router.route(`/families-groups/:_id/reports`)
  .get(validateUser, reportsFamilyGroup)
  .post(validateUser, saveFamilyGroupReport);

/*
  Group
 */
router.get('/group', validateUser, getGroup);
router.get('/group/:memberId', validateUser, getMemberGroup);

/*
  Referrals
 */
router.route('/referrals')
  .get(validateUser, getReferrals)
  .post(validateUser, saveReferral);
router.post('/referrals/visit', validateUser, saveReferralVisit);
router.get('/referrals/:_id', validateUser, getMemberReferred);

/*
  Reports
 */
router.get('/reports', validateUser, getReports);

export default router;
