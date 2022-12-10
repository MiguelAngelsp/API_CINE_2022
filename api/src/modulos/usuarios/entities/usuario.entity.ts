import { Cesta } from "src/modulos/cesta/entities/cesta.entity";
import { Pelicula } from "src/modulos/peliculas/entities/pelicula.entity";
import { Perfil } from "src/modulos/perfil/entities/perfil.entity";
import { Valoracion } from "src/modulos/valoraciones/entities/valoracion.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity('usuarios')

export class Usuario {
    
    @PrimaryGeneratedColumn("uuid")
    ID: string;

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

    //Relacion uno a uno
    @OneToOne(
        () => Perfil,
        (perfil) => perfil.usuario,
        { cascade:false }
    )
    perfil?: Perfil

    // //Relacion a pelicula
    // @OneToMany(
    //     () => Pelicula,
    //     (Pelicula) => Pelicula.valoraciones,
    //     { cascade: false }
    // )

    // peliculas?: Pelicula

    //Relacion a valoracion
    @OneToMany(
        () => Valoracion,
        (Valoracion) => Valoracion.usuario,
        { cascade: false }
    )

    valoraciones?:Valoracion

    //Relacion uno a uno a Cesta
    @OneToOne(
        () => Cesta,
        (cesta) => cesta.usuario,
        { cascade:false }
    )
    cesta?: Cesta

}
