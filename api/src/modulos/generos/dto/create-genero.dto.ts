import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreateGeneroDto {
    @IsString()
    ID: string;
    
    @IsString()
    // @MaxLength(20)
    Genero: string;
}
