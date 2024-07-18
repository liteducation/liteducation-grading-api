import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepositoryInterface } from '@app/share/database/base.repository.interface';
import { BaseRepositoryAbstract } from '@app/share/database/base.repository.abstract';
import { SubmissionsModel } from './submissions.schema';

export type SubmissionRepositoryInterface =
  BaseRepositoryInterface<SubmissionsModel>;

@Injectable()
export class SubmissionsRepository
  extends BaseRepositoryAbstract<SubmissionsModel>
  implements SubmissionRepositoryInterface
{
  constructor(
    @InjectModel(SubmissionsModel.name)
    private readonly submissionsModel: Model<SubmissionsModel>,
  ) {
    super(submissionsModel);
  }
}
