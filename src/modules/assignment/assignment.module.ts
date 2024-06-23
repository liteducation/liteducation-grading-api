import { Module } from '@nestjs/common';
import { AssignmentService } from './assignment.service';
import { AssignmentController } from './assignment.controller';
import { ShareModule } from '@app/share';
import { MongooseModule } from '@nestjs/mongoose';
import { AssignmentModel, AssignmentSchema } from './assignment.schema';
import { AssignmentRepository } from './assignment.repository';

@Module({
  imports: [
    ShareModule,
    MongooseModule.forFeature([
      {
        name: AssignmentModel.name,
        schema: AssignmentSchema,
        collection: 'assignments',
      },
    ]),
  ],
  providers: [AssignmentService, AssignmentRepository],
  controllers: [AssignmentController],
})
export class AssignmentModule {}
