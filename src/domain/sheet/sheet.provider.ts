import { Connection } from "mongoose";
import { Sheet, SheetSchema } from "src/schemas/sheet.schema";
import { SheetData, SheetDataSchema } from "src/schemas/sheetData.schema";

export const SHEET_DATA = 'SHEET_DATA';

export const SHEET = 'SHEET';


export const sheetProvider = [{
    provide: `${SHEET}_MODEL`,
    useFactory: (connection: Connection) => {
        const sheet = connection.model(SHEET, SheetSchema ,SHEET);
        return sheet;
    },
    inject: ['connection']

}, {
    provide: `${SHEET_DATA}_MODEL`,
    useFactory: (connection: Connection) => {
        const sheetdata = connection.model(SHEET_DATA, SheetDataSchema, SHEET_DATA);
        return sheetdata;
    }
}]