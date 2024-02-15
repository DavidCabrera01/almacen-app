import { PartialType } from '@nestjs/mapped-types';
import { CreateElementoDto } from './create-elemento.dto';
import { IsNumber } from 'class-validator';

export class UpdateElementoDto extends PartialType(CreateElementoDto) {
    @IsNumber()
    id: number;

    nombre: string;

    descricion: string;

    @IsNumber()
    cantidad: number;
}
