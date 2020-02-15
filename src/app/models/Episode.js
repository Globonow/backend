import Sequelize, { Model } from 'sequelize';

class Episode extends Model {
  static init(connection) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.TEXT,
        show_id: Sequelize.INTEGER,
      },
      {
        sequelize: connection,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Show, { foreignKey: 'show_id', as: 'show' });
  }
}

export default Episode;
