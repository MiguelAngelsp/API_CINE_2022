import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { IAuth } from '../../interfaces/auth/IAuth';


interface Props {
    auth: IAuth[]
}
export const AuthList:FC<Props> = ({ auth }) => {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell align="left">ID</TableCell>
                <TableCell align="right">Correo</TableCell>
                <TableCell align="right">password</TableCell>
                <TableCell align="right">Web</TableCell>
                <TableCell align="right">GitHub</TableCell>
                <TableCell align="right">Usuario</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
                { 
                    auth.map((auth: IAuth) => (
                        <TableRow key= { auth.ID } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { auth.ID }
                            </TableCell>
                            <TableCell align="right">{auth.Correo}</TableCell>
                            <TableCell align="right">{auth.Password}</TableCell>
                            <TableCell align="right">{auth.Web}</TableCell>
                            <TableCell align="right">{auth.GitHub}</TableCell>
                            <TableCell align="right">{auth.usuario?.Nombre}</TableCell>
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}