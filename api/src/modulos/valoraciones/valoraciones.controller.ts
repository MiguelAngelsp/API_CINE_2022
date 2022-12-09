import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ValoracionesService } from './valoraciones.service';
import { CreateValoracionDto } from './dto/create-valoracion.dto';
import { UpdateValoracionDto } from './dto/update-valoracion.dto';

@Controller('valoraciones')
export class ValoracionesController {
  constructor(private readonly valoracionesService: ValoracionesService) {}

  @Post()
  create(@Body() createValoracionDto: CreateValoracionDto) {
    return this.valoracionesService.create(createValoracionDto);
  }

  @Get()
  findAll() {
    return this.valoracionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.valoracionesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateValoracionDto: UpdateValoracionDto) {
    return this.valoracionesService.update(+id, updateValoracionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.valoracionesService.remove(+id);
  }
}
