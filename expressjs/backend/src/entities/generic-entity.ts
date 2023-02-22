import { BaseEntity, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class GenericEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "gkey", type: "bigint" })
  gkey: number | undefined;

  @Column({ name: "creator", type: "varchar" })
  creator: string | undefined;
  @CreateDateColumn({ name: "created", type: "timestamp"})
  created: Date | undefined;
  @Column({ name: "changer", type: "varchar", nullable: true })
  changer: string | undefined;
  @UpdateDateColumn({ name: "changed", type: "timestamp", nullable: true })
  changed: Date | undefined;
}