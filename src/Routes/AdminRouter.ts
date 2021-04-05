import { Router } from 'express';
import { validateAdmin } from '../middleware';
import getCourses, {
  addThemeCourse,
  deleteCourse,
  deleteThemeCourse,
  enableCourse,
  saveCourse,
  showCourse,
  updateThemeCourse,
  updateInfoCourse
} from '../Controllers/admin/courses.admin.controller';
import getEvents, { deleteEvent, saveEvent, showEvent, updateEvent } from '../Controllers/events/events.controller';
import getGroups, {
  addOrRemoveMembersGroup,
  deleteGroup, findNewMembers,
  getGroupsCounters,
  saveGroup, showGroup, updateGroup
} from '../Controllers/admin/groups.admin.controller';
import getUsers, {
  changeRoleUser,
  deleteUser, getCoursesUser, getReferralsUser,
  getUsersCounters,
  saveUser,
  showUser,
  updateUser
} from '../Controllers/admin/users.admin.controller';
import getReports, { getFamiliesGroupsReports } from '../Controllers/admin/reports.admin.controller';
import getBanks, {
  deleteBank,
  saveBank,
  showBank,
  updateBank
} from '../Controllers/admin/accounts.banks.admin.controllers';
import getFamiliesGroups, {
  deleteFamilyGroup, getFamiliesGroupsCounters,
  saveFamilyGroup, showFamilyGroup, updateFamilyGroup, updateMembersFamilyGroup
} from '../Controllers/admin/families-groups.admin.controller';

const router = Router();

// ===================================================================================

/*
  Accounts Banks
*/
router.route('/banks')
  .get(validateAdmin, getBanks)
  .post(validateAdmin, saveBank);

router.route('/banks/:_id')
  .get(validateAdmin, showBank)
  .put(validateAdmin, updateBank)
  .delete(validateAdmin, deleteBank);

/*
  Events
*/
router.route('/courses')
  .get(validateAdmin, getCourses)
  .post(validateAdmin, saveCourse);

router.route('/courses/:_id')
  .delete(validateAdmin, deleteCourse)
  .get(validateAdmin, showCourse);

router.put('/courses/:_id/enable',validateAdmin, enableCourse);
router.put('/courses/:_id/info',validateAdmin, updateInfoCourse);

// theme
router.post('/courses/:_id/theme/',validateAdmin, addThemeCourse);
router.put('/courses/:_id/theme/:themeId',validateAdmin, updateThemeCourse);
router.delete('/courses/:_id/theme/:themeId',validateAdmin, deleteThemeCourse);

/*
  Events
*/
router.route('/events')
  .get(validateAdmin, getEvents)
  .post(validateAdmin, saveEvent);

router.route('/events/:_id')
  .delete(validateAdmin, deleteEvent)
  .get(validateAdmin, showEvent)
  .put(validateAdmin, updateEvent);

/*
  Families Groups
*/
router.route('/families-groups')
  .get(validateAdmin, getFamiliesGroups)
  .post(validateAdmin, saveFamilyGroup);
router.get('/families-groups/counters', validateAdmin, getFamiliesGroupsCounters);

router.route('/families-groups/:_id')
  .delete(validateAdmin, deleteFamilyGroup)
  .get(validateAdmin, showFamilyGroup)
  .put(validateAdmin, updateFamilyGroup);

router.put('/families-groups/:_id/members', validateAdmin, updateMembersFamilyGroup);

/*
  Groups
*/
router.route('/groups')
  .get(validateAdmin, getGroups)
  .post(validateAdmin, saveGroup);
router.get('/groups/counters', validateAdmin, getGroupsCounters);

router.route('/groups/:_id')
  .get(validateAdmin, showGroup)
  .put(validateAdmin, updateGroup)
  .delete(validateAdmin, deleteGroup);

router.get('/groups/:_id/find-members', validateAdmin, findNewMembers);
router.put('/groups/:_id/members/:action', validateAdmin, addOrRemoveMembersGroup);

/*
  Reports
*/
router.get('/reports', validateAdmin, getReports);
router.get('/reports/families-groups', validateAdmin, getFamiliesGroupsReports);

/*
  Users
*/
router.route('/users')
  .get(validateAdmin, getUsers)
  .post(validateAdmin, saveUser);

router.get('/users/counters', validateAdmin, getUsersCounters);

router.route('/users/:_id')
  .get(validateAdmin, showUser)
  .put(validateAdmin, updateUser)
  .delete(validateAdmin, deleteUser);

router.get('/users/:_id/courses', validateAdmin, getCoursesUser);
router.get('/users/:_id/referrals', validateAdmin, getReferralsUser);

router.put('/users/:_id/role', validateAdmin, changeRoleUser);

export default router;
