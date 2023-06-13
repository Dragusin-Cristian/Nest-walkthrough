import { PartialType } from '@nestjs/mapped-types';
import { CreateRacoonDto } from './create-racoon.dto';

export class UpdateRacoonDto extends PartialType(CreateRacoonDto) {}
