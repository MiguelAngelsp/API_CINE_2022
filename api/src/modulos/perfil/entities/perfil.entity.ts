import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('perfiles')

export class Perfil {
    @PrimaryGeneratedColumn("uuid")
    ID: number;

    @Column('text',{
        unique: true
    })
    UsuarioID: number;

    @Column('text',{
        nullable: true
    })
    Correo: string;

    @Column('text',{
        nullable: true
    })
    Contraseña: string;

    @Column('text',{
        unique: true
    })
    Web: string;

    @Column('text',{
        unique: true
    })
    GitHub: string;
}
