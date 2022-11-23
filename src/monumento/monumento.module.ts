import { Module } from '@nestjs/common';
import { MonumentoService } from './monumento.service';
import { MonumentoController } from './monumento.controller';
import { Monumento } from './entities/monumento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Monumento])],
  controllers: [MonumentoController],
  providers: [MonumentoService],
})
export class MonumentoModule {}
