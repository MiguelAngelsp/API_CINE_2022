import { Usuario } from "src/modulos/usuarios/entities/usuario.entity";
import { BeforeInsert, Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity('users')

export class User {
    @PrimaryGeneratedColumn("uuid")
    ID: string;

    @Column('text',{
        nullable: true
    })
    Correo: string;

    @Column()
    fullName: string;

    @Column('text', { 
        select: false 
    })
    password: string;

    @Column('text',{
        default: ['Web']

    })
    Web?: string;

    @Column('text',{
        default: ['GitHub']
    })
    GitHub?: string;

    //Relacion uno a uno
    @OneToOne(
        () => Usuario,
        (usuario) => usuario.user
    )
    @JoinColumn()
    usuario?: Usuario

    //Disparadores 
    // @BeforeInsert()
    // formatoGithub(){
    //      if (!this.GitHub.includes('https://github.com/')){
    //         this.GitHub = `https://github.com/${this.GitHub}`
    //      }
    //  }
    
    // @BeforeInsert()
    // formatoWeb(){
    //     if (!this.Web.includes('https://')){
    //        this.Web = `https://${this.Web}`
    //     }
    // }

    @Column('text', {
        array: true,
        default: ['user']
    })
    roles: string[];

    @Column('bool', { default: true })
    isActive: boolean;


}
