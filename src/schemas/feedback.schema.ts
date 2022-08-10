import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Feedback {
  @Prop({ type: String, required: true })
  user_id: string;

  @Prop({ type: String, required: true })
  sheet_id: string;

  @Prop({ type: Number, required: true })
  play_count: number;
}
