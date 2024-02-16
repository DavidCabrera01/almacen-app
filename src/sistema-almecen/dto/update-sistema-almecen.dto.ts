import { PartialType } from '@nestjs/mapped-types';
import { CreateSistemaAlmecenDto } from './create-sistema-almecen.dto';

export class UpdateSistemaAlmecenDto extends PartialType(CreateSistemaAlmecenDto) {}
