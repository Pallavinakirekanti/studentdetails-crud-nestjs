import { NestFactory } from '@nestjs/core';

import { SchoolstudentModule } from './schoolstudent/schoolstudent.module';

async function bootstrap() {
  const app = await NestFactory.create(SchoolstudentModule);

  await app.listen(3001);
}

bootstrap();
