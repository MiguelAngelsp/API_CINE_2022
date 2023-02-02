import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuariosService } from '../usuarios/usuarios.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly usuarioService: UsuariosService,

  ){

  }

  async create(createUserDto: CreateUserDto) {
    try {

      const { UsuarioID,password, ...camposUser } = createUserDto;
      const user = this.userRepository.create({
        ...camposUser,
        password: bcrypt.hashSync( password, 10 )
      });
      const usuario = await this.usuarioService.findOne(UsuarioID);
      user.usuario = usuario;
      await this.userRepository.save(user);
      delete user.password;


      return user

    }
    catch (error) {
    this.handleDBErrors(error)
    }
  }

  async deleteAllUsers() {
    const query = this.userRepository.createQueryBuilder('user');
    try {
      return await query
        .delete()
        .where({})
        .execute()

    } catch (error) {
      this.handleDBErrors(error)
    }
  }

  private handleDBErrors (error: any): never{
    if (error.code === '23505')
      throw new BadRequestException(error.detail)

    throw new InternalServerErrorException('Please Check Server Error ...')
  }


  findAll() {
    return this.userRepository.find({
      relations:{
        usuario:true
      }
    });
  }

  findOne(ID: number) {
    return `This action returns a #${ID} perfil`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return this.userRepository.update(id, updateAuthDto);
  }

  remove(ID: number) {
    return `This action removes a #${ID} perfil`;
  }
}
