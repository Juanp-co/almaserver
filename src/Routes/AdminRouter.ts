import { Router } from 'express';
import { validateAdmin } from '../middleware';
import getQuestions, {
  deleteQuestions, getDetailsQuestion,
  saveQuestions, updateQuestions
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
  deleteCourse,
  enableCourse, getCoursesCounters,
  saveCourse, showCourse,
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

router.route('/courses/counters')
  .get(validateAdmin, getCoursesCounters);

router.route('/courses/:_id')
  .delete(validateAdmin, deleteCourse)
  .get(validateAdmin, showCourse)
  .put(validateAdmin, updateCourse);

router.route('/courses/:_id/enable')
  .put(validateAdmin, enableCourse);

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

router.route('/users/counters')
  .get(validateAdmin, getUsersCounters);

router.route('/users/:_id')
  .get(validateAdmin, showUser)
  .put(validateAdmin, updateUser);
  // .delete(validateAdmin, deleteUser);

router.route('/users/:_id/role')
  .put(validateAdmin, changeRoleUser);

export default router;
