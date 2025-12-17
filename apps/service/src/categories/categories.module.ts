import { Module } from "@nestjs/common";
import { CategoriesController } from "./categories.controller";
import { CategoriesService } from "./categories.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Category, CategorySchema } from "./schemas/categories.schema";
import { CategoriesCreateService } from "./services/categories-create.service";
import { CategoriesListService } from "./services/categories-list.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  controllers: [CategoriesController],
  providers: [
    CategoriesService,
    CategoriesListService,
    CategoriesCreateService,
  ],
})
export class CategoriesModule {}
