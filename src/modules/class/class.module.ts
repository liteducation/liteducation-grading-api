import { Module } from '@nestjs/common';
import { ClassService } from './class.service';
import { ClassController } from './class.controller';
import { ShareModule } from '@app/share';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassModel, ClassSchema } from './class.schema';

@Module({
  imports: [ShareModule, MongooseModule.forFeature([
    {
      name: ClassModel.name,
      schema: ClassSchema,
      collection: "class",
    },
  ]),],
  providers: [ClassService],
  controllers: [ClassController]
})
export class ClassModule {}
