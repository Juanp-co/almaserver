import express from 'express';
// import Auth from '../Middleware/Authentication';
// import CompaniesController from '../Controllers/Companies/CompaniesController';
// import PublicController from '../Controllers/Public/PublicController';

// dotenv.config();

const router = express.Router();

// ===================================================================================

/*
  Test api
 */

router.get(`/`, (req, res) => {
  res.status(200).json({
    msg: `Welcome to ALMA API REST`
  });
});

export default router;
