import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongoose";

export type SheetDocumnet = Sheet & Document;

@Schema()
export class Sheet {
    @Prop()
    _id: ObjectId;

    @Prop()
    video_id: string;

    @Prop()
    user_id: string;

    @Prop()
    title: string;

    @Prop()
    created_at: Date;

    @Prop()
    updated_at: Date;

    @Prop()
    like_count: number;
}

export const SheetSchema = SchemaFactory.createForClass(Sheet);