import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElementosController } from './controllers/elementos.controller';
import { TransacionesController } from './controllers/transaciones.controller';
import { ProveedoresController } from './controllers/proveedores.controller';


@Module({
  imports: [],
  controllers: [AppController, ElementosController, TransacionesController, ProveedoresController],
  providers: [AppService],
})
export class AppModule {}
