import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SistemaAlmecenModule } from './sistema-almecen/sistema-almecen.module';



@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "icm_almacen",
    password: "root",
    database: "almacen",
    autoLoadEntities: true,
    synchronize: true,
  }), SistemaAlmecenModule,],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
