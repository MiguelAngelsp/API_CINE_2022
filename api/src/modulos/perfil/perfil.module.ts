import { Module } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { PerfilController } from './perfil.controller';
import { Perfil } from './entities/perfil.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from '../usuarios/usuarios.module';

@Module({
  controllers: [PerfilController],
  providers: [PerfilService],
  imports: [
    TypeOrmModule.forFeature([Perfil]),
    UsuariosModule
  ]
})
export class PerfilModule {}
