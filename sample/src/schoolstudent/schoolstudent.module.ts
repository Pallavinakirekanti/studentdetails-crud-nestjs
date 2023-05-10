import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schoolstudent } from './schoolstudent.entity';
import { SchoolstudentController } from './schoolstudent.controller';
import { SchoolstudentService } from './schoolstudent.service';
import { SchoolstudentRepository } from './schoolstudent.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'school',
      entities: [Schoolstudent],
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Schoolstudent]),
  ],

  controllers: [SchoolstudentController],
  providers: [SchoolstudentService],
})
export class SchoolstudentModule {}
