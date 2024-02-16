import { Injectable } from '@nestjs/common';
import { CreateSistemaAlmecenDto } from '../dto/create-sistema-almecen.dto';
import { UpdateSistemaAlmecenDto } from '../dto/update-sistema-almecen.dto';
import { Propiedad } from '../type/propiedad.interface';
import { Equipos } from '../type/Equipos.interface';
import { Materiales } from '../type/materiales.interface';
import {Transacciones} from '../type/Transacciones.interface';
import { Elememto } from '../type/elemento.interface';
import { proveedor } from '../type/Proveedor.interface';
import { Oficina } from '../type/Oficina.interface';

@Injectable()
export class SistemaAlmecenService {

  private propiedades : Array<Propiedad>;
  private equipos : Array<Equipos>;
  private materiales : Array<Materiales>;
  private transacciones : Array<Transacciones>;


  agragarElementos(elemento:Elememto) : void {

  }

  registrarEntrada(elemento:Elememto, cantidad:number, proveedor:proveedor):void{

  }

  registrarSalida(elemento:Elememto, cantidad:number, oficina:Oficina):void{}

  obtenerInventario(): Array<Elememto>{
    return;
  }

  obtenerHistorialTransacciones(): Array<Transacciones>{
    return ;
  }

  create(createSistemaAlmecenDto: CreateSistemaAlmecenDto) {
    return 'This action adds a new sistemaAlmecen';
  }

  findAll() {
    return `This action returns all sistemaAlmecen`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sistemaAlmecen`;
  }

  update(id: number, updateSistemaAlmecenDto: UpdateSistemaAlmecenDto) {
    return `This action updates a #${id} sistemaAlmecen`;
  }

  remove(id: number) {
    return `This action removes a #${id} sistemaAlmecen`;
  }
}
