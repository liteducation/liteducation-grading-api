import { Injectable } from '@nestjs/common';
import { BaseServiceAbstract } from '@app/share/services/base.service.abstract';
import { AssignmentModel } from './assignment.schema';
import { AssignmentsRepository } from './assignments.repository';

@Injectable()
export class AssignmentsService extends BaseServiceAbstract<AssignmentModel> {
  constructor(private assignmentRepository: AssignmentsRepository) {
    super(assignmentRepository);
  }
}
