import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreatePeliculaDto {

    @IsString()
    ID: string;
    
    @IsString()
    @MaxLength(60)
    Titulo: string;

    // @IsNumber()
    // GeneroID?: number;

    @IsString()
    @MaxLength(400)
    Descripcion: string;

    @IsNumber()
    Precio: number;

    @IsString()
    Imagen: string;

    @IsString()
    GeneroID?: string;

    @IsString()
    ValoracionID: string;
}
