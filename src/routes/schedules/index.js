import { Router } from 'express';

import ScheduleController from '../../app/controllers/ScheduleController';

const routes = new Router();

routes.get('/', ScheduleController.index);
routes.get('/:id', ScheduleController.show);
routes.post('/', ScheduleController.store);
routes.put('/:id', ScheduleController.update);
routes.delete('/:id', ScheduleController.destroy);

export default routes;
