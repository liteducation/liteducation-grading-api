import { Schema } from "@nestjs/mongoose";
import { Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
  _id: false,
  id: false,
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
  toJSON: {
    getters: true,
  },
})
export class BaseSchema {
  _id?: string;

  @Prop()
  public created_at: number;

  @Prop()
  public updated_at: number;

  @Prop({ default: null })
  deleted_at?: Date;
}
