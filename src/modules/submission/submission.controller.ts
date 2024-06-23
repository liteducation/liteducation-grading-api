import { Controller, Get, Param } from '@nestjs/common';
import { SubmissionService } from './submission.service';
import { GetSubmissionsByAssignmentDto } from './dto/get-submissions-by-assignment.dto';
import { GetSubmissionDto } from './dto/get-submission';

@Controller('submission')
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}

  @Get('/by-assignment/:assignment_uid')
  getSubmissionsByAssignment(
    @Param() { assignment_uid }: GetSubmissionsByAssignmentDto,
  ) {
    return this.submissionService.getSubmissionsByAssignment(assignment_uid);
  }

  @Get('/:uid')
  getSubmission(@Param() { uid }: GetSubmissionDto) {
    return this.submissionService.getSubmission(uid);
  }
}
