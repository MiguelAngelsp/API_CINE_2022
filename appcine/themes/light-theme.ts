// import { createTheme } from '@mui/material/styles';


// export const lightTheme = createTheme({
//     palette: {
//         mode: 'light',
//         primary: {
//             main: '#1E1E1E'
//         },
//         secondary: {
//             main: '#3A64D8'
//         },
//         info: {
//             main: '#fff'
//         }
//     },
//     components: {
//         MuiLink: {
//           defaultProps: {
//             underline: 'none',
//           },
//         },
//         MuiAppBar: {
//           defaultProps: {
//             elevation: 0,
//             position: 'fixed',
//           },
//           styleOverrides: {
//             root: {
//               backgroundColor: 'black',
//               height: 60
//             },
//           }
//         }
//     }
// })


// import { createTheme } from '@mui/material/styles';

// export const lightTheme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#0077cc',
//       light: '#4da6ff',
//       dark: '#005cb3',
//       contrastText: '#ffffff',
//     },
//     secondary: {
//       main: '#ff7043',
//       light: '#ffa270',
//       dark: '#c63f17',
//       contrastText: '#ffffff',
//     },
//     error: {
//       main: '#ff3d00',
//     },
//     warning: {
//       main: '#ff9800',
//     },
//     info: {
//       main: '#2196f3',
//     },
//     success: {
//       main: '#4caf50',
//     },
//     text: {
//       primary: '#212121',
//       secondary: '#757575',
//       disabled: '#bcbcbc',
//     },
//     background: {
//       default: '#f5f5f5',
//       paper: '#ffffff',
//     },
//   },
//   components: {
//     MuiAppBar: {
//       defaultProps: {
//         elevation: 0,
//         position: 'fixed',
//       },
//       styleOverrides: {
//         root: {
//           backgroundColor: '#ffffff',
//           color: 'rgb(244, 220, 85)',
//           boxShadow: 'none',
//         },
//       },
//     },
//     MuiButton: {
//       defaultProps: {
//         variant: 'contained',
//       },
//       styleOverrides: {
//         root: {
//           borderRadius: 16,
//         },
//         containedPrimary: {
//           color: '#ffffff',
//           backgroundColor: 'rgb(244, 220, 85)',
//           '&:hover': {
//             backgroundColor: '#4da6ff',
//           },
//         },
//         containedSecondary: {
//           color: '#ffffff',
//           backgroundColor: 'rgb(244, 220, 85)',
//           '&:hover': {
//             backgroundColor: '#ffa270',
//           },
//         },
//       },
//     },
//     MuiTypography: {
//       defaultProps: {
//         variant: 'body1',
//       },
//       styleOverrides: {
//         h1: {
//           fontSize: 36,
//           fontWeight: 600,
//         },
//         h2: {
//           fontSize: 32,
//           fontWeight: 600,
//         },
//         h3: {
//           fontSize: 28,
//           fontWeight: 600,
//         },
//         h4: {
//           fontSize: 24,
//           fontWeight: 600,
//         },
//         h5: {
//           fontSize: 20,
//           fontWeight: 600,
//         },
//         h6: {
//           fontSize: 18,
//           fontWeight: 600,
//         },
//       },
//     },
//     MuiTextField: {
//       defaultProps: {
//         variant: 'outlined',
//         size: 'small',
//       },
//       styleOverrides: {
//         root: {
//           borderRadius: 8,
//         },
//       },
//     },
//   },
// });



import { createTheme } from '@mui/material/styles';

// export const lightTheme = createTheme({
//   palette: {
//     primary: {
//       main: '#e50914',
//     },
//     secondary: {
//       main: '#333',
//     },
//     background: {
//       default: '#000',
//       paper: '#141414',
//     },
//   },
//   typography: {
//     fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
//     fontWeightRegular: 400,
//     fontWeightMedium: 500,
//     fontWeightBold: 700,
//     h1: {
//       fontSize: '2.5rem',
//       fontWeight: 700,
//       letterSpacing: '-0.01562em',
//       lineHeight: 1.2,
//     },
//     h2: {
//       fontSize: '2rem',
//       fontWeight: 500,
//       letterSpacing: '-0.00833em',
//       lineHeight: 1.2,
//     },
//     h3: {
//       fontSize: '1.75rem',
//       fontWeight: 500,
//       letterSpacing: '0em',
//       lineHeight: 1.2,
//     },
//     h4: {
//       fontSize: '1.5rem',
//       fontWeight: 500,
//       letterSpacing: '0.00735em',
//       lineHeight: 1.2,
//     },
//     h5: {
//       fontSize: '1.25rem',
//       fontWeight: 500,
//       letterSpacing: '0em',
//       lineHeight: 1.2,
//     },
//     h6: {
//       fontSize: '1rem',
//       fontWeight: 500,
//       letterSpacing: '0.0075em',
//       lineHeight: 1.2,
//     },
//     subtitle1: {
//       fontSize: '1rem',
//       fontWeight: 500,
//       letterSpacing: '0.00938em',
//       lineHeight: 1.5,
//     },
//     subtitle2: {
//       fontSize: '0.875rem',
//       fontWeight: 500,
//       letterSpacing: '0.00714em',
//       lineHeight: 1.5,
//     },
//     body1: {
//       fontSize: '1rem',
//       fontWeight: 400,
//       letterSpacing: '0.00938em',
//       lineHeight: 1.5,
//     },
//     body2: {
//       fontSize: '0.875rem',
//       fontWeight: 400,
//       letterSpacing: '0.01071em',
//       lineHeight: 1.5,
//     },
//     button: {
//       fontSize: '1rem',
//       fontWeight: 500,
//       letterSpacing: '0.02857em',
//       lineHeight: 1.75,
//       textTransform: 'none',
//     },
//   },
// });


export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#fff',
    },
    background: {
      default: '#141414',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: 'Netflix Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      letterSpacing: '-0.01562em',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 500,
      letterSpacing: '-0.00833em',
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
      letterSpacing: '0em',
      lineHeight: 1.2,
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 500,
      letterSpacing: '0.00735em',
      lineHeight: 1.2,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
      letterSpacing: '0em',
      lineHeight: 1.2,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      letterSpacing: '0.0075em',
      lineHeight: 1.2,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 500,
      letterSpacing: '0.00938em',
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: '1rem',
      fontWeight: 500,
      letterSpacing: '0.00714em',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: '0.00938em',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      letterSpacing: '0.01071em',
      lineHeight: 1.5,
    },
    button: {
      fontSize: '1rem',
      fontWeight: 700,
      letterSpacing: '0.02857em',
      lineHeight: 1.75,
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          padding: '0.75rem 2.25rem',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          border: '1px solid #8c8c8c',
          borderRadius: 3,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        },
      },
    },
  },
});