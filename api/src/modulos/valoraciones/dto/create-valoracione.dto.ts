import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreateValoracioneDto {
    @IsNumber()
    ID: number;
    
    @IsNumber()
    PeliculaID: number;

    @IsNumber()
    @MaxLength(2)
    Puntuacion: number;

    @IsString()
    @MaxLength(100)
    Comentario: string;

    @IsString()
    @MaxLength(15)
    UsuarioID: number;
}
