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
                <TableCell>ID</TableCell>
                <TableCell>UsuarioID</TableCell>
                <TableCell>Correo</TableCell>
                <TableCell>password</TableCell>
                <TableCell>Web</TableCell>
                <TableCell>GitHub</TableCell>
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
                            <TableCell align="right">{auth.UsuarioID}</TableCell>
                            <TableCell align="right">{auth.Correo}</TableCell>
                            <TableCell align="right">{auth.password}</TableCell>
                            <TableCell align="right">{auth.web}</TableCell>
                            <TableCell align="right">{auth.GitHub}</TableCell>
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}