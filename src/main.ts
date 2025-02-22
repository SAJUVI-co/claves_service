import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.SERVER_HOST || 'localhost',
        port: parseInt(process.env.SERVER_PORT || '3001'),
      },
    },
  );

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen();

  const logger = new Logger('Claves Service');
  logger.log('Claves Running');
}
bootstrap().catch((error) => {
  const logger = new Logger('Bootstrap');
  logger.error('Error during bootstrap', error);
});
