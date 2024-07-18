import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepositoryInterface } from '@app/share/database/base.repository.interface';
import { AssignmentModel } from './assignments.schema';
import { BaseRepositoryAbstract } from '@app/share/database/base.repository.abstract';

export type AssignmentRepositoryInterface =
  BaseRepositoryInterface<AssignmentModel>;

@Injectable()
export class AssignmentsRepository
  extends BaseRepositoryAbstract<AssignmentModel>
  implements AssignmentRepositoryInterface
{
  constructor(
    @InjectModel(AssignmentModel.name)
    private readonly assignmentModel: Model<AssignmentModel>,
  ) {
    super(assignmentModel);
  }
}
