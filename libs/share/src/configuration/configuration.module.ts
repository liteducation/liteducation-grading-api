import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { buildMongoDBConfig } from "./mongodb.config";
import * as Joi from "joi";
import { mongodbConfigSchema } from "./mongodb.schema";
;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
      load: [buildMongoDBConfig],
      validationSchema: Joi.object({
        PORT: Joi.number().default(3001),
        ...mongodbConfigSchema(),
      }),
    }),
  ],
})
export class ConfigurationModule {}
