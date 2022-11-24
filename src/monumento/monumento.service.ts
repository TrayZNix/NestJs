import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
  loadMockData() {
    this.repo.save({
      codigoPais: 'es',
      nombreCiudad: 'Sevilla',
      nombreMonumento: 'Giralda',
      nombrePais: 'España',
      descripcion: 'La giralda es...',
      localizacion: '37.38614, -5.99238',
      linkFoto:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Sevilla_La_Giralda_18-03-2011_18-24-31.jpg/800px-Sevilla_La_Giralda_18-03-2011_18-24-31.jpg',
    } as Monumento);
    this.repo.save({
      codigoPais: 'es',
      nombreCiudad: 'Granada',
      nombreMonumento: 'Alhambra',
      nombrePais: 'España',
      descripcion: 'La Alhambra es...',
      localizacion: '37.175907,-3.5880524',
      linkFoto:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDt9WcKbNzsbpd5iGlQgKwlTCjUNNq3br0fQ2s1ONVu3faXzL-2l1ORW5Bl42zzMZgd0A&usqp=CAU',
    } as Monumento);
    this.repo.save({
      codigoPais: 'al',
      nombreCiudad: 'Colonia',
      nombreMonumento: 'Catedral de Colonia',
      nombrePais: 'Alemania',
      descripcion: 'La catedral de Colonia es...',
      localizacion: '50.9412721,6.9582871',
      linkFoto:
        'https://elviajerofeliz.com/wp-content/uploads/2017/06/Catedral-de-Colonia-portada.jpg',
    } as Monumento);
  }
  clearDB() {
    this.repo.clear();
  }
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
  updateHelper(id: number, updateMonumentoDto: UpdateMonumentoDto) {
    return this.repo.findOneBy({ id: id }).then((monumento) => {
      if (monumento == null) {
        throw new HttpException(NotFoundException, HttpStatus.NOT_FOUND);
      } else {
        monumento.codigoPais = updateMonumentoDto.codigoPais;
        monumento.descripcion = updateMonumentoDto.descripcion;
        monumento.linkFoto = updateMonumentoDto.linkFoto;
        monumento.localizacion = updateMonumentoDto.localizacion;
        monumento.nombreCiudad = updateMonumentoDto.nombreCiudad;
        monumento.nombrePais = updateMonumentoDto.nombrePais;
        monumento.nombreMonumento = updateMonumentoDto.nombreMonumento;

        return monumento;
      }
    });
  }
  update(id: number, updateMonumentoDto: UpdateMonumentoDto) {
    if (this.checkIfFieldNull(updateMonumentoDto))
      throw new HttpException(BadRequestException, HttpStatus.BAD_REQUEST);
    return this.updateHelper(id, updateMonumentoDto);
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
