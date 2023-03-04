import { FC, useReducer } from 'react';
import { AuthContext, authReducer  } from './';
import Cookies from 'js-cookie';
import axios from 'axios';
import { IRespuestaApiAuth } from './interfaces/IRespuestaAuthApi';
import CineApi from '@/api/CineApi';
import { IAuth } from '@/interfaces/auth/IAuth';
import { IUser } from '@/interfaces/users/IUser';
import { IUsuarios } from '@/interfaces/usuarios';


export interface AuthState{
    isLoggedIn: boolean;
    usuario?: IAuth;
}
const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    usuario: undefined
}

interface Props{
    children: any
}

export const AuthProvider:FC<({ children: any })> = ({children}) => {
    const [ state, dispatch ] = useReducer( authReducer, AUTH_INITIAL_STATE );
    const loginUser = async (Correo: string, password: string):Promise<boolean> => {
        try {
            const { data } = await CineApi.post('/auth/login', { Correo, password });
            console.log(data);
            const { token, usuario } = data;
            console.log(usuario);
            Cookies.set('token', token);
            dispatch({ type: '[Auth] - Login', payload: usuario });
            return true;
        } catch (error) { //credenciales falsas
            return false;
        }
    } 

    const registerUser = async (Correo: string, password: string, fullName: string, ID: string ):Promise<IRespuestaApiAuth>=> {
        try {
            const { data } = await CineApi.post ('/auth/register', { Correo, fullName, password, ID })
            const { token, usuario } = data;
            Cookies.set('token', token);
            //mando a llamar al login pq ya se autenticó
            dispatch({ type: '[Auth] - Login', payload: usuario });
            return {
                hasError: false,
                message: 'Usuario creado con éxito'
            }
        } catch (error) {
            if (axios.isAxiosError(error)){
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            }
            // no es error de axios
            return {
                hasError: true,
                message: 'No se puede crear el usuario, intentaló de nuevo'
            }
        }
    }
    return (
        <AuthContext.Provider value={{
            ...state,
            loginUser,
            registerUser
        }}>
            { children }
        </AuthContext.Provider>
    )
}