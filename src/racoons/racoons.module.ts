import { Module } from '@nestjs/common';
import { RacoonsService } from './racoons.service';
import { RacoonsController } from './racoons.controller';

@Module({
  controllers: [RacoonsController],
  providers: [RacoonsService]
})
export class RacoonsModule {}
