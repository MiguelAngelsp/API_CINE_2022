import { IsEmail, IsNumber, IsString, MaxLength } from "class-validator";

export class CreatePerfilDto {
    @IsNumber()
    ID: number;

    @IsNumber()
    UsuarioID: number;
    
    @IsEmail()
    @MaxLength(25)
    Correo: string;

    @IsString()
    @MaxLength(20)
    Contraseña: string;

    @IsString()
    @MaxLength(30)
    Web: string;

    @IsString()
    @MaxLength(30)
    GitHub: string;
}
