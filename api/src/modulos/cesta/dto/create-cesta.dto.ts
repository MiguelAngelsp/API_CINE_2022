import { IsDate, IsNumber } from "class-validator";

export class CreateCestaDto {
    @IsNumber()
    ID: number;

    @IsNumber()
    UsuarioID: number;
    
    @IsNumber()
    PeliculaID: number;

    @IsDate()
    Fecha_compra: Date;
}
