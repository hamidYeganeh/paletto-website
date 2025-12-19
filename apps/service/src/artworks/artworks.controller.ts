import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { ArtworkCreateDto } from "./dto/artworks-create.dto";
import {
  ArtworksListQueryDto,
  ArtworksListResponseDto,
} from "./dto/artworks-list.dto";
import { ArtworkUpdateDto } from "./dto/artworks-update.dto";
import { ArtworkDocument } from "./schemas/artwork.schema";
import { ArtworksService } from "./artworks.service";

@Controller("artworks")
export class ArtworksController {
  constructor(private readonly artworksService: ArtworksService) {}

  @Get("list")
  async getArtworksList(
    @Query() query: ArtworksListQueryDto
  ): Promise<ArtworksListResponseDto> {
    return this.artworksService.getArtworksList(query);
  }

  @Get("details/:artworkID")
  async getArtworkByIdLegacy(
    @Param("artworkID") artworkId: string
  ): Promise<ArtworkDocument> {
    return this.artworksService.getArtworkById(artworkId);
  }

  @Post("create")
  async createArtwork(@Body() dto: ArtworkCreateDto): Promise<ArtworkDocument> {
    return this.artworksService.createArtwork(dto);
  }

  @Patch("update")
  async updateArtwork(@Body() dto: ArtworkUpdateDto): Promise<ArtworkDocument> {
    return this.artworksService.updateArtwork(dto);
  }
}
