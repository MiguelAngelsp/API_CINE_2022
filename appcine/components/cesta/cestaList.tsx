import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { ICesta } from '../../interfaces/cesta/ICesta';


interface Props {
    cesta: ICesta[]
}
export const CestaList:FC<Props> = ({ cesta }) => {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell align="left">ID</TableCell>
                <TableCell align="right">UsuarioID</TableCell>
                <TableCell align="right">PeliculaID</TableCell>
                <TableCell align="right">Fecha_compra</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
                { 
                    cesta.map((cesta: ICesta) => (
                        <TableRow key= { cesta.ID } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { cesta.ID }
                            </TableCell>
                            <TableCell align="right">{cesta.ID}</TableCell>
                            <TableCell align="right">{cesta.UsuarioID}</TableCell>
                            <TableCell align="right">{cesta.PeliculaID}</TableCell>
                            <TableCell align="right">{cesta.Fecha_compra}</TableCell>
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}