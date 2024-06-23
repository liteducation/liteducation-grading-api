import { Injectable } from '@nestjs/common';
import { BaseServiceAbstract } from '@app/share/services/base.service.abstract';
import { AssignmentModel } from './assignment.schema';
import { AssignmentRepository } from './assignment.repository';

@Injectable()
export class AssignmentService extends BaseServiceAbstract<AssignmentModel> {
  constructor(private assignmentRepository: AssignmentRepository) {
    super(assignmentRepository);
  }
}
