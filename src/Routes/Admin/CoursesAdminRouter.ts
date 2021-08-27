import { Router } from 'express';
import { validateAdmin } from '../../middleware';
import getCourses, {
  addThemeCourse,
  deleteCourse,
  deleteThemeCourse,
  enableCourse,
  saveCourse,
  showCourse,
  updateThemeCourse,
  updateInfoCourse
} from '../../Controllers/admin/courses.admin.controller';

const router = Router();

router.route('/')
  .get(validateAdmin, getCourses)
  .post(validateAdmin, saveCourse);

router.route('/:_id')
  .delete(validateAdmin, deleteCourse)
  .get(validateAdmin, showCourse);

router.put('/:_id/enable',validateAdmin, enableCourse);
router.put('/:_id/info',validateAdmin, updateInfoCourse);

// theme
router.post('/:_id/theme/',validateAdmin, addThemeCourse);
router.put('/:_id/theme/:themeId',validateAdmin, updateThemeCourse);
router.delete('/:_id/theme/:themeId',validateAdmin, deleteThemeCourse);

export default router;
