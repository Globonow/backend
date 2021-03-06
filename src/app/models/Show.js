import Sequelize, { Model } from 'sequelize';

class Show extends Model {
  static init(connection) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.TEXT,
      },
      {
        sequelize: connection,
      }
    );

    return this;
  }
}

export default Show;
