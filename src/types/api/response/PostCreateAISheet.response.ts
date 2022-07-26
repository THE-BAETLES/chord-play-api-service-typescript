import { SheetDataDocument } from "src/schemas/sheetData.schema";
export interface PostCreateAISheetResponse {
    status: number;
    payload: SheetDataDocument;
}