import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Tweet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
    nullable: false,
  })
  text: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  image?: string;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.tweets) // For ManyToOne realtionship we do not need to use joinColoumn to create foreign key. The entity for which the ManyToOne relationship is defined, automatically the foreign key is created. For eg here userId will be automatically created.
  user: User;
}
