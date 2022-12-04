import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ValoracionesService } from './valoraciones.service';
import { CreateValoracioneDto } from './dto/create-valoracione.dto';
import { UpdateValoracioneDto } from './dto/update-valoracione.dto';

@Controller('valoraciones')
export class ValoracionesController {
  constructor(private readonly valoracionesService: ValoracionesService) {}

  @Post()
  create(@Body() createValoracioneDto: CreateValoracioneDto) {
    return this.valoracionesService.create(createValoracioneDto);
  }

  @Get()
  findAll() {
    return this.valoracionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.valoracionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateValoracioneDto: UpdateValoracioneDto) {
    return this.valoracionesService.update(+id, updateValoracioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.valoracionesService.remove(+id);
  }
}
