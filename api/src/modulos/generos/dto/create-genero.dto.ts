import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreateGeneroDto {
    @IsNumber()
    ID: number;
    
    @IsString()
    @MaxLength(20)
    Genero: string;
}
