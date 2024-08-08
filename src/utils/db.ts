import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('flapping', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

export default sequelize;