import {Document} from "mongoose"
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"

export type VideoDocument = Video & Document;

@Schema()
export class Video {
    @Prop({required: true})
    _id: string;

    @Prop()
    thumbnail_path: string;

    @Prop()
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