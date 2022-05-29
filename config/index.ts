import {configInterface} from './configDTO';
require('dotenv').config();
const {NODE_ENV, PORT, USER_NAME, PASSWORD, DB_NAME, DB_HOST} = process.env;

export const configuration: configInterface = {
  env: NODE_ENV,
  logger: {
    level: NODE_ENV === 'production' ? 'tiny' : 'dev',
  },
  server: {
    port: Number(PORT),
  },
  database: {
    username: USER_NAME,
    password: PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'postgres',
    logging: true,
    port: 5432,
    synchronize: NODE_ENV === 'production' ? false : true,
  },
};
