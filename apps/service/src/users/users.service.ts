import { Injectable } from "@nestjs/common";
import { UsersListQueryDto, UsersListResponseDto } from "./dto/users-list.dto";
import { UsersListService } from "./services/users-list.service";

@Injectable()
export class UsersService {
  constructor(private readonly usersListService: UsersListService) {}

  async getUsersList(query: UsersListQueryDto): Promise<UsersListResponseDto> {
    return this.usersListService.execute(query);
  }
}
