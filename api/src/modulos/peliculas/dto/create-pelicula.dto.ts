import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreatePeliculaDto {
    
    @IsString()
    @MaxLength(60)
    Titulo: string;

    // @IsNumber()
    // GeneroID?: number;

    @IsString()
    @MaxLength(400)
    Descripcion: string;

    // @IsNumber()
    // ValoracionID: number;
}
