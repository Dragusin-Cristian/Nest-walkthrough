import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RacoonsModule } from './racoons/racoons.module';

@Module({
  imports: [RacoonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
