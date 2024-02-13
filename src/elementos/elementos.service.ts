import { Injectable } from '@nestjs/common';
import { CreateElementoDto } from './dto/create-elemento.dto';
import { UpdateElementoDto } from './dto/update-elemento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Elemento } from './entities/elemento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ElementosService {

  constructor( @InjectRepository(Elemento)
  private elementoRepository: Repository<Elemento>){}

  create(createElementoDto: CreateElementoDto) {
    return 'This action adds a new elemento';
  }

   async findAll() {
    return await this.elementoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} elemento`;
  }

  update(id: number, updateElementoDto: UpdateElementoDto) {
    return `This action updates a #${id} elemento`;
  }

  remove(id: number) {
    return `This action removes a #${id} elemento`;
  }
}
