import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService],
  imports: [
    TypeOrmModule.forFeature([Usuario])
  ],
  exports: [UsuariosService]
})
export class UsuariosModule {}
