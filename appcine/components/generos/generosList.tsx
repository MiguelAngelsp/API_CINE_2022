import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { IGeneros } from '../../interfaces/generos/IGeneros';


interface Props {
    generos: IGeneros[]
}
export const GenerosList:FC<Props> = ({ generos }) => {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Genero</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
                { 
                    generos.map((generos: IGeneros) => (
                        <TableRow key= { generos.ID } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { generos.ID }
                            </TableCell>
                            <TableCell align="right">{generos.Genero}</TableCell>
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}