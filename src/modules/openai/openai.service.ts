import OpenAI from 'openai';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';

@Injectable()
export class OpenAiService {
  private openAiService: OpenAI;

  constructor(
    private readonly configService: ConfigService, 
  ) {
    this.openAiService = new OpenAI({
      apiKey: this.configService.get('OPENAI_API_KEY'),
      baseURL: this.configService.get('OPENAI_BASE_URL'),
    });
  }

  getCompletion(messages: OpenAI.ChatCompletionMessageParam[]): Observable<{ data: string; }> {
    return new Observable((subscriber) => {
      this.openAiService.chat.completions.create(
        {
          model: 'gpt-3.5-turbo',
          messages,
          stream: true,
        },
        ).then(async res => {
          for await (const part of res) {
            if (part.choices[0]?.delta?.content) {
              const formattedData = part.choices[0].delta.content ? part.choices[0].delta.content : '';
              subscriber.next({ data: formattedData });
            }
          }
          subscriber.complete();
      });
    });
  }

  gradeEssay(submission: string, part: number): Observable<{ data: string; }> {
    return this.getCompletion([
      { role: 'system', content: `You are IELTS writing part ${part} grade tools. You evaluate the writing based on several key criteria used in the IELTS exam: Task Achievement, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy` },
      { role: 'user', content: submission + '\nYou grade this essay with IELTS writing part 1 key criteria. The result follow the format: Overall Grade, Task Achievement, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy, mistakes and correct the mistakes, improvements' },
    ]);
  }
}