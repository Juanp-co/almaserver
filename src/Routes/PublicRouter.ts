import { Router } from 'express';
import { validateUser } from '../middleware';
import getCourses, {
  addCourseUser, evaluateTest,
  getCoursesCounters,
  getTest,
  showCourse, showCourseContentTheme, updateHistoricalCourseContent
} from '../Controllers/publics/courses.controller';
import { getPublicEvents, showPublicEvent } from '../Controllers/events/events.controller';
import {
  helloWorld,
  login,
  logout,
  register
} from '../Controllers/publics/public.controller';

const router = Router();

// ===================================================================================

/* Test api */

router.get(`/`, helloWorld);

/*
  Courses
*/
// list and counters
router.get(`/courses`, validateUser, getCourses);
router.get(`/courses/counters`, validateUser, getCoursesCounters);
router.get(`/courses/:slug`, validateUser, showCourse);
router.post('/courses/:slug/add', validateUser, addCourseUser); // add course to user

router.get(`/courses/:slug/theme/:_id`, validateUser, showCourseContentTheme);// get theme

// get test
router.route('/courses/:slug/theme/:_id/test')
  .get(validateUser, getTest)
  .post(validateUser, evaluateTest);
// update historical content (action = watching | viewed)
router.put(`/courses/:slug/theme/:_id/content/:contentId/:action`, validateUser, updateHistoricalCourseContent);

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
  Register
 */
router.post(`/register`, register);

export default router;
