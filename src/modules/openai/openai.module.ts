import { Module } from '@nestjs/common';
import { OpenAiService } from './openai.service';
import { OpenaiController } from './openai.controller';
import { SubmissionsModule } from '../submissions/submissions.module';

@Module({
  imports: [SubmissionsModule],
  providers: [OpenAiService],
  exports: [OpenAiService],
  controllers: [OpenaiController],
})
export class OpenAiModule {}
