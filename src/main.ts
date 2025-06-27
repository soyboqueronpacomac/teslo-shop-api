import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const versionApi = config.get<string>('API_VERSION') || '1'
  app.setGlobalPrefix(`api/v${versionApi}`)
  // Para funciones class-validator de dto
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  )
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
