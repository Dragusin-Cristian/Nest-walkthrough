import { Test, TestingModule } from '@nestjs/testing';
import { RacoonsService } from './racoons.service';

describe('RacoonsService', () => {
  let service: RacoonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RacoonsService],
    }).compile();

    service = module.get<RacoonsService>(RacoonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
