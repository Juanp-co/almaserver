import { Router } from 'express';
import {
  helloWorld,
  login,
  logout,
  register,
  getQuestions
} from '../Controllers/public.controller';
import { validateUser } from '../middleware';

const router = Router();

// ===================================================================================

/* Test api */

router.get(`/`, helloWorld);

router.post(`/login`, login);

router.delete(`/logout`, validateUser, logout);

router.get('/questions', getQuestions);

router.post(`/register`, register);

export default router;
