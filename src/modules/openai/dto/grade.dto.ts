import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class GradeDto {
  @IsString()
  submission: string;

  @IsNumber()
  part: number;

  @IsOptional()
  @IsString()
  assignment_uid: string;

  @IsOptional()
  @IsString()
  name: string;
}