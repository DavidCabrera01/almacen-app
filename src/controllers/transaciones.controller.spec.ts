import { Test, TestingModule } from '@nestjs/testing';
import { TransacionesController } from './transaciones.controller';

describe('TransacionesController', () => {
  let controller: TransacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransacionesController],
    }).compile();

    controller = module.get<TransacionesController>(TransacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
