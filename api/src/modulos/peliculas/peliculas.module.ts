import { Module } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { PeliculasController } from './peliculas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pelicula } from './entities/pelicula.entity';

@Module({
  controllers: [PeliculasController],
  providers: [PeliculasService],
  imports: [
    TypeOrmModule.forFeature([Pelicula])
  ]
})
export class PeliculasModule {}
