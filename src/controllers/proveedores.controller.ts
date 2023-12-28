import { Controller, Get, Put, Post, Delete,Param, Body } from '@nestjs/common';

@Controller('proveedores')
export class ProveedoresController {
    //Obtener todos los proveedores.
    @Get()
    obtenerProveedores() : string{
        return 'Obtener todos los proveedores.'
    }

    //Obtener detalles de un proveedor específico.
    @Get(':id')
    obtenerProveedoresPorId(@Param('id') id : string) : string{
        return 'Obtener detalles de un proveedor específico.'
    }

    //Agregar un nuevo proveedor.
    @Post()
    agragarProveedore(@Body() proveedor : string) : string{
        return 'Agregar un nuevo proveedor';
    }

    //Actualizar detalles de un proveedor existente.
    @Put(':id')
    actualizarProveedor(@Param('id') id : string) : string {
        return 'Actualizar detalles de un proveedor existente.'
    }

    //Eliminar un proveedor.
    @Delete(':id')
    EliminarProveedor(@Param('id') id : string) : string {
        return 'Eliminar un proveedor.'
    }
