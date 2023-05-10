import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Schoolstudent {
  save() {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
  student_id: number;

  @Column()
  first_name: string;

  @Column()
  second_name: string;

  @Column()
  email: string;

  @Column({ type: 'blob', nullable: true })
  profilepic: Buffer;
}
