import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Middleware для установки Content-Type только для JSON API
  app.use((req, res, next) => {
    // Проверяем, что это API запрос (начинается с /v1)
    if (req.path.startsWith('/v1')) {
      res.header('Content-Type', 'application/json; charset=utf-8');
    }
    next();
  });

  // Встроенная настройка CORS
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization, Accept',
    exposedHeaders: 'Content-Length, Content-Type',
    credentials: false,
    maxAge: 86400, // 24 часа
  });

  // Настройка Swagger
  const config = new DocumentBuilder()
    .setTitle('Hello World API')
    .setDescription('Пример REST API на NestJS с поддержкой UTF-8')
    .setVersion('1.0')
    .addTag('hello')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Настройка Swagger UI
  SwaggerModule.setup('api', app, document, {
    customCss: `
      .swagger-ui .topbar { background-color: #1e3a8a; }
      .swagger-ui .info .title { color: #1e3a8a; }
      .swagger-ui .btn { background-color: #3b82f6; }
    `,
    customSiteTitle: 'Hello World API Documentation',
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
      docExpansion: 'none',
      filter: true,
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
    },
  });

  // app.setGlobalPrefix('v1');

  await app.listen(5000);
  console.log('✅ Приложение запущено на http://localhost:5000');
  console.log('📚 Swagger документация: http://localhost:5000/api');
}

bootstrap();
