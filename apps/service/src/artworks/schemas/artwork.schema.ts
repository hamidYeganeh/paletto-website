import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { ArtworksStatus } from "../enums/artworks-status.enum";

export type ArtworkDocument = HydratedDocument<Artwork>;

@Schema({ timestamps: true, _id: true })
export class Artwork {
  @Prop({ required: true, index: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  artistID: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: "Technique" }], default: [] })
  techniques: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: "Materials" }], default: [] })
  materials: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: "Mediums" }], default: [] })
  mediums: Types.ObjectId[];

  @Prop({ required: true })
  price: number;

  @Prop({
    enum: ArtworksStatus,
    type: String,
    required: true,
    default: ArtworksStatus.ACTIVE,
  })
  status: ArtworksStatus;

  _id: string;

  createdAt?: Date;

  updatedAt?: Date;
}

export const ArtworkSchema = SchemaFactory.createForClass(Artwork);
