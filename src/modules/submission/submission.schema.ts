import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { STATUS } from "src/constants";

@Schema({
  _id: false,
  id: false,
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
  versionKey: false,
})
export class AssignmentModel {
  _id?: any;

  @Prop({
    required: true,
    index: true,
  })
  public uid: string;

  @Prop({
    required: true,
  })
  public name: string;

  @Prop({
    required: true,
    index: true,
  })
  public slug: string;

  @Prop({
    required: true,
    index: true,
  })
  public assignment_uid: string;

  @Prop({
    type: Number,
    default: STATUS.SHOW,
  })
  status: number;

  @Prop()
  public created_at: number;

  @Prop()
  public updated_at: number;
}

export type AssignmentDocument = AssignmentModel & mongoose.Document;
const schema = SchemaFactory.createForClass(AssignmentModel);

schema.pre("save", function (this: AssignmentModel, next) {
  this.updated_at = Date.now();
  next();
});
schema.loadClass(AssignmentModel);

export const ClassSchema = schema;