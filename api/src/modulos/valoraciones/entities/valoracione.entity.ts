import { IsNumber, IsString, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('valoraciones')

export class Valoracion {
    
    @PrimaryGeneratedColumn("uuid")
    ID: number;

    @Column('numeric',{
        unique: true
    })
    PeliculaID: number;

    @Column('text',{
        nullable: true
    })
    Puntuacion: number;

    @Column('text',{
        nullable: true
    })
    Comentario: string;

    @Column('text',{
        nullable: true
    })
    UsuarioID: number;
}
