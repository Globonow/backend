import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

const upload = multer(multerConfig);

import UserSessionController from './app/controllers/auth/user/SessionController';
import AdminSessionController from './app/controllers/auth/admin/SessionController';
import UserController from './app/controllers/auth/user/UserController';

import validateSessionStore from './app/validators/SessionStore';
import validateUserStore from './app/validators/UserStore';
import validateUserUpdate from './app/validators/UserUpdate';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => res.json('Hello World'));

routes.post('/sessions', validateSessionStore, UserSessionController.store);
routes.post('/users', validateUserStore, UserController.store);
routes.post('/users', validateUserUpdate, UserController.update);

export default routes;
