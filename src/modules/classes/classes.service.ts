import { Injectable } from '@nestjs/common';
import { BaseServiceAbstract } from '@app/share/services/base.service.abstract';
import { ClassModel } from './classes.schema';
import { ClassesRepository } from './classes.repository';

@Injectable()
export class ClassesService extends BaseServiceAbstract<ClassModel> {
  constructor(private classRepository: ClassesRepository) {
    super(classRepository);
  }
}
