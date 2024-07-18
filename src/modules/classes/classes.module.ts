import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassesController } from './classes.controller';
import { ShareModule } from '@app/share';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassModel, ClassesSchema } from './classes.schema';
import { ClassesRepository } from './classes.repository';

@Module({
  imports: [
    ShareModule,
    MongooseModule.forFeature([
      {
        name: ClassModel.name,
        schema: ClassesSchema,
        collection: 'classes',
      },
    ]),
  ],
  providers: [ClassesService, ClassesRepository],
  controllers: [ClassesController],
})
export class ClassesModule {}
