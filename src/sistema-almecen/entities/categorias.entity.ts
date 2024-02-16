import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Productos } from "./productos.entity";

@Entity()
export class Catagorias{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    descripcion:string;

    @Column()
    @OneToMany(type => Productos, productos => productos.id)
    id_producto : Productos[];
}