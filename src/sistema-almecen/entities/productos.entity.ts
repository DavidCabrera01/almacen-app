import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Catagorias } from "./categorias.entity";

@Entity()
export class Productos{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    descripcion:string;

    @Column()
    cantidad:number;

    @Column()
    @ManyToOne((type) => Catagorias, (categorias)=> categorias.id)
    id_catagoria:Catagorias;

    @Column()
    precio:number;

    @Column()
    id_proveedor:string;
    

}