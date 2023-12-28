import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('elementos')
export class ElementosController {
    
    @Get()
    obtenerElementos():string{
        return 'Elementos de almacen'
    }

    @Get(':id')
    obtenerElementosPorId() : string{
        return 'elementos por id'
    }

    @Post()
    agregarElemento(@Body() elemento: string):string{
        return 'Elemento agragado'
    }

    @Put(':id')
    actualizarElementopPorId(@Param('id') id : string){
        return 'elemento actualizado por id'
    }

    @Delete('id')
    eliminarElementoporId(@Param('id') id :string) :string{
        return 'elemento eliminado por id'
    }
}
