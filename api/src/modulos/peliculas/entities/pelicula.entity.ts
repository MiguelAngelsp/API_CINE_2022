import { Genero } from "src/modulos/generos/entities/genero.entity";
import { Usuario } from "src/modulos/usuarios/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity('peliculas')

export class Pelicula {
    @PrimaryGeneratedColumn("uuid")
    ID: number;

    @Column('text',{
        unique: true
    })
    Titulo: string;

    @Column('text',{
        nullable: true
    })
    Descripcion: string;

    // @Column('numeric',{
    //     unique: true
    // })
    // ValoracionID: number;

    //Relacion
    @ManyToOne(
        () => Genero,
        (genero) => genero.peliculas,
        { cascade: false }
    )

    genero?: Genero

    //Relacion a usuarios
    @ManyToOne(
        () => Usuario,
        (usuario) => usuario.peliculas,
        { cascade: false }
    )

    usuario?: Usuario
}
