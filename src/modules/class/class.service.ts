import { Injectable } from '@nestjs/common';
import { BaseServiceAbstract } from '@app/share/services/base.service.abstract';
import { ClassModel } from './class.schema';
import { ClassRepository } from './class.repository';

@Injectable()
export class ClassService extends BaseServiceAbstract<ClassModel> {
  constructor(private classRepository: ClassRepository) {
    super(classRepository);
  }
}
