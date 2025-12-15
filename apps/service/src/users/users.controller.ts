import { Controller, Get, Post, Query } from "@nestjs/common";
import { UsersListQueryDto, UsersListResponseDto } from "./dto/users-list.dto";
import { UsersService } from "./users.service";

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
  async createUser() {
    return this.usersService.createUser();
  }
}
