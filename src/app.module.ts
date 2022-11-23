import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonumentoModule } from './monumento/monumento.module';

@Module({
  imports: [MonumentoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
