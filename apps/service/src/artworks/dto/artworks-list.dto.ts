import { Transform, Type } from "class-transformer";
import {
  IsEnum,
  IsInt,
  IsMongoId,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from "class-validator";
import {
  DEFAULT_LIST_LIMIT,
  DEFAULT_LIST_PAGE,
} from "src/constants/list-pagination.constants";
import { ArtworksStatus } from "../enums/artworks-status.enum";
import { ArtworkDocument } from "../schemas/artwork.schema";

export class ArtworksListQueryDto {
  @Transform(({ value }) => (value === "" ? undefined : value))
  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @Min(DEFAULT_LIST_PAGE)
  page: number;

  @Transform(({ value }) => (value === "" ? undefined : value))
  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @Min(DEFAULT_LIST_LIMIT)
  limit: number;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  search?: string;

  @IsOptional()
  @IsMongoId()
  artistID?: string;

  @IsOptional()
  @IsEnum(ArtworksStatus)
  status?: ArtworksStatus;
}

export interface ArtworksListResponseDto {
  count: number;
  artworks: ArtworkDocument[];
}

