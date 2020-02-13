import { Router } from 'express';

import FlashInfoController from '../../app/controllers/FlashInfoController';

import authMiddleware from '../../app/middlewares/auth';

const routes = new Router();

routes.get('/', FlashInfoController.index);
routes.get('/:id', FlashInfoController.show);
routes.post('/', FlashInfoController.store);

export default routes;
