import FlashInfo from '../schemas/FlashInfo';

class FlashInfoController {
  async index(req, res) {
    const flashInfos = await FlashInfo.find({});

    return res.json(flashInfos);
  }

  async show(req, res) {
    const { id } = req.params;

    const flashInfo = await FlashInfo.findById(id);

    return res.json(flashInfo);
  }

  async store(req, res) {
    const { title, body, image, schedule } = req.body;

    const flashInfo = await FlashInfo.create({
      title,
      body,
      image,
      schedule,
    });

    return res.json(flashInfo);
  }
}

export default new FlashInfoController();
