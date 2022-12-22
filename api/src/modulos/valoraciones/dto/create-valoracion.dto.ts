import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreateValoracionDto {

    @IsString()
    ID: string;

    @IsString()
    UsuarioID: string;

    // @IsString()
    // PeliculaID: string;

    @IsNumber()
    Puntuacion: number;

    @IsString()
    @MaxLength(700)
    Comentario: string;

}
