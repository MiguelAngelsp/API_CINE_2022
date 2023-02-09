import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import NextLink from 'next/link';

export const NavBar = () => {
  return (
    <AppBar>
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                color="inherit"
                sx={{  }}
            >
                <MenuIcon />
            </IconButton>
            <Link href='/admin' passHref component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Home</Button>
            </Link>
            <Box flex={1} />
            
            <Box component="nav" 
                 sx= {{ display: { xs: 'none', sm: 'flex' }}} >
                    
                <Link href='/admin/auth' passHref component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Auth</Button>
                </Link>
                <Link href='/admin/cesta' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Cesta</Button>
                </Link>
                <Link href='/admin/generos' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Generos</Button>
                </Link>
                <Link href='/admin/valoraciones' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Valoraciones</Button>
                </Link>
                <Link href='/admin/peliculas' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Peliculas</Button>
                </Link>
                <Link href='/admin/usuarios' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Usuarios</Button>
                </Link>
            </Box>
            <Box flex={1} />
            <Box>
                <Typography>User: Miguel Ángel</Typography>
                <Link href='/' component={ NextLink }>
                     <LogoutIcon sx={{ color: 'white'}} />
                </Link>
            </Box>
        </Toolbar>
    </AppBar>
  )

  }