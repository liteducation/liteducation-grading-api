import { Module } from '@nestjs/common';
import { OpenAiService } from './openai.service';
import { OpenaiController } from './openai.controller';
import { SubmissionModule } from '../submissions/submissions.module';

@Module({
  imports: [SubmissionModule],
  providers: [OpenAiService],
  exports: [OpenAiService],
  controllers: [OpenaiController],
})
export class OpenAiModule {}
