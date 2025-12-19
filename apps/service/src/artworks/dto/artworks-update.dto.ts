import { PartialType } from "@nestjs/mapped-types";
import { IsMongoId, IsString } from "class-validator";
import { ArtworkCreateDto } from "./artworks-create.dto";

export class ArtworkUpdateDto extends PartialType(ArtworkCreateDto) {
  @IsString()
  @IsMongoId()
  artworkID: string;
}

