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
const user_controller_1 = require("../Controllers/user.controller");
const referrals_controller_1 = require("../Controllers/publics/referrals.controller");
const family_group_controller_1 = __importStar(require("../Controllers/publics/family-group.controller"));
const router = express_1.Router();
// ===================================================================================
/* Profile */
router.route('/').get(middleware_1.validateUser, user_controller_1.get).put(middleware_1.validateUser, user_controller_1.update);
router.put('/change-password', middleware_1.validateUser, user_controller_1.changePassword);
router.get('/courses', middleware_1.validateUser, user_controller_1.getCourses);
/*
  Families Group
*/
router.get(`/families-groups`, middleware_1.validateUser, family_group_controller_1.default);
router.get(`/families-groups/:_id`, middleware_1.validateUser, family_group_controller_1.showFamilyGroup);
router.route(`/families-groups/:_id/reports`)
    .get(middleware_1.validateUser, family_group_controller_1.reportsFamilyGroup)
    .post(middleware_1.validateUser, family_group_controller_1.saveFamilyGroupReport);
/*
  Group
 */
router.get('/group', middleware_1.validateUser, user_controller_1.getGroup);
router.get('/group/:memberId', middleware_1.validateUser, user_controller_1.getMemberGroup);
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
exports.default = router;
