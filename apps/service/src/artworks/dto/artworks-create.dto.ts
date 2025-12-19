import { Transform, Type } from "class-transformer";
import {
  IsArray,
  IsEnum,
  IsMongoId,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from "class-validator";
import { ArtworksStatus } from "../enums/artworks-status.enum";

export class ArtworkCreateDto {
  @Transform(({ value }) =>
    typeof value === "string" ? value.trim().toLowerCase() : value
  )
  @MinLength(4)
  @MaxLength(200)
  @IsString()
  title: string;

  @Transform(({ value }) => (typeof value === "string" ? value.trim() : value))
  @MinLength(1)
  @MaxLength(5000)
  @IsString()
  description: string;

  @IsMongoId()
  artistID: string;

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  categories?: string[];

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  techniques?: string[];

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  materials?: string[];

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  mediums?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @MaxLength(50, { each: true })
  tags?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @MaxLength(1000, { each: true })
  images?: string[];

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  year?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  widthCm?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  heightCm?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  depthCm?: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  price: number;

  @IsOptional()
  @IsEnum(ArtworksStatus)
  status?: ArtworksStatus;
}
