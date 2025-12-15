import {
  ConflictException,
  HttpException,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import bcrypt from "bcrypt";
import { Model } from "mongoose";
import { UserCreateDto } from "../dto/users-create.dto";
import { User, UserDocument } from "../schemas/users.schema";

@Injectable()
export class UsersCreateService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ) {}

  async execute(dto: UserCreateDto): Promise<UserDocument> {
    try {
      const passwordHash = await bcrypt.hash(dto.password, 10);
      const created = await this.userModel.create({
        ...dto,
        password: passwordHash,
      });

      const user = await this.userModel.findById(created._id).exec();
      if (!user) {
        throw new InternalServerErrorException("Failed to create user");
      }

      return user;
    } catch (error: unknown) {
      if (error instanceof HttpException) {
        throw error;
      }

      if (
        error &&
        typeof error === "object" &&
        "code" in error &&
        (error as { code?: number }).code === 11000
      ) {
        throw new ConflictException("Email already in use");
      }

      throw error instanceof Error
        ? new InternalServerErrorException(error.message)
        : new InternalServerErrorException("Failed to create user");
    }
  }
}
