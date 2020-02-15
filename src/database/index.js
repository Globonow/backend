import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import User from '../app/models/User';
import Admin from '../app/models/Admin';
import Show from '../app/models/Show';
import Schedule from '../app/models/Schedule';
import Episode from '../app/models/Episode';

import databaseConfig from '../config/database';

const models = [User, Admin, Show, Schedule, Episode];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();
