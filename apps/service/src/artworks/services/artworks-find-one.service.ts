import {
  HttpException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { Artwork, ArtworkDocument } from "../schemas/artwork.schema";

@Injectable()
export class ArtworksFindOneService {
  constructor(
    @InjectModel(Artwork.name)
    private readonly artworkModel: Model<ArtworkDocument>
  ) {}

  async execute(artworkId: string): Promise<ArtworkDocument> {
    if (!Types.ObjectId.isValid(artworkId)) {
      throw new NotFoundException("Invalid artwork id");
    }

    try {
      const artwork = await this.artworkModel.findById(artworkId).exec();

      if (!artwork) {
        throw new NotFoundException("Artwork not found");
      }

      return artwork;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }

      throw error instanceof Error
        ? new InternalServerErrorException(error.message)
        : new InternalServerErrorException("Failed to load artwork");
    }
  }
}

