import { Test, TestingModule } from '@nestjs/testing';
import { MonumentoController } from './monumento.controller';
import { MonumentoService } from './monumento.service';

describe('MonumentoController', () => {
  let controller: MonumentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonumentoController],
      providers: [MonumentoService],
    }).compile();

    controller = module.get<MonumentoController>(MonumentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
