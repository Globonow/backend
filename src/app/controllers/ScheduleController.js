import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';

import Schedule from '../models/Schedule';

class ScheduleController {
  async index(req, res) {
    const date = req.query.date;

    const parsedDate = date ? parseISO(date) : new Date();

    const schedules = await Schedule.findAll({
      where: {
        start: {
          [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
        },
      },
    });

    return res.json(schedules);
  }

  async show(req, res) {
    const { id } = req.params;

    const schedule = await Schedule.findByPk(id);

    return res.json(schedule);
  }

  async store(req, res) {
    const schedule = await Schedule.create(req.body);

    return res.json(schedule);
  }

  async update(req, res) {
    const { id } = req.params;
    const schedule = await Schedule.findByPk(id);

    const updatedShow = await schedule.update(req.body);

    return res.json(updatedShow);
  }

  async destroy(req, res) {
    const { id } = req.params;

    const schedule = await Schedule.findByPk(id);

    await schedule.destroy();

    return res.json(schedule);
  }
}

export default new ScheduleController();
