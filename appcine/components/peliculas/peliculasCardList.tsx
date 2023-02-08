import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FC } from 'react';
import { IPeliculas } from '../../interfaces/peliculas/IPeliculas';
import Grid from '@mui/material/Grid'; // Grid version 1



interface Props {
    peliculas: IPeliculas[]
}
export const PeliculasCardList: FC<Props> = ({ peliculas }) => {
    return (

        <Grid container spacing={24} direction="row">
            {peliculas.map((peliculas: IPeliculas) => (
                <Grid item>
                    <Card sx={{ maxWidth: 330 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={peliculas.Titulo}
                            subheader={peliculas.ID}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={peliculas.Imagen}
                            alt="Pelis portada"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {peliculas.Descripcion}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                        <CardContent>
                            <Typography paragraph>Precio:</Typography>
                            <Typography>
                                {peliculas.Precio}
                            </Typography>
                            <Typography paragraph>Genero:</Typography>
                            <Typography>
                                {peliculas.genero?.Genero}
                            </Typography>
                            <Typography paragraph>Valoraciones:</Typography>
                            <Typography>
                                Puntuación: {peliculas.valoraciones?.Puntuacion}
                            </Typography>
                            <Typography>
                                Comentario: {peliculas.valoraciones?.Comentario}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            )

            )
            }
        </Grid>

    )

}

