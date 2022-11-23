import { Test, TestingModule } from '@nestjs/testing';
import { MonumentoService } from './monumento.service';

describe('MonumentoService', () => {
  let service: MonumentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonumentoService],
    }).compile();

    service = module.get<MonumentoService>(MonumentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
