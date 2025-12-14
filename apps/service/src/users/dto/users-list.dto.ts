import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";
import { UserDocument } from "../users.schema";

export class UsersListQueryDto {
  @Type(() => Number)
  @IsNumber()
  page?: number;

  @Type(() => Number)
  @IsNumber()
  limit?: number;

  @IsOptional()
  @IsString()
  search?: string;
}

export interface UsersListResponseDto {
  count: number;
  users: UserDocument[];
}
