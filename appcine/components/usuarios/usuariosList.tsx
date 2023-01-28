import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { IUsuarios } from '../../interfaces/usuarios/IUsuarios';


interface Props {
    usuarios: IUsuarios[]
}
export const UsuariosList: FC<Props> = ({ usuarios }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">ID</TableCell>
                        <TableCell align="right">DNI</TableCell>
                        <TableCell align="right">Nombre</TableCell>
                        <TableCell align="right">Apellidos</TableCell>
                        <TableCell align="right">Dirección</TableCell>
                        <TableCell align="right">Fecha de Nacimiento</TableCell>
                        <TableCell align="right">Tarjeta Bancaria</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        usuarios.map((usuarios: IUsuarios) => (
                            <TableRow key={usuarios.ID}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {usuarios.ID}
                                </TableCell>
                                <TableCell align="right">{usuarios.DNI}</TableCell>
                                <TableCell align="right">{usuarios.Nombre}</TableCell>
                                <TableCell align="right">{usuarios.Apellidos}</TableCell>
                                <TableCell align="right">{usuarios.Direccion}</TableCell>
                                <TableCell align="right">{usuarios.Fecha_nacimiento}</TableCell>
                                <TableCell align="right">{usuarios.Tarjeta_banco}</TableCell>
                            </TableRow>
                        )
                    )}

                </TableBody>
            </Table>
        </TableContainer>
    )
}