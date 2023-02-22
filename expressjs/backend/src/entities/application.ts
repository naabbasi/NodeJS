import { Column, Entity } from "typeorm";
import { GenericEntity } from "@entities/generic-entity.js";

@Entity({ name: "application" })
export class Application extends GenericEntity {
  @Column({ name: "application_name", type: "varchar" })
  applicationName: string | undefined;
  @Column({ name: "life_cycle_state", type: "varchar" })
  lifeCycleState: string | undefined;

  constructor(applicationObject?: any) {
    super();
    Object.assign(this, applicationObject);
  }

  static clone(applicationObject?: any): ReturnType<any> {
    return Object.assign(Application, applicationObject);
  }
}