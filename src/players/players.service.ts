import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Repository } from 'typeorm';
import { Player } from './entities/player.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private readonly repository: Repository<Player>,
  ) {}

  create(dto: CreatePlayerDto) {
    const player = this.repository.create(dto);
    return this.repository.save(player);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdatePlayerDto) {
    const player = await this.repository.findOneBy({ id });
    if (!player) return null;
    this.repository.merge(player, dto);
    return this.repository.save(player);
  }

  async remove(id: string) {
    const player = await this.repository.findOneBy({ id });
    if (!player) return null;
    return this.repository.remove(player);
  }
}
