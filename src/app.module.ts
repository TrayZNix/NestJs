import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Monumento } from './monumento/entities/monumento.entity';
import { MonumentoModule } from './monumento/monumento.module';

@Module({
  imports: [
    MonumentoModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'test.db',
      entities: [Monumento],
      synchronize: true, //development only
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
