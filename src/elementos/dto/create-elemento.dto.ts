import { IsNumber, isNumber } from "class-validator";

export class CreateElementoDto {
    @IsNumber()
    id: number;

    nombre: string;

    descricion: string;

    @IsNumber()
    cantidad: number;
}
