import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { TabPanel } from '@mui/lab';
import { IPelicula } from '@/interfaces/peliculas/IPelicula';

interface Props {
    pelicula: IPelicula
}

const myLoader = ({src, width, quality}) =>{
  return `${src}?s=${width}`
}
export const PeliculasDetails:FC<Props> = ({pelicula}) => {
    console.log(pelicula);
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
    
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} sx={{ border:0, width:'100%' }} >
        <Box display='flex' flexDirection='row'  >
          <Image
            loader={myLoader}
            src= {pelicula.Imagen}
            alt={pelicula.Titulo}
            width={300}
            height={300}
          />
          <Box display='flex' flexDirection='column' sx={{  width: '40%', p:3}} >
            <Typography variant='h5' component='h5'
                        sx={{ fontSize: '20px', textAlign: 'center', mb: '10px'}}
            > { pelicula.Titulo}</Typography>
            <Box display='flex' flexDirection='row' >
              {/* <Typography sx={{width: '40%'}}  variant='subtitle1' > Identificador: </Typography> */}
              <Typography sx={{width: '60%'}}> Identificador: {pelicula.ID} </Typography>
            </Box>
            {/* <Box display='flex' flexDirection='row'>
              <Typography sx={{width: '40%'}}  variant='subtitle1' > Titulo </Typography>
              <Typography sx={{width: '60%'}}> {pelicula.Titulo} </Typography>
            </Box> */}
          </Box>
          <Box  sx={{ display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'center'}}>
            <Typography variant='h4' component='h4'> Precio: { pelicula.Precio } € </Typography>
            <Button variant="contained" endIcon={<ShoppingCartIcon />}>
              Añadir a la cesta
            </Button>
            <Button variant="contained" endIcon={<ShoppingCartIcon />}>
              Añadir a favoritos
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Descripción" value="1" />
                <Tab label="Valoraciones" value="2" />
                <Tab label="Genero" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">{pelicula.Descripcion}</TabPanel>
            <TabPanel value="2">{pelicula.valoraciones?.Comentario}</TabPanel>
            <TabPanel value="2">Por... {pelicula.valoraciones?.UsuarioID}</TabPanel>
            <TabPanel value="3">{pelicula.genero?.Genero}</TabPanel>
          </TabContext>
        </Box>
        {/* <Box sx={{ width: '100%' }}>
              <Typography  variant='subtitle1' > Sinpsis </Typography>
              <Typography> {libro.shortDescription} </Typography>
        </Box> */}


      </Grid>
    </Grid>

  )
}