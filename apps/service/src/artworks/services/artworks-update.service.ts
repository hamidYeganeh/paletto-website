import {
  ForbiddenException,
  HttpException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { UserRoles } from "src/users/enums/users-roles.enum";
import { ArtworkUpdateDto } from "../dto/artworks-update.dto";
import { Artwork, ArtworkDocument } from "../schemas/artwork.schema";

type Actor = { id: string; role?: string };

@Injectable()
export class ArtworksUpdateService {
  constructor(
    @InjectModel(Artwork.name)
    private readonly artworkModel: Model<ArtworkDocument>
  ) {}

  async execute(actor: Actor, dto: ArtworkUpdateDto): Promise<ArtworkDocument> {
    if (!Types.ObjectId.isValid(dto.artworkID)) {
      throw new NotFoundException("Invalid artwork id");
    }

    const isAdmin = actor.role === UserRoles.ADMIN;

    try {
      const existingArtwork = await this.artworkModel
        .findById(dto.artworkID)
        .select({ artistID: 1 })
        .exec();

      if (!existingArtwork) {
        throw new NotFoundException("Artwork not found");
      }

      const isOwner = String(existingArtwork.artistID) === String(actor.id);

      if (!isAdmin && !isOwner) {
        throw new ForbiddenException("You can only update your own artwork");
      }

      const updateFields: Record<string, unknown> = {};
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

