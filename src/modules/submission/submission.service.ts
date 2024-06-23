import { Injectable } from '@nestjs/common';
import { BaseServiceAbstract } from '@app/share/services/base.service.abstract';
import { SubmissionModel } from './submission.schema';
import { SubmissionRepository } from './submission.repository';
import { ShareService } from '@app/share';

@Injectable()
export class SubmissionService extends BaseServiceAbstract<SubmissionModel> {
  constructor(
    private readonly shareService: ShareService,
    private submissionRepository: SubmissionRepository,
  ) {
    super(submissionRepository);
  }

  async createSubmission(
    assignment_uid: string,
    name: string,
    essay: string,
    result: string,
  ) {
    return this.create({
      uid: this.shareService.makeid(),
      slug: this.shareService.slugify(
        `${name}-${assignment_uid}-${Date.now()}`,
      ),
      assignment_uid,
      name,
      essay,
      result,
    });
  }

  async getSubmission(uid: string) {
    return this.findOne({ filter: { uid } });
  }

  async getSubmissionsByAssignment(assignment_uid: string) {
    return this.find({
      filter: {
        assignment_uid,
      },
    });
  }
}
