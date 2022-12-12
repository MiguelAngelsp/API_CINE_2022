import { Module } from '@nestjs/common';
import { ValoracionesService } from './valoraciones.service';
import { ValoracionesController } from './valoraciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Valoracion } from './entities/valoracion.entity';
import { UsuariosService } from '../usuarios/usuarios.service';
import { UsuariosModule } from '../usuarios/usuarios.module';

@Module({
  controllers: [ValoracionesController],
  providers: [ValoracionesService],
  imports: [
    UsuariosModule,
    TypeOrmModule.forFeature([Valoracion])
  ],
  exports: [
    ValoracionesService
  ]
})
export class ValoracionesModule {}
