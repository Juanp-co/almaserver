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

const router = Router();

// ===================================================================================

/* Test api */

router.get(`/`, helloWorld);

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
