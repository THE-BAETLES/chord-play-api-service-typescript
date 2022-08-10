import { SheetDataDocument } from 'src/schemas/sheetData.schema';
import { Sheet, SheetDocument } from 'src/schemas/sheet.schema';
import { ApiProperty } from '@nestjs/swagger';
import { SheetService } from 'src/domain/sheet/sheet.service';
import { PickType } from '@nestjs/swagger';
import { PublicKeyType } from 'aws-sdk/clients/kms';
export class PatchSheetRequest {
  @ApiProperty()
  sheet: Sheet;
}
