import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>
  ) {

  }
  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      //crea la instancia del producto con sus propiedades
      const usuario = this.usuarioRepository.create(createUsuarioDto);
      // Lo graba e impacta en la BD
      await this.usuarioRepository.save(usuario);
      return usuario;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda!')
    }
 
  }
  findAll() {
    return this.usuarioRepository.find({});
  }

  findOne(ID: string) {
    return this.usuarioRepository.findOne({
      where: { 
        ID 
      },
      relations: {
          valoraciones: true,
      }
    });
  }

  // findAll() {
  //   return `This action returns all usuarios`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} usuario`;
  // }

  update(ID: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${ID} usuario`;
  }

  remove(ID: number) {
    return `This action removes a #${ID} usuario`;
  }
}
