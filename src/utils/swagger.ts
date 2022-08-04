import { INestApplication } from '@nestjs/common/interfaces';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const initSwagger = (app: INestApplication): void => {
  const option = new DocumentBuilder()
    .setTitle('Chord-Play API Docs')
    .setDescription('Chord play project api server rest api description ')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, option);
  SwaggerModule.setup('api-docs', app, document);
};
