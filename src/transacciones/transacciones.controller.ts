import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransaccionesService } from './transacciones.service';


@Controller('transacciones')
export class TransaccionesController {
  constructor(private readonly transaccionesService: TransaccionesService) {}

  //Obtener todas las transacciones.
  @Get()
  findAll() {
    return this.transaccionesService.findAll();
  }
  //Obtener detalles de una transacción específica.
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transaccionesService.findOne(+id);
  }
  //Registrar una nueva transacción de entrada.
  @Post('entrada')
  registrarEntradaTransaccion(@Param('entrada') entrada: string) {
    return ;
  }
  //Registrar una nueva transacción de salida.
  @Post('salida')
  registrarSalidaTransaccion(@Param('salida') salida: string) {
    return ;
  }
}
