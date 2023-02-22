import { Column, Entity } from "typeorm";
import { GenericEntity } from "@entities/generic-entity.js";

@Entity({ name: "user" })
export class User extends GenericEntity {
  @Column({ name: "username", type: "varchar" })
  username: string | undefined;
  @Column({ name: "password", type: "varchar" })
  password: string | undefined;
  @Column({ name: "first_name", type: "varchar", nullable: true })
  firstName: string | undefined;
  @Column({ name: "last_name", type: "varchar", nullable: true })
  lastName: string | undefined;

  constructor(userObject?: any) {
    super();
    Object.assign(this, userObject);
  }

  static clone(userObject?: any): ReturnType<any> {
    return Object.assign(User, userObject);
  }
}