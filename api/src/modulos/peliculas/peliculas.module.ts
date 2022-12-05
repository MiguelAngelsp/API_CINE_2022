import { Module } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { PeliculasController } from './peliculas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pelicula } from './entities/pelicula.entity';
import { GenerosModule } from '../generos/generos.module';

@Module({
  controllers: [PeliculasController],
  providers: [PeliculasService],
  imports: [
    GenerosModule,
    TypeOrmModule.forFeature([Pelicula])
  ]
})
export class PeliculasModule {}
