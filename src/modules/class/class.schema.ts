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
export class ClassModel {
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
    type: Number,
    default: STATUS.SHOW,
  })
  status: number;

  @Prop()
  public created_at: number;

  @Prop()
  public updated_at: number;
}

export type ClassDocument = ClassModel & mongoose.Document;
const schema = SchemaFactory.createForClass(ClassModel);

schema.pre("save", function (this: ClassModel, next) {
  this.updated_at = Date.now();
  next();
});
schema.loadClass(ClassModel);

export const ClassSchema = schema;