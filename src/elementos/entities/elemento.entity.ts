import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Elemento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    descripcion : string;

    @Column()
    cantidad : number;

}
