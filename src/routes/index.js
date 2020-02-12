import { Router } from 'express';

import multer from 'multer';
import multerConfig from '../config/multer';
const upload = multer(multerConfig);

import users from './users';

const routes = new Router();

routes.use('/', users);

export default routes;
