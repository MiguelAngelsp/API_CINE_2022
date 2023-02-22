import { FC, useReducer } from 'react';
import { AuthContext, authReducer  } from './';
import Cookies from 'js-cookie';
import axios from 'axios';
import { IRespuestaApiAuth } from './interfaces/IRespuestaAuthApi';
import CineApi from '@/api/CineApi';
import { IAuth } from '@/interfaces/auth/IAuth';

export interface AuthState{
    isLoggedIn: boolean;
    user?: IAuth;
}
const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined
}

export const AuthProvider:FC = ({ children }) => {
    const [ state, dispatch ] = useReducer( authReducer, AUTH_INITIAL_STATE );
    const loginUser = async (email: string, password: string):Promise<boolean> => {
        try {
            const { data } = await CineApi.post('/auth/login', { email, password });
            console.log(data);
            const { token, user } = data;
            console.log(user);
            Cookies.set('token', token);
            dispatch({ type: '[Auth] - Login', payload: user });
            return true;
        } catch (error) { //credenciales falsas
            return false;
        }
    } 

    const registerUser = async (email: string, password: string, fullName: string ):Promise<IRespuestaApiAuth>=> {
        try {
            const { data } = await CineApi.post ('/auth/rgister', { email, fullName, password })
            const { token, user } = data;
            Cookies.set('token', token);
            //mando a llamar al login pq ya se autenticó
            dispatch({ type: '[Auth] - Login', payload: user });
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