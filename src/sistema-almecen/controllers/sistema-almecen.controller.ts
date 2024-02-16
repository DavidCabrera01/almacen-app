import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SistemaAlmecenService } from '../services/sistema-almecen.service';
import { CreateSistemaAlmecenDto } from '../dto/create-sistema-almecen.dto';
import { UpdateSistemaAlmecenDto } from '../dto/update-sistema-almecen.dto';

@Controller('sistema-almecen')
export class SistemaAlmecenController {
  constructor(private readonly sistemaAlmecenService: SistemaAlmecenService) {}

  @Post()
  create(@Body() createSistemaAlmecenDto: CreateSistemaAlmecenDto) {
    return this.sistemaAlmecenService.create(createSistemaAlmecenDto);
  }

  @Get()
  findAll() {
    return this.sistemaAlmecenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sistemaAlmecenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSistemaAlmecenDto: UpdateSistemaAlmecenDto) {
    return this.sistemaAlmecenService.update(+id, updateSistemaAlmecenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sistemaAlmecenService.remove(+id);
  }
}
