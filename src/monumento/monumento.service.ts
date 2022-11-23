import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMonumentoDto } from './dto/create-monumento.dto';
import { UpdateMonumentoDto } from './dto/update-monumento.dto';
import { Monumento } from './entities/monumento.entity';

@Injectable()
export class MonumentoService {
  constructor(
    @InjectRepository(Monumento)
    private repo: Repository<Monumento>,
  ) {}
  create(createMonumentoDto: CreateMonumentoDto) {
    return this.repo.save(createMonumentoDto);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} monumento`;
  }

  update(id: number, updateMonumentoDto: UpdateMonumentoDto) {
    return `This action updates a #${id} monumento`;
  }

  remove(id: number) {
    return `This action removes a #${id} monumento`;
  }
}
