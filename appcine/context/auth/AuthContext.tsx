import { IUsuarios } from '@/interfaces/usuarios/IUsuarios';
import { createContext } from 'react';
import { IAuth, IRespuestaApiAuth } from './interfaces/IRespuestaAuthApi';

interface ContextProps {
    isLoggedIn: boolean;
    user?: IAuth;
    
    //firmas
    loginUser: (Correo: string, password: string) => Promise<boolean>;
    registerUser: (Correo: string, password: string, fullName: string ) => Promise<IRespuestaApiAuth>
}

export const AuthContext  = createContext( {} as ContextProps );
