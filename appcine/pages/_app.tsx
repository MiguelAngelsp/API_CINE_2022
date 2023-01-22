import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme, nightTheme } from '../themes';
import { SWRConfig } from 'swr';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        // refreshInterval: 500,
        fetcher: (resource, init ) => fetch(resource, init ).then( res => res.json ())
      }}
    >
        <ThemeProvider theme={ lightTheme } >
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
    
  )
}