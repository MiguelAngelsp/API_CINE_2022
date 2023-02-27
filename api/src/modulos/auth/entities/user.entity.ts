import { Usuario } from "src/modulos/usuarios/entities/usuario.entity";
import { BeforeInsert, Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
@Entity('users')

export class User {
    @PrimaryColumn()
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
        unique: true
    })
    Web: string;

    @Column('text',{
        unique: true
    })
    GitHub: string;

    //Relacion uno a uno
    @OneToOne(
        () => Usuario,
        (usuario) => usuario.user
    )
    @JoinColumn()
    usuario?: Usuario

    //Disparadores 
    @BeforeInsert()
    formatoGithub(){
         if (!this.GitHub.includes('https://github.com/')){
            this.GitHub = `https://github.com/${this.GitHub}`
         }
     }
    
    @BeforeInsert()
    formatoWeb(){
        if (!this.Web.includes('https://')){
           this.Web = `https://${this.Web}`
        }
    }

    @Column('text', {
        array: true,
        default: ['user']
    })
    roles: string[];

    @Column('bool', { default: true })
    isActive: boolean;


}
