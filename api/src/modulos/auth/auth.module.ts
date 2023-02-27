import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [ 
    UsuariosModule,
    ConfigModule,
    TypeOrmModule.forFeature( [ User ]),
    PassportModule.register({ defaultStrategy: 'jwt'}),
    JwtModule.registerAsync({
      imports: [ ConfigModule ],
      inject: [ ConfigService ],
      useFactory: ( configService: ConfigService ) => {
        console.log ('JWT Secret --> ', configService.get('JWT_SECRET'));
        // console.log ('JWT: ', process.env.JWT_SECRET);
        return {
          secret: configService.get('JWT_SECRET'),
          signOptions: {
              expiresIn: '2h'
          }
        }
      }
    })
  ],
  exports: [ TypeOrmModule, AuthService, JwtStrategy, PassportModule, JwtModule ]
})
export class AuthModule {}
