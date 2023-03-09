import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import NextLink from 'next/link';
import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "@/context/auth/AuthContext";

export const NavBar = () => {
    const { user } = useContext(AuthContext);
    return (
        <AppBar sx={{ backgroundColor: 'Brown' }}>
            <Toolbar>
                <Image src="/apinetflix.PNG" width={150} height={68} alt="logo" />

                <Link href='/' passHref component={NextLink}>
                    <Button sx={{ color: 'white' }}>Home</Button>
                    {user?.fullName}/{user?.Correo}/{user?.roles}
                </Link>
                <Box flex={1} />

                <Box component="nav"
                    sx={{ display: { xs: 'none', sm: 'flex' } }} >

                    <Link href='/auth' passHref component={NextLink}>

                        <Button sx={{ color: 'white' }}>
                            <Image
                                src='/auth.png'
                                alt='Descripción de la imagen'
                                width={30}
                                height={30}
                            />
                            Auth</Button>

                    </Link>
                    <Link href='/cesta' component={NextLink}>

                        <Button sx={{ color: 'white' }}>
                        <Image
                                src='/cesta.png'
                                alt='Descripción de la imagen'
                                width={30}
                                height={30}
                            />
                            Cesta</Button>

                    </Link>
                    <Link href='/generos' component={NextLink}>
                        <Button sx={{ color: 'white' }}>
                        <Image
                                src='/generos.webp'
                                alt='Descripción de la imagen'
                                width={30}
                                height={30}
                            />
                            Géneros</Button>
                    </Link>
                    <Link href='/peliculas' component={NextLink}>
                        <Button sx={{ color: 'white' }}>
                        <Image
                                src='/peliculas.png'
                                alt='Descripción de la imagen'
                                width={30}
                                height={30}
                            />
                            Películas</Button>
                    </Link>
                    <Link href='/usuarios' component={NextLink}>
                        <Button sx={{ color: 'white' }}>
                        <Image
                                src='/usuarios.png'
                                alt='Descripción de la imagen'
                                width={30}
                                height={30}
                            />
                            Usuarios</Button>
                    </Link>
                    <Link href='/valoraciones' component={NextLink}>
                        <Button sx={{ color: 'white' }}>
                        <Image
                                src='/valoraciones.png'
                                alt='Descripción de la imagen'
                                width={30}
                                height={30}
                            />
                            Valoraciones</Button>
                    </Link>
                </Box>
                <Box flex={1} />
                <Link href='/auth/login' passHref component={NextLink}>
                    <Button sx={{ color: 'white' }}>
                    <Image
                                src='/logeo.png'
                                alt='Descripción de la imagen'
                                width={30}
                                height={30}
                            />
                        Login</Button>
                </Link>
                <Box flex={1} />
                <IconButton
                    size="large"
                    edge="start"
                    aria-label="menu"
                    color="inherit"
                    sx={{}}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )

}