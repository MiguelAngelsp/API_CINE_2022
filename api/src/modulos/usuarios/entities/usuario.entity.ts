import { Cesta } from "src/modulos/cesta/entities/cesta.entity";
import { Pelicula } from "src/modulos/peliculas/entities/pelicula.entity";
import { User } from "src/modulos/auth/entities/user.entity";
import { Valoracion } from "src/modulos/valoraciones/entities/valoracion.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
@Entity('usuarios')

export class Usuario {
    
    @PrimaryColumn()
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
        () => User,
        (user) => user.usuario,
        { cascade:false }
    )
    user?: User

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
