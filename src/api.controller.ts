import { Body, Controller, HttpCode, Post, Sse } from '@nestjs/common';
import { OpenAiService } from './modules/openai/openai.service';

@Controller()
export class ApiController {
  constructor(private readonly openaiService: OpenAiService) { }

  @Post('grade')
  @Sse()
  @HttpCode(200)
  async streamGradeTest(
    @Body() { submission, part }: { submission: string, part: number },
  ) {
    return this.openaiService.gradeEssay(submission, part);
  }

}
