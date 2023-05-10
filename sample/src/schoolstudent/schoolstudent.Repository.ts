import { EntityRepository, Repository } from 'typeorm';
import { Schoolstudent } from './schoolstudent.entity';
import { SchoolstudentDto } from './schoolstudent.dto';

@EntityRepository(Schoolstudent)
export class SchoolstudentRepository extends Repository<Schoolstudent> {
  async createSchoolstudent(
    createSchoolstudentDto: SchoolstudentDto,
  ): Promise<Schoolstudent> {
    const { first_name, second_name, email, profilepic } =
      createSchoolstudentDto;

    const schoolstudent = new Schoolstudent();
    schoolstudent.first_name = first_name;
    schoolstudent.second_name = second_name;
    schoolstudent.email = email;
    schoolstudent.profilepic = profilepic;
    schoolstudent.save();
    return schoolstudent;
  }

  async getSchoolstudents(): Promise<Schoolstudent[]> {
    const query = this.createQueryBuilder('schoolstudent');
    const schoolstudents = await query.getMany();
    return schoolstudents;
  }

  async getSchoolstudentBystudent_id(
    student_id: number,
  ): Promise<Schoolstudent> {
    const query = this.createQueryBuilder('schoolstudent');
    query.where('schoolstudent.student_id = :student_id', { student_id });
    const schoolstudent = await query.getOne();
    return schoolstudent;
  }

  async updateSchoolstudent(
    student_id: number,
    updateSchoolstudentDto: SchoolstudentDto,
  ): Promise<Schoolstudent> {
    const { first_name, second_name, email, profilepic } =
      updateSchoolstudentDto;

    const query = this.createQueryBuilder('schoolstudent');
    query.where('schoolstudent.student_id = :student_id', { student_id });
    await query
      .update({ first_name, second_name, email, profilepic })
      .execute();

    const updatedSchoolstudent = await this.getSchoolstudentBystudent_id(
      student_id,
    );
    return updatedSchoolstudent;
  }

  async deleteSchoolstudent(student_id: number): Promise<void> {
    const query = this.createQueryBuilder('schoolstudent');
    query.where('schoolstudent.student_id = :student_id', { student_id });
    await query.delete().execute();
  }
}
