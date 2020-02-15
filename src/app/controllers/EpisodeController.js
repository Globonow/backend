import Episode from '../models/Episode';

class EpisodeController {
  async index(req, res) {
    const { show_id } = req.params;

    const episodes = await Episode.findAll({
      where: {
        show_id,
      },
    });

    return res.json(episodes);
  }

  async show(req, res) {
    const { id } = req.params;

    const episode = await Episode.findByPk(id);

    return res.json(episode);
  }

  async store(req, res) {
    const { show_id } = req.params;

    const { title, description } = req.body;

    const episode = await Episode.create({
      title,
      description,
      show_id,
    });

    return res.json(episode);
  }

  async update(req, res) {
    const { id } = req.params;
    const episode = await Episode.findByPk(id);

    const updatedShow = await episode.update(req.body);

    return res.json(updatedShow);
  }

  async destroy(req, res) {
    const { id } = req.params;

    const episode = await Episode.findByPk(id);

    await episode.destroy();

    return res.json(episode);
  }
}

export default new EpisodeController();
