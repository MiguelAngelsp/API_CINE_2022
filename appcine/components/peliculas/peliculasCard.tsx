import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material";
import { FC } from "react";
import NextLink  from 'next/link';
import { IPelicula } from "@/interfaces/peliculas/IPelicula";

interface Props {
    pelicula: IPelicula;
}
export const PeliculasCard:FC<Props> = ({ pelicula }) => {
  return (
    <Grid item xs= {6} sm={3}>
        <Card sx={{ width: '90%' }}>
          <Link href={`/peliculas/${pelicula.ID}`}  passHref component={NextLink} prefetch={false}>
            <CardActionArea>
                <Box display='flex' alignItems='flex-start' flexDirection='row'>
                    <CardMedia
                        component='img' className='fadeIn'
                        image={ pelicula.Imagen } alt={ pelicula.Titulo } 
                        sx={{ width:'120px' }}
                    />
                    <Box sx={{marginLeft: 3}}>
                        <Typography fontWeight={1000}>Titulo:</Typography> 
                        <Typography fontWeight={700}>{pelicula.Titulo}</Typography>
                        <Typography fontWeight={1000}>Precio:</Typography> 
                        <Typography fontWeight={700}>{pelicula.Precio} €</Typography> 
                    </Box>
                </Box>
            </CardActionArea>
          </Link>
        </Card>
        <Box sx= {{ marginTop: 1}} className='fadeIn'>
            <Typography fontWeight={700}>{pelicula.Descripcion}</Typography>
            <Typography fontWeight={1000}>Genero:</Typography> 
            <Typography fontWeight={500}>{pelicula.genero.Genero}</Typography>
        </Box>
    </Grid>
  )
}