import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ChordInfo } from "../types/api/models/chordinfo.model";

export type SheetDocument = SheetData & Document;

@Schema()
export class SheetData {
    @Prop({type: String,required: true})
    _id: string;

    @Prop()
    chord_infos: ChordInfo[];
}
export const SheetDataSchema = SchemaFactory.createForClass(SheetData);