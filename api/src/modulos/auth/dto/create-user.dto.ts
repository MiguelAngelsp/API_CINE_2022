import { IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

    // @IsString()
    // ID: string;

    // @IsString()
    // UsuarioID: string;

    @IsString()
    @MaxLength(25)
    Correo: string;

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    password: string;

    @IsOptional()
    @IsString()
    @MaxLength(30)
    Web?: string;

    @IsOptional()
    @IsString()
    @MaxLength(30)
    GitHub?: string;

    @IsString()
    @MinLength(1)
    fullName:string;
}
