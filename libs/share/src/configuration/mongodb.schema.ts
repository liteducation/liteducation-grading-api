import * as Joi from 'joi';

export function mongodbConfigSchema(required = false, prefix = 'MONGODB') {
  const schema = {};
  schema[`${prefix}_URI`] = Joi.string().default(
    'mongodb://admin:example@localhost:27017/p90db',
  );

  if (required) {
    for (const key in schema) {
      schema[key] = schema[key].required();
    }
  }

  return {
    ...schema,
  };
}
