import { Router } from 'express';
import { validateAdmin } from '../../middleware';
import getEvents, { deleteEvent, saveEvent, showEvent, updateEvent } from '../../Controllers/events/events.controller';

const router = Router();

router.route('/')
  .get(validateAdmin, getEvents)
  .post(validateAdmin, saveEvent);

router.route('/:_id')
  .delete(validateAdmin, deleteEvent)
  .get(validateAdmin, showEvent)
  .put(validateAdmin, updateEvent);

export default router;
