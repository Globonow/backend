import { Router } from 'express';

import multer from 'multer';
import multerConfig from '../config/multer';

import users from './users';

const upload = multer(multerConfig);

const routes = new Router();

routes.use('/', users);

export default routes;
