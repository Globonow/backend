import { Router } from 'express';

import UserController from '../../app/controllers/auth/user/UserController';
import SessionController from '../../app/controllers/auth/user/SessionController';

import validateUserStore from '../../app/validators/UserStore';
import validateUserUpdate from '../../app/validators/UserUpdate';

import authMiddleware from '../../app/middlewares/auth';

const routes = new Router();

routes.post('/session', SessionController.store);

routes.post('/', validateUserStore, UserController.store);
routes.put(
  '/:id',
  authMiddleware('user'),
  validateUserUpdate,
  UserController.update
);

export default routes;
