import { IValoraciones } from '@/interfaces/valoraciones';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';


interface Props {
    valoraciones: IValoraciones[]
}
export const ValoracionesList: FC<Props> = ({ valoraciones }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">ID</TableCell>
                        <TableCell align="right">UsuarioID</TableCell>
                        <TableCell align="right">Puntuación</TableCell>
                        <TableCell align="right">Comentario</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        valoraciones.map((valoraciones: IValoraciones) => (
                            <TableRow key={ valoraciones.ID }
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    { valoraciones.ID }
                                </TableCell>
                                <TableCell align="right">{valoraciones.usuario.Nombre}</TableCell>
                                <TableCell align="right">{valoraciones.Puntuacion}</TableCell>
                                <TableCell align="right">{valoraciones.Comentario}</TableCell>
                            </TableRow>
                        )
                        )}

                </TableBody>
            </Table>
        </TableContainer>
    )
}