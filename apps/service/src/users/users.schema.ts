import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument } from "mongoose";
import { UserRoles } from "./enums/users-roles.enum";

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true, _id: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({
    required: true,
    type: String,
    enum: UserRoles,
    default: UserRoles.USER,
  })
  role: UserRoles;

  @Prop({ required: true })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
