import Show from '../models/Show';

class ShowController {
  async index(req, res) {
    const shows = await Show.findAll();

    return res.json(shows);
  }

  async show(req, res) {
    const { id } = req.params;

    const show = await Show.findByPk(id);

    return res.json(show);
  }

  async store(req, res) {
    const { name, file_id, description } = req.body;

    const show = await Show.create({
      name,
      description,
      file_id,
    });

    return res.json(show);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, file_id, description } = req.body;

    const show = await Show.findByPk(id);

    const updatedShow = await show.update({
      name,
      description,
      file_id,
    });

    return res.json(updatedShow);
  }

  async destroy(req, res) {
    const { id } = req.params;

    const show = await Show.findByPk(id);

    await show.destroy();

    return res.json(show);
  }
}

export default new ShowController();
