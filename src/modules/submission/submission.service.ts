import { Injectable } from "@nestjs/common";
import { BaseServiceAbstract } from "@app/share/services/base.service.abstract";
import { SubmissionModel } from "./submission.schema";
import { SubmissionRepository } from "./submission.repository";

@Injectable()
export class SubmissionService extends BaseServiceAbstract<SubmissionModel> {
  constructor(private submissionRepository: SubmissionRepository) {
    super(submissionRepository);
  }
}
