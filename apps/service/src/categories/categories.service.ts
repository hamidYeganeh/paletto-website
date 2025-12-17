import { Injectable } from "@nestjs/common";
import { CategoryCreateDto } from "./dto/categories-create.dto";
import { CategoryDocument } from "./schemas/categories.schema";
import { CategoriesCreateService } from "./services/categories-create.service";
import {
  CategoriesListQueryDto,
  CategoriesListResponseDto,
} from "./dto/categories-list.dto";
import { CategoriesListService } from "./services/categories-list.service";

@Injectable()
export class CategoriesService {
  constructor(
    private readonly categoriesListService: CategoriesListService,
    private readonly categoriesCreateService: CategoriesCreateService
  ) {}

  async getCategoriesList(
    query: CategoriesListQueryDto
  ): Promise<CategoriesListResponseDto> {
    return this.categoriesListService.execute(query);
  }

  async createCategories(dto: CategoryCreateDto): Promise<CategoryDocument> {
    return this.categoriesCreateService.execute(dto);
  }
}
