import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('cesta')

export class Cesta {
    @PrimaryGeneratedColumn("uuid")
    ID: number;

    @Column('text',{
        unique: true
    })
    UsuarioID: number;

    @Column('text',{
        unique: true
    })
    PeliculaID: number;

    @Column('date',{
        unique: true
    })
    Fecha_compra: Date;
}
