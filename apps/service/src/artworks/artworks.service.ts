import { Injectable } from "@nestjs/common";
import { ArtworkCreateDto } from "./dto/artworks-create.dto";
import { ArtworksListQueryDto, ArtworksListResponseDto } from "./dto/artworks-list.dto";
import { ArtworkUpdateDto } from "./dto/artworks-update.dto";
import { ArtworkDocument } from "./schemas/artwork.schema";
import { ArtworksCreateService } from "./services/artworks-create.service";
import { ArtworksFindOneService } from "./services/artworks-find-one.service";
import { ArtworksListService } from "./services/artworks-list.service";
import { ArtworksUpdateService } from "./services/artworks-update.service";

@Injectable()
export class ArtworksService {
  constructor(
    private readonly artworksListService: ArtworksListService,
    private readonly artworksCreateService: ArtworksCreateService,
    private readonly artworksUpdateService: ArtworksUpdateService,
    private readonly artworksFindOneService: ArtworksFindOneService
  ) {}

  async getArtworksList(
    query: ArtworksListQueryDto
  ): Promise<ArtworksListResponseDto> {
    return this.artworksListService.execute(query);
  }

  async getArtworkById(artworkId: string): Promise<ArtworkDocument> {
    return this.artworksFindOneService.execute(artworkId);
  }

  async createArtwork(dto: ArtworkCreateDto): Promise<ArtworkDocument> {
    return this.artworksCreateService.execute(dto);
  }

  async updateArtwork(dto: ArtworkUpdateDto): Promise<ArtworkDocument> {
    return this.artworksUpdateService.execute(dto);
  }
}
