import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { IPeliculas } from '../../interfaces/peliculas/IPeliculas';


interface Props {
    peliculas: IPeliculas[]
}
export const PeliculasList:FC<Props> = ({ peliculas }) => {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell align="left">ID</TableCell>
                <TableCell align="right">Titulo</TableCell>
                <TableCell align="right">Descripción</TableCell>
                <TableCell align="right">Precio</TableCell>
                <TableCell align="right">Genero</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
                { 
                    peliculas.map((peliculas: IPeliculas) => (
                        <TableRow key= { peliculas.ID } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { peliculas.ID }
                            </TableCell>
                            <TableCell align="right">{peliculas.Titulo}</TableCell>
                            <TableCell align="right">{peliculas.Descripcion}</TableCell>
                            <TableCell align="right">{peliculas.Precio}</TableCell>
                            <TableCell align="right">{peliculas.genero.Genero}</TableCell>
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}