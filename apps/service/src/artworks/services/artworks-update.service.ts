import {
  HttpException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { ArtworkUpdateDto } from "../dto/artworks-update.dto";
import { Artwork, ArtworkDocument } from "../schemas/artwork.schema";

@Injectable()
export class ArtworksUpdateService {
  constructor(
    @InjectModel(Artwork.name)
    private readonly artworkModel: Model<ArtworkDocument>
  ) {}

  async execute(dto: ArtworkUpdateDto): Promise<ArtworkDocument> {
    if (!Types.ObjectId.isValid(dto.artworkID)) {
      throw new NotFoundException("Invalid artwork id");
    }

    const updateFields: Record<string, unknown> = {};

    try {
      Object.entries(dto).forEach(([key, value]) => {
        if (key !== "artworkID" && value !== undefined) {
          updateFields[key] = value;
        }
      });

      const updatedArtwork = await this.artworkModel
        .findByIdAndUpdate(
          dto.artworkID,
          { $set: updateFields },
          { new: true, runValidators: true }
        )
        .exec();

      if (!updatedArtwork) {
        throw new NotFoundException("Artwork not found");
      }

      return updatedArtwork;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }

      throw error instanceof Error
        ? new InternalServerErrorException(error.message)
        : new InternalServerErrorException("Failed to update artwork");
    }
  }
}

