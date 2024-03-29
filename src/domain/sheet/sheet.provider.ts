import { Connection } from 'mongoose';
import { SheetDocument, SheetSchema } from 'src/schemas/sheet.schema';
import { SheetDataSchema } from 'src/schemas/sheetData.schema';
import { MONGO_CONNECTION } from 'src/database/mongo/mongodb.providers';
export const SHEET_DATA = 'SHEET_DATA';
export const SHEET = 'SHEET';
export const SHEET_DATA_MODEL = SHEET_DATA + '_MODEL';
export const SHEET_MODEL = SHEET + '_MODEL';

export const sheetProvider = [
  {
    provide: SHEET_MODEL,
    useFactory: (connection: Connection) => {
      const sheet = connection.model(SHEET, SheetSchema, SHEET);
      return sheet;
    },
    inject: [MONGO_CONNECTION],
  },
  {
    provide: SHEET_DATA_MODEL,
    useFactory: (connection: Connection) => {
      const sheetdata = connection.model(SHEET_DATA, SheetDataSchema, SHEET_DATA);
      return sheetdata;
    },
    inject: [MONGO_CONNECTION],
  },
  {
    provide: 'TEST_DECO',
    useFactory: () => {
      return function <T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) {
        console.log(Reflect.getMetadataKeys(target, propertyKey));
      };
    },
  },
];
