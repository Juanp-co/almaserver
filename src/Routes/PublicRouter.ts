import { Router } from 'express';
import { validatePublic, validateUser } from '../middleware';
import getCourses, {
  addCourseUser, evaluateTest,
  getCoursesCounters,
  getTest,
  showCourse, showCourseContentTheme, updateHistoricalCourseContent
} from '../Controllers/publics/courses.controller';
import { getPublicEvents, showPublicEvent } from '../Controllers/events/events.controller';
import {
  getBanks,
  helloWorld,
  login,
  logout, recoveryPassword,
  register
} from '../Controllers/publics/public.controller';

const router = Router();

// ===================================================================================

/* Test api */

router.get(`/`, helloWorld);

/* banks */

router.get(`/banks`, getBanks);

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

router.get(`/events`, getPublicEvents);
router.get(`/events/:_id`, showPublicEvent);

/*
  Login, logout
*/

router.post(`/login`, login);
router.delete(`/logout`, validateUser, logout);

/*
  Recovery Password
 */
router.post(`/recovery-password/:action`, recoveryPassword);
router.put(`/recovery-password/:action`, recoveryPassword);

/*
  Register
 */
router.post(`/register`, register);

export default router;
