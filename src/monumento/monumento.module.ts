import { Module } from '@nestjs/common';
import { MonumentoService } from './monumento.service';
import { MonumentoController } from './monumento.controller';

@Module({
  controllers: [MonumentoController],
  providers: [MonumentoService]
})
export class MonumentoModule {}
