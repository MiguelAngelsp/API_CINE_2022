import { Pelicula } from "src/modulos/peliculas/entities/pelicula.entity";
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity('generos')

export class Genero {
    @PrimaryGeneratedColumn("uuid")
    ID: string;

    @Column('text', {
        unique: true
    })
    Genero: string;

    //Relacion
    @OneToMany(
        () => Pelicula,
        (Pelicula) => Pelicula.genero,
        { cascade: false }
    )
    peliculas?: Pelicula[];

    //Disparadores
    @BeforeInsert()
    MayusTitulo(){
        this.Genero = this.Genero.toUpperCase()
        
    }
}
