import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { Genero } from './entities/genero.entity';

@Injectable()
export class GenerosService {
  constructor(
    @InjectRepository(Genero)
    private readonly generoRepository: Repository<Genero>
  ){

  }

  async create(creategeneroDto: CreateGeneroDto) {
    try {
      const genero = this.generoRepository.create(creategeneroDto);
      console.log(genero);
      await this.generoRepository.save(genero);
      return genero;

    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda')
    }
  }

  findAll() {
    return `This action returns all generos`;
  }

  findOne(ID: string) {
    return this.generoRepository.findOne({
      where: { 
        ID 
      },
      relations: {
          peliculas: true,
      }
    });
  }

  update(id: number, updateGeneroDto: UpdateGeneroDto) {
    return `This action updates a #${id} genero`;
  }

  remove(id: number) {
    return `This action removes a #${id} genero`;
  }
}
