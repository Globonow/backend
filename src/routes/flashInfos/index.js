import { Router } from 'express';

import FlashInfoController from '../../app/controllers/FlashInfoController';
import PublishController from '../../app/controllers/PublishController';
import UnpublishController from '../../app/controllers/UnpublishController';

import authMiddleware from '../../app/middlewares/auth';

const routes = new Router();

routes.get('/', FlashInfoController.index);
routes.get('/:id', FlashInfoController.show);
routes.post('/', FlashInfoController.store);
routes.put('/:id', FlashInfoController.update);
routes.delete('/:id', FlashInfoController.destroy);

routes.post('/:id/publishes', PublishController.store);
routes.post('/:id/unpublishes', UnpublishController.store);

export default routes;
