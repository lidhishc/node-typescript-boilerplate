import {AppDataSource} from '../db/data-source';
import app from './app';
import {configuration} from '../config';
require('dotenv').config();
const PORT = configuration.server.port;
import {validateEnv} from '../env/validateEnv';

validateEnv();

AppDataSource.initialize()
  .then(async () => {
    console.log('Database connected');
  })
  .catch(error => console.log(error));

app.listen(PORT, () => {
  console.log('server is running on port', PORT);
});
