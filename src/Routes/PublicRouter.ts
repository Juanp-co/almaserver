import { Router } from 'express';
import {
  helloWorld,
  login,
  logout,
  register,
  getQuestions
} from '../Controllers/publics/public.controller';
import { validateUser } from '../middleware';
import { getPublicEvents, showPublicEvent } from '../Controllers/events/events.controller';
import getCourses, {
  addCourseUser,
  commentCourse,
  commentCourseTheme, evaluateTestCourse,
  getCoursesCounters,
  getTestCourse,
  likeOrUnlikeCourse, likeOrUnlikeCourseComment,
  likeOrUnlikeCourseThemeComment, likeOrUnlikeTheme,
  // qualifyCourse,
  showCourse,
  showCourseTheme
} from '../Controllers/publics/courses.controller';

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
// comment and likes course
router.post('/courses/:slug/like', validateUser, likeOrUnlikeCourse);
router.post('/courses/:slug/comment', validateUser, commentCourse);
router.post('/courses/:slug/comment/:_id/like', validateUser,  likeOrUnlikeCourseComment);
// get test
router.route('/courses/:slug/test')
  .get(validateUser, getTestCourse)
  .post(validateUser, evaluateTestCourse);
router.get(`/courses/:slug/theme/:_id`, validateUser, showCourseTheme);// get theme
// comment and like comments
router.post(`/courses/:slug/theme/:_id/comment`, validateUser, commentCourseTheme);
router.post(`/courses/:slug/theme/:_id/comment/:commentId/like`, validateUser, likeOrUnlikeCourseThemeComment);
router.post(`/courses/:slug/theme/:_id/like`, validateUser, likeOrUnlikeTheme);

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
