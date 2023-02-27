import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login.dto.ts';
import { CreateUserDto } from './dto/create-user.dto';
import { UsuariosService } from '../usuarios/usuarios.service';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly usuariosService: UsuariosService,
    private readonly jwtService: JwtService
  ){}

  async login( loginUserDto: LoginUserDto ){
    try {
      // buscamos el usuario del email
      const { Correo, password } = loginUserDto;
      const user = await this.userRepository.findOne({ 
        where: { Correo },
        select: { Correo: true, password: true, roles: true, fullName: true }
       });

      if ( !user ) 
        throw new UnauthorizedException ('Credenciales no válidas (email)');

      //comparamos las contraseñas 
      if (!bcrypt.compareSync( password, user.password ))
        throw new UnauthorizedException('Credenciales no válidas (email)')
      
      return {
        user: { ...user }, 
        token: this.getJwtToken({ Correo: user.Correo })
      }
      
    } catch (error) {
      this.handleDBErrors(error)
    }
  }
  async create(createUserDto: CreateUserDto) {
    try {
      console.log(createUserDto);
      const { password, ...userData } = createUserDto;
      // const cliente = await this.clientesService.findOne(createUserDto.nif);
      // console.log(cliente);
      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync( password, 10 )
      });
      // user.cliente = cliente;
      await this.userRepository.save(user);
      // delete user.password;

      return {
        user: { ...user }, 
        token: this.getJwtToken({ Correo: user.Correo })
      }

    } catch (error) {
      this.handleDBErrors(error)
    }
  }

  private handleDBErrors (error: any): never{
    if (error.code === '23505')
      throw new BadRequestException(error.detail)
    
    throw new InternalServerErrorException('Please Check Server Error ...')
  }

  private getJwtToken( payload: JwtPayload){
    const token = this.jwtService.sign(payload);
    return token;
  }

  async deleteAllUsers(){
    const query = this.userRepository.createQueryBuilder('user');
    try{
      return await query
              .delete()
              .where({})
              .execute()
    }catch(error){
      this.handleDBErrors( error )
    }
  }
}