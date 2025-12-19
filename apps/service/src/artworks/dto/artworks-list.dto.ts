import { Transform, Type } from "class-transformer";
import {
  IsEnum,
  IsInt,
  IsMongoId,
  IsNumber,
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

  @Transform(({ value }) => {
    if (value === "" || value === undefined || value === null) return undefined;
    if (Array.isArray(value)) return value;
    return String(value)
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean);
  })
  @IsOptional()
  @IsMongoId({ each: true })
  categories?: string[];

  @Transform(({ value }) => {
    if (value === "" || value === undefined || value === null) return undefined;
    if (Array.isArray(value)) return value;
    return String(value)
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean);
  })
  @IsOptional()
  @IsMongoId({ each: true })
  techniques?: string[];

  @Transform(({ value }) => {
    if (value === "" || value === undefined || value === null) return undefined;
    if (Array.isArray(value)) return value;
    return String(value)
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean);
  })
  @IsOptional()
  @IsMongoId({ each: true })
  mediums?: string[];

  @Transform(({ value }) => {
    if (value === "" || value === undefined || value === null) return undefined;
    if (Array.isArray(value)) return value;
    return String(value)
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean);
  })
  @IsOptional()
  @IsString({ each: true })
  @MaxLength(50, { each: true })
  tags?: string[];

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Min(0)
  minPrice?: number;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Min(0)
  maxPrice?: number;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Min(0)
  minYear?: number;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Min(0)
  maxYear?: number;
}

export interface ArtworksListResponseDto {
  count: number;
  artworks: ArtworkDocument[];
}
