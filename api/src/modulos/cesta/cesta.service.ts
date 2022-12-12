import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PeliculasService } from '../peliculas/peliculas.service';
import { UsuariosService } from '../usuarios/usuarios.service';
import { CreateCestaDto } from './dto/create-cesta.dto';
import { UpdateCestaDto } from './dto/update-cesta.dto';
import { Cesta } from './entities/cesta.entity';

@Injectable()
export class CestaService {
  constructor(
    @InjectRepository(Cesta)
    private readonly cestaRepository: Repository<Cesta>,
    private readonly peliculaService: PeliculasService,
    private readonly usuariosService: UsuariosService
  ){

  }
  async create(createCestaDto: CreateCestaDto) {

    try {
      const { PeliculaID,UsuarioID, ...campos } = createCestaDto;
      // console.log({...campos});
      const pelicula = this.peliculaService.findOne(PeliculaID);
      const usuario = this.usuariosService.findOne(UsuarioID);
      const cesta = this.cestaRepository.create({...campos});
      cesta.peliculas = await this.peliculaService.findOne(PeliculaID);
      cesta.usuario = await this.usuariosService.findOne(UsuarioID);
      // //se lanza la petición sl SGBD (postgres). Esperar (x seg)
      await this.cestaRepository.save(cesta)
      return cesta
    } catch (error) {
        return new InternalServerErrorException('Error en BD')

    }

 
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
