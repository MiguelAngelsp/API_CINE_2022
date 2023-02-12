import { IPelicula } from "@/interfaces/peliculas/IPelicula";
import { Grid } from "@mui/material";
import { FC } from "react"
import { PeliculasCard } from "./peliculasCard";

interface Props {
    peliculas: IPelicula[]
}


export const PeliculasCardList:FC<Props> = ({ peliculas }) => {
  return (
    <Grid container spacing={4}>
      {
        peliculas.map( (pelicula ) => (
          <PeliculasCard 
          pelicula = { pelicula }
            key = { pelicula.ID }
          />
        ))
      }

    </Grid>
  )
}