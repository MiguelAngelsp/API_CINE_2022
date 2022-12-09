import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreateValoracionDto {
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
