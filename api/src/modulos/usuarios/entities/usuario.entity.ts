import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('usuarios')

export class Usuario {
    
    @PrimaryGeneratedColumn("uuid")
    ID: number;

    @Column('text',{
        unique: true
    })
    DNI: string;

    @Column('text',{
        nullable: true
    })
    Nombre: string;

    @Column('text',{
        nullable: true
    })
    Apellidos: string;

    @Column('text',{
        nullable: true
    })
    Direccion: string;

    @Column('text',{
        nullable: true
    })
    Fecha_nacimiento: string;

    @Column('text',{
        nullable: true
    })
    Tarjeta_banco: string;

}
