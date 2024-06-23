import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepositoryInterface } from '@app/share/database/base.repository.interface';
import { BaseRepositoryAbstract } from '@app/share/database/base.repository.abstract';
import { SubmissionModel } from './submission.schema';

export type SubmissionRepositoryInterface =
  BaseRepositoryInterface<SubmissionModel>;

@Injectable()
export class SubmissionRepository
  extends BaseRepositoryAbstract<SubmissionModel>
  implements SubmissionRepositoryInterface
{
  constructor(
    @InjectModel(SubmissionModel.name)
    private readonly submissionModel: Model<SubmissionModel>,
  ) {
    super(submissionModel);
  }
}
