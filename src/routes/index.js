import { Router } from 'express';

import multer from 'multer';
import multerConfig from '../config/multer';
const upload = multer(multerConfig);

import users from './users';
import flashInfos from './flashInfos';

const routes = new Router();

routes.use('/users', users);
routes.use('/flash-infos', flashInfos);

export default routes;
