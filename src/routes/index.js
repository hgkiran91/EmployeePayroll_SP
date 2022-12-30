import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import employeeRoute from './employee.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);
  router.use('/employees', employeeRoute);

  return router;
};

export default routes;
