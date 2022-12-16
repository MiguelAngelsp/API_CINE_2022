import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CestaModule } from './modulos/cesta/cesta.module';
import { GenerosModule } from './modulos/generos/generos.module';
import { PeliculasModule } from './modulos/peliculas/peliculas.module';
import { AuthModule } from './modulos/auth/auth.module';
import { UsuariosModule } from './modulos/usuarios/usuarios.module';
import { ValoracionesModule } from './modulos/valoraciones/valoraciones.module';
import { SeedModule } from './modulos/seed/seed.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    autoLoadEntities: true,
    synchronize: !!process.env.DB_SYNC
  }), UsuariosModule, PeliculasModule, ValoracionesModule, GenerosModule, CestaModule, AuthModule, SeedModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
