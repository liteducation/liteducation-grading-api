import { Module } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { AssignmentsController } from './assignments.controller';
import { ShareModule } from '@app/share';
import { MongooseModule } from '@nestjs/mongoose';
import { AssignmentModel, AssignmentSchema } from './assignment.schema';
import { AssignmentsRepository } from './assignments.repository';

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
  providers: [AssignmentsService, AssignmentsRepository],
  controllers: [AssignmentsController],
})
export class AssignmentsModule {}
