import { IsString, MaxLength } from "class-validator";

export class CreatePerfilDto {

    @IsString()
    UsuarioID: string;
    
    @IsString()
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
