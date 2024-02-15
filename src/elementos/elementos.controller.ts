import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ElementosService } from './elementos.service';
import { CreateElementoDto } from './dto/create-elemento.dto';
import { UpdateElementoDto } from './dto/update-elemento.dto';

@Controller('elementos')
export class ElementosController {
  constructor(private readonly elementosService: ElementosService) {}

  //Agregar un nuevo elemento al almacén.
  @Post()
  create(@Body() createElementoDto: CreateElementoDto) {
    return this.elementosService.create(createElementoDto);
  }
  //Obtener todos los elementos en el almacén.
  @Get()
  findAll() {
    return this.elementosService.findAll();
  }
  //Obtener detalles de un elemento específico.
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.elementosService.findOne(+id);
  }
  //Actualizar detalles de un elemento existente.
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateElementoDto: UpdateElementoDto) {
    return this.elementosService.update(+id, updateElementoDto);
  }
  //Eliminar un elemento del almacén.
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.elementosService.remove(+id);
  }
}
