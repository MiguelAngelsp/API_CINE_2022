// Generated by https://quicktype.io
export interface IAuth {
    ID:        string;
    Correo:    string;
    Password:  string;
    Web:       string;
    GitHub:    string;
    usuario: IUsuarios
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
