import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";

const { nanoid } = require("nanoid")

@Entity('players')
export class Player {
  
    @PrimaryColumn()
    id: string; 
  
    @Column()
    name: string;

    @Column()
    balance: Number;

    @Column()
    createdAt: string;

    @BeforeInsert()
    generateId() {
        this.id = `dev_${nanoid()}`;
    }
}
