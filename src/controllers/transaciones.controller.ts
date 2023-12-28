import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('transaciones')
export class TransacionesController {
    //Obtener todas las transacciones.
    @Get()
    obtenerTransaciones(){
        return 'todas las transaciones'
    }

    //Obtener detalles de una transacción específica.
    @Get(':id')
    obtenerTransacionesPorId(@Param('id') id :string) :string{
        return 'Obtener detalles de una transacción específica';
    }

    //Registrar una nueva transacción de entrada.
    @Post('/entrada')
    registrarTransacionEntrada(@Body() entrada :string) : string {
        return 'Registrar una nueva transacción de entrada.'
    }

    //Registrar una nueva transacción de salida.

    @Post('/salida')
    registrarTransacionSalida(@Body() salida :string) : string {
        return 'Registrar una nueva transacción de entrada.'
    }
}
