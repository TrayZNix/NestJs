import {
  BadRequestException,
  Catch,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { off } from 'process';
import { of } from 'rxjs';
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

  findAll() {
    return this.repo.find();
  }
  findOne(id: number): Promise<Monumento> {
    //Hago esto ya que si pongo this.repo.hasId(id), pide un objeto Monumento en vez del numero id.
    //Por ello, veo más factible hacerlo de esta manera.
    return this.repo.findOneBy({ id: id }).then((foundMonumento) => {
      if (foundMonumento == null)
        throw new HttpException(NotFoundException, HttpStatus.NOT_FOUND);
      return foundMonumento;
    });
  }

  create(createMonumentoDto: CreateMonumentoDto) {
    if (this.checkIfFieldNull(createMonumentoDto))
      throw new HttpException(BadRequestException, HttpStatus.BAD_REQUEST);
    else {
      return this.repo.save(createMonumentoDto);
    }
  }

  update(
    id: number,
    updateMonumentoDto: UpdateMonumentoDto,
    monumento: Monumento,
  ) {
    // if (this.checkIfFieldNull(updateMonumentoDto))
    //   throw new HttpException(BadRequestException, HttpStatus.BAD_REQUEST);
    // else {
    //   monumento.codigoPais = updateMonumentoDto.codigoPais;
    //   monumento.descripcion = updateMonumentoDto.descripcion;
    //   monumento.linkFoto = updateMonumentoDto.linkFoto;
    //   monumento.localizacion = updateMonumentoDto.localizacion;
    //   monumento.nombreCiudad = updateMonumentoDto.nombreCiudad;
    //   monumento.nombrePais = updateMonumentoDto.nombrePais;
    //   monumento.nombreMonumento = updateMonumentoDto.nombreMonumento;
    //   return this.repo.save(monumento);
    // }
  }

  remove(id: number) {
    this.repo.findOneBy({ id: id }).then((foundMonumento) => {
      if (foundMonumento != null) this.repo.delete({ id: id });
    });
  }
  checkIfFieldNull(Monumento: CreateMonumentoDto | UpdateMonumentoDto) {
    if (
      Monumento.codigoPais == null ||
      Monumento.descripcion == null ||
      Monumento.linkFoto == null ||
      Monumento.localizacion == null ||
      Monumento.nombreCiudad == null ||
      Monumento.nombrePais == null ||
      Monumento.nombreMonumento == null
    ) {
      return true;
    } else {
      return false;
    }
  }
}
