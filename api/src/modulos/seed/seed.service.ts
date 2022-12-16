import { Injectable } from '@nestjs/common';
import { GenerosService } from '../generos/generos.service';
import  dataGeneros  from './data/generos.json';

@Injectable()
export class SeedService {
  constructor (
    //  private readonly userService: AuthService,
     private readonly generosService: GenerosService 
   ){}
   
   carga(){
     this.generosService.deleteAllClientes()
    //  this.insertNewClientes()
    //  this.userService.deleteAllUsers();
     this.insertNewGeneros();
     return dataGeneros;
   }
  
  
  
      private async insertNewGeneros(){
        const insertPromises = [];
        dataGeneros.forEach( genero => {
          insertPromises.push(this.generosService.create(genero))
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
