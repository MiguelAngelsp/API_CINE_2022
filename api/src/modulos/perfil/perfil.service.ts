import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuariosService } from '../usuarios/usuarios.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { Perfil } from './entities/perfil.entity';

@Injectable()
export class PerfilService {
  constructor(
    @InjectRepository(Perfil)
    private readonly perfilRepositorio: Repository<Perfil>,
    private readonly usuariosService: UsuariosService
  ){

  }

  async create(createPerfilDto: CreatePerfilDto) {
    try {
      console.log(createPerfilDto);
      const { UsuarioID, ...camposPerfil } = createPerfilDto;
      const perfil = this.perfilRepositorio.create({...camposPerfil});
      const usuario = await this.usuariosService.findOne(UsuarioID);
      perfil.usuario = usuario;
      await this.perfilRepositorio.save(perfil);

      // usuario.perfil = perfil;
      // await this.usuarioService.create(usuario);

      return perfil
    } catch(error){
        return new InternalServerErrorException('Error en BD')
    }

  }


  findAll() {
    return `This action returns all perfil`;
  }

  findOne(ID: number) {
    return `This action returns a #${ID} perfil`;
  }

  update(ID: number, updatePerfilDto: UpdatePerfilDto) {
    return `This action updates a #${ID} perfil`;
  }

  remove(ID: number) {
    return `This action removes a #${ID} perfil`;
  }
}
