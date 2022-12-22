import { IsString } from "class-validator";

export class CreateCestaDto {

    @IsString()
    UsuarioID: string;
    
    @IsString()
    PeliculaID: string;

    @IsString()
    Fecha_compra: string;
}
