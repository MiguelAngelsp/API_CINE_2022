// import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// import { FC } from 'react';
// import { IPeliculas } from '../../interfaces/peliculas/IPeliculas';


// interface Props {
//     peliculas: IPeliculas[]
// }
// export const PeliculasList:FC<Props> = ({ peliculas }) => {
//   return (
//     <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//             <TableRow>
//                 <TableCell align="left">ID</TableCell>
//                 <TableCell align="right">Titulo</TableCell>
//                 <TableCell align="right">Descripción</TableCell>
//                 <TableCell align="right">Precio</TableCell>
//                 <TableCell align="right">Genero</TableCell>
//             </TableRow>
//         </TableHead>

//         <TableBody>
//                 { 
//                     peliculas.map((peliculas: IPeliculas) => (
//                         <TableRow key= { peliculas.ID } 
//                                   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                         >
//                             <TableCell component="th" scope="row">
//                                 { peliculas.ID }
//                             </TableCell>
//                             <TableCell align="right">{peliculas.Titulo}</TableCell>
//                             <TableCell align="right">{peliculas.Descripcion}</TableCell>
//                             <TableCell align="right">{peliculas.Precio}</TableCell>
//                             <TableCell align="right">{peliculas.genero.Genero}</TableCell>
//                         </TableRow>
//                     )
//                 )}
                
//             </TableBody>
//         </Table>
//     </TableContainer>
//   )
// }

import { Box, Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FC } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { IPelicula } from '@/interfaces/peliculas/IPelicula';
interface Props {
    pelicula: IPelicula[];
}
export const PeliculasList:FC<Props> = ({pelicula}) => {
  
  const colums: GridColDef[] = [
        { field: 'ID', headerName: 'ID', width: 130},
        { field: 'Titulo', headerName:'Titulo', width: 300 },
        { field: 'Descripcion', headerName: 'Descripción', width: 100 },
        { field: 'Precio', headerName: 'Precio', width: 100 },
        { field: 'genero', headerName: 'Genero', width: 100 },
        { field: 'opciones',
          headerName: 'Acciones',
          description: 'Muestra información si la orden está pagada o no',
          width: 200,
          renderCell: () => (
              <>
                <ModeEditOutlineTwoToneIcon sx={{ color: 'red'}} />
                <ClearIcon  sx={{ color: 'blue'}} />
              </>
            ) 
        }
  ];
  const rows = pelicula;
  return (
            <Grid container sx={{ width: '70%', display: 'flex',justifyContent: 'flex-end'}}>
              <Box >
                <AddBoxIcon sx={{  color: 'blue', fontSize:40 }} />
              </Box>
               
               <Grid item xs={12} 
                  sx={{ 
                    height: 350, width: '80%',
                    boxShadow: 2,
                    border: 2,
                    borderColor: 'primary.light',
                    '& .MuiDataGrid-cell:hover': {
                      color: 'primary.main',
                    },
                  }}>
                 <DataGrid 
                    columns={colums} rows={rows}
                    pageSize= {10}
                    // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[5, 10, 20]}
                    pagination
                    getRowId = {( row: IPelicula ) => row.ID}
                  />
               </Grid>
            </Grid>
  )
}