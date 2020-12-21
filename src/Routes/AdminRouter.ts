import { Router } from 'express';
import {
  deleteQuestions, getDetailsQuestion,
  getQuestions,
  saveQuestions, updateQuestions
} from '../Controllers/admin/questions.admin.controller';
import {
  changeRoleUser,
  // deleteUser,
  getUsers,
  getUsersCounters,
  saveUser,
  showUser,
  updateUser
} from '../Controllers/admin/users.admin.controller';
import { validateAdmin } from '../middleware';
import getEvents, { deleteEvent, saveEvent, showEvent, updateEvent } from '../Controllers/events/events.controller';

const router = Router();

// ===================================================================================

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
