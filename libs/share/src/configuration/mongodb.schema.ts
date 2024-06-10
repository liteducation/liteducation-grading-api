import * as Joi from "joi";
import { HOST_SCHEMA } from "@app/share/configuration/schemas/common.schema";
import { redisConfigSchema } from "@app/share/configuration/schemas/redis.schema";

export function mongodbConfigSchema(required = false, prefix = "MONGODB") {
  const schema = {};
  schema[`${prefix}_URI`] = HOST_SCHEMA.default(
    "mongodb://admin:example@localhost:27017/p90db"
  );
  schema[`${prefix}_CACHE_ENABLE`] = Joi.boolean().default(false);

  if (required) {
    for (const key in schema) {
      schema[key] = schema[key].required();
    }
  }

  return {
    ...schema,
    ...(process.env[`${prefix}_CACHE_ENABLE`] == "true" &&
      redisConfigSchema(false, `${prefix}_CACHE`)),
  };
}
