import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { GenerosModule } from '../generos/generos.module';
import { AuthModule } from '../auth/auth.module';
import { CestaModule } from '../cesta/cesta.module';
import { PeliculasModule } from '../peliculas/peliculas.module';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { ValoracionesModule } from '../valoraciones/valoraciones.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [GenerosModule, AuthModule, CestaModule, PeliculasModule, UsuariosModule, ValoracionesModule]
})
export class SeedModule {}
