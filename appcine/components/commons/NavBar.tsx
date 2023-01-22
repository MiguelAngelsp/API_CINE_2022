import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
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
            <Typography variant="h6" component="h3" sx={{  }}>
                Home
            </Typography>
            <Box flex={1} />
            
            <Box component="nav" 
                 sx= {{ display: { xs: 'none', sm: 'flex' }}} >
                    
                <Link href='/libros' passHref component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Auth</Button>
                </Link>
                <Link href='/categorias' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Cesta</Button>
                </Link>
                <Link href='/editores' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Géneros</Button>
                </Link>
                <Link href='/editores' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Películas</Button>
                </Link>
                <Link href='/editores' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Usuarios</Button>
                </Link>
                <Link href='/editores' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Valoraciones</Button>
                </Link>
            </Box>
            <Box flex={1} />
            <Box>
                Registro
            </Box>
        </Toolbar>
    </AppBar>
  )

  }