import { Router } from 'express';
import { validateAdmin } from '../middleware';
import getQuestions, {
  deleteQuestions,
  getDetailsQuestion,
  saveQuestions,
  updateQuestions
} from '../Controllers/admin/questions.admin.controller';
import getUsers, {
  changeRoleUser,
  // deleteUser,
  getUsersCounters,
  saveUser,
  showUser,
  updateUser
} from '../Controllers/admin/users.admin.controller';
import getEvents, { deleteEvent, saveEvent, showEvent, updateEvent } from '../Controllers/events/events.controller';
import getCourses, {
  commentsCourseOrTheme,
  deleteCourse,
  enableCourse,
  getCoursesCounters,
  likesAndUnlikesCourseOrTheme,
  saveCourse,
  showCourse,
  updateCourse
} from '../Controllers/admin/courses.admin.controller';

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
  .get(validateAdmin, showCourse)
  .put(validateAdmin, updateCourse);

router.get('/courses/:_id/comments', validateAdmin, commentsCourseOrTheme);
router.put('/courses/:_id/enable', validateAdmin, enableCourse);
router.get('/courses/:_id/likes', validateAdmin, likesAndUnlikesCourseOrTheme);
router.get('/courses/:_id/theme/:themeId/comments', validateAdmin, commentsCourseOrTheme);
router.get('/courses/:_id/theme/:themeId/likes', validateAdmin, likesAndUnlikesCourseOrTheme);

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

/* Questions */
router.route('/questions')
  .get(validateAdmin, getQuestions)
  .post(validateAdmin, saveQuestions);

router.route('/questions/:_id')
  .get(validateAdmin, getDetailsQuestion)
  .put(validateAdmin, updateQuestions)
  .delete(validateAdmin, deleteQuestions);

/*
  Users
*/
router.route('/users')
  .get(validateAdmin, getUsers)
  .post(validateAdmin, saveUser);

router.get('/users/counters', validateAdmin, getUsersCounters);

router.route('/users/:_id')
  .get(validateAdmin, showUser)
  .put(validateAdmin, updateUser);
  // .delete(validateAdmin, deleteUser);

router.put('/users/:_id/role', validateAdmin, changeRoleUser);

export default router;
