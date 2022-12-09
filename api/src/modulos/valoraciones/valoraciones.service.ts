import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuariosService } from '../usuarios/usuarios.service';
import { CreateValoracionDto } from './dto/create-valoracion.dto';
import { UpdateValoracionDto } from './dto/update-valoracion.dto';
import { Valoracion } from './entities/valoracion.entity';

@Injectable()
export class ValoracionesService {constructor(
  @InjectRepository(Valoracion)
  private readonly valoracionRepository: Repository<Valoracion>,
  private readonly usuarioService: UsuariosService
){

}
async create(createValoracionDto: CreateValoracionDto) {

  try {
    const { UsuarioID, ...campos } = createValoracionDto;
    // console.log({...campos});
    const usuario = this.usuarioService.findOne(UsuarioID);
    const valoracion = this.valoracionRepository.create({...campos});
    valoracion.usuario = await this.usuarioService.findOne(UsuarioID);
    // //se lanza la petición al SGBD (postgres). Esperar (x seg)
    await this.valoracionRepository.save(valoracion)
    return valoracion
  } catch (error) {
      return new InternalServerErrorException('Error en BD')
  }

}

  findAll() {
    return `This action returns all valoraciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} valoracione`;
  }

  update(id: number, updateValoracionDto: UpdateValoracionDto) {
    return `This action updates a #${id} valoracione`;
  }

  remove(id: number) {
    return `This action removes a #${id} valoracione`;
  }
}
