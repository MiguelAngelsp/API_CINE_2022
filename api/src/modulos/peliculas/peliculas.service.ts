import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenerosService } from '../generos/generos.service';
import { ValoracionesService } from '../valoraciones/valoraciones.service';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { Pelicula } from './entities/pelicula.entity';

@Injectable()
export class PeliculasService {
  constructor(
    @InjectRepository(Pelicula)
    private readonly peliculaRepository: Repository<Pelicula>,
    private readonly generoService: GenerosService,
    private readonly valoracionesService: ValoracionesService
  ) {

  }
  async create(createProductoDto: CreatePeliculaDto) {

    try {
      const { GeneroID,ValoracionID, ...campos } = createProductoDto;
      // console.log({...campos});
      const genero = this.generoService.findOne(GeneroID);
      const valoracion = this.valoracionesService.findOne(ValoracionID);
      const pelicula = this.peliculaRepository.create({ ...campos });
      pelicula.genero = await this.generoService.findOne(GeneroID);
      pelicula.valoraciones = await this.valoracionesService.findOne(ValoracionID);
      // //se lanza la petición sl SGBD (postgres). Esperar (x seg)
      await this.peliculaRepository.save(pelicula)
      return pelicula
    } catch (error) {
      return new InternalServerErrorException('Error en BD')
    }
  }
  findAll() {
    return this.peliculaRepository.find({});
  }

  findOne(ID: string) {
    return this.peliculaRepository.findOne({
      where: { 
        ID 
      },
      relations: {
          cesta: true,
          valoraciones: true,
      }
    });
  }

  update(id: number, updatePeliculaDto: UpdatePeliculaDto) {
    return `This action updates a #${id} pelicula`;
  }

  remove(id: number) {
    return `This action removes a #${id} pelicula`;
  }
}
