import { Body, Controller, HttpCode, Post, Sse } from '@nestjs/common';
import { OpenAiService } from './openai.service';
import { GradeDto } from './dto/grade.dto';

@Controller('ai')
export class OpenaiController {
  constructor(private readonly openaiService: OpenAiService) {}

  @Post('grade')
  @Sse()
  @HttpCode(200)
  async streamGradeTest(
    @Body() { submission, part, assignment_uid, name }: GradeDto,
  ) {
    return this.openaiService.gradeEssay(submission, part, { assignment_uid, name });
  }
}
