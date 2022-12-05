import { Module } from '@nestjs/common';
import { GenerosService } from './generos.service';
import { GenerosController } from './generos.controller';
import { Genero } from './entities/genero.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [GenerosController],
  providers: [GenerosService],
  imports: [
    TypeOrmModule.forFeature([Genero])
  ],
  exports:[
    GenerosService
  ]
})
export class GenerosModule {}
