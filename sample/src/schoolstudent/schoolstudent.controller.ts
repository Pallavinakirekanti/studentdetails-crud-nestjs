import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { SchoolstudentService } from './schoolstudent.service';
import { SchoolstudentDto } from './schoolstudent.dto';
import { Schoolstudent } from './schoolstudent.entity';

@Controller('schoolstudent')
export class SchoolstudentController {
  schoolstudentRepository: any;
  constructor(private readonly schoolstudentService: SchoolstudentService) {}

  @Post()
  create(
    @Body() createSchoolstudentDto: SchoolstudentDto,
  ): Promise<Schoolstudent> {
    return this.schoolstudentService.create(createSchoolstudentDto);
  }

  @Get()
  findAll(): Promise<Schoolstudent[]> {
    return this.schoolstudentService.findAll();
  }

  @Get(':student_id')
  findOne(
    @Param('student_id', ParseIntPipe) student_id: number,
  ): Promise<Schoolstudent> {
    return this.schoolstudentService.findOne(student_id);
  }

  @Patch(':student_id')
  put(
    @Param('student_id', ParseIntPipe) student_id: number,
    @Body() updateSchoolstudentDto: SchoolstudentDto,
  ): Promise<Schoolstudent> {
    return this.schoolstudentService.update(student_id, updateSchoolstudentDto);
  }

  // @Patch(':student_id')
  // async update(
  //   @Param('student_id') studentId: string,
  //   @Body() updateSchoolstudentDto: SchoolstudentDto,
  // ): Promise<Schoolstudent> {
  //   const student = await this.schoolstudentService.findOne(+studentId);
  //   if (!student) {
  //     throw new NotFoundException(`Student with ID ${studentId} not found`);
  //   }
  //   const updatedStudent = Object.assign(student, updateSchoolstudentDto);
  //   return this.schoolstudentService.save(updatedStudent);
  // }

  async update(
    student_id: number,
    updateSchoolstudentDto: SchoolstudentDto,
  ): Promise<Schoolstudent> {
    const schoolstudent = await this.schoolstudentRepository.findOne(
      student_id,
    );

    if (!schoolstudent) {
      throw new NotFoundException(
        `School student with ID ${student_id} not found`,
      );
    }

    const { first_name, second_name, email, profilepic } =
      updateSchoolstudentDto;

    if (first_name !== undefined) {
      schoolstudent.first_name = first_name;
    }

    if (second_name !== undefined) {
      schoolstudent.last_name = second_name;
    }

    if (email !== undefined) {
      schoolstudent.email = email;
    }

    if (profilepic !== undefined) {
      schoolstudent.profilepic = profilepic;
    }

    return this.schoolstudentRepository.save(schoolstudent);
  }

  @Delete(':student_id')
  remove(@Param('student_id', ParseIntPipe) student_id: number): Promise<void> {
    return this.schoolstudentService.remove(student_id);
  }
}
