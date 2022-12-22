import { IsString, MaxLength } from "class-validator";

export class CreateUsuarioDto {
    @IsString()
    ID: string;

    @IsString()
    @MaxLength(9)
    DNI: string;

    @IsString()
    @MaxLength(15)
    Nombre: string;

    @IsString()
    @MaxLength(20)
    Apellidos: string;

    @IsString()
    @MaxLength(50)
    Direccion: string;

    @IsString()
    Fecha_nacimiento: string;

    @IsString()
    @MaxLength(18)
    Tarjeta_banco: string;
}
