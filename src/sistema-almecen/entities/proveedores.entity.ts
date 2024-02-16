import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Proveedores{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre:string;    
}