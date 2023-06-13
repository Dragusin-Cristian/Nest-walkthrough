import { Test, TestingModule } from '@nestjs/testing';
import { RacoonsController } from './racoons.controller';
import { RacoonsService } from './racoons.service';

describe('RacoonsController', () => {
  let controller: RacoonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RacoonsController],
      providers: [RacoonsService],
    }).compile();

    controller = module.get<RacoonsController>(RacoonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
