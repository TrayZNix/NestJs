import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  Put,
  OnModuleInit,
} from '@nestjs/common';
import { MonumentoService } from './monumento.service';
import { CreateMonumentoDto } from './dto/create-monumento.dto';
import { UpdateMonumentoDto } from './dto/update-monumento.dto';
@Controller('monumento')
export class MonumentoController implements OnModuleInit {
  constructor(private readonly monumentoService: MonumentoService) {}
  onModuleInit() {
    this.monumentoService.loadMockData();
  }

  @Post()
  create(@Body() createMonumentoDto: CreateMonumentoDto) {
    return this.monumentoService.create(createMonumentoDto);
  }

  @Get()
  findAll() {
    return this.monumentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.monumentoService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateMonumentoDto: UpdateMonumentoDto,
  ) {
    return this.monumentoService.update(+id, updateMonumentoDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: number) {
    return this.monumentoService.remove(+id);
  }
}
