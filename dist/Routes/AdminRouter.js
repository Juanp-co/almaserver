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
const courses_admin_controller_1 = __importStar(require("../Controllers/admin/courses.admin.controller"));
const events_controller_1 = __importStar(require("../Controllers/events/events.controller"));
const groups_admin_controller_1 = __importStar(require("../Controllers/admin/groups.admin.controller"));
const users_admin_controller_1 = __importStar(require("../Controllers/admin/users.admin.controller"));
const reports_admin_controller_1 = __importStar(require("../Controllers/admin/reports.admin.controller"));
const accounts_banks_admin_controller_1 = __importStar(require("../Controllers/admin/accounts.banks.admin.controller"));
const families_groups_admin_controller_1 = __importStar(require("../Controllers/admin/families-groups.admin.controller"));
const consolidated_admin_controller_1 = __importStar(require("../Controllers/admin/consolidated.admin.controller"));
const router = express_1.Router();
// ===================================================================================
/*
  Accounts Banks
*/
router.route('/banks')
    .get(middleware_1.validateAdmin, accounts_banks_admin_controller_1.default)
    .post(middleware_1.validateAdmin, accounts_banks_admin_controller_1.saveBank);
router.route('/banks/:_id')
    .get(middleware_1.validateAdmin, accounts_banks_admin_controller_1.showBank)
    .put(middleware_1.validateAdmin, accounts_banks_admin_controller_1.updateBank)
    .delete(middleware_1.validateAdmin, accounts_banks_admin_controller_1.deleteBank);
/*
  Consolidates
*/
router.get('/consolidates', middleware_1.validateAdmin, consolidated_admin_controller_1.default);
router.post('/consolidates/report', middleware_1.validateAdmin, consolidated_admin_controller_1.saveConsolidateVisit);
router.get('/consolidates/members', middleware_1.validateAdmin, consolidated_admin_controller_1.getConsolidatesMembers);
/*
  Events
*/
router.route('/courses')
    .get(middleware_1.validateAdmin, courses_admin_controller_1.default)
    .post(middleware_1.validateAdmin, courses_admin_controller_1.saveCourse);
router.route('/courses/:_id')
    .delete(middleware_1.validateAdmin, courses_admin_controller_1.deleteCourse)
    .get(middleware_1.validateAdmin, courses_admin_controller_1.showCourse);
router.put('/courses/:_id/enable', middleware_1.validateAdmin, courses_admin_controller_1.enableCourse);
router.put('/courses/:_id/info', middleware_1.validateAdmin, courses_admin_controller_1.updateInfoCourse);
// theme
router.post('/courses/:_id/theme/', middleware_1.validateAdmin, courses_admin_controller_1.addThemeCourse);
router.put('/courses/:_id/theme/:themeId', middleware_1.validateAdmin, courses_admin_controller_1.updateThemeCourse);
router.delete('/courses/:_id/theme/:themeId', middleware_1.validateAdmin, courses_admin_controller_1.deleteThemeCourse);
/*
  Events
*/
router.route('/events')
    .get(middleware_1.validateAdmin, events_controller_1.default)
    .post(middleware_1.validateAdmin, events_controller_1.saveEvent);
router.route('/events/:_id')
    .delete(middleware_1.validateAdmin, events_controller_1.deleteEvent)
    .get(middleware_1.validateAdmin, events_controller_1.showEvent)
    .put(middleware_1.validateAdmin, events_controller_1.updateEvent);
/*
  Families Groups
*/
router.route('/families-groups')
    .get(middleware_1.validateAdmin, families_groups_admin_controller_1.default)
    .post(middleware_1.validateAdmin, families_groups_admin_controller_1.saveFamilyGroup);
router.get('/families-groups/counters', middleware_1.validateAdmin, families_groups_admin_controller_1.getFamiliesGroupsCounters);
router.route('/families-groups/:_id')
    .delete(middleware_1.validateAdmin, families_groups_admin_controller_1.deleteFamilyGroup)
    .get(middleware_1.validateAdmin, families_groups_admin_controller_1.showFamilyGroup)
    .put(middleware_1.validateAdmin, families_groups_admin_controller_1.updateFamilyGroup);
router.put('/families-groups/:_id/members', middleware_1.validateAdmin, families_groups_admin_controller_1.updateMembersFamilyGroup);
/*
  Groups
*/
router.route('/groups')
    .get(middleware_1.validateAdmin, groups_admin_controller_1.default)
    .post(middleware_1.validateAdmin, groups_admin_controller_1.saveGroup);
router.get('/groups/counters', middleware_1.validateAdmin, groups_admin_controller_1.getGroupsCounters);
router.route('/groups/:_id')
    .get(middleware_1.validateAdmin, groups_admin_controller_1.showGroup)
    .put(middleware_1.validateAdmin, groups_admin_controller_1.updateGroup)
    .delete(middleware_1.validateAdmin, groups_admin_controller_1.deleteGroup);
router.get('/groups/:_id/find-members', middleware_1.validateAdmin, groups_admin_controller_1.findNewMembers);
router.put('/groups/:_id/members/:action', middleware_1.validateAdmin, groups_admin_controller_1.addOrRemoveMembersGroup);
/*
  Reports
*/
router.get('/reports', middleware_1.validateAdmin, reports_admin_controller_1.default);
router.get('/reports/families-groups', middleware_1.validateAdmin, reports_admin_controller_1.getFamiliesGroupsReports);
/*
  Users
*/
router.route('/users')
    .get(middleware_1.validateAdmin, users_admin_controller_1.default)
    .post(middleware_1.validateAdmin, users_admin_controller_1.saveUser);
router.get('/users/counters', middleware_1.validateAdmin, users_admin_controller_1.getUsersCounters);
router.route('/users/:_id')
    .get(middleware_1.validateAdmin, users_admin_controller_1.showUser)
    .put(middleware_1.validateAdmin, users_admin_controller_1.updateUser)
    .delete(middleware_1.validateAdmin, users_admin_controller_1.deleteUser);
router.get('/users/:_id/courses', middleware_1.validateAdmin, users_admin_controller_1.getCoursesUser);
router.get('/users/:_id/referrals', middleware_1.validateAdmin, users_admin_controller_1.getReferralsUser);
router.put('/users/:_id/role', middleware_1.validateAdmin, users_admin_controller_1.changeRoleUser);
exports.default = router;
