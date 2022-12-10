import { Pelicula } from "src/modulos/peliculas/entities/pelicula.entity";
import { Usuario } from "src/modulos/usuarios/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity('cesta')

export class Cesta {
    @PrimaryGeneratedColumn("uuid")
    ID: string;

    @Column('date',{
        unique: true
    })
    Fecha_compra: Date;

    //Relacion a usuarios
    @ManyToOne(
        () => Pelicula,
        (pelicula) => pelicula.cesta,
        {cascade: true}
    )
    peliculas?: Pelicula

    //Relacion uno a uno a Usuarios
    @OneToOne(
        () => Usuario,
        (usuario) => usuario.cesta
    )
    @JoinColumn()
    usuario?: Usuario

    //Disparadores
    
}
