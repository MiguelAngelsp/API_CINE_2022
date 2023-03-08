export interface IRespuestaApiAuth {
    hasError: boolean;
    message?: string;
}

export interface IAuth {
    ID: string;
    Correo: string;
    Password: string;
    Web: string;
    isActive?: boolean;
    token?: string;
    roles?: string;
    GitHub: string;
    fullName: string;
    user?: IUsuarios
}

export interface IUsuarios {
    ID: string;
    DNI: string;
    Nombre: string;
    Apellidos: string;
    Direccion: string;
    Fecha_nacimiento: string;
    Tarjeta_banco: string;
}

export interface IRespuestaLogin2 {
    token: string;
    Correo: string;
    password: string;
}

export interface IUserApi {
    Correo: string;
    password: string;
    fullName: string;
    isActive?: boolean;
    roles: string[]
}
export interface IRespuestaLogin {
    token: string;
    user: IUserApi;
}