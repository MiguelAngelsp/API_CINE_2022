export interface IRespuestaApiAuth {
    hasError: boolean;
    message?: string;
}

export interface IAuth {
    ID:        string;
    Correo:    string;
    Password:  string;
    Web:       string;
    isActive?: boolean;
    token?:    string;
    roles?:    string;
    GitHub:    string;
    fullName:  string;
    usuario?:   IUsuarios
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
