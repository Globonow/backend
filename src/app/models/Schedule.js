import Sequelize, { Model } from 'sequelize';

class Schedule extends Model {
  static init(connection) {
    super.init(
      {
        show_id: Sequelize.INTEGER,
        start: Sequelize.DATE,
        end: Sequelize.DATE,
      },
      {
        sequelize: connection,
      }
    );

    return this;
  }
}

export default Schedule;
