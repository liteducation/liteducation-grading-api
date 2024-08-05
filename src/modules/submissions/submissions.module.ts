import { Module } from '@nestjs/common';
import { SubmissionsService } from './submissions.service';
import { SubmissionsController } from './submissions.controller';
import { ShareModule } from '@app/share';
import { MongooseModule } from '@nestjs/mongoose';
import { SubmissionsRepository } from './submissions.repository';
import { SubmissionModel, SubmissionSchema } from './submission.schema';

@Module({
  imports: [
    ShareModule,
    MongooseModule.forFeature([
      {
        name: SubmissionModel.name,
        schema: SubmissionSchema,
        collection: 'submissions',
      },
    ]),
  ],
  providers: [SubmissionsService, SubmissionsRepository],
  controllers: [SubmissionsController],
  exports: [SubmissionsService],
})
export class SubmissionsModule {}
