import { Body, Controller, Get, Patch, Post, Query } from "@nestjs/common";
import { UsersListQueryDto, UsersListResponseDto } from "./dto/users-list.dto";
import { UsersService } from "./users.service";
import { UserCreateDto } from "./dto/users-create.dto";
import { UserDocument } from "./schemas/users.schema";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("list")
  async getUsersList(
    @Query() query: UsersListQueryDto
  ): Promise<UsersListResponseDto> {
    return this.usersService.getUsersList(query);
  }

  @Post("create")
  async createUser(@Body() dto: UserCreateDto): Promise<UserDocument> {
    return this.usersService.createUser(dto);
  }

  @Patch("update")
  async updateUser() {}
}
