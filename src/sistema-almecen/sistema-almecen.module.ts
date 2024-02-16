import { Module } from '@nestjs/common';
import { SistemaAlmecenService } from './services/sistema-almecen.service';
import { SistemaAlmecenController } from './controllers/sistema-almecen.controller';

@Module({
  controllers: [SistemaAlmecenController],
  providers: [SistemaAlmecenService],
})
export class SistemaAlmecenModule {}
