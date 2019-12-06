import Sequelize from 'sequelize';

// Models
import Student from '../app/models/Student';

import databaseConfig from '../config/database';

const models = [Student];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
