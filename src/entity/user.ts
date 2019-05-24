import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { Length, IsEmail, IsDate } from 'class-validator';
import { isDate } from 'util';

@Entity('m_user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 80
    })
    @Length(10, 80)
    name: string;

    @Column({
        length: 80
    })
    password: string;

    @Column({
        length: 100
    })
    @Length(1, 100)
    @IsEmail()
    email: string;

    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn()
    updateDate: Date;
}