import { Genero } from "src/modulos/generos/entities/genero.entity";
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
}
