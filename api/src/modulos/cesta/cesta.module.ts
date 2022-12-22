import { Module } from '@nestjs/common';
import { CestaService } from './cesta.service';
import { CestaController } from './cesta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cesta } from './entities/cesta.entity';
import { PeliculasModule } from '../peliculas/peliculas.module';
import { UsuariosModule } from '../usuarios/usuarios.module';

@Module({
  controllers: [CestaController],
  providers: [CestaService],
  imports: [
    PeliculasModule, UsuariosModule,
    TypeOrmModule.forFeature([Cesta])
  ],
  exports: [CestaService]
})
export class CestaModule {}
