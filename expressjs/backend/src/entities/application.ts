import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "application" })
export class Application {
  @PrimaryGeneratedColumn({ name: "gkey", type: "bigint" })
  gkey: number | undefined;
  @Column({ name: "application_name", type: "varchar" })
  applicationName: string | undefined;
  @Column({ name: "life_cycle_state", type: "varchar" })
  lifeCycleState: string | undefined;

  constructor(applicationObject?: any) {
    Object.assign(this, applicationObject);
  }

  static clone(applicationObject?: any): ReturnType<any> {
    return Object.assign(Application, applicationObject);
  }
}