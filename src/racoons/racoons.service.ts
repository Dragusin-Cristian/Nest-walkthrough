import { Injectable } from '@nestjs/common';
import { CreateRacoonDto } from './dto/create-racoon.dto';
import { UpdateRacoonDto } from './dto/update-racoon.dto';

let racoons: CreateRacoonDto[] = [
  {
    id: 1,
    name: "Bandit",
    weight: 10,
    adopted: false
  },
  {
    id: 2,
    name: "Rocky",
    weight: 10,
    adopted: false
  },
  {
    id: 3,
    name: "Sippy",
    weight: 10,
    adopted: true
  },
  {
    id: 4,
    name: "Maria",
    weight: 10,
    adopted: true
  },
]

@Injectable()
export class RacoonsService {
  create(createRacoonDto: Partial<CreateRacoonDto>) {
    racoons.push({ ...createRacoonDto, id: racoons.length + 1 } as CreateRacoonDto)
    return racoons
  }

  findAll() {
    return racoons
  }

  findOne(id: number) {
    return racoons.find(r => r.id === id)
  }

  update(id: number, updateRacoonDto: UpdateRacoonDto) {
    const racoonToUpdate = racoons.find(r => r.id === id)
    if (racoonToUpdate) {
      racoonToUpdate.name = updateRacoonDto.name
      racoonToUpdate.weight = updateRacoonDto.weight
      racoonToUpdate.adopted = updateRacoonDto.adopted
      return racoons
    } else {
      return false
    }
  }

  remove(id: number) {
    racoons = racoons.filter(r => r.id !== id)
    return racoons
  }
}
