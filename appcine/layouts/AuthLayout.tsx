import { Box, Button, Link, Typography } from "@mui/material";
import Head from "next/head";
import { FC } from "react"
import NextLink from 'next/link';
import Image from "next/image";

interface Props {
    title: string;
    children?: any
}
export const AuthLayout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title> {title} </title>
            </Head>
            <header>

                <Box component="nav"
                    sx={{ padding: '10', backgroundColor: 'Brown', alignItems: 'center', display: { xs: 'none', sm: 'flex' } }} >
                    {/* <Image src="/apinetflix.png" width={80} height={60}  alt="logo" />
                <Image src="/perfil.webp" width={1200} height={486}  alt="logo" /> */}
                    <Box flex={2} />
                    <Typography fontWeight={700}>Zona de Autenticación</Typography>

                    <Box flex={2} />
                    <Box className="register-page">
                        {/* Resto del código */}
                    </Box>
                    {/* <Image src="/perfil2.png" width={480} height={496}  alt="logo" /> */}
                    {/* <Image src="/fondologin.jfif" width={800} height={500}  alt="logo" /> */}
                    <Link href='/auth/register' passHref component={NextLink}>

                        <Button sx={{ color: 'Black', backgroundImage: 'url(/logeo.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', height: '50px', width: '200px' }}>Registro</Button>
                    </Link>
                    <Box flex={1} />
                </Box>
            </header>
            <main>

                <Box sx={{ marginLeft: 3 }}>

                </Box>
                <Box display='flex' justifyContent={'center'} alignItems='center' height="calc(100vh - 200px)">
                    {children}
                </Box>
            </main>
        </>
    )
}