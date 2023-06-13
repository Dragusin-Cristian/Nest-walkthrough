import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { RacoonsService } from './racoons.service';
import { CreateRacoonDto } from './dto/create-racoon.dto';
import { UpdateRacoonDto } from './dto/update-racoon.dto';

@Controller('racoons')
export class RacoonsController {
  constructor(private readonly racoonsService: RacoonsService) { }

  @Post()
  create(@Body() createRacoonDto: Partial<CreateRacoonDto>) {
    return this.racoonsService.create(createRacoonDto);
  }

  @Get()
  findAll() {
    return this.racoonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) { // here we should use a pipe, in the following articles
    const racoon: CreateRacoonDto | boolean = this.racoonsService.findOne(+id)
    if (racoon) {
      return racoon
    } else {
      return "Not found" // we'll use Exceptions in future articles
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRacoonDto: UpdateRacoonDto) {
    const racoons = this.racoonsService.update(+id, updateRacoonDto);
    if (racoons) {
      return racoons
    } else {
      return "Not found" // we'll use Exceptions in future articles
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const racoons = this.racoonsService.remove(+id);
    if (racoons) {
      return racoons
    } else {
      return "Not found" // we'll use Exceptions in future articles
    }
  }
}
