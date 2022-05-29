import {Entity, Column, Generated} from 'typeorm';

@Entity()
export class User {
  @Column({primary: true, nullable: false, type: 'uuid'})
  @Generated('uuid')
  ids: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
