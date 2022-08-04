import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';
import { initSwagger } from './utils/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  initSwagger(app);
  await app.listen(1111);
}
bootstrap();
