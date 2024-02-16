import { Module } from '@nestjs/common';
import { SistemaAlmecenService } from './services/sistema-almecen.service';
import { SistemaAlmecenController } from './controllers/sistema-almecen.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Productos } from './entities/productos.entity';
import { Proveedores } from './entities/proveedores.entity';
import {Catagorias} from './entities/categorias.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Productos])],
  controllers: [SistemaAlmecenController],
  providers: [SistemaAlmecenService],
})
export class SistemaAlmecenModule {}
