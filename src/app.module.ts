import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Monumento } from './monumento/entities/monumento.entity';
import { MonumentoModule } from './monumento/monumento.module';

@Module({
  imports: [
    MonumentoModule,
    //dropSchema: true -> El create-drop de jpa
    TypeOrmModule.forRoot({
      dropSchema: true,
      type: 'sqlite',
      database: 'datos.db',
      entities: [Monumento],
      synchronize: true, //Usar solo en development
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
