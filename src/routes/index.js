import { Router } from 'express';

import users from './users';
import flashInfos from './flashInfos';
import shows from './shows';
import schedules from './schedules';
import episodes from './episodes';

const routes = new Router();

routes.use('/users', users);
routes.use('/flash-infos', flashInfos);
routes.use('/shows', shows);
routes.use('/shows/', episodes);
routes.use('/schedules', schedules);

export default routes;
