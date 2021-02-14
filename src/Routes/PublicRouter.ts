import { Router } from 'express';
import { validateUser } from '../middleware';
import getCourses, {
  addCourseUser,
  commentCourse,
  commentCourseTheme, evaluateTest,
  getCoursesCounters,
  getTest,
  likeOrUnlikeCourse, likeOrUnlikeCourseComment,
  likeOrUnlikeCourseThemeComment, likeOrUnlikeTheme,
  // qualifyCourse,
  showCourse, showCourseContentTheme, updateHistoricalCourseContent
} from '../Controllers/publics/courses.controller';
import { getPublicEvents, showPublicEvent } from '../Controllers/events/events.controller';
import {
  helloWorld,
  login,
  logout,
  register,
  getQuestions
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
// comment and likes course
router.post('/courses/:slug/like', validateUser, likeOrUnlikeCourse);
router.post('/courses/:slug/comment', validateUser, commentCourse);
router.post('/courses/:slug/comment/:_id/like', validateUser,  likeOrUnlikeCourseComment);
router.get(`/courses/:slug/theme/:_id`, validateUser, showCourseContentTheme);// get theme
// get test
router.route('/courses/:slug/theme/:_id/test')
  .get(validateUser, getTest)
  .post(validateUser, evaluateTest);
// comment and like comments
router.post(`/courses/:slug/theme/:_id/comment`, validateUser, commentCourseTheme);
router.post(`/courses/:slug/theme/:_id/comment/:commentId/like`, validateUser, likeOrUnlikeCourseThemeComment);
// update historical content (action = watching | viewed)
router.put(`/courses/:slug/theme/:_id/content/:contentId/:action`, validateUser, updateHistoricalCourseContent);
router.post(`/courses/:slug/theme/:_id/content/:contentId/comment`, validateUser, commentCourseTheme);
router.post(`/courses/:slug/theme/:_id/content/:contentId/like`, validateUser, likeOrUnlikeCourseThemeComment);
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
