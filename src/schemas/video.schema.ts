import {Document} from "mongoose"
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import { ObjectId } from "mongoose";
export type VideoDocument = Video & Document;

@Schema()
export class Video {
    @Prop({type: String, required: true})
    _id: string;

    thumbnail_path: string;

    title: string;

    @Prop()
    genre: string;

    @Prop()
    singer: string;

    @Prop()
    tags: string[];

    @Prop()
    length: Number;

    @Prop()
    difficulty_avg: Number;

    @Prop()
    play_count: Number;
}

export const VideoSchema = SchemaFactory.createForClass(Video);