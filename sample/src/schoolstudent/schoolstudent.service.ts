// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Schoolstudent } from './schoolstudent.entity';
// import { SchoolstudentDto } from './schoolstudent.dto';

// @Injectable()
// export class SchoolstudentService {
//   create(createSchoolstudentDto: SchoolstudentDto): Promise<Schoolstudent> {
//     throw new Error('Method not implemented.');
//   }
//   constructor(
//     @InjectRepository(Schoolstudent)
//     private schoolstudentRepository: Repository<Schoolstudent>,
//   ) {}

//   // async create(
//   //   createSchoolstudentDto: SchoolstudentDto,
//   // ): Promise<Schoolstudent> {
//   //   const schoolstudent = new Schoolstudent();
//   //   schoolstudent.first_name = createSchoolstudentDto.first_name;
//   //   schoolstudent.second_name = createSchoolstudentDto.second_name;
//   //   schoolstudent.email = createSchoolstudentDto.email;
//   //   schoolstudent.profilepic = createSchoolstudentDto.profilepic;

//   //   return this.schoolstudentRepository.save(schoolstudent);
//   // }

//   async findAll(): Promise<Schoolstudent[]> {
//     return this.schoolstudentRepository.find();
//   }

//   async findOne(student_id: any): Promise<Schoolstudent> {
//     return this.schoolstudentRepository.findOne(student_id);
//   }

//   async update(
//     student_id: any,
//     updateSchoolstudentDto: SchoolstudentDto,
//   ): Promise<Schoolstudent> {
//     const schoolstudent = await this.schoolstudentRepository.findOne(
//       student_id,
//     );
//     schoolstudent.first_name = updateSchoolstudentDto.first_name;
//     schoolstudent.second_name = updateSchoolstudentDto.second_name;
//     schoolstudent.email = updateSchoolstudentDto.email;
//     schoolstudent.profilepic = updateSchoolstudentDto.profilepic;

//     return this.schoolstudentRepository.save(schoolstudent);
//   }

//   async remove(student_id: any): Promise<void> {
//     await this.schoolstudentRepository.delete(student_id);
//   }
// }
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Schoolstudent } from './schoolstudent.entity';
import { SchoolstudentDto } from './schoolstudent.dto';

@Injectable()
export class SchoolstudentService {
  save(
    updatedStudent: Schoolstudent & SchoolstudentDto,
  ): Schoolstudent | PromiseLike<Schoolstudent> {
    throw new Error('Method not implemented.');
  }
  update(
    student_id: number,
    updateSchoolstudentDto: SchoolstudentDto,
  ): Promise<Schoolstudent> {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Schoolstudent)
    private schoolstudentRepository: Repository<Schoolstudent>,
  ) {}

  async create(
    createSchoolstudentDto: SchoolstudentDto,
  ): Promise<Schoolstudent> {
    const schoolstudent = new Schoolstudent();
    schoolstudent.first_name = createSchoolstudentDto.first_name;
    schoolstudent.second_name = createSchoolstudentDto.second_name;
    schoolstudent.email = createSchoolstudentDto.email;
    schoolstudent.profilepic = createSchoolstudentDto.profilepic;

    return this.schoolstudentRepository.save(schoolstudent);
  }

  async findAll(): Promise<Schoolstudent[]> {
    return this.schoolstudentRepository.find();
  }

  // async findOne(student_id: any): Promise<Schoolstudent> {
  //   return this.schoolstudentRepository.findOne(student_id);
  // }

  async findOne(student_id: number): Promise<Schoolstudent | null> {
    return this.schoolstudentRepository.findOneBy({ student_id });
  }

  async put(
    student_id: any,
    updateSchoolstudentDto: SchoolstudentDto,
  ): Promise<Schoolstudent> {
    const schoolstudent = await this.schoolstudentRepository.findOne(
      student_id,
    );
    schoolstudent.first_name = updateSchoolstudentDto.first_name;
    schoolstudent.second_name = updateSchoolstudentDto.second_name;
    schoolstudent.email = updateSchoolstudentDto.email;
    schoolstudent.profilepic = updateSchoolstudentDto.profilepic;

    return this.schoolstudentRepository.save(schoolstudent);
  }

  async remove(student_id: number): Promise<void> {
    await this.schoolstudentRepository.delete(student_id);
  }
}
