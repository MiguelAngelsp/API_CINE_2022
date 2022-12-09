import { IsNumber, IsString, MaxLength } from "class-validator";
import { Pelicula } from "src/modulos/peliculas/entities/pelicula.entity";
import { Usuario } from "src/modulos/usuarios/entities/usuario.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity('valoraciones')

export class Valoracion {
    
    @PrimaryGeneratedColumn("uuid")
    ID: string;

    @Column('text',{
        nullable: true
    })
    Puntuacion: number;

    @Column('text',{
        nullable: true
    })
    Comentario: string;

    //Relacion a usuarios
    @ManyToOne(
        () => Usuario,
        (usuario) => usuario.valoraciones,
        {cascade: true}
    )
    usuario?: Usuario

     //Relacion a peliculas
     @ManyToOne(
        () => Pelicula,
        (pelicula) => pelicula.valoraciones,
        {cascade: true}
    )
    pelicula?: Pelicula

}
