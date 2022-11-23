import { PartialType } from '@nestjs/mapped-types';
import { CreateMonumentoDto } from './create-monumento.dto';

export class UpdateMonumentoDto extends PartialType(CreateMonumentoDto) {
  id: number;
  nombreMonumento: string;
  nombreCiudad: string;
  nombrePais: string;
  codigoPais: string;
  localizacion: string;
  descripcion: string;
  linkFoto: string;
}
