import { Module } from '@nestjs/common';
import { ShareModule } from '@app/share';
import { OpenAiModule } from './modules/openai/openai.module';
import { ClassesModule } from './modules/classes/classes.module';
import { AssignmentsModule } from './modules/assignments/assignments.module';
import { SubmissionsModule } from './modules/submissions/submissions.module';

@Module({
  imports: [
    ShareModule,
    ClassesModule,
    AssignmentsModule,
    SubmissionsModule,
    OpenAiModule,
  ],
})
export class ApiModule {}
