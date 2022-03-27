import { Router } from 'express';
import { validateUser } from '../middleware';
import getCourses, {
  evaluateQuiz,
  showCourse, updateHistoricalCourseContent
} from '../Controllers/publics/courses.controller';
import {
  deleteEvent,
  getPublicEvents,
  saveEvent,
  showPublicEvent,
  updateEvent
} from '../Controllers/events/events.controller';
import {
  getBanks, getGroupDetails, getOrganization, getPublicMembers, getPublicParams,
  helloWorld,
  login,
  logout, recoveryPassword,
  register
} from '../Controllers/publics/public.controller';
import { getFamiliesGroupsPublic } from '../Controllers/publics/family-group.controller';
import {
  getDevotionalsPublic,
  getTotalsDevotionalsPublic,
  showDevotionalPublic
} from '../Controllers/publics/devotionals.controller';

const router = Router();

// ===================================================================================

/* Test api */

router.get(`/`, helloWorld);

/* banks */

router.get(`/banks`, validateUser, getBanks);

/*
  Courses
*/
// list and counters
router.get(`/courses`, validateUser, getCourses);
router.get(`/courses/:slug`, validateUser, showCourse);
router.post(`/courses/:slug/theme/:_id/quiz`, validateUser, evaluateQuiz);
router.put(`/courses/:slug/theme/:_id/:action`, validateUser, updateHistoricalCourseContent);

/*
  Families Groups
*/
router.get(`/devotionals`, getDevotionalsPublic);
router.get(`/devotionals/counters`, getTotalsDevotionalsPublic);
router.get(`/devotionals/:_id`, showDevotionalPublic);

/*
  Families Groups
*/
router.get(`/families-groups`, validateUser, getFamiliesGroupsPublic);

/*
  Events
*/

router.route(`/events`)
  .get(getPublicEvents)
  .post(validateUser, saveEvent);

router.route(`/events/:_id`)
  .get(showPublicEvent)
  .put(validateUser, updateEvent)
  .delete(validateUser, deleteEvent);

/*
  Families Groups
*/
router.get(`/group/:_id`, validateUser, getGroupDetails);

/*
  Login, logout
*/

router.post(`/login`, login);
router.delete(`/logout`, validateUser, logout);

/*
  Families Groups
*/
router.get(`/members`, validateUser, getPublicMembers);


router.get(`/organization`, getOrganization);

router.get(`/params-app`, getPublicParams);


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
