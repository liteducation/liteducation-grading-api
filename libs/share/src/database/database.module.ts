import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoDBConfigType } from '../configuration/mongodb.config';
import { logExecutionTime } from 'mongoose-execution-time';
import mongoose from 'mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        mongoose.plugin(logExecutionTime);
        return {
          uri: configService.get<MongoDBConfigType>('mongodb').uri,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
