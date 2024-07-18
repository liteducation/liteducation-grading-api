import { Module } from '@nestjs/common';
import { SubmissionsService } from './submissions.service';
import { SubmissionsController } from './submissions.controller';
import { ShareModule } from '@app/share';
import { MongooseModule } from '@nestjs/mongoose';
import { SubmissionsModel, SubmissionsSchema } from './submissions.schema';
import { SubmissionsRepository } from './submissions.repository';

@Module({
  imports: [
    ShareModule,
    MongooseModule.forFeature([
      {
        name: SubmissionsModel.name,
        schema: SubmissionsSchema,
        collection: 'submissions',
      },
    ]),
  ],
  providers: [SubmissionsService, SubmissionsRepository],
  controllers: [SubmissionsController],
  exports: [SubmissionsService],
})
export class SubmissionsModule {}
