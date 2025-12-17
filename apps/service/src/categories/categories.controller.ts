import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { CategoryCreateDto } from "./dto/categories-create.dto";
import { CategoryDocument } from "./schemas/categories.schema";
import { CategoriesService } from "./categories.service";
import { CategoriesListQueryDto } from "./dto/categories-list.dto";

@Controller("categories")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get("list")
  async getCategoriesList(@Query() query: CategoriesListQueryDto) {
    return this.categoriesService.getCategoriesList(query);
  }

  @Post()
  async createCategory(
    @Body() dto: CategoryCreateDto
  ): Promise<CategoryDocument> {
    return this.categoriesService.createCategories(dto);
  }
}
