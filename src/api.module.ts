import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ShareModule } from '@app/share';
import { OpenAiModule } from './modules/openai/openai.module';

@Module({
  imports: [ShareModule, OpenAiModule],
  controllers: [ApiController],
})
export class ApiModule {}
