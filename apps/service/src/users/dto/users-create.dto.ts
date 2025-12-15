import { IsEmail, IsEnum, IsString } from "class-validator";
import { UserRoles } from "../enums/users-roles.enum";

export class UserCreateDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsEnum(UserRoles)
  role: UserRoles;
}
