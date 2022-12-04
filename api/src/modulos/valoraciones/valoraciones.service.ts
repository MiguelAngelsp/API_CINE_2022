import { Injectable } from '@nestjs/common';
import { CreateValoracioneDto } from './dto/create-valoracione.dto';
import { UpdateValoracioneDto } from './dto/update-valoracione.dto';

@Injectable()
export class ValoracionesService {
  create(createValoracioneDto: CreateValoracioneDto) {
    return 'This action adds a new valoracione';
  }

  findAll() {
    return `This action returns all valoraciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} valoracione`;
  }

  update(id: number, updateValoracioneDto: UpdateValoracioneDto) {
    return `This action updates a #${id} valoracione`;
  }

  remove(id: number) {
    return `This action removes a #${id} valoracione`;
  }
}
