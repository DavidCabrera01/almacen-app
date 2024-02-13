import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElementosModule } from './elementos/elementos.module';
import { TransaccionesModule } from './transacciones/transacciones.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { DepartamentosModule } from './departamentos/departamentos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  imports: [ElementosModule, TransaccionesModule, ProveedoresModule, DepartamentosModule, UsuariosModule,TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "icm_almacen",
    password: "root",
    database: "almacen",
    autoLoadEntities: true,
    synchronize: true,
  }),],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
