import { Body, Controller, HttpCode, Post, Sse } from '@nestjs/common';
import { OpenAiService } from './openai.service';
import { GradeDto } from './dto/grade.dto';
import { Observable } from 'rxjs';

@Controller('ai')
export class OpenaiController {
  constructor(private readonly openaiService: OpenAiService) {}

  @Post('grade/writing')
  @Sse()
  @HttpCode(200)
  async gradeWriting(
    // @Body() { submissions, part, assignment_uid, name }: GradeDto,
    @Body() { submission, part }: GradeDto,
  ): Promise<Observable<{ data: string }>> {
    return this.openaiService.gradeWriting(submission, part) as Observable<{
      data: string;
    }>;
  }
}
