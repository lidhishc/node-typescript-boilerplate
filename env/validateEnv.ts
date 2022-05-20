import {envSchema} from './envSchema';
import {envVariables} from './env_Variables';

envVariables.forEach(envVar => {
  if (!process.env[envVar]) {
    throw new Error(`Variable "${envVar}" is not in .env file"`);
  }
});

const {error} = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}
