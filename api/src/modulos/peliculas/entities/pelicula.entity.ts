import { Genero } from "src/modulos/generos/entities/genero.entity";
import { Usuario } from "src/modulos/usuarios/entities/usuario.entity";
import { Valoracion } from "src/modulos/valoraciones/entities/valoracion.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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


    //Relacion a valoraciones
    @ManyToOne(
        () => Valoracion,
        (valoracion) => valoracion.pelicula,
        { cascade: false }
    )

    valoraciones?: Valoracion
}
