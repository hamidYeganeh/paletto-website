import { Injectable } from "@nestjs/common";
import { UsersListQueryDto, UsersListResponseDto } from "./dto/users-list.dto";
import { UsersListService } from "./services/users-list.service";
import { UsersCreateService } from "./services/users-create.service";

@Injectable()
export class UsersService {
  constructor(
    private readonly usersListService: UsersListService,
    private readonly usersCreateService: UsersCreateService
  ) {}

  async getUsersList(query: UsersListQueryDto): Promise<UsersListResponseDto> {
    return this.usersListService.execute(query);
  }

  async createUser() {
    return this.usersCreateService.execute();
  }
}
