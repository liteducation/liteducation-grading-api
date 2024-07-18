import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepositoryInterface } from '@app/share/database/base.repository.interface';
import { ClassModel } from './classes.schema';
import { BaseRepositoryAbstract } from '@app/share/database/base.repository.abstract';

export type ClassRepositoryInterface = BaseRepositoryInterface<ClassModel>;

@Injectable()
export class ClassesRepository
  extends BaseRepositoryAbstract<ClassModel>
  implements ClassRepositoryInterface
{
  constructor(
    @InjectModel(ClassModel.name)
    private readonly classModel: Model<ClassModel>,
  ) {
    super(classModel);
  }
}
