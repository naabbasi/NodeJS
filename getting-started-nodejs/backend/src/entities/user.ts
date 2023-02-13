import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "user"})
export class User {
    constructor(userObject?: any) {
        Object.assign(this, userObject)
    }

    @PrimaryGeneratedColumn({name: "gkey", type: "bigint"})
    gkey: number | undefined;
    @Column({name: "username", type: "varchar"})
    username: string | undefined;
    @Column({name: "password", type: "varchar"})
    password: string | undefined;

    @Column({name: "first_name", type: "varchar", nullable: true})
    firstName: string | undefined;

    @Column({name: "last_name", type: "varchar", nullable: true})
    lastName: string | undefined;

    @Column({name: "age", type: "int", nullable: true})
    age: number | undefined;
}