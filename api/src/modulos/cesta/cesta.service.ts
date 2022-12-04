import { Injectable } from '@nestjs/common';
import { CreateCestaDto } from './dto/create-cesta.dto';
import { UpdateCestaDto } from './dto/update-cesta.dto';

@Injectable()
export class CestaService {
  create(createCestaDto: CreateCestaDto) {
    return 'This action adds a new cesta';
  }

  findAll() {
    return `This action returns all cesta`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cesta`;
  }

  update(id: number, updateCestaDto: UpdateCestaDto) {
    return `This action updates a #${id} cesta`;
  }

  remove(id: number) {
    return `This action removes a #${id} cesta`;
  }
}
