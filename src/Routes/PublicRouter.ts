import { Router } from 'express';
import {
  helloWorld,
  login,
  logout,
  register,
  getQuestions
} from '../Controllers/public.controller';
import { validateUser } from '../middleware';
import { getPublicEvents, showPublicEvent } from '../Controllers/events/events.controller';
import {
  getCoursesCountersPublic,
  getCoursesPublic,
  showCoursePublic
} from '../Controllers/admin/courses.admin.controller';

const router = Router();

// ===================================================================================

/* Test api */

router.get(`/`, helloWorld);

/*
  Courses
*/

router.get(`/courses`, validateUser, getCoursesPublic);

router.get(`/courses/counters`, validateUser, getCoursesCountersPublic);

router.get(`/courses/:_id`, validateUser, showCoursePublic);

/*
  Events
*/

router.get(`/events`, validateUser, getPublicEvents);

router.get(`/events/:_id`, validateUser, showPublicEvent);

/*
  Login, logout
*/

router.post(`/login`, login);

router.delete(`/logout`, validateUser, logout);

/*
  Questions
 */
router.get('/questions', getQuestions);

/*
  Register
 */
router.post(`/register`, register);

export default router;
