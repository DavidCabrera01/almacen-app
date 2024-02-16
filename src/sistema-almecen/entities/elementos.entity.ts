import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Elememto{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre:string;

    @Column()
    descripcion:string;

    @Column()
    cantidad:number;
    

}