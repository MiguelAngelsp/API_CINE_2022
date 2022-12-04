import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CestaService } from './cesta.service';
import { CreateCestaDto } from './dto/create-cesta.dto';
import { UpdateCestaDto } from './dto/update-cesta.dto';

@Controller('cesta')
export class CestaController {
  constructor(private readonly cestaService: CestaService) {}

  @Post()
  create(@Body() createCestaDto: CreateCestaDto) {
    return this.cestaService.create(createCestaDto);
  }

  @Get()
  findAll() {
    return this.cestaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cestaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCestaDto: UpdateCestaDto) {
    return this.cestaService.update(+id, updateCestaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cestaService.remove(+id);
  }
}
