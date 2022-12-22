import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { CestaService } from '../cesta/cesta.service';
import { GenerosService } from '../generos/generos.service';
import { PeliculasService } from '../peliculas/peliculas.service';
import { UsuariosService } from '../usuarios/usuarios.service';
import { ValoracionesService } from '../valoraciones/valoraciones.service';
import dataGeneros from './data/generos.json';
import dataUsuarios from './data/usuarios.json';
import dataAuth from './data/users.json';
import dataValoraciones from './data/valoraciones.json';
import dataPeliculas from './data/peliculas.json';
import dataCesta from './data/cesta.json';

@Injectable()
export class SeedService {
  constructor(
    //  private readonly userService: AuthService,
    private readonly generosService: GenerosService,
    private readonly peliculasService: PeliculasService,
    private readonly cestaService: CestaService,
    private readonly authService: AuthService,
    private readonly usuariosService: UsuariosService,
    private readonly valoracionesService: ValoracionesService
  ) { }

  async carga() {
    await this.insertNewGeneros();
    await this.insertNewUsuarios();
    await this.insertNewAuth();
    await this.insertNewValoraciones();
    await this.insertNewPeliculas();
    await this.insertNewCesta();

    return "Carga de datos ejecutada";
  }



  private async insertNewGeneros() {
    const insertPromises = [];
    dataGeneros.forEach(genero => {
      insertPromises.push(this.generosService.create(genero))
    })
    await Promise.all(insertPromises);
  }

  private async insertNewUsuarios() {
    const insertPromises = [];
    dataUsuarios.forEach(usuario => {
      insertPromises.push(this.usuariosService.create(usuario))
    })
    await Promise.all(insertPromises);
  }

  private async insertNewAuth() {
    const insertPromises = [];
    dataAuth.forEach(user => {
      insertPromises.push(this.authService.create(user))
    })
    await Promise.all(insertPromises);
  }

  private async insertNewValoraciones() {
    const insertPromises = [];
    dataValoraciones.forEach(valoracion => {
      insertPromises.push(this.valoracionesService.create(valoracion))
    })
    await Promise.all(insertPromises);
  }

  private async insertNewPeliculas() {
    const insertPromises = [];
    dataPeliculas.forEach(pelicula => {
      insertPromises.push(this.peliculasService.create(pelicula))
    })
    await Promise.all(insertPromises);
  }

  private async insertNewCesta() {
    const insertPromises = [];
    dataCesta.forEach(cesta => {
      insertPromises.push(this.cestaService.create(cesta))
    })
    await Promise.all(insertPromises);
  }

  findAll() {
    return `This action returns all seed`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seed`;
  }

  remove(id: number) {
    return `This action removes a #${id} seed`;
  }
}
