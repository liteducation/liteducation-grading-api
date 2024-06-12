import { Module } from '@nestjs/common';
import { SubmissionService } from './submission.service';
import { SubmissionController } from './submission.controller';
import { ShareModule } from '@app/share';
import { MongooseModule } from '@nestjs/mongoose';
import { SubmissionModel, SubmissionSchema } from './submission.schema';

@Module({
  imports: [ShareModule, MongooseModule.forFeature([
    {
      name: SubmissionModel.name,
      schema: SubmissionSchema,
      collection: "assignments",
    },
  ]),],
  providers: [SubmissionService],
  controllers: [SubmissionController]
})
export class SubmissionModule { }
