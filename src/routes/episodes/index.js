import { Router } from 'express';

import EpisodeController from '../../app/controllers/EpisodeController';

const routes = new Router();

routes.get('/:show_id/episodes', EpisodeController.index);
routes.get('/:show_id/episodes/:id', EpisodeController.show);
routes.post('/:show_id/episodes/', EpisodeController.store);
routes.put('/:show_id/episodes/:id', EpisodeController.update);
routes.delete('/:show_id/episodes/:id', EpisodeController.destroy);

export default routes;
