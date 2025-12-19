import { InjectModel } from "@nestjs/mongoose";
import {
  ArtworksListQueryDto,
  ArtworksListResponseDto,
} from "../dto/artworks-list.dto";
import { Artwork, ArtworkDocument } from "../schemas/artwork.schema";
import { Model, QueryFilter } from "mongoose";
import {
  DEFAULT_LIST_LIMIT,
  DEFAULT_LIST_PAGE,
} from "src/constants/list-pagination.constants";

export class ArtworksListService {
  constructor(
    @InjectModel(Artwork.name)
    private readonly artworkModel: Model<ArtworkDocument>
  ) {}

  private escapeRegExp(value: string): string {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  buildQuery(query: ArtworksListQueryDto) {
    const search = query.search?.trim();

    const queryObject: QueryFilter<ArtworkDocument> = {};

    if (query.artistID) {
      queryObject.artistID = query.artistID;
    }

    if (query.status) {
      queryObject.status = query.status;
    }

    if (search) {
      const safeSearch = this.escapeRegExp(search);
      queryObject.$or = [{ title: { $regex: safeSearch, $options: "i" } }];
    }

    return queryObject;
  }

  private getSkip(page: number, limit: number): number {
    return Math.max(0, page - 1) * limit;
  }

  async execute(query: ArtworksListQueryDto): Promise<ArtworksListResponseDto> {
    const page = query.page ?? DEFAULT_LIST_PAGE;
    const limit = query.limit ?? DEFAULT_LIST_LIMIT;
    const filter = this.buildQuery(query);
    const skip = this.getSkip(page, limit);

    const [count, artworks] = await Promise.all([
      this.artworkModel.countDocuments(filter),
      this.artworkModel
        .find(filter)
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 })
        .exec(),
    ]);

    return { count, artworks };
  }
}

