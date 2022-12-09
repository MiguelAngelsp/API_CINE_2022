import { Module } from '@nestjs/common';
import { CestaService } from './cesta.service';
import { CestaController } from './cesta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cesta } from './entities/cesta.entity';
import { PeliculasModule } from '../peliculas/peliculas.module';

@Module({
  controllers: [CestaController],
  providers: [CestaService],
  imports: [
    PeliculasModule,
    TypeOrmModule.forFeature([Cesta])
  ]
})
export class CestaModule {}
