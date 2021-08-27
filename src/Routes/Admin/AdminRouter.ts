import { Request, Response, Router } from 'express';
import { validateAdmin } from '../../middleware';

const router = Router();

const getResponse = (req: Request, res: Response) => {
  return res.json({
    msg: 'Admin paths'
  });
};

router.route('/')
  .delete(validateAdmin, getResponse)
  .get(validateAdmin, getResponse)
  .post(validateAdmin, getResponse)
  .put(validateAdmin, getResponse);

export default router;
