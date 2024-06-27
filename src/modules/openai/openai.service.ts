import OpenAI from 'openai';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
// import { SubmissionService } from '../submission/submission.service';

@Injectable()
export class OpenAiService {
  private openAiService: OpenAI;

  constructor(
    private readonly configService: ConfigService,
    // private readonly submissionService: SubmissionService,
  ) {
    this.openAiService = new OpenAI({
      apiKey: this.configService.get('OPENAI_API_KEY'),
      baseURL: this.configService.get('OPENAI_BASE_URL'),
    });
  }

  gradeEssay(
    essay: string,
    part: number,
    // { assignment_uid, name }: { assignment_uid?: string; name?: string },
  ): Observable<{ data: string }> {
    let result = '';
    return new Observable((subscriber) => {
      this.openAiService.chat.completions
        .create({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `You are IELTS writing part ${part} grade tools. You evaluate the writing based on several key criteria used in the IELTS exam: Task Achievement, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy`,
            },
            {
              role: 'user',
              content:
                essay +
                `\nYou grade this essay with IELTS writing part ${part} key criteria. The result follow the format: Overall Grade, Task Achievement, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy, mistakes and correct the mistakes, improvements`,
            },
          ],
          stream: true,
        })
        .then(async (res) => {
          for await (const part of res) {
            if (part.choices[0]?.delta?.content) {
              const formattedData = part.choices[0].delta.content
                ? part.choices[0].delta.content
                : '';
              subscriber.next({ data: `${formattedData}` });
              result += formattedData;
            }
          }
          // if (assignment_uid && name) {
          //   await this.submissionService.createSubmission(
          //     assignment_uid,
          //     name,
          //     essay,
          //     result,
          //   );
          // }
          console.log(result);
          subscriber.complete();
        });
    });
  }
}
