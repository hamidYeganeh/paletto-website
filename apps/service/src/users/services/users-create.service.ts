import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "../schemas/users.schema";
import { Model } from "mongoose";

@Injectable()
export class UsersCreateService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async execute() {}
}
