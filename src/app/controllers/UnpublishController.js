import FlashInfo from '../schemas/FlashInfo';

import dispatcher from '../ws/FlashInfos/Dispatcher';

class UnpublishController {
  async store(req, res) {
    const { id } = req.params;

    const flashInfo = await FlashInfo.findById(id);

    flashInfo.published = false;

    await flashInfo.save();

    dispatcher.notifyAll({
      type: 'publish-flash-info',
      payload: flashInfo,
    });

    return res.json({
      success: true,
      message: 'FlashInfo unpublished with success!',
      flashInfo,
    });
  }
}

export default new UnpublishController();
