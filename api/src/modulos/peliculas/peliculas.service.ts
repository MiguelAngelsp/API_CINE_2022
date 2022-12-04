import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { Pelicula } from './entities/pelicula.entity';

@Injectable()
export class PeliculasService {
  constructor(
    @InjectRepository(Pelicula)
    private readonly peliculaRepository: Repository<Pelicula>
  ){

  }
  async create(createPeliculaDto: CreatePeliculaDto) {

    try {
      //crea la instancia del producto con sus propiedades
      const pelicula = this.peliculaRepository.create(createPeliculaDto);
      // Lo graba e impacta en la BD
      await this.peliculaRepository.save(pelicula);
      return pelicula;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda!')
    }
 
  }

  findAll() {
    return `This action returns all peliculas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pelicula`;
  }

  update(id: number, updatePeliculaDto: UpdatePeliculaDto) {
    return `This action updates a #${id} pelicula`;
  }

  remove(id: number) {
    return `This action removes a #${id} pelicula`;
  }
}
