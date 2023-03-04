import { Email, ErrorOutline, ErrorSharp } from '@mui/icons-material';
import { Box, Grid, Typography, TextField, Button, Link, Chip } from '@mui/material';
import NextLink from 'next/link';
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthLayout } from '../../layouts';
import { validations } from '../../utils';
import { useRouter } from 'next/router';
import { AuthContext } from '../../context/auth/AuthContext';
import CineApi from '../../api/CineApi';
interface IRespuestaRegister {
    ID: string;
    token: string;
    Correo: string;
    password: string;
    fullName: string;
    isActive: boolean;
    roles: String[]
}
type UserData = {
    Correo: string,
    password: string,
    fullName: string,
    ID: string
};
const RegisterPage = () => {
  const router = useRouter();
  const { registerUser } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm<UserData>();
  const [ showError, setShowError ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');
  
  const onRegisterUser = async ( InputData: UserData ) => {
    setShowError(false);
    const { Correo, password, fullName } = InputData;
    const {hasError, message } = await registerUser(Correo, password, fullName )
    console.log(message);
    if (hasError){
        setShowError(true);
        setErrorMessage(message || '');
        setTimeout( () => setShowError(false), 3000);
        return;
    }

    router.replace('/');
   
  }

  return (
    <AuthLayout title={'Ingresar'}>
       <form onSubmit={ handleSubmit(onRegisterUser)} noValidate>
        <Box sx={{ width: 350, padding: '10px 20px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h3' component='h1'>Crear Cuenta</Typography>
                    <Chip 
                                label="No se reconoce usuario/contraseña"
                                color="error"
                                icon= {<ErrorOutline />}
                                className="fadeIn"
                                sx={{ display: showError ? 'flex': 'none'}}
                            />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        { ...register('fullName', {
                            required: 'Nombre y Apellidos obligatorio'
                        })}
                        error= { !!errors.fullName}
                        helperText = { errors.fullName?.message }
                        label="Nombre y Apellidos" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        { ...register('Correo', {
                            required: 'Correo obligatorio',
                            validate: validations.isEmail
                        })}
                        error= { !!errors.Correo}
                        helperText = { errors.Correo?.message }
                        label="Correo" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        { ...register('password', {
                            required: 'Password requerido',
                            minLength: { value:6, message: 'Minimo 6 caracteres'}
                        })}
                        error= { !!errors.password}
                        helperText = { errors.password?.message }
                        label="Contraseña" type="password" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        type="submit" color='secondary' className='circular-btn' size='large' fullWidth>
                        Ingresar
                    </Button>
                </Grid>
                <Grid item xs={12} display='flex' justifyContent='end'>
                    <Link href='/auth/register' passHref component={NextLink} underline='always'>
                        ¿ No tienes cuenta ... ?
                    </Link>
                </Grid>
            </Grid>
        </Box>
      </form>
    </AuthLayout>
  )
}

export default RegisterPage