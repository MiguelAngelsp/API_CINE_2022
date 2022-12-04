import { Module } from '@nestjs/common';
import { ValoracionesService } from './valoraciones.service';
import { ValoracionesController } from './valoraciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Valoracion } from './entities/valoracione.entity';

@Module({
  controllers: [ValoracionesController],
  providers: [ValoracionesService],
  imports: [
    TypeOrmModule.forFeature([Valoracion])
  ]
})
export class ValoracionesModule {}
