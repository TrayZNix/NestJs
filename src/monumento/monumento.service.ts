import { Injectable } from '@nestjs/common';
import { CreateMonumentoDto } from './dto/create-monumento.dto';
import { UpdateMonumentoDto } from './dto/update-monumento.dto';

@Injectable()
export class MonumentoService {
  create(createMonumentoDto: CreateMonumentoDto) {
    return 'This action adds a new monumento';
  }

  findAll() {
    return `This action returns all monumento`;
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
