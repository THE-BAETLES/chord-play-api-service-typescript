import {Date, Document, PromiseProvider} from "mongoose"
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"

export type WatchHistoryDocument = WatchHistory & Document;

@Schema()
export class WatchHistory {
    @Prop({required: true})
    _id: string;

    @Prop({type: String, ref: "User"})
    user_id: string;

    @Prop({type: String, ref: "Video"})
    video_id: string;

    @Prop({type: Date, required: true})
    last_played: Date;

    @Prop({type: Number})
    play_count: number;
}

export const WatchHistorySchema = SchemaFactory.createForClass(WatchHistory);