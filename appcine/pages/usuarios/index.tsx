import { Button } from "@mui/material";
import { NextPage } from "next";
import { useUsuarios } from '../../hooks/useUsuarios';
import { UsuariosList } from '../../components/usuarios/usuariosList';
import { Mundo } from '../../components/Mundo';
import { PublicLayouts } from "@/layouts/PublicLayouts";

//NextPage --> indica que es un proyecto Next y no Reac
const indexPage: NextPage = () => {
    const { usuarios, isLoading } = useUsuarios('/usuarios');
    const respuesta = useUsuarios('/usuarios');
    console.log(respuesta);
    console.log(isLoading, "c=", usuarios);
    return (
        <PublicLayouts>
            <h2>Sección Usuarios</h2>
            {
                (isLoading)
                    ? <UsuariosList usuarios={usuarios} />
                    : <Mundo />

            }

        </PublicLayouts>
    )
}

export default indexPage