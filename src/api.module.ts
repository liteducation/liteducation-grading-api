import { Module } from '@nestjs/common';
import { ShareModule } from '@app/share';
import { OpenAiModule } from './modules/openai/openai.module';
import { ClassModule } from './modules/class/class.module';
import { AssignmentModule } from './modules/assignment/assignment.module';
import { SubmissionModule } from './modules/submission/submission.module';

@Module({
  imports: [
    ShareModule,
    ClassModule,
    AssignmentModule,
    SubmissionModule,
    OpenAiModule,
  ],
})
export class ApiModule {}
