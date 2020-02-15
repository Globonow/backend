import { Router } from 'express';

import ShowController from '../../app/controllers/ShowController';

const routes = new Router();

routes.get('/', ShowController.index);
routes.get('/:id', ShowController.show);
routes.post('/', ShowController.store);
routes.put('/:id', ShowController.update);
routes.delete('/:id', ShowController.destroy);

export default routes;
