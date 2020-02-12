import { Router } from 'express';

import AdminControlller from '../../app/controllers/auth/admin/AdminController';

const routes = new Router();

routes.post('/', AdminControlller.store);
routes.put('/:id', AdminControlller.update);

export default routes;
