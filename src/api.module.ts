import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiController } from './api.controller';
import configuration from './configs/configuration';
import { RecommendationModule } from './domain/recommendation/recommendation.module';
import { HttpModule } from '@nestjs/axios';
import { UserModule } from './domain/user/user.module';
import { SqsModule } from './infra/sqs/sqs.module';
import { ProgressModule } from './domain/progress/progress.module';
import { SheetModule } from './domain/sheet/sheet.module';
import { WatchHistoryModule } from './domain/history/watch_history.module';
import { SearchModule } from './domain/search/search.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    HttpModule,
    RecommendationModule,
    WatchHistoryModule,
    UserModule,
    SqsModule,
    ProgressModule,
    SheetModule,
    SearchModule,
  ],
  controllers: [ApiController],
  providers: [],
})
export class ApiModule {}
