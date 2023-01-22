import { createTheme } from '@mui/material/styles';


export const nightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1E1E1E'
        },
        secondary: {
            main: '#3A64D8'
        },
        info: {
            main: '#fff'
        }
    },
    components: {
        MuiLink: {
          defaultProps: {
            underline: 'none',
          },
        },
        MuiAppBar: {
          defaultProps: {
            elevation: 0,
            position: 'fixed',
          },
          styleOverrides: {
            root: {
              backgroundColor: 'white',
              height: 60
            },
          }
        }
    }
})