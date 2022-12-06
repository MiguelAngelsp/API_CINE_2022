import { Usuario } from "src/modulos/usuarios/entities/usuario.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity('perfiles')

export class Perfil {
    @PrimaryGeneratedColumn("uuid")
    ID: string;

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

    //Relacion uno a uno
    @OneToOne(
        () => Usuario,
        (usuario) => usuario.perfil
    )
    @JoinColumn()
    usuario?: Usuario
}
