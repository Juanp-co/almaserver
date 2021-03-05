import { Router } from 'express';
import { validateAdmin } from '../middleware';
import getCourses, {
  addContentThemeCourse, addLevelsThemeCourse, addQuestionTestThemeCourse,
  addThemeCourse,
  deleteContentThemeCourse,
  deleteCourse, deleteLevelThemeCourse, deleteQuestionTestThemeCourse, deleteThemeCourse,
  enableCourse,
  getCoursesCounters,
  saveCourse,
  showCourse, updateBannerCourse, updateContentThemeCourse,
  updateInfoCourse, updateQuestionTestThemeCourse, updateThemeCourse
} from '../Controllers/admin/courses.admin.controller';
import getEvents, { deleteEvent, saveEvent, showEvent, updateEvent } from '../Controllers/events/events.controller';
import getGroups, {
  addOrRemoveMembersGroup,
  deleteGroup, findNewMembers,
  getGroupsCounters,
  saveGroup, showGroup, updateGroup
} from '../Controllers/admin/groups.admin.controller';
import getUsers, {
  // changeRoleUser,
  deleteUser, getCoursesUser, getReferralsUser,
  getUsersCounters,
  saveUser,
  showUser,
  updateUser
} from '../Controllers/admin/users.admin.controller';
import getReports from '../Controllers/admin/reports.admin.controller';

const router = Router();

// ===================================================================================

/*
  Events
*/
router.route('/courses')
  .get(validateAdmin, getCourses)
  .post(validateAdmin, saveCourse);

router.get('/courses/counters',validateAdmin, getCoursesCounters);

router.route('/courses/:_id')
  .delete(validateAdmin, deleteCourse)
  .get(validateAdmin, showCourse);

router.put('/courses/:_id/banner',validateAdmin, updateBannerCourse);
router.put('/courses/:_id/enable',validateAdmin, enableCourse);
router.put('/courses/:_id/info',validateAdmin, updateInfoCourse);

// levels
router.post('/courses/:_id/levels', validateAdmin, addLevelsThemeCourse);
router.delete('/courses/:_id/levels/:levelId', validateAdmin, deleteLevelThemeCourse);

// themes
router.post('/courses/:_id/theme',validateAdmin, addThemeCourse);
router.put('/courses/:_id/theme/:themeId',validateAdmin, updateThemeCourse);
router.delete('/courses/:_id/theme/:themeId',validateAdmin, deleteThemeCourse);

// content
router.post('/courses/:_id/theme/:themeId/content',validateAdmin, addContentThemeCourse);
router.put('/courses/:_id/theme/:themeId/content/:contentId',validateAdmin, updateContentThemeCourse);
router.delete('/courses/:_id/theme/:themeId/content/:contentId',validateAdmin, deleteContentThemeCourse);

// test
router.post('/courses/:_id/theme/:themeId/test',validateAdmin, addQuestionTestThemeCourse);
router.put('/courses/:_id/theme/:themeId/test/:questionId',validateAdmin, updateQuestionTestThemeCourse);
router.delete('/courses/:_id/theme/:themeId/test/:questionId',validateAdmin, deleteQuestionTestThemeCourse);

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
  Users
*/
router.get('/reports', validateAdmin, getReports);

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

// router.put('/users/:_id/role', validateAdmin, changeRoleUser);

export default router;
