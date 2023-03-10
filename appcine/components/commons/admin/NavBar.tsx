import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import NextLink from 'next/link';
import Image from "next/image";

export const NavBar = () => {
    return (
        <AppBar sx={{backgroundColor: 'blue'}}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    aria-label="menu"
                    color="inherit"
                    sx={{}}
                >
                    <MenuIcon />
                </IconButton>
                <Link href='/admin' passHref component={NextLink}>
                    <Button sx={{ color: 'white' }}>Home</Button>
                </Link>
                <Box flex={1} />

                <Box component="nav"
                    sx={{ display: { xs: 'none', sm: 'flex' } }} >

                    <Link href='/admin/auth' passHref component={NextLink}>
                        <Button sx={{ color: 'white' }}>
                            <Image
                                src='/auth.png'
                                alt='Descripción de la imagen'
                                width={30}
                                height={30}
                            />
                            Auth</Button>
                    </Link>
                    <Link href='/admin/cesta' component={NextLink}>
                        <Button sx={{ color: 'white' }}>
                            <Image
                                src='/cesta.png'
                                alt='Descripción de la imagen'
                                width={30}
                                height={30}
                            />
                            Cesta</Button>
                    </Link>
                    <Link href='/admin/generos' component={NextLink}>
                        <Button sx={{ color: 'white' }}>
                            <Image
                                src='/generos.webp'
                                alt='Descripción de la imagen'
                                width={30}
                                height={30}
                            />
                            Generos</Button>
                    </Link>
                    <Link href='/admin/valoraciones' component={NextLink}>
                        <Button sx={{ color: 'white' }}>
                            <Image
                                src='/valoraciones.png'
                                alt='Descripción de la imagen'
                                width={30}
                                height={30}
                            />
                            Valoraciones</Button>
                    </Link>
                    <Link href='/admin/peliculas' component={NextLink}>
                        <Button sx={{ color: 'white' }}>
                            <Image
                                src='/peliculas.png'
                                alt='Descripción de la imagen'
                                width={30}
                                height={30}
                            />
                            Peliculas</Button>
                    </Link>
                    <Link href='/admin/usuarios' component={NextLink}>
                        <Button sx={{ color: 'white' }}>
                            <Image
                                src='/usuarios.png'
                                alt='Descripción de la imagen'
                                width={30}
                                height={30}
                            />
                            Usuarios</Button>
                    </Link>
                </Box>
                <Box flex={1} />
                <Box>
                    <Typography>User: Miguel Ángel</Typography>
                    <Link href='/' component={NextLink}>
                        <LogoutIcon sx={{ color: 'white' }} />
                    </Link>
                </Box>
            </Toolbar>
        </AppBar >
    )

}