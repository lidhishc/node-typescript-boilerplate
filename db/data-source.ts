import 'reflect-metadata';
import {DataSource} from 'typeorm';
import {configuration} from '../config';
import {database} from 'config/configDTO';
import {entities} from './entity';
let {database, host, logging, password, username, port, synchronize}: database =
  configuration.database;

export const AppDataSource: DataSource = new DataSource({
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  synchronize,
  logging,
  entities: entities,
  migrations: [],
  subscribers: [],
});
