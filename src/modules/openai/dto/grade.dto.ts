import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class GradeDto {
  @IsString()
  submission: string;

  @IsNumber()
  @Type(() => Number)
  part: number;

  // @IsOptional()
  // @IsString()
  // assignment_uid: string;

  // @IsOptional()
  // @IsString()
  // name: string;
}
