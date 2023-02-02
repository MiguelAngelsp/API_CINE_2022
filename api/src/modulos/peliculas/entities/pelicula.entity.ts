import { Cesta } from "src/modulos/cesta/entities/cesta.entity";
import { Genero } from "src/modulos/generos/entities/genero.entity";
import { Usuario } from "src/modulos/usuarios/entities/usuario.entity";
import { Valoracion } from "src/modulos/valoraciones/entities/valoracion.entity";
import { BeforeInsert, Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
@Entity('peliculas')

export class Pelicula {
    @PrimaryColumn()
    ID: string;

    @Column('text',{
        unique: true
    })
    Titulo: string;

    @Column('text',{
        nullable: true
    })
    Descripcion: string;

    @Column('numeric',{
        nullable: true
    })
    Precio: number;

    @Column('text',{
        nullable: true
    })
    Imagen: string;

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
        (valoracion) => valoracion.peliculas,
        { cascade: false }
    )

    valoraciones?: Valoracion

    //Relacion a cesta
    @OneToMany(
        () => Cesta,
        (cesta) => cesta.peliculas,
        { cascade: false }
    )

    cesta?:Cesta[];

    //Disparadores
    @BeforeInsert()
    precio_con_Iva(){
        this.Precio = this.Precio*1.21;
    }

    @BeforeInsert()
    MayusTitulo(){
        this.Titulo = this.Titulo.toUpperCase()
        
    }
}
