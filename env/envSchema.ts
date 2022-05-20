import joi, {Schema} from 'joi';

const envSchema: Schema = joi
  .object({
    NODE_ENV: joi.string().valid('development', 'production').required(),
    PORT: joi.number().required(),
  })
  .unknown()
  .required();

export {envSchema};
