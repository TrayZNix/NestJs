import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Monumento {
  @PrimaryGeneratedColumn('identity')
  id: number;
  @Column()
  nombreMonumento: string;
  @Column()
  nombreCiudad: string;
  @Column()
  nombrePais: string;
  @Column()
  codigoPais: string;
  @Column()
  localizacion: string;
  @Column()
  descripcion: string;
  @Column()
  linkFoto: string;
}
