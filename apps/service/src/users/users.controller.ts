import { Controller, Get, Query } from "@nestjs/common";
import { UsersListQueryDto, UsersListResponseDto } from "./dto/users-list.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
constructor(private readonly usersService: UsersService) {}


  @Get("list")
  async getUsersList(@Query() query: UsersListQueryDto): Promise<UsersListResponseDto> {
    return this.usersService.getUsersList(query);
  }
}
