import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
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
    return this.generoRepository.find({});
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

  async deleteAllClientes(){
    const query = this.generoRepository.createQueryBuilder('genero');
    try {
      return await query
        .delete()
        .where({})
        .execute()

    }catch(error){
      this.handleDBErrors (error)
    }
  }

  private handleDBErrors (error: any): never{
    if (error.code === '23505')
      throw new BadRequestException(error.detail)

    throw new InternalServerErrorException('Please Check Server Error ...')
  }
}
