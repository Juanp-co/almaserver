import { Router } from 'express';
import { validateUser } from '../middleware';
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
import {
  changePassword,
  get, getCourses, getReports,
  update, updatePicture
} from '../Controllers/User/user.controller';
import {
  addOrRemoveMembersGroup,
  approveGroupInvitations,
  getGroup,
  getMemberGroup,
  getGroupInvitations,
  getGroupInvitationsTotals,
  rejectGroupInvitations,
  saveGroup,
  updateGroup
} from '../Controllers/User/group.controller';

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
router.route('/group')
  .get(validateUser, getGroup)
  .post(validateUser, saveGroup);
router.get('/group/invitations', validateUser, getGroupInvitations);
router.get('/group/invitations/totals', validateUser, getGroupInvitationsTotals);
router.route('/group/invitations/:_id')
  .delete(validateUser, rejectGroupInvitations)
  .put(validateUser, approveGroupInvitations);
router.get('/group/person/:memberId', validateUser, getMemberGroup);
router.put('/group/:_id', validateUser, updateGroup);
router.put('/group/:_id/members/:action', validateUser, addOrRemoveMembersGroup);

/* Profile picture */

router.put('/picture', validateUser, updatePicture);

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
