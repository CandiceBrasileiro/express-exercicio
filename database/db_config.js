import { Sequelize } from 'sequelize';

const DBName = process.env.DB_NAME;
const DBUser = process.env.DB_USER;
const DBPassword = process.env.DB_PASSWORD;
const DBHost = process.env.DB_HOST;

const sequelize = new Sequelize(DBName, DBUser, DBPassword, {
  host: DBHost,
  dialect: 'mysql',
});

export default sequelize;
