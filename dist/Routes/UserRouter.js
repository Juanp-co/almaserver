"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware");
const referrals_controller_1 = require("../Controllers/publics/referrals.controller");
const family_group_controller_1 = __importStar(require("../Controllers/publics/family-group.controller"));
const user_controller_1 = require("../Controllers/User/user.controller");
const group_controller_1 = require("../Controllers/User/group.controller");
const resources_controller_1 = require("../Controllers/User/resources.controller");
const router = (0, express_1.Router)();
// ===================================================================================
/* Profile */
router.route('/').get(middleware_1.validateUser, user_controller_1.get).put(middleware_1.validateUser, user_controller_1.update);
router.put('/change-password', middleware_1.validateUser, user_controller_1.changePassword);
router.get('/courses', middleware_1.validateUser, user_controller_1.getCourses);
/*
  Families Group
*/
router.route(`/families-groups`)
    .get(middleware_1.validateUser, family_group_controller_1.default)
    .put(middleware_1.validateUser, user_controller_1.updateFamiliesGroups);
router.get(`/families-groups/:_id`, middleware_1.validateUser, family_group_controller_1.showFamilyGroup);
router.route(`/families-groups/:_id/reports`)
    .get(middleware_1.validateUser, family_group_controller_1.reportsFamilyGroup)
    .post(middleware_1.validateUser, family_group_controller_1.saveFamilyGroupReport);
/*
  Group
 */
router.route('/group')
    .get(middleware_1.validateUser, group_controller_1.getGroup)
    .post(middleware_1.validateUser, group_controller_1.saveGroup);
router.get('/group/invitations', middleware_1.validateUser, group_controller_1.getGroupInvitations);
router.get('/group/invitations/totals', middleware_1.validateUser, group_controller_1.getGroupInvitationsTotals);
router.route('/group/invitations/:_id')
    .delete(middleware_1.validateUser, group_controller_1.rejectGroupInvitations)
    .put(middleware_1.validateUser, group_controller_1.approveGroupInvitations);
router.get('/group/person/:memberId', middleware_1.validateUser, group_controller_1.getMemberGroup);
router.put('/group/:_id', middleware_1.validateUser, group_controller_1.updateGroup);
router.put('/group/:_id/members/:action', middleware_1.validateUser, group_controller_1.addOrRemoveMembersGroup);
/* Profile picture */
router.put('/picture', middleware_1.validateUser, user_controller_1.updatePicture);
/*
  Referrals
 */
router.route('/referrals')
    .get(middleware_1.validateUser, referrals_controller_1.getReferrals)
    .post(middleware_1.validateUser, referrals_controller_1.saveReferral);
router.post('/referrals/visit', middleware_1.validateUser, referrals_controller_1.saveReferralVisit);
router.get('/referrals/:_id', middleware_1.validateUser, referrals_controller_1.getMemberReferred);
/*
  Reports
 */
router.get('/reports', middleware_1.validateUser, user_controller_1.getReports);
/* Reports */
router.route('/resources')
    .get(middleware_1.validateUser, resources_controller_1.getResources)
    .post(middleware_1.validateUser, resources_controller_1.saveResource);
router.delete('/resources/:_id', middleware_1.validateUser, resources_controller_1.deleteResource);
exports.default = router;
