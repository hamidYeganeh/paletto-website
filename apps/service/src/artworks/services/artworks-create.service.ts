import {
  HttpException,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { ArtworkCreateDto } from "../dto/artworks-create.dto";
import { Artwork, ArtworkDocument } from "../schemas/artwork.schema";

@Injectable()
export class ArtworksCreateService {
  constructor(
    @InjectModel(Artwork.name) private readonly artworkModel: Model<ArtworkDocument>
  ) {}

  async execute(dto: ArtworkCreateDto): Promise<ArtworkDocument> {
    try {
      const created = await this.artworkModel.create({
        ...dto,
        techniques: dto.techniques?.map((id) => new Types.ObjectId(id)),
        materials: dto.materials?.map((id) => new Types.ObjectId(id)),
        mediums: dto.mediums?.map((id) => new Types.ObjectId(id)),
      });
      return created;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }

      throw error instanceof Error
        ? new InternalServerErrorException(error.message)
        : new InternalServerErrorException("Failed to create artwork");
    }
  }
}
