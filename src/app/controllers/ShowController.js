import Show from '../schemas/Show';

class ShowController {
  async index(req, res) {
    const shows = await Show.find({});

    return res.json(shows);
  }

  async show(req, res) {
    const { id } = req.params;

    const show = await Show.findById(id);

    return res.json(show);
  }

  async store(req, res) {
    const { name, image, description } = req.body;

    const show = await Show.create({
      name,
      image,
      description,
    });

    return res.json(show);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, image, description } = req.body;

    const show = await Show.findByIdAndUpdate(
      id,
      {
        name,
        image,
        description,
      },
      { new: true }
    );

    return res.json(show);
  }

  async destroy(req, res) {
    const { id } = req.params;

    const show = await Show.findByIdAndDelete(id);

    return res.json(show);
  }
}

export default new ShowController();
