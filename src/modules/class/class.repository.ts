import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseRepositoryInterface } from "@app/share/database/base.repository.interface";
import { ClassModel } from "./class.schema";
import { BaseRepositoryAbstract } from "@app/share/database/base.repository.abstract";

export type ClassRepositoryInterface = BaseRepositoryInterface<ClassModel>;

@Injectable()
export class ClassRepository
  extends BaseRepositoryAbstract<ClassModel>
  implements ClassRepositoryInterface {
  constructor(
    @InjectModel(ClassModel.name)
    private readonly classModel: Model<ClassModel>
  ) {
    super(classModel);
  }
}
